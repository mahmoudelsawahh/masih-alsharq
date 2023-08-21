"use client"
import { baseUrl } from "@/app/lib/baseUrl"
import Loading from "@/app/loading"
import { Alert, Box, Button, Container, Typography } from "@mui/material"
import { useState } from "react"

const Register_page = () => {
  const [ClientName , setClientName] = useState(null)
  const [ClientEmail , setClientEmail] = useState(null)
  const [ClientNumber , setClientNumber] = useState(null)
  const [ClientPassword , setClientPassword] = useState(null)
  const [messageError , setMessageError] = useState(false)

   async function handelSubmit (){
    const res = await fetch(`${baseUrl}/rest/tables.client/register`, {
      method: "POST",
      body: JSON.stringify(
        {    
          "firstName": ClientName,
          "phone": ClientNumber,
          "mail": ClientEmail,
          "pass": ClientPassword,
         }
      ),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    if(res.ok){
      window.localStorage.setItem('alsharq' , data.id)
      window.open('/',"_self");
      setMessageError(false)
    }else{
      setMessageError(true);
      console.log('hello')
    }
  }
  return (
    <Box sx={{minHeight : '100vh', margin : '90px 0px'}}>
        <Container maxWidth="lg">
            <Box sx={{padding : '30px 0px'}}>
                <Typography variant="h1" sx={{fontSize : '22px', color : '#0139A4', fontWeight : 'bold'}}>
                    معلومات الحساب  
                </Typography> 
                <Box sx={{margin : '30px 0px', width : {xs : '100%', md : '80%'}}}>
                <form className="form-control" onSubmit={handelSubmit}>
                    <input type="text" placeholder="الأسم" className="form_input" onChange={(e)=> setClientName(e.target.value)} required/>
                    <input type="email" autocomplete="username" placeholder="البريد الالكتروني" className="form_input" onChange={(e)=> setClientEmail(e.target.value)} required/>
                    <input type="number" placeholder="رقم التليفون" className="form_input" onChange={(e)=> setClientNumber(e.target.value)}/>
                    <input type="password" autoComplete="current-password" name="password" placeholder="كلمه السر" className="form_input" onChange={(e)=> setClientPassword(e.target.value)} required/>
                      <Typography variant="body2" sx={{color : '#AAAAAA', marginBottom : '10px', padding : '0px 20px'}}>يجب أن يحتوي كلمة المرور على أقل 8 أحرف صغيرة</Typography>
                      <Alert sx={{display : messageError ? "flex": "none", marginTop : "5px"}} severity="error">  حدث خطأ برجاء المحاولة مرة أخرى </Alert>
                   <Button
                    type="submit"
                    color="secondary" variant="contained" sx={{margin : '20px 0px', width : '175px',fontWeight : 'bold', padding : '10px' , color : '#fff'}}>
                    انشاء حساب
                   </Button>
                </form>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Register_page