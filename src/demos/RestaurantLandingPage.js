import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import LandingImage from "../../src/images/main/landing.jpg";
import Scan from "../../src/images/main/scan.jpg";
import Menu from "../../src/images/main/menu.png";
import Order from "../../src/images/main/order.png";
import Payment from "../../src/images/main/payment.png";
import Waiters from "../../src/images/main/waiters.png";
import Dashboard from "../../src/images/main/dashboard.png";
import Rating from "../../src/images/main/rating.png";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  // const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Revolutionizing the{" "}
            <HighlightedText>Coffee & Restaurant Experience.</HighlightedText>
          </>
        }
        description="Order Craft is a smart, web-based platform designed for coffee shops and restaurants to streamline ordering and management. With QR code ordering, real-time order tracking, and an intuitive dashboard, it enhances efficiency, reduces wait times, and improves customer experience. Simplify your business operations with Order Craft!"
        imageSrc={LandingImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Live Demo"
        watchVideoButtonText="watch how it works!"
      />
      <Features
        subheading={<Subheading>Features</Subheading>}
        description="Order Craft is packed with powerful features designed to enhance efficiency, improve customer experience, and simplify restaurant and café management."
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: Scan,
            title: "Smart QR Code Ordering",
            description:
              "Customers scan a QR code on their table to access the digital menu...",
            url: "https://google.com",
          },
          {
            imageSrc: Menu,
            title: "Interactive Digital Menu",
            description:
              "Fully customizable menu with sections, categories, and detailed product info...",
            url: "https://timerse.com",
          },
          {
            imageSrc: Order,
            title: "Order Management",
            description:
              "Orders are displayed with real-time status updates (Pending, Preparing, Completed)...",
            url: "https://reddit.com",
          },
          {
            imageSrc: Payment,
            title: "Efficient Payment & Table Management",
            description:
              "Owners/waiters can manage tables, move orders between tables, and confirm payments...",
            url: "https://reddit.com",
          },
          {
            imageSrc: Waiters,
            title: "Employee & Performance Tracking",
            description:
              "Monitor waiter performance, track completed orders, and calculate daily tips.",
            url: "https://reddit.com",
          },
          {
            imageSrc: Dashboard,
            title: "Sales & Business Analytics Dashboard",
            description:
              "Real-time sales statistics and product performance insights...",
            url: "https://reddit.com",
          },
          {
            imageSrc: Rating,
            title: "Customer Feedback & Ratings",
            description:
              "Customers can rate products and leave comments after their order...",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      {/* <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      /> */}
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      /> */}

      {/* <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      /> */}

      <DownloadApp
        text={
          <>
            People around you are enjoying an unforgettable dining experience
            with <HighlightedTextInverse>Order Craft!</HighlightedTextInverse>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
