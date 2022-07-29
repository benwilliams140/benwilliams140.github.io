import * as React from 'react';
import { BaseComponentProps } from '../../constants/types';

type BlockListProps = BaseComponentProps & {
  children: React.ReactNode[];
};

const BlockList = (props: BlockListProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default BlockList;
