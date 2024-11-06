import emotionStyled from '@emotion/styled'
import React, { useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";


const Wraper = emotionStyled.div`
    padding: 100px 0px;
`

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
  return (
    <Wraper id='about'>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12} >
                    <Typography variant='h1' textAlign={'center'} data-aos="fade-up" data-aos-duration="500" >ABOUT US</Typography>
                    <Typography variant='body1' margin={'24px auto 0'} maxWidth={'630px'} textAlign={'center'} data-aos="fade-up" data-aos-duration="700">
                        Let’s not kid ourselves, $ASS is here to give people what they really want. We’re not about fancy graphs or serious finance talk, we’re about bringing together everyone who appreciates a great view. Whether you’re here to admire, invest, or just indulge in a bit of fun, there’s room for every kind of $ASS appreciation in this world. The more people buy in, the bigger $ASS grows. Think you can handle it?
                        <br />
                        <br />
                        So go ahead, grab some $ASS and join the token that’s shaking things up! You’ll get a taste of what everyone’s talking about. After all, this is the one time you really do want to get caught staring!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Wraper>
  )
}

export default About