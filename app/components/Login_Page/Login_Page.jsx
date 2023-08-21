"use client"
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import { useState } from "react";
import { baseUrl } from "@/app/lib/baseUrl";
import { Alert , AlertTitle } from "@mui/material";

export default function Login_Page() {
  const [ClientEmail , setClientEmail] = useState(null)
  const [ClientPassword , setClientPassword] = useState(null)
  const [messageError , setMessageError] = useState(false)
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const res = await fetch(`${baseUrl}/rest/tables.client/login`, {
      method: "POST",
      body: JSON.stringify(
        {    
          "mail": ClientEmail,
          "pass": ClientPassword
         }
      ),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    if(res.ok && data.exist === true){
      window.localStorage.setItem('alsharq' , data.id)
      window.open('/',"_self");
      setMessageError(false)
    }else{
      setMessageError(true)
    }
  };
  return (
    <Box sx={{minHeight : '70vh', margin : '120px 0px 0px 0px'}}>
        <Box>
         
        <Container maxWidth="lg">
        <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography  variant="h1" sx={{fontSize : '30px', fontWeight : 'bold', color : '#0139A4'}}>
        تسجيل الدخول
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <input type="email" style={{width : '100%', padding : '15px', borderRadius : '10px', backgroundColor : '#f7f7f7',
           border : '1px solid #AAAAAA', outlineColor : '#0139A4', margin : '20px 0px'
           }} autoComplete={true} autoFocus required placeholder="البريد الالكترونى" onChange={(e)=> setClientEmail(e.target.value)}/>
            
            <input type="password" style={{width : '100%', padding : '15px', borderRadius : '10px', backgroundColor : '#f7f7f7',
           border : '1px solid #AAAAAA', outlineColor : '#0139A4', margin : '0px'
           }} autoComplete={true} autoFocus required placeholder=" كلمة السر" onChange={(e)=> setClientPassword(e.target.value)}/>
           <Alert sx={{display : messageError ? "flex": "none", marginTop : "5px"}} severity="error">البريد الالكتروني او كلمة المرور غير صحيحة برجاء المحاوله مره اخري</Alert>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 , padding : '10px', fontWeight : 'bold'}}
          >
            تسجيل الدخول
          </Button>
          <Grid container>
            <Grid item xs>
              
            </Grid>
            <Grid item xs={12}>
              <Link href="/register" variant="body2" style={{color : '#000', direction : 'rtl'}}>
              ليس لديك حساب ؟  انشاء حساب
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
        </Container>
        </Box>
    </Box>
  );
}


