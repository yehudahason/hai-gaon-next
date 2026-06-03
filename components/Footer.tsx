import React from "react";
import "./footer.css";
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="attribution">
      <span className="separator" aria-hidden="true">
        {" "}
        •{" "}
      </span>
      Coded by
      <a
        href="https://www.frontendmentor.io/profile/yehudahason"
        target="_blank"
        rel="noopener noreferrer"
      >
        @Yehuda Hason
      </a>
    </footer>
  );
}
