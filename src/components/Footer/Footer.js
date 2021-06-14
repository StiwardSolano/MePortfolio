import React from 'react';
import { AiFillGithub, AiFillTrophy, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
{/*       <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+593999999999">+593999999999</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@gmail.com">contact@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList> */}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>For any inquiry please visit my links</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/StiwardSolano">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/stiward-solano/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.credly.com/users/stiward-solano/badges">
          <AiFillTrophy size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
