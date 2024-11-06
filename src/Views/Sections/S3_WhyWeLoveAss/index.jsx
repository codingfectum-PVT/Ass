import emotionStyled from '@emotion/styled'
import React, { useEffect } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";


const Wraper = emotionStyled.div`
    padding: 100px 0px;
`

const Card = ({heading, details}) =>{
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
    return(
        <Grid sx={12} sm={6} md={4} padding={'12px'}  data-aos="fade-up" data-aos-duration="700">
            <Box style={{background: '#2E2E2E', borderRadius: '30px'}}>
                <Box padding={2} style={{background: '#707070', borderRadius: '30px 30px 0 0'}}>
                    <Typography variant='h6' textAlign={'center'}>{heading}</Typography>
                </Box>
                <Typography variant='body1' padding={3} textAlign={'center'}>{details}</Typography>
            </Box>
        </Grid>
    )
}

const WhyWeLoveAss = () => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
  return (
    <Wraper>
        <Container maxWidth="xl">
            <Grid container marginBottom={3}>
                <Grid xs={12} marginBottom={3} >
                    <Typography variant='h2' textAlign={'center'} margin={'auto'} color={'#555555'} maxWidth={460}  data-aos="fade-up" data-aos-duration="500">Why we love $ass</Typography>
                </Grid>
                <Card 
                    heading={'Bold & Unfiltered'}
                    details={'We’re here to twerk things up with unfiltered content that keeps you entertained. Join our community and tell us about your favorite ass!'}
                />
                <Card 
                    heading={'community driven'}
                    details={'Every booty gif, every butt pic and every $ASS buy; pretty much every milestone is thanks to our community’s unwavering support.'}
                />
                <Card 
                    heading={'limitless potential'}
                    details={'$ASS is just getting started. We’re on a mission to build something perky, jiggly, impactful and profitable for all holders.'}
                />
            </Grid>
        </Container>
    </Wraper>
  )
}

export default WhyWeLoveAss