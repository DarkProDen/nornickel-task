import React, { SFC } from 'react';
import { Flex, Button } from 'rebass';
import { Input } from '@rebass/forms';

type LogInFormProps = {};

const LogInForm: SFC<LogInFormProps> = (props): JSX.Element => {
  return (
    <Flex
      as="form"
      width={1}
      flexDirection="column"
      alignItems="center"
      sx={{ p: 30, '& input': { mb: 20, maxWidth: 300 } }}
    >
      <Input id="login" name="login" type="login" placeholder="Логин"></Input>
      <Input id="password" name="password" type="password" placeholder="Пароль"></Input>
      <Button color="black" sx={{ border: '1px solid black', width: 'fit-content' }}>
        Войти
      </Button>
    </Flex>
  );
};

export default LogInForm;
