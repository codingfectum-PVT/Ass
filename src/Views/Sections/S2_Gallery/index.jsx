import emotionStyled from '@emotion/styled'
import React, { useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import ImageGallery from './ImageGallery'
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from '../../../assets/model-1.png'
import image2 from '../../../assets/model-2.png'
import image3 from '../../../assets/model-3.png'
import image4 from '../../../assets/model-4.png'
import image5 from '../../../assets/model-5.png'
import image6 from '../../../assets/model-6.png'
import image7 from '../../../assets/model-7.png'
import image8 from '../../../assets/model-8.png'
import image9 from '../../../assets/model-9.png'
import image10 from '../../../assets/model-10.png'
import image11 from '../../../assets/model-11.png'
import image12 from '../../../assets/model-12.png'

const images = [
    { id: 1, src: image1, alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2' },
    { id: 3, src: image3, alt: 'Image 3' },
    { id: 4, src: image4, alt: 'Image 4' },
    { id: 5, src: image5, alt: 'Image 5' },
    { id: 6, src: image6, alt: 'Image 6' },
    { id: 1, src: image7, alt: 'Image 1' },
    { id: 2, src: image8, alt: 'Image 2' },
    { id: 3, src: image9, alt: 'Image 3' },
    { id: 4, src: image10, alt: 'Image 4' },
    { id: 5, src: image11, alt: 'Image 5' },
    { id: 6, src: image12, alt: 'Image 6' },
];

const Wraper = emotionStyled.div`
    padding: 100px 0px;
    background-color: #ffffff;
`

const Gallery = () => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);
  return (
    <Wraper id='gallery'>
        <Container maxWidth="xl">
            <Grid container marginBottom={3}>
                <Grid xs={12} marginBottom={3} data-aos="fade-up" >
                    <Typography variant='h2' textAlign={'center'} color={'#555555'} margin={'auto'} maxWidth={450}  >The $ass<br />gallery</Typography>
                </Grid>
            </Grid>
            <ImageGallery imageList={images} />
        </Container>
    </Wraper>
  )
}

export default Gallery