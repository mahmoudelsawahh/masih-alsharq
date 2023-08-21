"use client"
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/app/lib/baseUrl';

const getClientId = window.localStorage.getItem("alsharq")

const AddRequest = ({handleClose , AllParams}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categoryName = ["غير مهم", "خادمة منزل", "سائق خاص", "طباخ"];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const religionCategory = ["غير مهم" , "none muslim", "muslim"];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  const nationalityCategory = ["غير مهم","India" , "Bangladesh"];

  const [categoryFilter, setCategoryFilter] = useState("") 
  const [religionFilter, setReligionFilter] = useState("") 
  const [nationalityFilter, setNationalityFilter] = useState("") 
  const [userName, setUserName] = useState(null) 
  const [userNumber, setUserNumber] = useState(null) 

   useEffect(()=>{
      setCategoryFilter(categoryName[AllParams.Job]);
      setReligionFilter(religionCategory[AllParams.Religion]);
      setNationalityFilter(nationalityCategory[AllParams.Nationality]);
   },[AllParams.Job, AllParams.Nationality, AllParams.Religion, categoryName, nationalityCategory, religionCategory])  


   function sendData (){
    // 👇 Send a fetch request to Backend API.
     fetch(`${baseUrl}/rest/tables.client/requestClient`, {
      method: "POST",
      body: JSON.stringify(
        {    
          "client":0,
          "job":AllParams.Job,
          "nationality":AllParams.nationalityFilter,
          "religion":AllParams.Religion,
          "name": userName,
          "phone": userNumber,
          id : getClientId
       
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
           <form className='add_request_form' style={{padding : '0px 20px'}} onSubmit={()=> sendData()}>
              <label htmlFor='الاسم'>الاسم</label>
              <input type='text' placeholder='الاسم' required onChange={(e)=> setUserName(e.target.value)}/>
              <label htmlFor='رقم الهاتف'>رقم الهاتف</label>
              <input type='رقم الهاتف' placeholder='رقم الهاتف' required onChange={(e)=> setUserNumber(e.target.value)}/>
              <Typography variant='body1' sx={{fontSize : '20px', fontWeight : 700, textAlign : 'center' , color : '#0139A4', marginTop : '25px', marginBottom : '10px'}}>التفاصيل المطلوبة</Typography>
              <hr/>
              <label htmlFor='المهنة'>المهنة</label>
              <input type='text' value={categoryFilter} readOnly/>
              <label htmlFor='الجنسية'>الجنسية</label>
              <input type='text' value={religionFilter} readOnly/>
              <label htmlFor='الديانة'>الديانة</label>
              <input type='text' value={nationalityFilter} readOnly/>
              <Button 
              type="submit"
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

export default AddRequest