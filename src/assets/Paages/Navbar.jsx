import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <h3>Hello Everyone</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
