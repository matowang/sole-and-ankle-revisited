import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import { QUERIES } from "../../constants";

const SuperHeader = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray-300);
  background-color: var(--color-gray-900);
  padding-left: 32px;
  padding-right: 32px;
  min-height: 4px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 40px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MarketingMessage = styled.span`
  color: var(--color-white);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
