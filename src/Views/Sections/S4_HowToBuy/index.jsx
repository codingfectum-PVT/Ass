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

const Card = ({heading, details}) =>{
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
    return(
        <Grid sx={12} padding={'12px'} data-aos="fade-up" data-aos-duration="700">
            <Box style={{background: '#F9F9F9', borderRadius: '30px', position: 'relative'}}>
                <BoxInner padding={2}>
                    <Typography variant='h2' textAlign={'center'}>{heading}</Typography>
                </BoxInner>
                <Typography variant='body2' padding={'24px 24px 24px 124px'} textAlign={'left'}>{details}</Typography>
            </Box>
        </Grid>
    )
}

const HowToBuy = () => {
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
                    <Typography variant='h2' textAlign={'center'} margin={'auto'} color={'#555555'} maxWidth={450}  data-aos="fade-up" data-aos-duration="500">HOW TO BUY $ASS</Typography>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="sm">
            <Grid container marginBottom={3}>
                <Card 
                    heading={'1'}
                    details={'Download the Phantom Wallet. You’ll need somewhere to keep all that $ASS safe. Trust us, you don’t want to be left empty handed.'}
                />
                <Card 
                    heading={'2'}
                    details={'Send some Solana (SOL) to your Phantom Wallet. Consider it a little foreplay before you get the real thing.'}
                />
                <Card 
                    heading={'3'}
                    details={'Head Over to Raydium. Copy the address below to get the $ASS you’re after. Make sure you grab the right one, not an impostor!'}
                />
            </Grid>
        </Container>
    </Wraper>
  )
}

export default HowToBuy