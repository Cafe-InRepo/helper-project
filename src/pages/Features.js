import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Feauture from "components/features/TwoColSingleFeatureWithStats.js";

export default () => {


  return (
    <AnimationRevealPage>
      <Header />
      <Testimonial textOnLeft={true} />
      <Feauture />
      <Footer />
    </AnimationRevealPage>
  );
};
