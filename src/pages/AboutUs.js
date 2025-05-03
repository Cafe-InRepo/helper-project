import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Vision from "../images/about-us/vision.jpeg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import { useLanguage } from "context/LanguageContext";
import { getTranslation } from "utils/i18n";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  const { language } = useLanguage(); // Assume this hook gives you the selected language

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>{getTranslation("about.whoWeAre", language)}</Subheading>}
        heading={getTranslation("about.cuttingEdgeApp", language)}
        buttonRounded={false}
        primaryButtonText={getTranslation("about.seePortfolio", language)} // Update based on the language
      />
      <MainFeature1
        subheading={<Subheading>{getTranslation("about.ourVision", language)}</Subheading>}
        heading={getTranslation("about.visionDescription", language)}
        buttonRounded={false}
        primaryButtonText={getTranslation("about.contactUs", language)} // Update based on the language
        imageSrc={Vision}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>{getTranslation("about.ourMission", language)}</Subheading>}
        heading={getTranslation("about.missionDescription", language)}
        buttonRounded={false}
        description={getTranslation("about.missionDetail", language)}
        primaryButtonText={getTranslation("about.seePortfolio", language)} // Update based on the language
      />
      <Features
        subheading={<Subheading>{getTranslation("about.ourValues", language)}</Subheading>}
        heading={getTranslation("about.whyChooseOrderCraft", language)}
        description={getTranslation("about.chooseOrderCraftDescription", language)}
        cards={[
          {
            imageSrc: SupportIconImage,
            title: getTranslation("about.seamlessOrderingExperience", language),
            description: getTranslation("about.seamlessOrderingDescription", language),
          },
          {
            imageSrc: ShieldIconImage,
            title: getTranslation("about.effortlessManagement", language),
            description: getTranslation("about.effortlessManagementDescription", language),
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: getTranslation("about.enhancedCustomerSatisfaction", language),
            description: getTranslation("about.enhancedCustomerDescription", language),
          },
          {
            imageSrc: ReliableIconImage,
            title: getTranslation("about.realTimeInsights", language),
            description: getTranslation("about.realTimeDescription", language),
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>{getTranslation("about.ourTeam", language)}</Subheading>} />
      <Footer />
    </AnimationRevealPage>
  );
};
