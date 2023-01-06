import React, { useState } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import { useEffect } from "react";

function Bar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div
      style={{
        padding: "2vh",
        marginLeft: "1vw",
        marginRight: "1vw",
        borderBottom: "1px solid gray",
      }}
    >
      {user ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "2rem" }}>
              <Link
                className="btn btn-accent btn-outline bg-white"
                style={{ flex: 1 }}
                to="/"
              >
                Collection
              </Link>
              <Link
                className="btn btn-accent btn-outline bg-white"
                style={{ flex: 1 }}
                to="/about"
              >
                About
              </Link>
              <Link
                className="btn btn-accent btn-outline bg-white"
                style={{ flex: 1 }}
                to="/contact"
              >
                Contact Us
              </Link>
              <Link
                className="btn btn-accent btn-outline bg-white"
                style={{ flex: 1 }}
                to="/create"
              >
                Add Furniture
              </Link>
              <button
                class="btn btn-outline btn-warning"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
            <div>
              <h1
                className="siteTitle"
                style={{ fontSize: "32px", fontWeight: "bold" }}
              >
                furnish bainbridge
              </h1>
            </div>
          </div>
          <h3>Welcome, {user.username}!</h3>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <div>
              <h1
                className="font-serif"
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                furnish bainbridge
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingLeft: "2rem",
              }}
            >
              <Link
                className="btn btn-accent btn-outline bg-white"
                style={{ flex: 1, borderRadius: "5px" }}
                to="/"
              >
                Collection
              </Link>
              <Link
                className="btn btn-accent btn-outline bg-white"
                style={{ flex: 1, borderRadius: "5px" }}
                to="/about"
              >
                About
              </Link>
              <Link
                className="btn btn-accent btn-outline bg-white"
                style={{ flex: 1, borderRadius: "5px" }}
                to="/contact"
              >
                Contact Us
              </Link>
              <button
                className="justify-end"
                data-toggle-theme="dark,light"
                data-act-class="ACTIVECLASS"
              >
                <label className="swap swap-rotate">
                  <input type="checkbox" />

                  <svg
                    className="swap-on fill-current w-10 h-10 justify-end"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  <svg
                    className="swap-off fill-current w-10 h-10 justify-end"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Bar;
