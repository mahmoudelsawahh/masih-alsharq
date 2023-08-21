import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const JobTitle_details = () => {
  return (
    <Container maxWidth="lg">
        <Box sx={{padding : '30px 0px'}}>
            <Typography variant='h1' sx={{fontSize : '22px', fontWeight : 'bold' , color : "#0139A4" , padding : '15px 0px'}}>وصف الوظيفة </Typography>
            <Typography variant='body1' sx={{fontSize : '18px', fontWeight : 600, lineHeight : '40px'}}>
                 شاشة كبيرة. تأثير كبير. تعزز الشاشة الأكبر التجربة بشكل فائق، مما يجعل ساعة أبل أسهل في الاستخدام والقراءة. تمثل السلسلة 7 الموديل الأكبر والأكثر تألقًا لدينا حتى الآن. كان التحدي هو إنشاء شاشة أكبر مع العمل على توسيع أبعاد الساعة نفسها بأقل قدر ممكن. وللقيام بذلك، تمت إعادة تصميم الشاشة بالكامل لتقليل الحدود بنسبة 40%، مما يسمح بمساحة شاشة أكبر بنسبة 20% تقريبا من السلسلة 6. شاشة أكثر بنسبة 50% من السلسلة 3. هذا شيء يجلب الابتسامة بالفعل. شاشة رتينا متألقة دائمًا. نظرة أكثر إشراقًا لك. لا تحتاج إلى رفع معصمك أو لمس الشاشة لمعرفة الوقت أو المعلومات والبيانات الأخرى على وجه ساعتك، لأن الشاشة تعمل دائمًا   
            </Typography>
        </Box>
    </Container>
  )
}

export default JobTitle_details