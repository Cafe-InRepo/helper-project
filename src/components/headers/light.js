import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/ordercraft-logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector.js";
import { useLanguage } from "context/LanguageContext.js";
import { getTranslation } from "utils/i18n.js";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;
export const NavLink = styled.a(({ active }) => [
  tw`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
     font-semibold tracking-wide transition duration-300
     pb-1 border-b-2 border-transparent hocus:border-yellow-500 hocus:text-yellow-500`,
  active && tw`border-yellow-500 text-yellow-500`,
]);

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
// export const NavLink = tw.a`
//   text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
//   font-semibold tracking-wide transition duration-300
//   pb-1 border-b-2 border-transparent hover:border-yellow-500 hocus:text-yellow-500
// `;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-700 text-gray-100
  hocus:bg-yellow-500 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-40 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  const { language } = useLanguage(); // Assume this hook gives you the selected language
  const location = useLocation();
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/" active={location.pathname === "/"}>
        {getTranslation("Header.home", language)}
      </NavLink>
      <NavLink href="/about" active={location.pathname === "/about"}>
        {getTranslation("Header.about", language)}
      </NavLink>
      <NavLink href="/blog" active={location.pathname === "/blog"}>
        {getTranslation("Header.blog", language)}
      </NavLink>
      <NavLink href="/features" active={location.pathname === "/features"}>
        {getTranslation("Header.features", language)}
      </NavLink>
      <NavLink href="/pricing" active={location.pathname === "/pricing"}>
        {getTranslation("Header.pricing", language)}
      </NavLink>
      <NavLink href="/contact" active={location.pathname === "/contact"}>
        {getTranslation("Header.contact", language)}
      </NavLink>

      <NavLink
        href="/login"
        active={location.pathname === "/login"}
        tw="lg:ml-12!"
      >
        {getTranslation("Header.login", language)}
      </NavLink>
      <PrimaryLink href="/signup" css={roundedHeaderButton && tw`rounded-full`}>
        {getTranslation("Header.signup", language)}
      </PrimaryLink>
    </NavLinks>,
  ];

  const defaultLogoLink = (
    <>
      <LogoLink href="/">
        <img src={logo} alt="logo" />
      </LogoLink>
      <LanguageSelector />
    </>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};


const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
