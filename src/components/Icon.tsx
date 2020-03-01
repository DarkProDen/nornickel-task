import React, { SFC } from 'react';
import { Button, SxProps } from 'rebass';

interface IconProps extends SxProps {
  icon: string;
}

const Icon: SFC<IconProps> = (props): JSX.Element => {
  return (
    <Button
      css={{
        padding: '0',
        width: '30px',
        height: '30px',
        backgroundImage: `url(${props.icon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor: 'transparent'
      }}
      sx={props.sx}
    />
  );
};

export default Icon;
