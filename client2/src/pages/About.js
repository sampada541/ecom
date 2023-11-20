import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About SynthGad"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "40%", marginBottom: "20px", marginLeft:"370px" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 450 }}>
            <p className="text-justify mt-2">
              Welcome to SynthGad, where innovation meets convenience! We are Team 18, a group of passionate individuals from M S Ramaiah University Of Applied Sciences, on a mission to revolutionize your online shopping experience.
              <br/><br/>
              At SynthGad, we have developed a cutting-edge e-commerce application dedicated to providing you with top-notch service and a seamless shopping journey. Specializing in laptops and related products, our platform is not just another online store; it's a technological marvel.
              <br/><br/>
              What sets us apart?
              <br/><br/>
              1. **Price Prediction Technology:** Our unique feature utilizes advanced algorithms to predict laptop prices, ensuring you make informed purchasing decisions.
              <br/>
              2. **Extensive Product Range:** Explore a curated selection of laptops and accessories, handpicked for quality and performance.
              <br/>
              3. **User-Friendly Interface:** Navigate our platform effortlessly, thanks to an intuitive design aimed at enhancing your shopping experience.
              <br/>
              4. **Secure Transactions:** Shop with confidence, knowing that your transactions are secure and your personal information is protected.
              <br/><br/>
              Join us on this journey as we redefine the way you shop for laptops. Discover the perfect blend of technology and convenience, exclusively at SynthGad.
              <br/><br/>
              Thank you for choosing SynthGad. Your satisfaction is our priority!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
