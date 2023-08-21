import { Box, Container, Typography } from "@mui/material"
import Product from "../Product/Product"

const Service_page = () => {
  return (
    <section style={{margin : '140px 0px'}}>
         <Container maxWidth="lg">
         <Box sx={{marginTop : '130px', marginBottom : '50px'}}>
              <Typography variant="h1" sx={{fontSize : '18px', color : '#0139A5', fontWeight : 700}}>باقات الاستقدام</Typography>
              <Typography variant="h1" sx={{fontSize : '35px', color : '#0139A5', fontWeight : 'bold', margin : '5px 0px'}}>للعمال والعاملات المنزلية</Typography>
              <Typography variant="body1" sx={{color : '#C1C1C1', fontSize : '18px'}}>تتميز باقات الاستقدام بأسعارها التنافسية، واحترافية العمالة وكفاءتها العالية </Typography>
         </Box>
         </Container>
        <Product/>
    </section>
  )
}

export default Service_page