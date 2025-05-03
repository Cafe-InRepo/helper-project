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
import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/i18n";
const Subheading = tw.span`uppercase tracking-wider text-sm text-primary-500`;

export default () => {
  const { language } = useLanguage();

  return (
    <AnimationRevealPage>
      <Header />

      {/* Hero Section */}
      <MainFeature1
        subheading={
          <Subheading>
            {getTranslation("landingPage.hero.title", language)}
          </Subheading>
        }
        heading={getTranslation("landingPage.hero.subtitle", language)}
        description={getTranslation("landingPage.hero.description", language)}
        primaryButtonText={getTranslation(
          "landingPage.hero.getStarted",
          language
        )}
        buttonRounded={true}
        imageSrc={HeroImage}
        textOnLeft={false}
      />

      {/* Problem Section */}
      <MainFeature1
        subheading={
          <Subheading>
            {getTranslation("landingPage.problem.title", language)}
          </Subheading>
        }
        heading={getTranslation("landingPage.problem.description", language)}
        description={getTranslation("landingPage.problem.details", language)}
        primaryButtonText={getTranslation("landingPage.problem.cta", language)}
        buttonRounded={true}
        imageSrc={VisionImage}
        textOnLeft={true}
      />

      {/* Solution Section */}
      <MainFeature1
        subheading={
          <Subheading>
            {getTranslation("landingPage.solution.title", language)}
          </Subheading>
        }
        heading={getTranslation("landingPage.solution.description", language)}
        description={getTranslation("landingPage.solution.details", language)}
        primaryButtonText={getTranslation("landingPage.solution.cta", language)}
        buttonRounded={true}
        imageSrc={FeaturesImage}
        textOnLeft={false}
      />

      {/* Features Section */}
      <Features
        subheading={
          <Subheading>
            {getTranslation("landingPage.features.title", language)}
          </Subheading>
        }
        heading={getTranslation("landingPage.features.subtitle", language)}
        description={getTranslation(
          "landingPage.features.description",
          language
        )}
        cards={[
          {
            imageSrc: SupportIconImage,
            title: getTranslation(
              "landingPage.features.list.contactlessOrdering.title",
              language
            ),
            description: getTranslation(
              "landingPage.features.list.contactlessOrdering.description",
              language
            ),
          },
          {
            imageSrc: ShieldIconImage,
            title: getTranslation(
              "landingPage.features.list.tableWaiterManagement.title",
              language
            ),
            description: getTranslation(
              "landingPage.features.list.tableWaiterManagement.description",
              language
            ),
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: getTranslation(
              "landingPage.features.list.realTimeMenuControl.title",
              language
            ),
            description: getTranslation(
              "landingPage.features.list.realTimeMenuControl.description",
              language
            ),
          },
          {
            imageSrc: ReliableIconImage,
            title: getTranslation(
              "landingPage.features.list.dataDrivenInsights.title",
              language
            ),
            description: getTranslation(
              "landingPage.features.list.dataDrivenInsights.description",
              language
            ),
          },
        ]}
        linkText=""
      />

      {/* How It Works */}
      <HowItWorks
        subheading={
          <Subheading>
            {getTranslation("landingPage.howItWorks.title", language)}
          </Subheading>
        }
        heading={getTranslation("landingPage.howItWorks.subtitle", language)}
        steps={[
          {
            title: getTranslation(
              "landingPage.howItWorks.steps.signupSetup.title",
              language
            ),
            description: getTranslation(
              "landingPage.howItWorks.steps.signupSetup.description",
              language
            ),
          },
          {
            title: getTranslation(
              "landingPage.howItWorks.steps.launchMenu.title",
              language
            ),
            description: getTranslation(
              "landingPage.howItWorks.steps.launchMenu.description",
              language
            ),
          },
          {
            title: getTranslation(
              "landingPage.howItWorks.steps.manageGrow.title",
              language
            ),
            description: getTranslation(
              "landingPage.howItWorks.steps.manageGrow.description",
              language
            ),
          },
        ]}
        textOnLeft={true}
      />

      {/* Trusted by Section */}
      <MainFeature1
        subheading={
          <Subheading>
            {getTranslation("landingPage.trustedBy.title", language)}
          </Subheading>
        }
        heading={getTranslation("landingPage.trustedBy.description", language)}
        description={getTranslation("landingPage.trustedBy.details", language)}
        primaryButtonText={getTranslation(
          "landingPage.trustedBy.cta",
          language
        )}
        buttonRounded={true}
        imageSrc={ClientsLogoStripImage}
        textOnLeft={false}
      />

      {/* Footer */}
      <Footer />
    </AnimationRevealPage>
  );
};
