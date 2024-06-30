"use client";

import React, { useEffect, useState } from "react";
import img1 from "../../assets/png/login_image.jpg";
import Logo from "../../assets/javelin.png";
import InputField from "@/components/landing/input_field";
import OtpInput from "react-otp-input";
import CustomButton from "@/components/landing/custom_button";
import { api, postRequest } from "../../utils/config/api";
import Image from "next/image"; // Ensure this import is at the top of your file

export default function Login() {
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const prefix = "+91";
  const reqOTP = async () => {
    try {
      const response = await postRequest(api.auth.requestOTP, {
        phone: prefix + phoneNumber, // Assuming the API expects the full phone number with prefix
      });
      /// Assuming the response is a JSON string that matches the GlobalResponse structure
      const globalResponse = GlobalResponse.fromJson(response);

      if (globalResponse.status) {
        // Handle successful response, e.g., showing the OTP input field
        setShowOtpField(true);
        console.log("OTP request successful:", globalResponse.message);
      } else {
        // Handle unsuccessful response, e.g., showing an error message
        console.error("Error requesting OTP:", globalResponse.message);
        setShowOtpField(false); // Optionally reset OTP field visibility on error
      }
    } catch (error) {
      // Handle error, e.g., showing an error message to the user
      console.error("Error generating OTP:", error);
      setShowOtpField(false); // Optionally reset OTP field visibility on error
    }
  };

  function validatePhoneNumber() {
    // It matches international phone numbers with optional + prefix and digits, allowing spaces or dashes.
    const pattern = /^\+?[0-9]{1,3}?[-. ]?([0-9]{2,3}[-. ]?){2,3}[0-9]$/;
    if (pattern.test(phoneNumber)) {
      reqOTP();
      console.log("Valid phone number");
    } else {
      console.error("Invalid phone number");
    }
  }

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };
  return (
    <div className="login-main">
      <div className="login-left">
        <div>
          <Image
            src={img1.src}
            alt="Login visual"
            className="login_image"
            width={500} // Specify the width of the image
            height={300}
          />
        </div>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <Image
              src={Logo.src}
              alt="Company logo"
              width={32} // Specify the width of the image
              height={32}
            />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {showOtpField == true ? (
                  <div>
                    <OtpInput
                      onChange={(s) => {
                        setOtpValue(s);
                      }}
                      numInputs={6}
                      value={otpValue}
                      inputStyle={{
                        color: "black",
                      }}
                      renderSeparator={
                        <span style={{ marginRight: "32px" }}> </span>
                      }
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="[&::-webkit-inner-spin-button]:appearance-none"
                          type="number"
                          style={{
                            color: "black",
                            fontFamily: "Poppins",
                            borderRadius: "8px",
                            width: "40px",
                            textAlign: "center",
                            height: "40px",
                          }}
                        />
                      )}
                    />
                  </div>
                ) : (
                  <InputField
                    hasPrefix={true}
                    onValueChange={handlePhoneNumberChange}
                  />
                )}
              </div>

              <div className="login-center-options-parent">
                <div className="login-center-options">
                  <div className="remember-div">
                    <input type="checkbox" id="remember-checkbox" />
                    <label htmlFor="remember-checkbox">
                      Remember for 30 days
                    </label>
                  </div>
                  <a href="#" className="forgot-pass-link">
                    Can't Login ?
                  </a>
                </div>
              </div>
              <CustomButton onClick={validatePhoneNumber} />
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}
