"use client";

import React, { useEffect, useState } from "react";
import Image from "../../assets/png/login_image.jpg";
import Logo from "../../assets/javelin.png";
import InputField from "@/components/landing/input_field";
import OtpInput from "react-otp-input";
import CustomButton from "@/components/landing/custom_button";
export default function Login() {
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const prefix = "+91";
  const reqOTP = async () => {
    const resp = await requestOTP();
  };
  return (
    <div className="login-main">
      <div className="login-left">
        <div>
          <img src={Image.src} alt="" className="login_image" />
        </div>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo.src} alt="" />
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
                  <InputField hasPrefix={true} />
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
              <CustomButton />
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
