/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <div></div>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          <Icon
            color="var(--color-gray-900)"
            id="close"
            size={`${24 / 16}rem`}
            strokeWidth={2}
          />
        </CloseButton>
        <Nav>
          <NavLink href="/sale" isHighlighted>
            Sale
          </NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  position: absolute;
  height: 100%;
  width: 300px;
  right: 0;
  top: 0;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  text-transform: uppercase;
  &:hover {
    text-decoration: revert;
  }
  color: ${(p) =>
    p.isHighlighted ? "var(--color-secondary)" : "var(--color-gray-900)"};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
`;

const CloseButton = styled(UnstyledButton)`
  align-self: end;
  position: absolute;
  padding: 16px;
  right: 0px;
  top: 10px;
`;

export default MobileMenu;
