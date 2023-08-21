"use client"
import { Box, Container, Grid, Typography } from '@/app/lib/MuiSsr'
import Image from 'next/image'
import AppImage from '/public/Group 4.png'
import playStoreImage from '/public/play-store-btn.svg'
import appStoreImage from '/public/app-store-btn.svg'
import LazyLoad from 'react-lazyload'

const HomeFooter = () => {
  return (
    <Box sx={{backgroundColor : '#f1f8fc'}}>
      <Container maxWidth="lg">
         <Grid container sx={{flexDirection : {xs : "column-reverse", md : 'row'}, justifyContent : 'space-between', alignItems : 'center', alignContent : 'center'}}>
            <Grid item xs={12} md={6}>
              <Typography variant='h1' sx={{color : '#0138A5'}}>حمل تطبيق ماسيه الشرق الأن</Typography>
              <Typography variant='body1' sx={{fontSize : '30px', color : '#333', marginTop : '30px'}}>واحصل على كل ما تحتاجه متى ما تحتاجة</Typography>
              <Box sx={{marginTop : '50px', textAlign : {xs : 'center', md : 'start'}}}>
                  <LazyLoad height={"100%"} once>
                    <Image loading='lazy' src={playStoreImage} alt="ماسيه الشرق لاستقدام و الحاق العمالة بالخارج" style={{cursor : 'pointer'}}/>
                    <Image loading='lazy' src={appStoreImage} alt="ماسيه الشرق لاستقدام و الحاق العمالة بالخارج" style={{margin : '0px 40px', cursor : 'pointer'}}/>
                  </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
             <Box sx={{textAlign : 'end'}}>
               <LazyLoad height={"100%"} once>
               <Image src={AppImage} alt='ماسيه الشرق لاستقدام و الحاق العمالة بالخارج' className='footer-app-image' layout='responsive'/>
               </LazyLoad>
             </Box>
            </Grid>
         </Grid>
      </Container>
    </Box>
  )
}

export default HomeFooter