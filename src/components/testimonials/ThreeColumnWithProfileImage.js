import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; // eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import {
  SectionHeading as Heading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { getTranslation } from "utils/i18n"; // 👈 Make sure this is correctly imported
import { useLanguage } from "context/LanguageContext";

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

const TestimonialsSection = () => {
  const { language } = useLanguage();

  const subheading = getTranslation(
    "ThreeColumnWithProfileImage.subheading",
    language
  );
  const heading = getTranslation(
    "ThreeColumnWithProfileImage.heading",
    language
  );
  const items = getTranslation("ThreeColumnWithProfileImage.items", language); // array of testimonials

  // Local image references (can be static if not translated)
  const images = [
    "https://lh5.googleusercontent.com/p/AF1QipPTpuLekKbtR3XEHuIKN98Vua2VwSDfpnYtV2ig=w203-h118",
    "https://lh5.googleusercontent.com/p/AF1QipM1neCB_B3Lh7VolhHPZwQpVI82Jg5Ya6_CflFf=w203-h203",
    "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Testimonials>
          {items?.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={images[index]} />
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

export default TestimonialsSection;
