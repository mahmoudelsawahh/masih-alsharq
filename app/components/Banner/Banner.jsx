"use client"
import { Box, Button, Container, Grid, IconButton, Typography , SearchIcon } from "@/app/lib/MuiSsr"
import Image from "next/image"
import bannerBg from '/public/2ej5YgSzNi-1.png'
import { useRouter } from "next/navigation"
const Banner = () => {
  const router = useRouter()
  return (
    <Box sx={{position : 'relative', height : '100vh', width : '100%'}}>
        <Image src={bannerBg} alt="ماسيه الشرق لاستقدام و  الحاق العمالة بالخارج" layout="fill" objectFit="cover" objectPosition="center" loading="lazy"/>
        <Box sx={{position : 'absolute', top : 0 , left : 0 , height : '100%', backgroundColor : '#0446AA', opacity : '40%',width : '100%'}}></Box>
        <Box sx={{position : 'absolute', top : '40%', left : '50%', transform: 'translate(-50% , -50%)', textAlign : 'center', width : {xs : '95%', md : '70%'}, margin : 'auto'}}>
            <h1 style={{color : '#fff', fontSize : '30px',
             fontWeight : 'bold', margin : '25px 20px',
             }}>ماسيه الشرق لاستقدام و  الحاق العمالة بالخارج</h1>
             <Grid container sx={{backgroundColor : '#fff', padding : '12px 10px', borderRadius : '20px'}} alignItems={'center'}>
                <Grid item xs={8} sm={4} lg={3}>
                  <IconButton size="small" aria-label="search">
                    <SearchIcon/>
                  </IconButton>
                  <input placeholder="...Search for service" style={{border : 0 , outline : 'none', maxWidth : '150px'}}/>
                </Grid>
                <Grid item xs={4}  sm={3} lg={5} sx={{position : 'relative'}}>
                <Typography variant="body1" sx={{fontsize : '30px', color : '#707070'}} className="banner-search">جميع الفئات</Typography>
                </Grid>
                <Grid item xs={12} sm={4} >
                <Button variant="contained" onClick={()=> router.push('/jobs')}  color="secondary" sx={{width : '100%', borderRadius : '10px', padding : '15px 0px', fontWeight : 'bold'}}>أبحث عن وظيفه</Button>
                </Grid>
             </Grid>
        </Box>
    </Box>
  )
}
 
export default Banner