import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-yellow-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm
        subheading="Contact Us"
        heading={
          <>
            Feel free to <span tw="text-yellow-500">get in touch</span> with us.
          </>
        }
        description="Have a question, suggestion, or need support? We're always ready to assist. Fill out the form and we'll reply as soon as possible."
        submitButtonText="Send Message"
      />

      <ContactDetails
        subheading="Our Location"
        heading="Come Visit Us"
        description="You’re always welcome at our office. Feel free to call, email, or visit us anytime during business hours."
        cards={[
          {
            title: "El Ayoun, Kasserine",
            description: (
              <>
                <span className="block leading-relaxed">El Ayoun City </span>
                <br />
                <span className="block leading-relaxed">
                  Kasserine, Tunisia
                </span>
                <br />
                <span className="block text-sm text-yellow-500 mt-6">
                  ordercraft2025@gmail.com
                </span>
                <br />

                <span className="block text-sm text-gray-500 mt-0">
                  +216 21 886 537
                </span>
              </>
            ),
          },
        ]}
      />

      <Footer />
    </AnimationRevealPage>
  );
};
