import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

import StepsIllustration from "images/main/how-it-works-illustration.png"; // pick any nice illustration you have!

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img`
  ${tw`rounded shadow-lg w-full`}
`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left text-primary-500`;
const Heading = tw(SectionHeading)`mt-4 text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left font-black leading-tight`;

const StepsContainer = tw.div`mt-8 md:mt-10`;
const Step = tw.div`mt-8 flex items-start`;
const StepNumber = tw.div`flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-gray-100 font-bold flex items-center justify-center text-sm`;
const StepText = tw.div`ml-4 text-left`;

const StepTitle = tw.div`font-semibold text-lg`;
const StepDescription = tw.div`mt-1 text-sm leading-relaxed text-secondary-100`;

export default ({
  subheading = "Our Process",
  heading = <>Simple & Easy Steps</>,
  steps = [
    {
      title: "Sign Up",
      description: "Create an account, set up your restaurant, and customize your digital menu."
    },
    {
      title: "Launch Your Digital Menu",
      description: "Place QR codes on tables so customers can browse, order, and pay instantly."
    },
    {
      title: "Manage & Grow",
      description: "Track orders, analyze data, and optimize your operations for success."
    }
  ],
  imageSrc = StepsIllustration,
  textOnLeft = true
}) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image src={imageSrc} alt="How OrderCraft Works" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <StepsContainer>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber>{index + 1}</StepNumber>
                  <StepText>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepText>
                </Step>
              ))}
            </StepsContainer>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
