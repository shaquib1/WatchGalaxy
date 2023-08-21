import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us WatchGalaxy"}>
      <div className="row contactus ">
        <div className="col-md-6 text-center">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4 text-center">
          <p className="text-justify mt-2">

            <h2>Welcome to my E-commerce App</h2>

            <h6>My name is Shaquib Alam </h6>

            <p>This is full stack Application based on MERN STACK Technology</p>

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;