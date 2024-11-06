import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const ImageGallery = ({imageList}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);

    return (
        <Grid container backgroundColor="#FAFAFA" padding={'12px'} borderRadius={10}>
            
                {imageList.map((image) => (
                    <Grid item sx={12} sm={6} md={4} lg={3} margin={'auto'} padding={'12px'}>
                        <img
                            key={image.id}
                            src={image.src}
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            className='galleryImage'
                            alt={image.alt}
                            style={{ width: '100%', cursor: 'pointer', borderRadius: 38 }}
                            onClick={() => openImage(image)}
                        />
                    </Grid>
                ))}

            {/* Modal for viewing selected image */}
            {selectedImage && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={closeModal}
                >
                    <div style={{background: `url(${selectedImage.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain', height: '100vh', width: '100vw'}}></div>
                    {/* <img src={selectedImage.src} alt={selectedImage.alt} style={{ maxWidth: '90%', borderRadius: 38, maxHeight: '90%' }} /> */}
                </div>
            )}
        </Grid>
    );
}

export default ImageGallery;
