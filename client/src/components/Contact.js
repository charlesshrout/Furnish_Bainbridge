import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-div">
      <h1
        className=" font-serif justify-end"
        style={{ fontSize: "25px", fontWeight: "200" }}
      >
        Reach Us At...
      </h1>
      <div className="flex flex-col w-full lg:flex-row m-[70px]">
        <div
          className="grid flex-grow h-32 card bg-white rounded-box place-items-center font-serif"
          style={{ fontSize: "30px" }}
        >
          (206)780-8399
        </div>
        <div
          className="divider lg:divider-horizontal font-serif"
          style={{ fontSize: "25px" }}
        >
          OR
        </div>
        <div
          className="grid flex-grow h-32 card bg-white rounded-box place-items-center font-serif"
          style={{ fontSize: "30px" }}
        >
          info@furnishbainbridge.com
        </div>
      </div>
      <h1
        className=" font-serif justify-end"
        style={{ fontSize: "25px", fontWeight: "200", marginRight: "2%" }}
      >
        We Look Forward To Hearing From You!
      </h1>
      <img
        className="daBaby"
        src="https://cdn.shopify.com/s/files/1/0297/4023/6933/files/4_89b774c7-8469-4ca7-b259-04a062b6b18f_600x600.jpg?v=1656076784"
      />
      <Link
        className="btn btn-accent btn-outline mt-[250px] mr-10 "
        style={{ flex: 1 }}
        to="/login"
      >
        Staff Login
      </Link>
    </div>
  );
}

export default Contact;
