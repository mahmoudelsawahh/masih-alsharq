import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import jobPhoto from '/public/jobs.png'
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '@/app/loading';
const JobRequest = dynamic(() => import('./JobRequest'));
const JobTitle_details = dynamic(() => import('./JobTitle_details'));
const JobDescription = dynamic(() => import('./JobDescription'));

const JobDetails_Page = ({data}) => {
  return (
   <Suspense fallback={<Loading/>}>
     <Box sx={{minHeight : '100vh'}}>
       <Box sx={{backgroundColor : '#F5FAFC'}}  className="section_gap">
       <Container maxWidth="lg">
       <Box sx={{display : {xs : 'block', md : 'flex'}, alignItems : 'center', gap : 6 }}>
       <Image src={jobPhoto} alt='' width={250} height={250}/>
       <Box>
       <Typography variant="h1" component="div" sx={{fontSize : '25px', fontWeight : 'bold', padding : '12px 0px' , color : '#023BA4'}}>
          {data.name} 
       </Typography>

       <Typography variant="h1" component="div" sx={{fontSize : '25px', fontWeight : 'bold', padding : '12px 0px' , color : '#000'}}>
         انجليزية
       </Typography>
       <Box sx={{padding : '12px 0px'}}>
       <Button startIcon={<BusinessCenterIcon/>} sx={{backgroundColor : '#F5FAFC', fontSize : '18px' ,  color : '#000', padding : 0 ,fontWeight : 600, padding : '12px 5px'}}>
           تعليمي 
       </Button>
       <Button startIcon={<RoomIcon/>} sx={{backgroundColor : '#F5FAFC', fontSize : '18px' , marginLeft : '15px' ,color : '#000', padding : 0, fontWeight : 600, padding : '12px 0px'}}>
       المملكة العربية السعودية
       </Button>
       </Box>
       <Button startIcon={<AccessTimeFilledIcon/>} sx={{backgroundColor : '#F5FAFC', fontSize : '18px' ,  color : '#000', padding : 0, fontWeight : 600}}>
               نوفمبر 3, 2022 
       </Button>
       </Box>
       </Box>
   </Container>
       </Box>
       <JobTitle_details/>
       <JobDescription/>
       <JobRequest data={data}/>
    </Box>
   </Suspense>
  )
}

export default JobDetails_Page