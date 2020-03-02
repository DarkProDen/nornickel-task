import React, { SFC } from 'react';
import { Box, SxProps } from 'rebass';

interface SeparatorProps extends SxProps {}

const Separator: SFC<SeparatorProps> = (props): JSX.Element => (
  <Box sx={props.sx} width={1} height="2px" bg="transparent-white" />
);

export default Separator;
