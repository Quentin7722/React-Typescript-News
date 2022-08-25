import * as React from "react";
import { year } from "../../constants/constants";
import "./Footer.css";

export function Footer() {
  return (
    <div className="Footer">
      <small>&copy; Copyright {year}, DevKe. All Rights Reserved</small>
    </div>
  );
}
