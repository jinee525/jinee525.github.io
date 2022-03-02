import React from 'react';
import styled from 'styled-components';

import { colorDict } from '../helpers/colors';

const Chip = styled.div`
  width: auto;
  height: auto;
  padding: 6px 12px;
  margin: 4px 8px;
  border-radius: 4px;
  background-color: ${colorDict.lightBackground};
`;

const SimpleCard = (props) => {
  const { item: clubs } = props;
  const { title, desc } = clubs.data;

  return <Chip>{title}</Chip>;
};

export default SimpleCard;
