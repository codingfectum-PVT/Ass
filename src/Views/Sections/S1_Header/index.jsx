import emotionStyled from '@emotion/styled'
import React, { useEffect } from 'react'
import bg from '../../../assets/header-background.jpg'
import { Container, Grid, Typography } from '@mui/material'
import LockerMenu from '../../Components/LockerMenu'
import AOS from "aos";
import "aos/dist/aos.css";

const Wraper = emotionStyled.div`
    position: relative;
    min-height: 100vh;
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 0;
    
    &:after{
        content: 'header';
        position: absolute;
        color: transparent;
        font-size: 1px;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, black, transparent 80%, black);
    }
`

const Header = () => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
  return (
    <Wraper>
        <LockerMenu />
        <Container maxWidth="xl" data-aos="fade-up">
            <Grid container>
                <Grid xs={12} minHeight={'calc( 100vh - 67px )'} padding={{xs: '30px 0 40%', sm: '30px 0 20%', md: '30px 0 10%'}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'} >
                    <Typography variant='h1' textAlign={'center'}>We love $ASS</Typography>
                    <Typography variant='h4' maxWidth={'410px'} marginTop={3} textAlign={'center'}>The Coin That Has Your got your Back Covered. Grab your $ass today!!!</Typography>
                </Grid>
            </Grid>
        </Container>
    </Wraper>
  )
}

export default Header