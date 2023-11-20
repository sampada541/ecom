import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>This is just a college project web app</p>
          <p>It's not a real website to sell any product</p>
          <p>Don't make any payment as we have installed dummy payment model</p>
          <p>College project 7th sem Ramaiah University Bangalore</p>
          <p>Team No. 18</p>
          <p>Adarsh Sahana Jumi Sampada</p>
          <p>Thank You for coming here</p>
          <p>Visit Again 🙏 </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
