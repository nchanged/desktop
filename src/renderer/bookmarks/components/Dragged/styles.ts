import styled, { css } from 'styled-components';

import { colors } from '@/constants/renderer';
import { shadows, centerImage, robotoMedium } from '@/mixins';
import { DRAG_ELEMENT_WIDTH } from '@/constants/bookmarks';

export const Root = styled.div`
  width: ${DRAG_ELEMENT_WIDTH}px;
  height: 42px;
  background-color: ${colors.blue['500']};
  position: fixed;
  bottom: 128px;
  left: 50%;
  transform: translateY(-50%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  z-index: 100;
  box-shadow: ${shadows(6)};
`;

export const Icon = styled.div`
  min-width: 24px;
  min-height: 24px;
  margin-left: 8px;
  background-color: #fff;
  border-radius: 100%;

  ${centerImage('16px', '16px')};

  ${({ src }: { src: string }) => css`
    background-image: url(${src});
  `};
`;

export const Title = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  font-size: 13px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;

  ${robotoMedium()};
`;