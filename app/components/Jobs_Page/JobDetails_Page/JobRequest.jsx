"use client"
import { Backdrop, Box, Button, Container, Typography } from '@mui/material'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const AddSingleRequest = dynamic(() => import('./AddSingleRequest'));

const getClientId = window.localStorage.getItem("alsharq")
const JobRequest = ({data}) => {
const router = useRouter()
 const handelSendRequest = () =>{
  if(getClientId){
    return handleOpen()
  }else{
   return router.push("/login")
  }
 }

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
   <>
     <Container maxWidth="lg">
     <Box sx={{padding : '30px 0px'}}>
        <Typography variant='h1' sx={{fontSize : '20px', fontWeight : 'bold'  , padding : '15px 0px'}}>اطلب الأن  </Typography>
        <Typography variant='h2' sx={{fontSize : '23px', fontWeight : 'bold', color : "#0139A4", marginBottom : '5px'}}>
            هل ترغب في طلب استقدام العمالة   
        </Typography>
        <Typography variant='body1' sx={{fontSize : '13px', fontWeight : 600}}>سنقوم بعد اكمال الطلب التواصل معك واكمال الأجراءات  </Typography>
        <Button onClick={()=> handelSendRequest()}
         variant='contained' color='secondary' sx={{margin : '20px 0px' , padding : '8px', width : {xs : '100%', md : '200px'} ,fontSize : '20px', fontWeight : 'bold'}}>اطلب الأن</Button>
        </Box>
    </Container>
     <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      >
      <AddSingleRequest handleClose={handleClose} AllParams={data}/>
      </Backdrop>
   </>
  )
}

export default JobRequest
