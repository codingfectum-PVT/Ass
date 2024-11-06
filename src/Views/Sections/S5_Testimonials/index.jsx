import React, { useEffect } from 'react';
import { Grid, Card, Typography, Container, Paper, Box, styled } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import emotionStyled from '@emotion/styled';
import AOS from "aos";
import "aos/dist/aos.css";


const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
const details = [
    {
        height: 150,
        width: '30%',
        description: "“I thought I had enough assets, but then I discovered $ASS. Now my portfolio is stacked in all the right places and I stop kissing the team's $ASS!”",
        auther: '— Brad, $ASS Addict',
    },
    {
        height: 150,
        width: '38%',
        description: "“I came for the memes, stayed for the $ASS. Finally, an investment I actually enjoy watching grow!”",
        auther: '— Sarah, Token Collector',
    },
    {
        height: 150,
        width: '32%',
        description: "“I never thought I’d say this, but $ASS is the best investment I’ve ever made. It’s all about quality and quantity!”",
        auther: '— Jake, Self-Proclaimed Ass Connoisseur',
    },
    {
        height: 150,
        width: '32%',
        description: "“$ASS is the only thing in my life that actually grows when I throw money at it. Best decision ever.”",
        auther: '— Eric, Investor with Taste',
    },
    {
        height: 150,
        description: "“$ASS is nothing short of a miracle. It's one project that single handedly fixed both my portfolio and my erectile dysfunction.”",
        auther: '— Dean, Crypto Enthusiast',
    },
    {
        height: 150,
        width: '30%',
        description: "“Bought $ASS as a joke, now I’m the one laughing all the way to the bank. Best decision I’ve made with my pants on.”",
        auther: '— Alex, Thrilled Investor',
    },
    {
        height: 150,
        description: "“They say money can’t buy happiness, but it sure as hell can buy a whole lotta $ASS!",
        auther: '— Leo, Happy Holder',
    },
]
const Item = styled     (Paper)(({ theme }) => ({
  backgroundColor: '#2E2E2E',
  borderRadius: 20,
  ...theme.typography.body2,
  padding: '24px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Wraper = emotionStyled.div`
    padding: 100px 0px;
`

function Testimonial() {
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
                        <Typography variant='h2' textAlign={'center'} margin={'auto'} color={'#E4E4E4'} maxWidth={600}  data-aos="fade-up" data-aos-duration="500">Testimonials</Typography>
                    </Grid>
                </Grid>
                <Masonry columns={{sx:1, sm:2, md:3}} spacing={2} data-aos="fade-up" data-aos-duration="700">
                    {details.map((detail, index) => (
                    <Item key={index} sx={ detail?.height }>
                        <Typography variant='body1' textAlign={'center'}>
                            {detail?.description}
                            <br />
                            {detail?.auther}
                        </Typography>
                    </Item>
                    ))}
                </Masonry>
            </Container>
        </Wraper>
    );
}

export default Testimonial;
