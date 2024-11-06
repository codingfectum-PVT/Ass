import emotionStyled from '@emotion/styled'
import React, { useEffect } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";


const Wraper = emotionStyled.div`
    padding: 100px 0px;
    background-color: #ffffff;
`
const BoxInner = emotionStyled(Box)`
    background: rgb(112, 112, 112);
    border-radius: 30px 0px 0px 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
` 

const JoinUs = () => {
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
                    <Typography variant='h2' textAlign={'center'} margin={'auto'} color={'#555555'} maxWidth={640} data-aos="fade-up">Join the $Ass movement!</Typography>
                    
                    <Typography variant='body2' maxWidth={'500px'} margin={'24px auto 0'} textAlign={'center'} data-aos="fade-up">
                        Don’t just sit there drooling! Get in with the wildest crowd in crypto, where $ASS fans come together for laughs, claps and gifs that’ll keep you coming back for more.  
                        <br /><br />Join our Telegram and get yourself some $ASS!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Wraper>
  )
}

export default JoinUs