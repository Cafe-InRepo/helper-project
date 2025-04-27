import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import HowItWorks from "components/features/TwoColWithSteps.js"; // assuming you have a "steps" component, easy to make if not

import HeroImage from "images/main/hero-restaurant.png"; // Add a new nice hero image
import FeaturesImage from "images/main/hero-restaurant.png"; // Dashboard/Tablet showing OrderCraft
import ClientsLogoStripImage from "images/main/hero-restaurant.png"; // Logos of clients or placeholders
import VisionImage from "images/about-us/vision.jpeg"; // You already have this

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm text-primary-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />

      {/* Hero Section */}
      <MainFeature1
        subheading={<Subheading>Introducing OrderCraft</Subheading>}
        heading="Revolutionizing Restaurant Management."
        description="Simplify operations, enhance customer experiences, and drive growth with our all-in-one smart ordering platform."
        primaryButtonText="Get Started"
        buttonRounded={true}
        imageSrc={HeroImage}
        textOnLeft={false}
      />

      {/* Problem/Solution */}
      <MainFeature1
        subheading={<Subheading>The Problem</Subheading>}
        heading="Traditional restaurant operations are slow, error-prone, and costly."
        description="Manual order taking, paper menus, and outdated processes frustrate staff and customers. It's time for a change."
        primaryButtonText="See How We Help"
        buttonRounded={true}
        imageSrc={VisionImage}
        textOnLeft={true}
      />

      <MainFeature1
        subheading={<Subheading>The Solution</Subheading>}
        heading="OrderCraft brings your restaurant into the digital age."
        description="Empower customers to order and pay from their phones, streamline operations, and unlock real-time insights — all from one powerful platform."
        primaryButtonText="Start Today"
        buttonRounded={true}
        imageSrc={FeaturesImage}
        textOnLeft={false}
      />

      {/* Features Section */}
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading="Smart, Fast, and Customer-Friendly."
        description="OrderCraft equips you with everything you need to deliver a modern dining experience."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Contactless Ordering",
            description:
              "Allow guests to browse the menu, place orders, and pay directly from their smartphones."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Table & Waiter Management",
            description:
              "Assign tables, track service times, and optimize staff productivity effortlessly."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Real-Time Menu Control",
            description:
              "Easily update prices, availability, and promotions on the fly with our intuitive dashboard."
          },
          {
            imageSrc: ReliableIconImage,
            title: "Data-Driven Insights",
            description:
              "Analyze sales trends, customer preferences, and optimize your business decisions."
          }
        ]}
        linkText=""
      />

      {/* How it Works */}
      <HowItWorks
        subheading={<Subheading>How It Works</Subheading>}
        heading="Just 3 Easy Steps."
        steps={[
          {
            title: "Sign Up & Setup",
            description: "Create your restaurant profile, upload your menu, and customize settings."
          },
          {
            title: "Launch Your Digital Menu",
            description: "Display QR codes on tables, enabling guests to start ordering immediately."
          },
          {
            title: "Manage & Grow",
            description: "Track orders, analyze performance, and scale your business effortlessly."
          }
        ]}
        textOnLeft={true}
      />

      {/* Client Logos */}
      <MainFeature1
        subheading={<Subheading>Trusted by Restaurants</Subheading>}
        heading="Join 200+ Restaurants Embracing the Future."
        description="From cozy cafés to bustling restaurants, businesses across the country trust OrderCraft to deliver a seamless dining experience."
        primaryButtonText="Become a Partner"
        buttonRounded={true}
        imageSrc={ClientsLogoStripImage}
        textOnLeft={false}
      />

     
      {/* Footer */}
      <Footer />
    </AnimationRevealPage>
  );
};
