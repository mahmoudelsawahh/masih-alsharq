"use client"
import Loading from '@/app/loading';
import { Backdrop, Box, Button, Container, FormControl, Grid, MenuItem, Paper, Select, Typography } from '@mui/material'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const AddRequest = dynamic(() => import('./AddRequest'),{
  ssr : false
});
const Jobs_card = dynamic(() => import('./Jobs_card'),{
  ssr : false
});

const getClientId = window.localStorage.getItem("alsharq")

const Jobs_Page = ({categoriesData , Nationalities}) => {
 const getTotalJobs = useSelector((item)=> item.jobsData.totalJobs);
  const router = useRouter()
  const [Job, setJob] = useState(0);
  const [Religion, setReligion] = useState(0);
  const [TotalJobs , setTotalJobs]= useState(0)
  const [Nationality, setNationality] = useState(0);
  const [AllParams , setAllParams] = useState({
    Job : 0,
    Religion : 0,
    Nationality : 0
  })
  const handelJob = event => {
     setJob(event.target.value);
  }
//   const handelReligion = event => {
//     setReligion(event.target.value);
//  }
 const handelNationality = event => {
    setNationality(event.target.value);
 }

 const handelSendRequest = () =>{
  if(getClientId){
    return handleOpen()
  }else{
   return router.push("/login")
  }
 }

  useEffect(()=>{
    setAllParams({
        Job,
        Religion,
        Nationality
     })
     setTotalJobs(getTotalJobs)
  },[Job , Religion , Nationality , getTotalJobs])

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{minHeight : '100vh', margin : '90px 0px'}} >
        <Container maxWidth="lg">
        <Grid container justifyContent={'center'} alignItems='center' gap={3}>
            <Grid item xs={12} md={4}>
                 <FormControl fullWidth>
                <Select
                    labelId= "Input label"
                    id= "Select"
                    value= {Job}
                    defaultValue= {Job}
                    onChange= {handelJob}
                    sx={{border : '1px solid #000' , color : '#0139A4', fontWeight : 'bold'}}
                >
                    <MenuItem sx={{fontSize : '18px', fontWeight : 600}} value={0}>  اختر التخصص</MenuItem>
                    {categoriesData ? 
                      categoriesData.map((item)=>{
                        return (
                          <MenuItem sx={{fontSize : '18px', fontWeight : 600}} key={item.id} value={item.id}>{item.name}</MenuItem>
                        )
                      })
                    : <Loading/>}
                </Select>
                 </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
               <FormControl fullWidth>
                <Select
                    labelId= "Input label"
                    id= "Select"
                    value= {Nationality}
                    defaultValue= {Nationality}
                    onChange= {handelNationality}
                    sx={{border : '1px solid #000' , color : '#0139A4', fontWeight : 'bold'}}
                >
                    <MenuItem sx={{fontSize : '18px', fontWeight : 600}} value={0}>  اختر الجنسيه</MenuItem>
                    {Nationalities ? 
                      Nationalities.map((item)=>{
                        return (
                          <MenuItem sx={{fontSize : '18px', fontWeight : 600}} key={item.id} value={item.id}>{item.name}</MenuItem>
                        )
                      })
                    : <Loading/>}
                </Select>
                 </FormControl>
            </Grid>
        </Grid>
          <Paper elevation={3} sx={{display : {xs : 'block', md : 'flex'}, justifyContent : 'space-between', 
           padding : '15px',
          alignItems : 'center', margin : '30px 0px', backgroundColor : '#0139A4'}}>
          <Button variant='contained' sx={{fontWeight : 'bold', width : {xs : '100%', md : 'auto'}}} onClick={()=> handelSendRequest()}>اطلب الان</Button>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    
                    >
                    <AddRequest handleClose={handleClose} AllParams={AllParams}/>
                </Backdrop>
            <Typography variant='h1' sx={{fontSize : '18px', fontWeight : 700,color : '#fff', textAlign : 'center', margin : '15px 0px'}}>يوجد عدد {TotalJobs} متوافقين مع البحث</Typography>
          </Paper>
        </Container>

        <Jobs_card filterData={AllParams}/>
    </Box>
  )
}

export default Jobs_Page