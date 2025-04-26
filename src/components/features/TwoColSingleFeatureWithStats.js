import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import Global from "../../images/features/OC-global.png"
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-7/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-16 md:order-first`
    : tw`md:ml-8 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(
  SectionHeading
)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`;

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`;
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`;
const Value = tw.div`font-bold text-primary-500`;
const Key = tw.div`font-medium text-gray-700`;

export default ({ textOnLeft = false }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const statistics = [
    {
      key: "Countries",
      value: "3",
    },
    {
      key: "Restaurants",
      value: "7",
    },
    {
      key: "Coffee shops ",
      value: "11",
    },
    {
      key: "Workers",
      value: "170",
    },
  ];

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={Global} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>
              All-in-One Platform to Run Your Restaurant or Café.
            </Heading>
            <Description>
              ✅ <b>Clean & Professional</b>: Discover the powerful tools that
              make managing your restaurant or café faster, smarter, and more
              efficient. <br />✅ <b>Friendly & Approachable</b>: Everything you
              need to run your place smoothly—right at your fingertips.
              <br /> ✅ <b>Benefit-Focused</b>: From smart ordering to real-time
              tracking, explore how Order Craft helps you save time, boost
              sales, and delight customers.
              <br /> ✅ <b>Straight to the Point</b>: Designed for simplicity,
              built for performance—see what makes Order Craft the ultimate food
              service companion..
            </Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
