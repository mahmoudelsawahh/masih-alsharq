import { Box, Container, Grid, Typography } from "@mui/material"
import aboutImage from '/public/about.png'
import Image from "next/image"
import LazyLoad from "react-lazyload"
const SubService = () => {
    const data = [
        {
            num : '01',
            title : ' قطاع الأعمال',
            body : 'نوفر كل ما يتطلبه قطاع الأعمال سواء كانت شركات خاصة أو مؤسسات حكومية حول العالم من أيدي عاملة متفوقة            '
        },
        {
            num : "02",
            title : 'قطاع الأفراد',
            body : 'نعمل باستمرار على توفير أيدي عاملة مؤهلة وغير مؤهلة ذو مهارة متناهية من مختلف دول العالم وذلك لكي نكون دائمًا على مستوى تطلعات عملائنا الكرام'
        },
        {
            num : "03",
            title : 'التوسط في الاستقدام',
            body : 'يعمل مكتبنا على تقديم خدمة متميزة في مجال التوسط في الاستقدام من خلال توفير العمالة اللازمة لقطاعي الأفراد وقطاع الأعمال'
        },
    ]
  return (
    <>
        <Box sx={{minHeight : '100vh', paddingTop : '80px'}} paddingBottom={5}>
        <Container maxWidth="xl">
             <Box>
                <Typography variant="h1" sx={{fontSize : '24px', color : '#01849f'}}>ماسيه الشرق المتميزه</Typography>
                <Typography variant="h1" sx={{lineHeight : '80px'}}>لاستقدام و الحاق العمالة بالخارج</Typography>
             </Box>
            <Grid container alignItems={'center'}>
                <Grid item xs={12} md={6}>
                  {data.map((item , id)=>{
                    return (
                        <Box sx={{display : 'flex', flexDirection : {xs : 'column', md : 'row'}, alignItems : {xs : 'center', md : 'end'}, gap : 10, marginTop : '50px'}} key={id}>
                        <Box>
                            <Typography variant="h1" sx={{fontSize : '120px', color : '#0139A4'}}>{item.num}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h1" sx={{fontSize : '30px', color : '#0139A4'}}> {item.title}</Typography>
                            <Typography variant="body1" sx={{fontSize : '25px', color : '#312f3a', lineHeight : '45px', marginTop :'10px'}}>
                                  {item.body} 
                            </Typography>
                        </Box>
                    </Box>
                    )
                  })}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{textAlign : 'end'}}>
                        <LazyLoad height={"100%"} once>
                            <Image loading="lazy" src={aboutImage} alt="aboutImage" style={{width : '100%', height : '100%', transform : 'scaleX(-1)'}}/>
                        </LazyLoad>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </Box>
    </>
  )
}

export default SubService