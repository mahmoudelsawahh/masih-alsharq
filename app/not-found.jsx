"use client"
import { Box } from '@mui/material'
import Link from 'next/link'

export const metadata = {
  title: "ماسيه الشرق لاستقدام و الحاق العمالة بالخارج",
}
const NotFound = () => {
  return (
    <Box sx={{width : '100%', backgroundColor : '#fff', height : '100vh', zIndex : 55555, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
        <Link href={'/'} style={{fontSize : '25px', fontWeight : 'bold', color : 'blue'}}>الصفحة غير موجوده للذهاب الي الصفحة الرئيسية اضغط هنا</Link>
    </Box>
  )
}

export default NotFound