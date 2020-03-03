import React, { SFC, PropsWithChildren } from 'react';
import { Flex, SxProps } from 'rebass';

interface FooterRowProps extends SxProps {
  as?: React.ElementType;
}

const FooterRow: SFC<PropsWithChildren<FooterRowProps>> = (props): JSX.Element => (
  <Flex width={1} as={props.as} sx={props.sx}>
    {props.children}
  </Flex>
);

export default FooterRow;
