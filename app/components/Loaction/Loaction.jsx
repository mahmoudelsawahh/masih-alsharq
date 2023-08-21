"use client"
import { Box } from "@/app/lib/MuiSsr"
import LazyLoad from "react-lazyload"
const Loaction = () => {
  return (
    <Box sx={{backgroundColor : '#fff'}}>
      <LazyLoad height={"100%"} once>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60878.49479220417!2d44.20036397924427!3d17.512003678925495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15feea19045504f1%3A0x527aaa27a8c12c32!2z2K_Yrdi22KnYjCDZhtis2LHYp9mGINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1692539425493!5m2!1sar!2seg" width="100%" height="400px" style={{border : 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </LazyLoad>
    </Box>
  )
}

export default Loaction

