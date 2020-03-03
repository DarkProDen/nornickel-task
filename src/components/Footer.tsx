import React, { SFC } from 'react';
import { Flex, Box, Text, Link, Image } from 'rebass';
import { Label, Input } from '@rebass/forms';
import vector from '../assets/icons/Vector.svg';
import instagram from '../assets/icons/Instagram.svg';
import twitter from '../assets/icons/Twitter.svg';
import telegram from '../assets/icons/Telegram.svg';
import nornickel from '../assets/images/Nornickel.png';
import Icon from './Icon';
import FooterCell from './FooterCell';
import Separator from './Separator';
import FooterRow from './FooterRow';

type FooterProps = {};

const Footer: SFC<FooterProps> = (props): JSX.Element => (
  <Box
    as="footer"
    width={1}
    sx={{
      bg: 'blue',
      color: 'white',
      fontSize: '10pt',
      lineHeight: 'footer',
      px: '5%',
    }}
  >
    <FooterRow sx={{ py: 30 }}>
      <FooterCell sx={{ fontWeight: 'bold', fontSize: '12pt' }}>Смарт Норильск</FooterCell>
      <FooterCell sx={{ '& a': { mb: '20px' } }}>
        <Link href="News">Новости</Link>
        <Link href="Home">Афиша</Link>
        <Link href="Services">Услуги</Link>
        <Link href="Contacts" sx={{ mb: '0 !important' }}>
          Контакты
        </Link>
      </FooterCell>
      <FooterCell>
        <Link href="Support" mb="20px">
          Поддержка портала
        </Link>
        <Link href="Phone" sx={{ fontWeight: 'bold', fontSize: '12pt' }}>
          8-800-000-01-02
        </Link>
      </FooterCell>
      <FooterCell as="form">
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
              pr: 36,
              '&::placeholder': { color: 'semi-transparent-white' },
            }}
          />
          <Icon href="Subscribe" icon={vector} sx={{ ml: '-33px' }}></Icon>
        </Flex>
        <Text color="semi-transparent-white">Рассылка не содержит рекламных материалов</Text>
      </FooterCell>
    </FooterRow>
    <Separator />
    <FooterRow sx={{ alignItems: 'center', py: 10 }}>
      <FooterCell
        sx={{
          fontWeight: 'bold',
          alignItems: 'center !important',
          flexDirection: 'row !important',
        }}
      >
        <Image src={nornickel} minWidth="38px" mr="5%" />
        НОРНИКЕЛЬ
      </FooterCell>
      <FooterCell sx={{ alignItems: 'center !important', flexDirection: 'row !important' }}>
        <Icon
          target="_blank"
          href="https://www.instagram.com/"
          icon={instagram}
          sx={{ ml: '-7px', mr: '10%' }}
        />
        <Icon target="_blank" href="https://twitter.com/" icon={twitter} sx={{ mr: '10%' }} />
        <Icon target="_blank" href="https://telegram.org/" icon={telegram} />
      </FooterCell>
      <FooterCell>
        <Link href="Conditions">Условия пользования</Link>
      </FooterCell>
      <FooterCell sx={{ color: 'semi-transparent-white' }}>© 2020 ООО «Единство»</FooterCell>
    </FooterRow>
  </Box>
);

export default Footer;
