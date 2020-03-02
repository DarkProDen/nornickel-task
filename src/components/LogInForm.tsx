import React, { SFC, useState } from 'react';
import { Flex, Button } from 'rebass';
import { Input } from '@rebass/forms';
import Cookies from 'js-cookie';

type LogInFormProps = {};

const LogInForm: SFC<LogInFormProps> = (props): JSX.Element => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    fetch('http://www.mocky.io/v2/5e5d22d1320000c1f443c6b9', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data['access-token'] && data['refresh-token']) {
          Cookies.set('access-token', data['access-token'], {
            expires: 1,
          });
          Cookies.set('refresh-token', data['refresh-token'], {
            expires: 30,
          });
          window.location.reload();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Flex
      onSubmit={submitHandler}
      as="form"
      width={1}
      flexDirection="column"
      alignItems="center"
      sx={{ p: 30, '& input': { mb: 20, maxWidth: 300 } }}
    >
      <Input
        id="username"
        name="username"
        placeholder="Логин"
        onChange={event => {
          setUsername(event.target.value);
        }}
      ></Input>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Пароль"
        onChange={event => {
          setPassword(event.target.value);
        }}
      ></Input>
      <Button type="submit" color="black" sx={{ border: '1px solid black', width: 'fit-content' }}>
        Войти
      </Button>
    </Flex>
  );
};

export default LogInForm;
