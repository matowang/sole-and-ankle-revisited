import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import { QUERIES } from "../../constants";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon
              color={"var(--color-gray-900)"}
              id="shopping-bag"
              size={`${24 / 16}rem`}
              strokeWidth={2}
            />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon
              color={"var(--color-gray-900)"}
              id="search"
              size={`${24 / 16}rem`}
              strokeWidth={2}
            />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon
              color={"var(--color-gray-900)"}
              id="menu"
              size={`${24 / 16}rem`}
              strokeWidth={2}
            />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: clip;
  @media ${QUERIES.tabletAndDown} {
    align-items: center;
  }
  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 5.7vw - 1.5rem, 3rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
  }
  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
