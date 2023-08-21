import { Box, Container, Grid, Typography } from "@/app/lib/MuiSsr"
import Image from "next/image"
import aboutUs from "/public/WM_003_tcm43-140383.png"
import LazyLoad from "react-lazyload"
const About = () => {
  return (
     <Box  sx={{backgroundColor : '#fff'}} paddingY={5}>
      <Container maxWidth="lg" sx={{padding : '0px 10px'}}>
        <Grid container spacing={3} sx={{flexDirection : {xs : 'column-reverse', sm : 'row'}}}>
          <Grid item xs={12} sm={7} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Typography variant="h1" sx={{fontSize : '30px', color : '#0139A4'}}> لماذا تختارنــــــــا؟</Typography>
            <Typography variant="body1" sx={{padding : '15px 0px', lineHeight : '40px' , fontSize : '22px'}}>يتميز مكتبنا بشهادة عملائنا بالسرعة والتميز في اختيار الأيدي العاملة اللازمة وفقًا لطلب العميل بالضبط، مما يجعل عملائنا يشعرون بالراحة في التعامل مع مكتبنا على مر السنين</Typography>
            <Typography variant="h1" sx={{color : '#000', fontSize : '30px',  color : '#0139A4'}}> ما هي رسالتنا؟ </Typography>
            <Typography variant="body1" sx={{padding : '20px 0px', fontSize : '22px'}}>تتلخص رسالتنا في الحصول على رضا عملائنا الكرام على الدوام</Typography>
            <Typography variant="h1" sx={{fontSize : '30px', marginBottom : '20px',  color : '#0139A4'}}> من نحن ؟</Typography>
            <Typography variant="body1" sx={{fontSize : '22px'}}>
مكتب ماسية الشرق للاستقدام هو مكتب استقدام عمالة تم تأسيسه في مدينة نجران بالمملكة العربية السعودية بتصريح من وزارة العمل رقم (4018961).
 </Typography>
          </Grid>
          <Grid item xs={12} sm={5} sx={{position : 'relative'}}>
           <LazyLoad height={"100%"} once>
           <Image src={aboutUs} alt="ماسيه الشرق المتميزه" style={{width : '100%', height : '100%'}} loading="lazy"/>
           </LazyLoad>
          </Grid>
        </Grid>
    </Container>
    </Box>
  )
}

export default About