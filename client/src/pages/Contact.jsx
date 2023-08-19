import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa"
import { GrTwitter } from "react-icons/gr"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout title={"contact Us - Ecommerce-App"}>
      <div className="row contactus ">
        <div className="col-md-6 text-center">
          <img
            src="/images/contactus1.jpeg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4 text-center">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">

          </p>
          <p className="mt-3">
            <MdEmail /> : shaquib2615@gmail.com
          </p>
          <p className="mt-3">
            <BiSolidPhoneCall /> : +91-9905176797
          </p>

          <p className="mt-3">
            <FaLinkedinIn /> : <Link to={"https://www.linkedin.com/in/mdshaquib/"}> Linkeidn </Link>
          </p>

          <p className="mt-3">
            <GrTwitter /> : <Link to={"https://twitter.com/shaquib_1"}> Twitter </Link>

          </p>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;