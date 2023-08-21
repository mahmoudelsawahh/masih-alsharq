"use client"
import Logo from '/public/LOGO.png'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {AppBar , Box  , CssBaseline , Divider , Drawer, IconButton , 
  List , ListItem, Toolbar  , Container, MenuIcon, Button, Grid 
  , LinkedInIcon , InstagramIcon , FacebookIcon
} from '@/app/lib/MuiSsr';
import {useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
const drawerWidth = 240;

function getId(){
  return window.localStorage.getItem('alsharq')
}
function removeId(){
  return window.localStorage.removeItem("alsharq")
}
function reloadPage(){
  return window.open('/login', '_self')
}
export default function DrawerAppBar(props) {

  const router = useRouter();
  const currentRoute = usePathname();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLogin , setLogin] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navbarData = [
    {
        title : 'الرئيسية',
        slug : '/'
    },
    {
        title : 'من نحن',
        slug : '/about'
    },
    {
        title : ' الباقات',
        slug : '/product'
    },
    {
        title : 'الوظائف',
        slug : '/jobs'
    },
    {
        title : ' تواصل معنا',
        slug : '/contact'
    },
  ]

  const handelLogin = ()=>{
    reloadPage()
    if(getId()){
        removeId();
    }
  }  

  useEffect(()=>{
    if(getId()){
        setLogin(true)
    }else{
      setLogin(false)

    }
  },[])
  
  
  const navLink = ()=>{
    return (
      <>         
         {navbarData.map((item , id)=>{
            return (
                <Box key={id} sx={{ margin : '5px 20px', padding : '15px 0px',
                 width : {xs : '90%', md : 'auto'}, textAlign : 'center',
                 }}
                 >
                <p
                 key={id} aria-label='ماسيه الشرق لاستقدام و الحاق العمالة بالخارج' onClick={()=> router.push(item.slug)}
                 title={item.title}
                 className={item.slug === currentRoute ?  "active" : "no-active"}
                 style={{fontWeight : 500 , fontSize : '20px', cursor : 'pointer'}}
             >
                    {item.title} 
                   </p>   
                </Box>
            )
         })}
         
      </>
    )
  }

  const drawer = (
   
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <div style={{padding : '10px'}}>
                   <LazyLoad height={"100%"} once>
                   <Image  layout="responsive" onClick={()=> router.push(`/`)} style={{width : '100%', height : '100%'}}  loading='lazy' src={Logo} alt='ماسيه الشرق لاستقدام و  الحاق العمالة بالخارج'/>
                   </LazyLoad>
                 </div>
     <Divider />
     <List>
     <ListItem aria-label="btn" title='button' disablePadding sx={{display : 'flex', flexDirection : 'column'}} className='nav-link'>
               {navLink()}
               <Button variant='contained' color='secondary' sx={{margin : '40px 0px', width : '70%'}}>تسجيل الدخول</Button>
         </ListItem>
     </List>
   </Box>
  
 );
 const container = window !== undefined ? () => window().document.body : undefined;
 return ( 
        <>
     <CssBaseline />
     <AppBar sx={{position: 'fixed'}}>
       <Container maxWidth="xl">
       <Toolbar sx={{flexDirection : {xs : 'row-reverse', md : 'row'}}}>
         <IconButton
           color="inherit"
           aria-label="open drawer"
           edge="start"
           onClick={handleDrawerToggle}
           sx={{ mr: 2, display: { md: 'none' }, 
            }}
         >
           <MenuIcon aria-label="menu items" title="menu icon"/>
         </IconButton>
          <Grid container alignItems={'center'}>
            <Grid item  md={1} lg={2} sx={{display: { xs: 'flex', sm: 'block' }, justifyContent : 'flex-start' ,  cursor : 'pointer', padding :" 5px 0px"}}>
                 <div style={{width : '90px', position : 'relative', height : '76px'}}>
                   <Image  loading='lazy' layout="responsive" onClick={()=> router.push(`/`)} style={{width : '100%', height : '100%'}}   src={Logo} alt='ماسيه الشرق لاستقدام و  الحاق العمالة بالخارج'/>
                   </div>
            </Grid>
            <Grid item md={8} lg={7} sx={{ display: { xs: 'none', md: 'flex' }}} justifyContent={'center'}>
              {navLink()}
            </Grid>
            <Grid item md={3} alignItems={'center'} justifyContent={"center"} sx={{ display: { xs: 'none', md: 'flex' }, gap : 3}}>
            <Button variant='contained' color='secondary' onClick={()=> handelLogin()}>
              {!isLogin ? "تسجيل الدخول":"تسجيل الخروج"}
            </Button>
             <Box>
             <Link aria-label='facebook' href={'https://www.facebook.com/m.alshrq.recruitment'}>
                <FacebookIcon fontSize='medium' sx={{color : '#333'}}/>
             </Link>
             <Link aria-label='InstagramIcon' href={'http://instagram.com/m_alsharq/'}>
                <InstagramIcon fontSize='medium' sx={{color : '#333'}}/>
             </Link>
             <Link aria-label='LinkedInIcon' href={'https://www.linkedin.com/in/%D9%85%D9%83%D8%AA%D8%A8-%D9%85%D8%A7%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-648420199'}>
                <LinkedInIcon fontSize='medium' sx={{color : '#333'}}/>
             </Link>
             <Link aria-label='DownloadForOfflineIcon' href={'https://www.snapchat.com/?lang=0'}>
                <DownloadForOfflineIcon fontSize='medium' sx={{color : '#333'}}/>
             </Link>
             <Link aria-label='TwitterIcon' href={'https://twitter.com/J8XTTyPEO8zHrlK'}>
                <TwitterIcon fontSize='medium' sx={{color : '#333'}}/>
             </Link>
             </Box>
            </Grid>
          </Grid>
       </Toolbar>
       </Container>
     </AppBar>
     <Box component="nav">
       <Drawer
       anchor='left'
         container={container}
         variant="temporary"
         open={mobileOpen}
         onClose={handleDrawerToggle}
         ModalProps={{
           keepMounted: true,
         }}
         sx={{
           display: { sm: 'block', md: 'none' },
           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
         }}
       >
         {drawer}
       </Drawer>     
   </Box>
        </>
     
 );
}