import * as React from 'react';
import styled, { css } from 'styled-components';
import { BaseComponentProps } from '../../constants/types';

type VerticalDividerProps = {
  direction: 'vertical';
  width?: number;
  height?: never;
};

type HorizontalDividerProps = {
  direction: 'horizontal';
  height?: number;
  width?: never;
};

type DividerProps = BaseComponentProps &
  (VerticalDividerProps | HorizontalDividerProps) & {};

const Divider = (props: DividerProps) => {
  const { direction, width = 200, height = 200, className } = props;

  return <StyledDiv direction={direction} className={className} />;
};

const StyledDiv = styled.div<Pick<DividerProps, 'direction'>>`
  // TODO: not working
  background-color: ${props => props.theme.border};
  background-size: cover;
  ${props =>
    props.direction === 'horizontal'
      ? css`
          width: 200px;
          height: 2px;
        `
      : css`
          width: 2px;
          height: 200px;
        `};
`;

export default Divider;
