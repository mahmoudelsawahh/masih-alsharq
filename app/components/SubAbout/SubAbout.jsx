import { Box, Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import manImage from "/public/man-min.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import MailLockIcon from '@mui/icons-material/MailLock';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import LazyLoad from "react-lazyload";
const SubAbout = () => {
  return (
    <>
        <Box sx={{backgroundColor : '#f1f8fc', minHeight : '100vh', width : '100%'}} paddingY={5}>
            <Container maxWidth="xl">
                <Grid container>
                <Grid item xs={12} md="6">
                       <Box sx={{textAlign : 'start', overflowX : 'hidden'}}>
                         <LazyLoad height={"100%"} once>
                            <Image src={manImage} alt="WomanImage" style={{width : {xs : '100%', xl :'85%'}, height : '100%'}}/>
                         </LazyLoad>
                       </Box>
                    </Grid>
                <Grid item xs={12} md="6" sx={{padding : '100px 0px'}}>
                    <Typography variant="h1" sx={{fontSize : '24px', color : '#01849f'}}>ماسيه الشرق المتميزه</Typography>
                    <Typography variant="h1" sx={{lineHeight : '80px', fontSize : '45px'}}>تتلخص رسالتنا في الحصول على رضا عملائنا الكرام على الدوام</Typography>
                    <Typography variant="body1" sx={{fontSize :'25px', margin : '30px 0px', color : '#312f3a', lineHeight : '40px'}}>
                    مكتب ماسية الشرق للاستقدام هو مكتب استقدام عمالة تم تأسيسه في مدينة نجران بالمملكة العربية السعودية بتصريح من وزارة العمل رقم (4018961).</Typography>
                    <Grid container justifyContent={'center'} alignItems={'center'} spacing={5} marginTop={1}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{display : 'flex', alignItems : 'flex-start', columnGap : 2}}>
                                  <Box>
                                     <TwitterIcon sx={{width : '80px', height : '80px', color : '#fff', backgroundColor : '#01849f', borderRadius : '50%', padding : '10px'}}/>
                                  </Box>
                                <Box>
                                    <Typography variant="h1" sx={{fontSize : '30px', fontWeight : 'bold', margin : '5px 0px'}}>قيمنا</Typography>
                                    <Typography variant="body1" sx={{color : '#312f3a', fontSize : '20px'}}>قياس رضا العملاء</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{display : 'flex', alignItems : 'flex-start', columnGap : 2}}>
                                  <Box>
                                     <MailLockIcon sx={{width : '80px', height : '80px', color : '#fff', backgroundColor : '#01849f', borderRadius : '50%', padding : '10px'}}/>
                                  </Box>
                                <Box>
                                    <Typography variant="h1" sx={{fontSize : '30px', fontWeight : 'bold', margin : '5px 0px'}}>رؤيتنا</Typography>
                                    <Typography variant="body1" sx={{color : '#312f3a', fontSize : '20px'}}>تقيم الكوادر و الكفاءات</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{display : 'flex', alignItems : 'flex-start', columnGap : 2}}>
                                  <Box>
                                     <VpnLockIcon sx={{width : '80px', height : '80px', color : '#fff', backgroundColor : '#01849f', borderRadius : '50%', padding : '10px'}}/>
                                  </Box>
                                <Box>
                                    <Typography variant="h1" sx={{fontSize : '30px', fontWeight : 'bold', margin : '5px 0px'}}>مهمتنا</Typography>
                                    <Typography variant="body1" sx={{color : '#312f3a', fontSize : '20px'}}>تدريب الكوادر البشريه</Typography>
                                </Box>
                            </Box>
                        </Grid>
                       
                        <Grid item xs={12} sm={6}>
                            <Box sx={{display : 'flex', alignItems : 'flex-start', columnGap : 2}}>
                                  <Box>
                                     <SyncLockIcon sx={{width : '80px', height : '80px', color : '#fff', backgroundColor : '#01849f', borderRadius : '50%', padding : '10px'}}/>
                                  </Box>
                                <Box>
                                    <Typography variant="h1" sx={{fontSize : '30px', fontWeight : 'bold', margin : '5px 0px'}}>رؤيتنا</Typography>
                                    <Typography variant="body1" sx={{color : '#312f3a', fontSize : '20px'}}>تحليل السوق ودراسته</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default SubAbout