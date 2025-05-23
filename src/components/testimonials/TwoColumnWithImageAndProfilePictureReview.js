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
import { useLanguage } from "context/LanguageContext";
import { getTranslation } from "utils/i18n";

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

const featuresImages = [
  dashboard,
  qrCodeOrdering,
  menuManagement,
  orderManagement,
  payments,
  waitersManagement,
  dailyReceiptSystem,
  productAvailability,
];

export default ({ textOnLeft = false }) => {
  const { language } = useLanguage();
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuresData = getTranslation("FeaturesSection.items", language);
  const featuresWithImages = featuresData.map((feature, index) => ({
    ...feature,
    imageSrc: featuresImages[index],
  }));

  return (
    <Container>
      <Content>
        <HeadingInfo
          tw="text-center lg:hidden"
          subheading={getTranslation("FeaturesSection.subheading", language)}
          heading={getTranslation("FeaturesSection.heading", language)}
          description={getTranslation("FeaturesSection.description", language)}
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
                {featuresWithImages.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image
                      imageSrc={testimonial.imageSrc}
                      onClick={() =>
                        setSelectedImage(
                          featuresWithImages[currentIndex].imageSrc
                        )
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
                  subheading={getTranslation(
                    "FeaturesSection.subheading",
                    language
                  )}
                  heading={getTranslation("FeaturesSection.heading", language)}
                  description={getTranslation(
                    "FeaturesSection.description",
                    language
                  )}
                />
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {featuresWithImages.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <CustomerInfo>
                        <CustomerTextInfo>
                          <CustomerName>{testimonial.featureName}</CustomerName>
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
