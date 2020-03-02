import React, { SFC } from 'react';
import { Flex, Box, Text, Link, Image } from 'rebass';
import { Label, Input } from '@rebass/forms';
import vector from '../assests/icons/Vector.svg';
import instagram from '../assests/icons/Instagram.svg';
import twitter from '../assests/icons/Twitter.svg';
import telegram from '../assests/icons/Telegram.svg';
import nornickel from '../assests/images/Nornickel.png';
import Icon from './Icon';

type FooterProps = {};

const Footer: SFC<FooterProps> = (props): JSX.Element => {
  return (
    <Box
      as="footer"
      sx={{
        bg: 'blue',
        color: 'white',
        fontFamily: 'default',
        fontSize: '10pt',
        lineHeight: 'footer',
        px: '5%'
      }}
    >
      <Flex width={1} py="30px">
        <Text width={1 / 4} fontWeight="bold" fontSize="12pt">
          Смарт Норильск
        </Text>
        <Flex
          width={1 / 4}
          flexDirection="column"
          alignItems="flex-start"
          sx={{ '& a': { mb: '20px' } }}
        >
          <Link href="News">Новости</Link>
          <Link href="Home">Афиша</Link>
          <Link href="Services">Услуги</Link>
          <Link href="Contacts" sx={{ mb: '0 !important' }}>
            Контакты
          </Link>
        </Flex>
        <Flex width={1 / 4} flexDirection="column">
          <Text mb="20px">Поддержка портала</Text>
          <Text fontWeight="bold" fontSize="12pt">
            8-800-000-01-02
          </Text>
        </Flex>
        <Flex width={1 / 4} as="form" flexDirection="column">
          <Label htmlFor="email" mb="20px">
            Подпишитесь на рассылку портала
          </Label>
          <Flex alignItems="center" mb="10px">
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
      <Box width={1} height="2px" bg="transparent-white" />
      <Flex width={1} alignItems="center" py="10px">
        <Flex width={1 / 4} alignItems="center" sx={{ fontWeight: 'bold' }}>
          <Image src={nornickel} minWidth="38px" mr="5%" />
          НОРНИКЕЛЬ
        </Flex>
        <Flex width={1 / 4} alignItems="center">
          <Icon icon={instagram} sx={{ ml: '-7px', mr: '10%' }} />
          <Icon icon={twitter} sx={{ mr: '10%' }} />
          <Icon icon={telegram} />
        </Flex>
        <Text width={1 / 4}>Условия пользования</Text>
        <Text width={1 / 4} color="semi-transparent-white">
          2020 ООО "Единство"
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
