import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Stiward Solano is a
      graduate of Systems Engineering at UDLA.
      He is currently working on projects focused on multiplatform web applications, he is an expert in help desk and virtual reality. The winner of the UDLA Tech Day 2017 and the UDLA Engineering Festival 2020.
      </SectionText>
      <Button onClick={() => window.open('https://www.vialivetext.com/showcases#/show/5d73bd9f38bbb567fa555837', "_blank")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;