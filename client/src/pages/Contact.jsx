import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";

import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Layout title={"contact Us - Ecommerce-App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">   
          <img
            src="/images/contactus1.jpeg"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">

          </p>
          <p className="mt-3">
            <BiMailSend /> : shaquib2615@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91-9905176797
          </p>
          <p className="mt-3">
            : <Link to="">Instagram</Link>
          </p>
          <p className="mt-3">
            : <Link to="">Linkedin</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;