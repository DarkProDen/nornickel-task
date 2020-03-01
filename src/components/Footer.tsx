import React, { SFC } from 'react';
import { Flex, Box, Text, Link } from 'rebass';
import { Label, Input } from '@rebass/forms';
import vector from '../assests/icons/Vector.svg';
import Icon from './Icon';

type FooterProps = {};

const Footer: SFC<FooterProps> = (props): JSX.Element => {
  return (
    <Flex
      as="footer"
      sx={{
        bg: 'blue',
        color: 'white',
        fontFamily: 'default',
        fontSize: '10pt',
        lineHeight: 'footer',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        p: '20px 10px'
      }}
    >
      <Text fontWeight="bold" fontSize="12pt">
        Смарт Норильск
      </Text>
      <Flex flexDirection="column" sx={{ '& a': {} }}>
        <Link href="News">Новости</Link>
        <Link href="Home">Афиша</Link>
        <Link href="Services">Услуги</Link>
        <Link href="Contacts">Контакты</Link>
      </Flex>
      <Flex flexDirection="column">
        <Text>Поддержка портала</Text>
        <Text fontWeight="bold" fontSize="12pt">
          8-800-000-01-02
        </Text>
      </Flex>
      <Flex as="form" flexDirection="column">
        <Label htmlFor="email">Подпишитесь на рассылку портала</Label>
        <Flex alignItems="center">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Введите e-mail"
            sx={{
              bg: 'transparent-white',
              border: 0,
              borderRadius: 5,
              '&::placeholder': { color: 'semi-transparent-white' }
            }}
          />
          <Icon icon={vector} sx={{ ml: '-35px' }}></Icon>
        </Flex>
        <Text color="semi-transparent-white">
          Рассылка не содержит рекламных материалов
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
