"use client"
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "rgb(49, 137, 221)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        MySite
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {/* Adjusted href values */}
        <a
          href="/day-3/aboutpage"
          style={linkStyle}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          About
        </a>
        <a
          href="/day-3"
          style={linkStyle}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          Home
        </a>
        <a
          href="/day-3/products"
          style={linkStyle}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          Products
        </a>
        <Link href="/day-3/login">
                <button
          style={{
            backgroundColor: "#E65182",
            border: "none",
            color: "white",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "4px",
          }}

        >
          Login
        </button>
        </Link>


      </div>
    </nav>
  );
}

// Common style for links
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  padding: "8px 12px",
};
