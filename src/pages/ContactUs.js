import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../utils/i18n";

export default () => {
  const { language } = useLanguage();

  return (
    <AnimationRevealPage>
      <Header />

      {/* Contact Form Section */}
      <ContactUsForm
        subheading={getTranslation("contactPage.form.subheading", language)}
        heading={getTranslation("contactPage.form.heading", language)}
        description={getTranslation("contactPage.form.description", language)}
        submitButtonText={getTranslation(
          "contactPage.form.submitButtonText",
          language
        )}
      />

      {/* Contact Details Section */}
      <ContactDetails
        subheading={getTranslation("contactPage.details.subheading", language)}
        heading={getTranslation("contactPage.details.heading", language)}
        description={getTranslation(
          "contactPage.details.description",
          language
        )}
        cards={getTranslation("contactPage.details.cards", language).map(
          (card, index) => ({
            title: card.city,
            description: (
              <>
                <span className="block leading-relaxed">
                  {card.addressLine1}
                </span>
                <br />
                <span className="block leading-relaxed">
                  {card.addressLine2}
                </span>
                <br />
                <span className="block text-sm text-yellow-500 mt-6">
                  {card.email}
                </span>
                <br />
                <span className="block text-sm text-gray-500 mt-0">
                  {card.phone}
                </span>
              </>
            ),
          })
        )}
      />

      <Footer />
    </AnimationRevealPage>
  );
};
