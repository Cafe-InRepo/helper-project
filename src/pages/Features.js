import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { motion } from "framer-motion";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "../components/misc/Buttons";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { ContentWithVerticalPadding } from "../components/misc/Layouts";
import OrderCraftImage from "../images/demo/Oeder-Craft-demo.png";

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-yellow-500`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

const url = {
    url: "https://cafe-in-client.netlify.app/#/dashboard",
    imageSrc: OrderCraftImage,
};
const PreviewCards = tw.div`flex flex-wrap justify-center `;
const PreviewCardContainer = tw.div`mt-24 mx-auto md:mx-0 max-w-lg w-full md:w-1/2 lg:w-1/3 pr-0`;
const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised `;
const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
const PreviewCardImage = styled(motion.div)`
    ${props => css`background-image: url("${props.$imageSrc}");`}
    ${tw`h-128 md:h-144 bg-cover bg-left-top`}
`;
const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold bg-yellow-500`;

export default () => {
    const previewImageAnimationVariants = {
        rest: {
            backgroundPositionY: "0%",
        },
        hover: {
            backgroundPositionY: "100%",
            transition: { type: "tween", ease: "linear", duration: 5 },
        },
    };

    return (
        <AnimationRevealPage>
            <Header />
            <SectionContainer id="landingPageDemos">
                <SectionHeading>Features</SectionHeading>
                <SectionDescription>
                    We have premade landing pages. Click on the "View Live Demo" button to
                    see them in action. Customizing or creating your own custom landing
                    page is really simple by using our UI components.
                </SectionDescription>
                <PreviewCards>
                    <PreviewCardContainer>
                        <PreviewCard
                            initial="rest"
                            animate="rest"
                            whileHover="hover"
                            href={url.url}
                            target="_blank"
                        >
                            <PreviewCardImageContainer>
                                <PreviewCardImage
                                    transition={{ type: "tween" }}
                                    variants={previewImageAnimationVariants}
                                    $imageSrc={url.imageSrc}
                                />
                            </PreviewCardImageContainer>
                            <PreviewButton>View Live Demo</PreviewButton>
                        </PreviewCard>
                    </PreviewCardContainer>
                </PreviewCards>
            </SectionContainer>
            <Footer />
        </AnimationRevealPage>
    );
};
