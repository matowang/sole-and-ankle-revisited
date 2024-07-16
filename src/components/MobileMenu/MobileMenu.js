/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const NAV_LINKS = [
  {
    href: "/sale",
    name: "sale",
  },
  { href: "/new", name: "New Releases" },
  { href: "/men", name: "Men" },
  { href: "/women", name: "Women" },
  { href: "/kids", name: "Kids" },
  { href: "/collections", name: "Collections" },
];

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
          {NAV_LINKS.map((navLink, i) => {
            return (
              <NavLink
                href={navLink.href}
                id={navLink.name}
                style={{
                  animationDelay: `${i * 50 + 200}ms`,
                }}
              >
                {navLink.name}
              </NavLink>
            );
          })}
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
  background-color: var(--color-backdrop);
  @keyframes appearBackground {
    from {
      background-color: transparent;
    }
    to {
      background-color: var(--color-backdrop);
    }
  }
  animation: appearBackground 500ms both;
  perspective: 500px;
`;

const Content = styled(DialogContent)`
  @media (prefers-reduced-motion: no-preference) {
    @keyframes swingIn {
      from {
        transform: rotateY(-90deg);
        opacity: 0;
      }
      to {
        transform: rotateYX(0deg);
        opacity: 1;
      }
    }
    transform-origin: right;
    animation: swingIn 500ms both cubic-bezier(0.17, 0.67, 0.7, 1.33);
  }
  --overfill: 32px;
  margin-right: calc(var(--overfill) * -1);
  position: absolute;
  height: 100%;
  width: 300px;
  right: 0;
  top: 0;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px calc(32px + var(--overfill)) 32px 32px;
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
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: appear 300ms both;
  animation-delay: 200ms;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: appear 300ms both;
  animation-delay: 400ms;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
`;

const CloseButton = styled(UnstyledButton)`
  align-self: end;
  position: absolute;
  padding: 16px;
  right: var(--overfill);
  top: 10px;
`;

export default MobileMenu;
