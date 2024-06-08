import * as React from "react";
import PlayStoreButton from "../../assets/svg/play_store.svg";
import AppStoreButton from "../../assets/svg/app_store.svg";

interface AppDisplayConfig {
  title: String;
  description: String;
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
            <img
              className="app_display_icon"
              src={props.icon}
              style={{ width: "120px", height: "120px" }}
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
            <img src={PlayStoreButton.src} style={{ marginRight: "16px" }} />
            <img src={AppStoreButton.src} />
          </div>
        </div>
      </div>
    </div>
  );
}
