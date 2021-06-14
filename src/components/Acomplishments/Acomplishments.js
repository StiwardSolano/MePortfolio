import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AcomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {AcomplishmentsData.map(({number, text}, index) => (
        <Box key={index}>
          <BoxNum>{`${number}st`}</BoxNum>
          <BoxNum>{text}</BoxNum>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
