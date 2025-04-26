import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import dashboard from "../../images/features/sales-stats.png";
import qrCodeOrdering from "../../images/features/qrCodeOrdering.avif";
import menuManagement from "../../images/features/menuManagement.png";
import orderManagement from "../../images/features/orderManagement.png";
import payments from "../../images/features/payments.png";
import productAvailability from "../../images/features/productAvailability.png";
import dailyReceiptSystem from "../../images/features/dailyReceiptSystem.png";
import waitersManagement from "../../images/features/waitersManagement.png";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-6/12 flex-shrink-0`;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-40 sm:h-96 lg:h-144 cursor-pointer`,
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;
const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const QuoteContainer = tw.div`relative mt-2 lg:mt-4`;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-lg xl:text-xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-6 h-6 opacity-75 text-primary-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-6 h-6 opacity-75 text-primary-500 inline-block ml-1 -mt-3`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

// Modal styles
const ModalOverlay = tw.div`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50`;
const ModalContent = tw.div`relative max-w-4xl w-full p-4`;
const ModalImage = styled.img`
  ${tw`w-full rounded-lg shadow-lg`}
`;
const CloseButton = styled.button`
  ${tw`absolute m-2 text-white text-2xl font-bold bg-gray-800 rounded-full p-2 z-50 transition`}
`;

const feautures = [
  {
    imageSrc: dashboard,

    quote:
      "Order Craft's dashboard gives you a complete overview of your business in one place, helping you track performance and make data-driven decisions.<br/>✅ Sales Statistics – Monitor daily, weekly, monthly, and yearly revenue with real-time insights.<br/>✅ Product Performance – Identify best-selling items and optimize your menu based on customer preferences.<br/>✅ Order Management – Track incoming orders, manage their status, and streamline operations efficiently.<br/>✅ Employee Performance – Evaluate staff productivity and ensure top-notch service.",
      featureName: "Dashboard ",
    featureTitle: "Your Business at a Glance 📊🚀.",
  },
  {
    imageSrc: qrCodeOrdering,
    quote:
      "Order Craft makes ordering effortless with QR code technology. Customers simply scan the code at their table, browse the menu, and place their order in seconds—no app download required!<br/>✅ Contactless Ordering – Safe, fast, and efficient.<br/>✅ Customizable Orders – Customers can select items, add comments, and modify their order before confirmation.<br/>✅ Real-Time Processing – Orders go directly to the kitchen, reducing wait times and errors.",
    featureName: "QR Code Ordering",
    featureTitle: "Seamless Ordering with a Simple Scan 📲",
  },
  {
    imageSrc: menuManagement,
    quote:
      "Easily manage and customize your menu with Order Craft. Add, edit, or remove items, update prices, and set discounts—all in real-time.<br/>✅ Flexible Menu Sections – Organize items into categories for easy browsing.<br/>✅ Product Customization – Edit descriptions, images, and pricing anytime.<br/>✅ Instant Updates – Changes reflect immediately on the customer’s QR code menu.",
    featureName: "Menu Management",
    featureTitle: "Complete Control Over Your Menu 🍽️",
  },
  {
    imageSrc: orderManagement,
    quote:
      "Stay in control of your restaurant’s orders with real-time tracking and management. Orders from QR codes are directly sent to the system, and staff can process them with ease.<br/>✅ Status Tracking – Move orders from pending to preparing to completed.<br/>✅ Order Modifications – Update, cancel, or prioritize orders as needed.<br/>✅ Smooth Workflow – Minimize errors and speed up service.",
    featureName: "Order Management",
    featureTitle: "Effortless Order Handling in Real-Time 📦",
  },
  {
    imageSrc: payments,
    quote:
      "Simplify the payment process with Order Craft. Confirm transactions, split bills, and generate receipts effortlessly.<br/>✅ Multiple Payment Options – Accept cash, card, or digital payments.<br/>✅ Bill Splitting – Let customers pay for individual items or split the total.<br/>✅ Receipt Management – Generate digital and PDF receipts instantly.",
    featureName: "Payments",
    featureTitle: "Fast & Flexible Payment Processing 💳",
  },
  {
    imageSrc: waitersManagement,
    quote:
      "Keep your staff organized with an efficient waiter management system. Assign roles, track performance, and control access levels.<br/>✅ Add & Remove Staff – Easily update your team in the system.<br/>✅ Monitor Performance – Track completed orders and productivity.<br/>✅ Staff Availability – Activate or deactivate staff accounts as needed.",
    featureName: "Waiters Management",
    featureTitle: "Efficient Staff Management for Better Service 👨‍🍳",
  },
  {
    imageSrc: dailyReceiptSystem,
    quote:
      "Generate detailed daily receipts to track sales, tips, and revenue for each shift. Waiters can close their receipts and download a PDF summary.<br/>✅ Track Daily Sales – View all orders handled during the shift.<br/>✅ Tip Management – Monitor total tips received per shift.<br/>✅ One-Click PDF Export – Generate and store daily reports easily.",
    featureName: "Daily Receipt System",
    featureTitle: "Comprehensive Shift Reports at Your Fingertips 📑",
  },
  {
    imageSrc: productAvailability,
    quote:
      "Control which menu items are available for ordering in real-time. Mark items as unavailable, and they will be visible to customers but unselectable.<br/>✅ Real-Time Availability – Update product status instantly.<br/>✅ Customer Transparency – Unavailable items are shown but cannot be ordered.<br/>✅ Easy Inventory Control – Reduce customer disappointment by managing stock efficiently.",
    featureName: "Product Availability",
    featureTitle:
      "Smart Inventory Management for Better Customer Experience 🚀",
  },
];

export default ({
  subheading = "",
  heading = "Features",
  description = "Discover the powerful features of Order Craft...",
  textOnLeft = false,
}) => {
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container>
      <Content>
        <HeadingInfo
          tw="text-center lg:hidden"
          subheading={subheading}
          heading={heading}
          description={description}
        />
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
                beforeChange={(oldIndex, newIndex) => setCurrentIndex(newIndex)}
              >
                {feautures.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image
                      imageSrc={testimonial.imageSrc}
                      onClick={() =>
                        setSelectedImage(feautures[currentIndex].imageSrc)
                      }
                    />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>

              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo
                  tw="hidden lg:block"
                  subheading={subheading}
                  heading={heading}
                  description={description}
                />
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {feautures.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <CustomerInfo>
                        <CustomerTextInfo>
                          <CustomerName>
                            {testimonial.featureName}
                          </CustomerName>
                          <CustomerTitle>
                            {testimonial.featureTitle}
                          </CustomerTitle>
                        </CustomerTextInfo>
                      </CustomerInfo>
                      <QuoteContainer>
                        <Quote>
                          <QuotesLeft />
                          <span
                            dangerouslySetInnerHTML={{
                              __html: testimonial.quote,
                            }}
                          />
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>

      {selectedImage && (
        <ModalOverlay onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
            <ModalImage src={selectedImage} alt="Feature Preview" />
          </ModalContent>
        </ModalOverlay>
      )}

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
