import React from 'react'
import Product_Title from './Product_Title'
import Product from './Product'
import { Box } from '@mui/material'

const Product_container = () => {
  return (
    <Box  sx={{backgroundColor : '#F5FAFC', minHeight : '100vh'}}>
        <Product_Title/>
        <Product/>
    </Box>
  )
}

export default Product_container