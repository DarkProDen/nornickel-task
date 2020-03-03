import React, { SFC } from 'react';
import { Heading } from 'rebass';
import checkToken from '../misc/checkToken';
import { Redirect } from 'react-router-dom';

interface IProtectedPageProps {}

const ProtectedPage: SFC<IProtectedPageProps> = (props): JSX.Element => {
  return checkToken() ? (
    <Heading my={30}>Аутентификация прошла успешно</Heading>
  ) : (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  );
};

export default ProtectedPage;
