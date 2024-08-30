"use client";
import { useState } from "react";

export function TopLeftSVG() {
  return (
    <svg version="1.1" viewBox="0 0 380 157" height="157" width="380">
      <polyline
        points="12,12 190,12 190,145 368,145"
        style={{ fill: "none", stroke: "#bee4f9", strokeWidth: 4 }}
      />
      <circle cx="12" cy="12" r="6" strokeWidth="0" fill="#bee4f9" />

      <circle cx="-20" cy="-20" r="6" strokeWidth="0" fill="#43b6ed">
        <animateMotion
          path="M32,32 L210,32 L210,165 L388,165"
          begin="0s"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <polygon points="368,145 364,153 380,145 364,137" fill="#bee4f9" />
      <circle cx="368" cy="145" r="1" strokeWidth="0" fill="#bee4f9" />
    </svg>
  );
}

export function BottomLeftSVG() {
  let [status] = useState("");
  status = "0";
  return (
    <div>
      {status === "0" ? (
        <svg version="1.1" viewBox="0 0 379.5 157" height="157" width="379.5">
          <polyline
            points="367.5,12 189.75,12 189.75,145 12,145"
            style={{ fill: "none", stroke: "#bee4f9", strokeWidth: 4 }}
          />
          <circle cx="367.5" cy="12" r="6" strokeWidth="0" fill="#bee4f9" />
          <circle cx="-20" cy="-20" r="6" strokeWidth="0" fill="#43b6ed">
            <animateMotion
              path="M387.5,32 L209.75,32 L209.75,165 L32,165"
              begin="0s"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <polygon points="12,145 16,153 0,145 16,137" fill="#bee4f9" />
          <circle cx="12" cy="145" r="1" strokeWidth="0" fill="#bee4f9" />
        </svg>
      ) : (
        <h2>Hi</h2>
      )}
    </div>
  );
}

export function TopRightSVG() {
  return (
    <svg viewBox="0 0 390 157" height="157" width="390">
      <polyline
        points="378,12 195,12 195,145 12,145"
        style={{ fill: "none", stroke: "#bee4f9", strokeWidth: 4 }}
      />
      <circle cx="378" cy="12" r="6" strokeWidth="0" fill="#bee4f9" />
      <circle cx="-20" cy="-20" r="6" strokeWidth="0" fill="#43b6ed">
        <animateMotion
          path="M398,32 L215,32 L215,165 L32,165"
          // path="M32,165 L215,165 L215,32 L398,32"
          begin="0s"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <polygon points="12,145 16,153 0,145 16,137" fill="#bee4f9" />
      <circle cx="12" cy="145" r="1" strokeWidth="0" fill="#bee4f9" />
    </svg>
  );
}

export function BottomRightSVG() {
  return (
    <svg viewBox="0 0 389.5 157" height="157" width="389.5">
      <polyline
        points="12,12 194.75,12 194.75,145 377.5,145"
        style={{ fill: "none", stroke: "#bee4f9", strokeWidth: 4 }}
      />
      <circle cx="12" cy="12" r="6" strokeWidth="0" fill="#bee4f9" />
      <circle cx="-20" cy="-20" r="6" strokeWidth="0" fill="#43b6ed">
        <animateMotion
          path="M32,32 L214.75,32 L214.75,165 L397.5,165"
          begin="0s"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <polygon
        points="377.5,145 373.5,153 389.5,145 373.5,137"
        fill="#bee4f9"
      />
      <circle cx="377.5" cy="145" r="1" strokeWidth="0" fill="#bee4f9" />
    </svg>
  );
}
