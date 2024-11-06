import emotionStyled from '@emotion/styled'
import React, { useEffect } from 'react'
import bg from '../../../assets/header-background.jpg'
import { Box, Container, Grid, Typography } from '@mui/material'
import LockerMenu from '../../Components/LockerMenu'
import AOS from "aos";
import "aos/dist/aos.css";
import { MenuLink } from '../../Components/LockerMenu/styles'
import { tgLink, xLink } from '../../../links'
import tg from '../../../assets/tg-light.png'
import x from '../../../assets/x-light.png'

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
const FloatSocialBox = emotionStyled(Box)`

    @media(min-width: 900px){
        position: absolute;
        top: 15%;
        bottom: 15%;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        a{
            background: rgba(255,255,255,0.2);
            padding: 25px 20px;
            position: relative;
            
            &:first-child{
                border-radius: 20px 0 0 0;
                
                &:after{
                    content: 'header';
                    font-size: 1px;
                    color: transparent;
                    position: absolute;
                    height: 2px;
                    width: 80%;
                    background: #ffffff;
                    left: 10%;
                    right: 10%;
                    bottom: -1px;
                }
            }
            &:last-child{
                border-radius: 0 0 0 20px;
            }
            img{
                width: 70px;
                height: auto;
            }
        }
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
                <Grid xs={12} minHeight={'calc( 100vh - 67px )'} position={'relative'} padding={{xs: '30px 0 40%', sm: '30px 0 20%', md: '30px 0 10%'}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'} >
                    <Typography variant='h1' textAlign={'center'}>We love $ASS</Typography>
                    <Typography variant='h4' maxWidth={'410px'} marginTop={3} textAlign={'center'}>The Coin That Has Your got your Back Covered. Grab your $ass today!!!</Typography>
                    <Box textAlign={'center'} marginTop={3} display={{md:'none'}}>
                        <MenuLink href={tgLink} className='socials' target='_blank'><img src={tg} /></MenuLink>
                        <MenuLink href={xLink} className='socials' target='_blank'><img src={x} /></MenuLink>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        <FloatSocialBox>
            <MenuLink href={tgLink} className='socials' target='_blank'><img src={tg} /></MenuLink>
            <MenuLink href={xLink} className='socials' target='_blank'><img src={x} /></MenuLink>
        </FloatSocialBox>
    </Wraper>
  )
}

export default Header