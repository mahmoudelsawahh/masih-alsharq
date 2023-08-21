"use client"
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import mainPhoto from '/public/male.png'
import Image from 'next/image'
import RoomIcon from '@mui/icons-material/Room';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { CardActionArea } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useDispatch } from 'react-redux';
import { getAllItems, getTotalJobs } from '@/store/jobsData';
import {useRouter } from 'next/navigation';

const Loading = dynamic(() => import('@/app/loading'),{
    ssr : false
  });
const ShowJobs = ({data}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllItems(data))
        dispatch(getTotalJobs(data.length))
    },[data, dispatch])
    const router = useRouter();

  return (
         <Suspense fallback={<Loading/>}>
            {data.map((item , id)=>{
                return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                 <Card >
                     <CardActionArea onClick={()=> router.push(`/jobs/${item.id}//${item.name.split(' ').join('-')}`)}>
                     {/* <Image src={`${imageUrl}${item.clientImage}`} width={300} height={300} alt='ss' style={{width : '100%', height : '100%'}}/> */}
                        <Image src={mainPhoto} alt='ss' style={{width : '100%', height : '100%'}}/>
                   <CardContent>
                        <Typography gutterBottom variant="h1" component="div" sx={{fontSize : '20px', fontWeight : 'bold'}}>
                             {item.name} 
                        </Typography>
                        <Box>
                        <Button component="div" startIcon={<ContactMailIcon/>} sx={{backgroundColor : '#fff', color : '#023BA4', padding : 0, fontWeight : 600, margin : '10px 0px'}}>
                            {item.job}  
                        </Button>
                        </Box>
                        <Box>
                        <Button component="div" startIcon={<RoomIcon/>} sx={{backgroundColor : '#fff', color : '#023BA4', padding : 0, fontWeight : 600, margin : '10px 0px'}}>
                        المملكة العربية السعودية
                        </Button>
                        </Box>
                        <Box>
                        <Button component="div" startIcon={<BusinessCenterIcon/>} sx={{backgroundColor : '#fff', color : '#023BA4', padding : 0, fontWeight : 600, margin : '10px 0px'}}>
                        تعليمي 
                        </Button>
                        </Box>
                        <Box>
                        <Button component="div" startIcon={<AccessTimeFilledIcon/>} sx={{backgroundColor : '#fff', color : '#023BA4', padding : 0, fontWeight : 600, margin : '10px 0px'}}>
                            نوفمبر 3, 2022 
                        </Button>
                        </Box>
                </CardContent>
                     </CardActionArea>
            </Card>
            </Grid>
                )
            })}
         </Suspense>
      )
}

export default ShowJobs