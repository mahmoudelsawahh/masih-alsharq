import { Box, Container, Grid, Typography } from "@/app/lib/MuiSsr"
import dynamic from "next/dynamic";
import { baseUrl } from "@/app/lib/baseUrl";
import { useEffect, useState } from "react";
const ServiceItems = dynamic(() => import('./ServiceItems'));
export default  function Service () {
  const [CategoryData , setCategoryData] = useState(null)
  useEffect(() => {
    fetch(`${baseUrl}/rest/tables.job/getJobs`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data.data)
      })
  }, [])  
  return (
    <Box sx={{backgroundColor : '#f1f8fc', height : '100%'}} className="section_gap">
     <Container maxWidth="lg">
     <Box >
     <Typography variant="h1" sx={{textAlign : 'center', color : '#0139A4' , fontSize : '27px', fontWeight : 700}}>العمالة المتوفرة </Typography>
     <Typography variant="body1" sx={{textAlign : 'center', margin : '10px 0px', color : '#5A5454', fontSize : '18px', fontWeight : 500, fontSize : '22px'}}>نحن نقدم أفضل جودة الخدمة</Typography>
     </Box>
            <ServiceItems data={CategoryData}/>
     </Container>
    </Box>
  )
}



