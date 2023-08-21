"use client"
import { Box, Button, Container, Grid, InputBase, Paper, Typography } from "@/app/lib/MuiSsr"
import Image from "next/image"
import Logo from '/public/LOGO.png'
import Link from "next/link"
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/app/lib/MuiSsr"
import LazyLoad from "react-lazyload"
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
const Footer = () => {
  return (
     <footer>
      <LazyLoad height={"100%"} once>
      <Box sx={{backgroundColor : '#fff'}}>
        <Container maxWidth="xl" sx={{padding: '50px 0px'}}>
            <Grid container columnGap={5} alignItems={'center'}>
              <Grid item xs={12} md={2} textAlign={'center'}>
                <LazyLoad height={"100%"} once>
                <Image src={Logo} alt="ماسيه الشرق لاستقدام و الحاق العمالة بالخارج" width={70} height={70} loading="lazy"/>
                </LazyLoad>
                <Typography variant="body1" sx={{fontWeight : 'bold' , fontSize : '15px' , color : '#0139A5', lineHeight : '30px'}}>مكتب ماسية الشرق للاستقدام هو مكتب استقدام عمالة تم تأسيسه في مدينة نجران بالمملكة العربية السعودية بتصريح من وزارة العمل رقم (4018961).</Typography>
              </Grid>
              <Grid item xs={12} md={2}  sx={{margin : 'auto'}}>
                <Link aria-label="الصفح الرئيسية" href='/' style={{fontWeight : 'bold' , fontSize : '17px' , color : '#0139A5', display : 'block', margin : "15px 0px"}}>الصفحه الرئيسية</Link>
                <Link aria-label="الوظائف" href='/about' style={{fontWeight : 'bold' , fontSize : '17px' , color : '#0139A5', display : 'block',  margin : "15px 0px"}}>الوظائف </Link>
                <Link aria-label="الباقات" href='/product' style={{fontWeight : 'bold' , fontSize : '17px' , color : '#0139A5', display : 'block',  margin : "15px 0px"}}> الباقات</Link>
                <Link aria-label="الوظائف" href='/jobs' style={{fontWeight : 'bold' , fontSize : '17px' , color : '#0139A5', display : 'block',  margin : "15px 0px"}}> الوظائف</Link>
                <Link aria-label="تواصل معنا" href='/contact' style={{fontWeight : 'bold' , fontSize : '17px' , color : '#0139A5', display : 'block',  margin : "15px 0px"}}> تواصل معنا</Link>
              </Grid>
              <Grid item xs={12} md={2}>
              <Link aria-label="واتساب" href='/' style={{fontWeight : 'bold' , fontSize : '17px' , color : '#0139A5', display : 'block',  margin : "15px 0px"}}>واتساب </Link>
              <Link aria-label="0175444404" href='/' style={{fontWeight : 'bold' , fontSize : '17px' , color : '#0139A5', display : 'block',  margin : "15px 0px"}}> 0175444404 </Link>
              <Link aria-label="InstagramIcon" href='https://goo.gl/maps/jVnSFt1AcasCEAod7' style={{fontWeight : 'bold' , fontSize : '17px' , textAlign : {xs : 'center' , md : 'start'},
              color : '#0139A5', display : 'block',  margin : "15px 0px", lineHeight : '30px'}}> المملكة العربية السعودية - نجران - حي دحضة - أمام محطة الوسطى - شارع الملك عبد العزيز </Link>
              </Grid>
              <Grid item xs={12} md={2} textAlign={'center'}>
              <Typography variant="h1" sx={{fontWeight : 'bold' , fontSize : '20px' , color : '#0139A5' , margin : '20px 0px'}}>تواصل معنا </Typography>
              <Link aria-label="TwitterIcon" href={'https://www.facebook.com/m.alshrq.recruitment'}>
                <FacebookIcon fontSize='large' sx={{color : '#3b5998'}}/>
             </Link>
             <Link aria-label="InstagramIcon" href={'http://instagram.com/m_alsharq/'}>
                <InstagramIcon fontSize='large' sx={{color : '#bc2a8d'}}/>
             </Link>
             <Link aria-label="LinkedInIcon" href={'https://www.linkedin.com/in/%D9%85%D9%83%D8%AA%D8%A8-%D9%85%D8%A7%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-648420199'}>
                <LinkedInIcon fontSize='large' sx={{color : '#007bb6'}}/>
             </Link>
             <Link aria-label="DownloadForOfflineIcon" href={'https://www.snapchat.com/?lang=0'}>
                <DownloadForOfflineIcon fontSize='large' sx={{color : '#eadd3d'}}/>
             </Link>
             <Link aria-label="TwitterIcon" href={'https://twitter.com/J8XTTyPEO8zHrlK'}>
                <TwitterIcon fontSize='large' sx={{color : '#00aced'}}/>
             </Link>
          
              </Grid>
              <Grid item xs={12} md={2} >
              <Typography variant="h1" sx={{fontWeight : 'bold' , fontSize : '17px' , color : '#0139A5', margin : '10px 0px'}}> اشتراك </Typography>
              <Typography variant="body1" sx={{ fontSize : '15px' , color : '#0139A5',  margin : {xs : '15px 0px', md : '10px 0px'}, lineHeight : '30px'}}> اشترك الان لمزيد من العروض والخصومات والقائمة البريدية </Typography>
             <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
             <Paper 
                  component="form"
                 sx={{ display: {xs : 'none', md : 'flex'}, alignItems: 'center',
                 height : '40px', marginBottom : '20px',
                      }}
    >
        <InputBase placeholder="Send In Gmail" className="footer_input"/>
        <Button variant="contained" color="secondary" sx={{margin : 0}}>اشتراك</Button>
    </Paper>
             </Box>
              </Grid>
             </Grid>
        </Container>
        <Box sx={{backgroundColor : '#0139A5', textAlign : 'end', padding : '10px'}}>
            <Container maxWidth="lg">
            <Link href={'https://deltawy.com'} style={{color : '#fff', fontWeight : 500}}>All rights reserved to Deltawy@</Link>
            </Container>
        </Box>
         </Box>
      </LazyLoad>
     </footer>
  )
}

export default Footer