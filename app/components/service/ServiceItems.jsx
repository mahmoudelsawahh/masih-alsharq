"use client"
import { getJobs } from "@/store/jobsData";
import { Typography } from "@/app/lib/MuiSsr";
import dynamic from "next/dynamic";
import Image from "next/image";
import {useEffect } from "react";
import { useDispatch } from "react-redux"
import { imageUrl } from "@/app/lib/baseUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Paper } from "@mui/material";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Loading = dynamic(() => import('@/app/loading'),{
    ssr : false
  });


  const ServiceItems = ({data}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        data ? dispatch(getJobs(data)): null 
    },[data , dispatch])
     return (
      <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1500 : {
              slidesPerView : 3
            }
          }}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation ]}
        className="mySwiper"
      >
        {data ?
            data.map((item , id)=>{
    return (
               <SwiperSlide key={id}>
                <Paper elevation={2} sx={{padding : '20px'}}>
                <Image loading="lazy" src={`${imageUrl}${item.image}`} alt={item.name} width={150} height={150}/>
               <Typography variant="h1" sx={{fontSize : '22px', fontWeight : 'bold', color : '#0139A4'}}>{item.name}</Typography>
                </Paper>
              </SwiperSlide>
            )
        }) : <Loading/>
        }
      </Swiper>
     )
}

export default ServiceItems