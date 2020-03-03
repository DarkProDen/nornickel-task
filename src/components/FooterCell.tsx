import React, { SFC, PropsWithChildren } from 'react';
import { Flex, SxProps } from 'rebass';

interface FooterCellProps extends SxProps {
  as?: React.ElementType;
}

const FooterCell: SFC<PropsWithChildren<FooterCellProps>> = (props): JSX.Element => (
  <Flex as={props.as} width={1 / 4} flexDirection="column" alignItems="flex-start" sx={props.sx}>
    {props.children}
  </Flex>
);

export default FooterCell;
