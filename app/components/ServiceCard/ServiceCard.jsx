"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import smartPhone from '/public/smartphone.png'
import userImage from '/public/user.png'
import LikeImage from '/public/like.png'
import LazyLoad from 'react-lazyload';

export default function ServiceCard() {
  const data = [
    {
      title : 'قطاع الأفراد',
      body : 'نعمل باستمرار على توفير أيدي عاملة مؤهلة وغير مؤهلة ذو مهارة متناهية من مختلف دول العالم وذلك لكي نكون دائمًا على مستوى تطلعات عملائنا الكرام',
      icon : userImage
    },
    {
      title : 'قطاع الأفراد',
      body : 'نعمل باستمرار على توفير أيدي عاملة مؤهلة وغير مؤهلة ذو مهارة متناهية من مختلف دول العالم وذلك لكي نكون دائمًا على مستوى تطلعات عملائنا الكرام',
      icon : userImage
    },
    {
      title : 'قطاع الأعمال',
      body : 'نوفر كل ما يتطلبه قطاع الأعمال سواء كانت شركات خاصة أو مؤسسات حكومية حول العالم من أيدي عاملة متفوقة',
      icon : smartPhone
    },
    {
      title : 'التوسط',
      body : 'يعمل مكتبنا على تقديم خدمة متميزة في مجال التوسط في الاستقدام من خلال توفير العمالة اللازمة لقطاعي الأفراد وقطاع الأعمال      ',
      icon : LikeImage
    }
    
  ]
  return (
      <Container maxWidth="lg">
        <Grid container spacing={5} paddingY={5}>
            {data.map((item , id)=>{
              return (
                <>
                <Grid item xs={12} sm={6} md={3}>
                <Card variant="outlined" sx={{backgroundImage : 'linear-gradient(0deg,#fff,#fff)' , color : '#fff', padding : '10px 0px'}}>
                    <CardContent>
                      <Box sx={{width : '100%', textAlign : 'center'}}>
                       <LazyLoad height={"100%"} once>
                       <Image loading='lazy' src={item.icon} alt='smartPhone' style={{width : '90px', height : '90px'}}/>
                       </LazyLoad>
                      </Box>
                      <Typography variant='h1' sx={{color : '#303030', fontSize : '30px', fontWeight : 'bold', margin : '15px 0px',textAlign : 'center'}}>{item.title} </Typography>
                      <Typography variant='body1' sx={{color : '#919191', fontSize : '20px', lineHeight : '35px',minHeight : '250px' ,fontWeight : 500, textAlign : 'center'}}>{item.body}</Typography>
                    </CardContent>
                    <CardActions>
                     <Box sx={{textAlign : 'center', width : '100%'}}>
                     {/* <Button size="large"  sx={{ backgroundColor : '#64bcf4', color : '#fff', fontSize : '16px', padding : '10px 30px'}}>المزيد </Button> */}
                     </Box>
                    </CardActions>
                </Card>
             </Grid>
                </>
              )
            })}
             
        </Grid>
      </Container>
  );
}
