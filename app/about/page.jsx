import dynamic from 'next/dynamic';
import mainImage from '/public/about-us.png'
import secondaryImage from '/public/about-2.png'
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
const Footer = dynamic(() => import('@/app/components/Footer/Footer'),{
    ssr : false
  });
const About = dynamic(() => import('../components/about/About'),{
    ssr : false,
});
const data = [
    {
        name : 'الكفائه وسرعه الرد',
        photo : mainImage
    },
    {
        name : 'الكفائه وسرعه الرد',
        photo : secondaryImage
    },
    {
        name : 'الكفائه وسرعه الرد',
        photo : mainImage
    },
    {
        name : 'الكفائه وسرعه الرد',
        photo : mainImage
    },
    
]
const About_page = () => {
  return (
    <>
        <main style={{marginTop : '80px'}}>
        <About/>
        <Box style={{backgroundColor : '#F5FAFC',padding : '40px 0px'}}>
        <Container maxWidth="lg">
        <Typography variant="h1" sx={{textAlign : 'center', color : '#000' , fontSize : '30px',fontWeight : 700, marginBottom : {xs : '40px', md : '80px'}}}>لماذا نحن</Typography>
                <Grid container spacing={5}>
                    {data.map((item , id)=>{
                        return (
                            <Grid item xs={12} md={3} key={id} textAlign={'center'}>
                                <Image src={item.photo} alt='لماذا نحن' width={100} height={100} loading='lazy'/>
                                <Typography variant='body1'>{item.name}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
        </Container>
        </Box>
        </main>
    </>
  )
}

export default About_page