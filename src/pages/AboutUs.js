import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Vision from "../images/about-us/vision.jpeg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Who We Are</Subheading>}
        heading="A cutting-edge web-based application."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        // imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We envision a world where restaurant are fully digitized."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc={Vision}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="Empower with smart, intuitive, and user-friendly tools."
        buttonRounded={false}
        description="At Order Craft, our mission is to empower restaurant and café owners with smart, intuitive, and user-friendly tools that simplify daily tasks. We aim to create a contactless, modern dining experience that benefits both businesses and their customers."
        primaryButtonText="See Portfolio"
        // imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="Why Choose Order Craft?"
        description="Be part of the future of digital dining! Whether you're a small café or a large restaurant, Order Craft is here to transform your business. 🚀"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Seamless Ordering Experience",
            description:
              "Customers can scan a QR code, explore the menu, place orders, and even make payments—all from their smartphones.",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Effortless Management",
            description:
              "From tracking sales to managing waiters, Order Craft offers powerful features for business owners.",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Enhanced Customer Satisfaction",
            description:
              "Faster service, easy reordering, and digital payments lead to a smooth dining experience.",
          },
          {
            imageSrc: ReliableIconImage,
            title: "Real-Time Insights",
            description:
              "Get data-driven analytics to improve menu performance, sales strategies, and overall business operations.",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      <Footer />
    </AnimationRevealPage>
  );
};
