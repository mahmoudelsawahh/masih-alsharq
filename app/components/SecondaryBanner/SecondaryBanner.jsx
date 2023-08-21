"use client"
import personalImage from '/public/person.png'
import playStoreImage from '/public/play-store-btn.svg'
import appStoreImage from '/public/app-store-btn.svg'
import { Box, Container, Grid, Typography } from "@/app/lib/MuiSsr"
import Image from "next/image"
import LazyLoad from 'react-lazyload'

const SecondaryBanner = () => {
  return (
    <>
      <Box sx={{backgroundColor : '#f1f8fc', minHeight :'100vh', position : 'relative', display : 'flex' , alignItems : 'center'}}>
         <Container maxWidth="xl">
           <Grid container sx={{paddingTop : '100px', flexDirection : {xs : 'column-reverse', md : 'row'}}} justifyContent={'center'} alignItems={'center'}>
           <Grid item xs={12} md={6}>
                <LazyLoad height={'100%'} once>
                <Typography variant='h1' sx={{fontSize : '40px', width : '90%', color : '#312f3a', fontWeight : 'bold'}}>
                ماسيه الشرق لاستقدام و الحاق العمالة بالخارج
                </Typography>
                <Typography variant='body1' sx={{color : '#312f3a', fontSize : '1.1rem', lineHeight : 2.3,  width : '90%', marginTop : '20px'}}>
                هي علامة تجارية رائدة لحلول الخدمات المنزلية بالسعودية ، تقدم ماسية الشرق حلولًا مبتكرة للقطاع
                المنزلي من خلال توظيف عمالة منزلية مدربة على أعلى مستوى.

                </Typography>
              <Box sx={{ margin : '40px 0px'}}>
                  <Image loading="lazy" src={playStoreImage} alt="ماسيه الشرق لاستقدام و الحاق العمالة بالخارج" style={{margin : '0px 20px', cursor : 'pointer'}}/>
                  <Image loading="lazy" src={appStoreImage} alt="ماسيه الشرق لاستقدام و الحاق العمالة بالخارج" style={{margin : '0px', cursor : 'pointer',}}/>
              </Box>
                </LazyLoad>
            </Grid>
            <Grid item xs={12} md={5} sx={{marginBottom : {xs : '15px' , md : 0}}} >
             <Box>
             <Image loading='eager' src={personalImage} alt='ماسيه الشرق لاستقدام و الحاق العمالة بالخارج' style={{width : '100%', height : '100%'}}/>
             </Box>
            </Grid>
            <Grid item></Grid>
           </Grid>
         </Container>
      </Box>
    </>
  )
}

export default SecondaryBanner