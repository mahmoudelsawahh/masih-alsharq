"use client"
import { Box } from '@/app/lib/MuiSsr'
import {Bars } from 'react-loader-spinner'

const Loading = () => {
  return (
    <Box sx={{width : '100%', height : '100vh', zIndex : 55555, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
      <Bars
  height="80"
  width="80"
  color="#0139A5"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
 </Box>
  )
}

export default Loading