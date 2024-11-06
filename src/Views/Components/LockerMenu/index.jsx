import { Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';

const LockerMenu = (props) => {
    const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
        {
        title: "About",
        link: "/#about",
        },
        {
        title: "Gallery",
        link: "/#gallery",
        },
        {
        title: "Why buy",
        link: "/#why-buy",
        },
        {
        title: "How to buy",
        link: "/#how-to-buy",
        },
        {
        title: "Testimonials",
        link: "/#testimonials",
        },
    ];
  return (
    <Container>
        <DesktopMenu menuList={menuList} />
        <MobileMenu menuList={menuList} />
    </Container>
  )
}

export default LockerMenu