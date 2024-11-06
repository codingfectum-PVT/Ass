import emotionStyled from '@emotion/styled'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { tgLink, xLink } from '../../../links';
import tg from '../../../assets/tg.png'
import x from '../../../assets/x.png'
import { MenuLink } from '../../Components/LockerMenu/styles';


const Wraper = emotionStyled.div`
    padding: 50px 0px;
`
const Footer = () => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
  return (
    <>
        <Wraper>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid xs={12} md={6}>
                        <Typography variant='body1' maxWidth={'350px'} >$ASS is a bold, community-driven Solana token that celebrates humor, camaraderie, and the unapologetic fun of meme culture, uniting investors with a shared love for crypto’s cheekiest asset.</Typography>
                    </Grid>
                    <Grid xs={12} md={6} alignContent={'center'}>
                        <Box textAlign={{xs: 'left', md: 'right'}}>
                            <MenuLink href={tgLink} className='socials' target='_blank'><img src={tg} /></MenuLink>
                            <MenuLink href={xLink} className='socials' target='_blank'><img src={x} /></MenuLink>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Wraper>
        
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12} style={{padding: '24px', borderTop: "2px solid #707070"}}>
                    <Typography variant='body1' textAlign={'center'}>info@weloveass.vip</Typography>
                </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default Footer