import * as React from "react";
import PlayStoreButton from "../../assets/svg/play_store.svg";
import AppStoreButton from "../../assets/svg/app_store.svg";
import Image from "next/image"; // Ensure this import is at the top of your file

interface AppDisplayConfig {
  title: string;
  description: string;
  icon: string;
}

export default function AppDisplay(props: AppDisplayConfig) {
  return (
    <div className="container">
      <div className="card">
        <div
          className="content"
          style={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <Image
              className="app_display_icon"
              src={props.icon}
              alt={props.title || "App icon"}
              style={{ width: 120, height: 120 }}
            />
          </div>

          <h3>{props.title}</h3>
          <p
            style={{
              marginTop: "16px",
            }}
          >
            {props.description}
          </p>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "32px",
              alignItems: "center",
            }}
          >
            <h4 style={{ marginRight: "16px", color: "tomato" }}>
              Available On{" "}
            </h4>
            <Image src={PlayStoreButton.src} alt="Download from Play Store" style={{ marginRight: "16px" }} width={32} // Specify the width of the image
        height={32} />
            <Image src={AppStoreButton.src} alt="Download from App Store" width={32} // Specify the width of the image
        height={32}/>
          </div>
        </div>
      </div>
    </div>
  );
}
