"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Container, Grid, TextField, Typography } from '@/app/lib/MuiSsr'
import Image from 'next/image'
import contactPhoto from '/public/contact-us.png'
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const Contact = () => {
    const theme = createTheme({
        direction: 'rtl', // Both here and <body dir="rtl">
      });
      // Create rtl cache
      const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });
      
  return (
    <Box sx={{minHeight : '100vh'}} className="section_gap">
         <Container maxWidth="lg" >
            <Grid container  sx={{flexDirection : {xs : 'column-reverse', sm : 'row'}, justifyContent : 'center', alignItems : 'center'}} spacing={3}>
                    <Grid item xs={12} md={6}>
                    <Typography variant="h1" sx={{fontSize : '35px', color : '#0139A5', fontWeight : 700, marginBottom : '10px'}}> تواصل معنا </Typography>
                    <Typography variant="body1" sx={{fontSize : '25px', color : '#0139A5', fontWeight : 500}}>  يسعدنا دائما ان يتم التواصل معنا </Typography>
                    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl" style={{marginTop : '30px'}}>
          <form>
            <Grid container spacing={5} sx={{width : {xs : '100%', lg: '90%'}}}>
               <Grid item xs={12}>
                 <TextField sx={{width : '100%'}} type='email' id="standard-basic" label="البريد الألكتروني" variant="standard"/>
               </Grid>
               <Grid item xs={12}>
                 <TextField sx={{width : '100%'}} type='text' id="standard-basic" label="الأسم" variant="standard" />
               </Grid>
               <Grid item xs={12}>
                 <TextField sx={{width : '100%'}} type='text' id="standard-basic" label="الموضوع" variant="standard" />
               </Grid>
               <Grid item xs={12}>
               <TextField sx={{width : '100%'}}  multiline rows={2} maxRows={4} variant='standard' label="الرسالة"/>
               </Grid>
            </Grid>
            <Button variant='contained' sx={{fontWeight : 700 , fontSize : '18px', width : '130px',
            backgroundColor : '#0139A5', color : '#fff', margin : '40px 5px', ":hover" : {backgroundColor : '#0139A5'}
            }}>ارسال</Button>
          </form>
        </div>
      </ThemeProvider>
    </CacheProvider>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Image src={contactPhoto} alt='تواصل معنا' style={{width : '100%', height : '100%'}}/>
                </Grid>
            </Grid>
         </Container>
    </Box>
  )
}

export default Contact