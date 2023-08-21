import { Box, Button, Container, Grid, Typography , DoneIcon } from '@/app/lib/MuiSsr'
import Paper from '@mui/material/Paper';

const data = [
    {
        offer : '25% OFF',
        title : 'استقدام اثيوبيا',
        price : 520,
        title1 : 'تقديم  افضل الكوادر البشرية',
        title2 : 'تقديم  افضل الكوادر البشرية',
        title3 : 'تقديم  افضل الكوادر البشرية',
        title4 : 'تقديم  افضل الكوادر البشرية',
        active : false
    },
    {
        offer : '25% OFF',
        title : 'استقدام اثيوبيا',
        price : 520,
        title1 : 'تقديم  افضل الكوادر البشرية',
        title2 : 'تقديم  افضل الكوادر البشرية',
        title3 : 'تقديم  افضل الكوادر البشرية',
        title4 : 'تقديم  افضل الكوادر البشرية',
        active : false
    },
    {
        offer : '25% OFF',
        title : 'استقدام اثيوبيا',
        price : 520,
        title1 : 'تقديم  افضل الكوادر البشرية',
        title2 : 'تقديم  افضل الكوادر البشرية',
        title3 : 'تقديم  افضل الكوادر البشرية',
        title4 : 'تقديم  افضل الكوادر البشرية',
        active : true
    },
    {
        offer : '25% OFF',
        title : 'استقدام اثيوبيا',
        price : 520,
        title1 : 'تقديم  افضل الكوادر البشرية',
        title2 : 'تقديم  افضل الكوادر البشرية',
        title3 : 'تقديم  افضل الكوادر البشرية',
        title4 : 'تقديم  افضل الكوادر البشرية',
        active : false
    },
]
const Product = () => {
  return (
       <Box>
      <Container maxWidth="lg">
       <Paper sx={{padding : '15px 0px'}}>
       <Grid container className='product_container'>
            {data.map((item , id)=>{
                return (
                   <Grid item xs={12} sm={6} md={3} key={id} className={item.active ? "active product_cart": "product_cart"} >
                        <Button sx={{width : {xs : '100%', md : '100px'}, margin : {xs : '33px 0px', md : '25px 0px'}}} variant='contained' color='secondary'>{item.offer}</Button>
                        <Typography variant='h1' sx={{color : '#0139A4', fontSize : '20px', fontWeight : 'bold'}}>{item.title}</Typography>
                        <Typography variant='h2' sx={{color : '#0139A4', fontSize : '35px', fontWeight : 'bold', padding : '10px 0px'}}>{item.price}
                         <span style={{color : '#0139A4', fontSize : '15px'}}>Ra</span>
                        </Typography>
                        <ul>
                            <li>{item.title1}</li>
                            <li>{item.title2}</li>
                            <li>{item.title3}</li>
                            <li>{item.title4}</li>
                        </ul>
                        <Button sx={{width : {xs : '100%', md : '100px'}, margin : '15px 0px'}} variant='contained' color='secondary'>اطلب الأن</Button>
                        <Box sx={{display : item.active ? "block" : "none" , position : "absolute" , top : 0 , left : 0,
                        width : "50px", height : '50px', backgroundColor : '#fff', borderBottomRightRadius : '50px'
                        }}>
                            <DoneIcon sx={{color : '#09CC10', fontSize : '30px', marginTop : '5px'}}/>
                        </Box>
                    </Grid>
                )
            })}
       </Grid>
       </Paper>
      </Container>
    </Box>  
  )
}

export default Product