"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Container, Grid, Typography , DoneIcon } from '@/app/lib/MuiSsr'
import {Rating , Stack , Paper} from '@mui/material';
import TestimonialPhoto from '/public/Testimonial-photo.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Testimonial() {
  return (
   <Box  sx={{backgroundColor : '#fff'}} className="section_gap">
     <Container maxWidth="lg">
     <Typography variant="h1" sx={{textAlign : 'center', color : '#0139A4' , fontSize : '30px',fontWeight : 700, marginBottom : '30px'}}> اراء عملائنا</Typography>
     <Paper elevation={2}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
             <Box sx={{position : 'relative', display : 'flex' , flexDirection : 'column',justifyContent : 'center', alignItems : 'center'}}>  
               <Image src={TestimonialPhoto} alt='اراء عملائنا' style={{width : '60px', height : '60px' , borderRadius : '50%', margin : '10px'}}/>
             <Typography variant='h1' sx={{color : '#747474', fontWeight : 900}} fontSize="25px">Ehsanul Islam</Typography>
            <Typography variant='body1' sx={{color : '#4B647E', fontWeight : 700, margin : '5px 0px'}}>
               Ui Designer
            </Typography>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{color : '#0139A4'}}/>
            <Typography variant='body1' sx={{color : '#747474', margin : '20px 0px', width : '90%'}}>
            Logitech is transforming video conferencing by offering an easy and affordable way to collaborate, with crystal-clear audio and razor-sharp video. Logitech products deliver exceptional performance
          </Typography>
             </Box>
        </SwiperSlide>
        <SwiperSlide>
             <Box sx={{position : 'relative', display : 'flex' , flexDirection : 'column',justifyContent : 'center', alignItems : 'center'}}>  
               <Image src={TestimonialPhoto} alt='اراء عملائنا' style={{width : '60px', height : '60px' , borderRadius : '50%', margin : '10px'}}/>
             <Typography variant='h1' sx={{color : '#747474', fontWeight : 900}} fontSize="25px">Ehsanul Islam</Typography>
            <Typography variant='body1' sx={{color : '#4B647E', fontWeight : 700, margin : '5px 0px'}}>
               Ui Designer
            </Typography>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{color : '#0139A4'}}/>
            <Typography variant='body1' sx={{color : '#747474', margin : '20px 0px', width : '90%'}}>
            Logitech is transforming video conferencing by offering an easy and affordable way to collaborate, with crystal-clear audio and razor-sharp video. Logitech products deliver exceptional performance
          </Typography>
             </Box>
        </SwiperSlide>
        <SwiperSlide>
             <Box sx={{position : 'relative', display : 'flex' , flexDirection : 'column',justifyContent : 'center', alignItems : 'center'}}>  
               <Image src={TestimonialPhoto} alt='اراء عملائنا' style={{width : '60px', height : '60px' , borderRadius : '50%', margin : '10px'}}/>
             <Typography variant='h1' sx={{color : '#747474', fontWeight : 900}} fontSize="25px">Ehsanul Islam</Typography>
            <Typography variant='body1' sx={{color : '#4B647E', fontWeight : 700, margin : '5px 0px'}}>
               Ui Designer
            </Typography>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{color : '#0139A4'}}/>
            <Typography variant='body1' sx={{color : '#747474', margin : '20px 0px', width : '90%'}}>
            Logitech is transforming video conferencing by offering an easy and affordable way to collaborate, with crystal-clear audio and razor-sharp video. Logitech products deliver exceptional performance
          </Typography>
             </Box>
        </SwiperSlide>
      </Swiper>
      </Paper>

    </Container>
   </Box>
  );
}
