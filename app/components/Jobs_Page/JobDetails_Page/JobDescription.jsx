import { Box, Button, Container, Grid, Typography } from "@mui/material"
import GTranslateIcon from '@mui/icons-material/GTranslate';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const JobDescription = () => {
  return (
    <Box sx={{padding : '20px 0px' , backgroundColor : '#F5FAFC'}}>
          <Container maxWidth="lg">
        <Box sx={{padding : '30px 0px'}}>
            <Typography variant='h1' sx={{fontSize : '25px', fontWeight : 'bold' , color : "#0139A4" , padding : '15px 0px'}}>تفاصيل</Typography>
            <Box>
                 <Grid container alignItems={'center'}>
                  <Grid item xs={4}>
                  <Button startIcon={<GTranslateIcon sx={{color : '#0139A4'}}/>} sx={{backgroundColor : '#F5FAFC', fontSize : '18px' ,  color : '#000', padding : 0 ,fontWeight : 'bold', padding : '12px 5px'}}>
                         الجنسية   
                     </Button>
                  </Grid>
                  <Grid item xs={8}>
                  <Typography variant="h5" sx={{fontSize : '18px', fontWeight : 'bold', textAlign : {xs : 'end' , md : 'start'} }}>مصري</Typography>
                  </Grid>
                 </Grid>
                 <Grid container alignItems={'center'} sx={{display : {xs : 'none', md : 'flex'}}}>
                  <Grid item xs={4} >
                  <Button startIcon={<PictureAsPdfIcon sx={{color : '#0139A4'}}/>} sx={{backgroundColor : '#F5FAFC', fontSize : '18px' ,  color : '#000', padding : 0 ,fontWeight : 'bold', padding : '12px 5px'}}>
                  السيره الذاية   
                     </Button>
                  </Grid>
                  <Grid item xs={8}>
                  <Typography variant="h5" sx={{fontSize : '18px', fontWeight : 'bold' }}>
                  MAR-AAFAQ-362-KYARIKUNDA-.pdf
                  </Typography>
                  </Grid>
                 </Grid>
                 <Grid container alignItems={'center'}>
                  <Grid item xs={4} md={4}>
                  <Button startIcon={<SchoolIcon sx={{color : '#0139A4'}}/>} sx={{backgroundColor : '#F5FAFC', fontSize : '18px' ,  color : '#000', padding : 0 ,fontWeight : 'bold', padding : '12px 5px'}}>
                     المستوى التعليمي
                     </Button>
                  </Grid>
                  <Grid item xs={8} md={4}>
                  <Typography variant="h5" sx={{fontSize : '18px', fontWeight : 'bold', textAlign : {xs : 'end' , md : 'start'} }}>
                     الاعدادية  
                  </Typography>
                  </Grid>
                 </Grid>
                 <Grid container alignItems={'center'}>
                  <Grid item xs={4} md={4}>
                  <Button startIcon={<CurrencyExchangeIcon sx={{color : '#0139A4'}}/>} sx={{backgroundColor : '#F5FAFC', fontSize : '18px' ,  color : '#000', padding : 0 ,fontWeight : 'bold', padding : '12px 5px'}}>
                  الراتب
                     </Button>
                  </Grid>
                  <Grid item xs={8} md={4}>
                  <Typography variant="h5" sx={{fontSize : '18px', fontWeight : 'bold', textAlign : {xs : 'end' , md : 'start'} }}>
                  900 ريال  
                  </Typography>
                  </Grid>
                 </Grid>
              
            </Box>
        </Box>
    </Container>
    </Box>
  )
}

export default JobDescription