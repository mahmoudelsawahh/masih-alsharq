"use client"
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/app/lib/baseUrl';

const getClientId = window.localStorage.getItem("alsharq")

const AddSingleRequest = ({handleClose , AllParams}) => {
   function sendData (){
    // 👇 Send a fetch request to Backend API.
     fetch(`${baseUrl}/rest/tables.client/requestClient`, {
      method: "POST",
      body: JSON.stringify(
        {    
          "client":10,
          "job":AllParams.Job,
          "nationality":AllParams.nationalityFilter,
          "religion":AllParams.Religion,
          "name":"mahmoud",
          "phone":"01007296138",
          "id" : getClientId
         }
      ),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  };

  return (
    <>
        <Paper elevation={5} sx={{width : '400px'}}>
           <Box sx={{padding : '20px', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                <Typography variant='h1' sx={{fontSize : '22px', fontWeight : 700, color : '#0139A4'}}>تسجيل الطلب</Typography>
                <IconButton size='large' color='secondary' onClick={()=> handleClose()}>
                  <CloseIcon/>
                </IconButton>
           </Box>
           <form className='add_request_form' style={{padding : '0px 20px'}}>
              <label htmlFor='الاسم'>الاسم</label>
              <input type='text' placeholder='الاسم' />
              <label htmlFor='رقم الهاتف'>رقم الهاتف</label>
              <input type='رقم الهاتف' placeholder='رقم الهاتف'/>
              <Typography variant='body1' sx={{fontSize : '20px', fontWeight : 700, textAlign : 'center' , color : '#0139A4', marginTop : '25px', marginBottom : '10px'}}>التفاصيل المطلوبة</Typography>
              <hr/>
              <label htmlFor='المهنة'>المهنة</label>
              <input type='text' value={AllParams.job} readOnly/>
              <label htmlFor='الجنسية'>الجنسية</label>
              <input type='text' value={AllParams.religion} readOnly/>
              <label htmlFor='الديانة'>الديانة</label>
              <input type='text' value={AllParams.nationality} readOnly/>
              <Button onClick={()=> sendData()}
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 , padding : '10px', fontWeight : 'bold'}}
          >
             ارسال الطلب
          </Button>
          
           </form>
        </Paper>
    </>
  )
}

export default AddSingleRequest