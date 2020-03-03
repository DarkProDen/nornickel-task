import React, { SFC } from 'react';
import { Heading } from 'rebass';

interface IProtectedPageProps {}

const ProtectedPage: SFC<IProtectedPageProps> = (props): JSX.Element => (
  <Heading my={30}>Аутентификация прошла успешно</Heading>
);

export default ProtectedPage;
