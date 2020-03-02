import React, { SFC } from 'react';
import { Link, SxProps } from 'rebass';

interface IconProps extends SxProps {
  icon: string;
  href: string;
  target?: string;
}

const Icon: SFC<IconProps> = (props): JSX.Element => {
  return (
    <Link
      href={props.href}
      target={props.target}
      css={{
        padding: '0',
        width: '30px',
        height: '30px',
        backgroundImage: `url(${props.icon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
      sx={props.sx}
    />
  );
};

export default Icon;
