"use client"
import { createCache , CacheProvider, ThemeProvider , CssBaseline, createTheme  } from '@/app/lib/MuiSsr';
import { Cairo } from 'next/font/google';
import rtlPlugin from 'stylis-plugin-rtl';
import ProviderLayout from '@/ProviderLayout';
import DrawerAppBar from './NavBar';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer/Footer'),{
  ssr : false
});

const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
  typography : {
    fontFamily : cairo.style.fontFamily,
    h1 : {
      fontSize : "50px",
      fontWeight : 'bold'
    },
    h3 : {
      fontSize : "20px",
      fontWeight : "bold",
      color : '#0139A4'
    },
    body1 : {
      color : "#1B1C31",
    },
    button : {
      color : '#fff',
      backgroundColor : "#023BA4",
      borderRadius : '20px'
    }
  },
  palette: {
    primary : {
        main : '#fff',
    },
    secondary : {
      main : '#023BA4'
    },
    text:{
      primary: "#0139A4",
    }
    
  },
  direction: 'rtl',
})

 const cairo = Cairo({ 
    subsets: ['latin'] ,
    display : 'swap',
    preload : true
  })

export default function LayoutContainer({ children }) {
  return (
   
      <div className={cairo.className}>
      <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
           <>        
              <ProviderLayout>
                    {/* <DrawerAppBar/> */}
                   {children}
                   {/* <Footer/> */}
            </ProviderLayout>
           </>
      </ThemeProvider>
    </CacheProvider>
      </div>
  )
}
