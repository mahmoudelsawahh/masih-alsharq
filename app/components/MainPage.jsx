"use client"
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import Testimonial from './Testimonial/Testimonial';
import Product_container from './Product/Product_container';
const Footer = dynamic(() => import('./Footer/Footer'),{
  ssr : false
});

const ServiceCard = dynamic(() => import('./ServiceCard/ServiceCard'),{
  ssr : false
});
const SubAbout = dynamic(() => import('./SubAbout/SubAbout'),{
  ssr : false
});
const SubService = dynamic(() => import('./SubService/SubService'),{
  ssr : false
});
const About = dynamic(() => import('./about/About'),{
  ssr : false
});
const Service = dynamic(() => import('./service/Service'),{
  ssr : false
});
const Loaction = dynamic(() => import('./Loaction/Loaction'),{
  ssr : false
});
const HomeFooter = dynamic(() => import('./HomeFooter/HomeFooter'),{
  ssr : false
});
export default function MainPage(){
  return (
    <>
        <main>
      <ServiceCard/>
      <SubAbout/>
      <section>
        <About/>
      </section>
      <LazyLoad height={"100%"} once>
       <section>
        <Service/>
      </section>
       </LazyLoad>
      <SubService/>
        <HomeFooter/> 
        <Loaction/>
        </main>
        <Footer/>
    </>
  )
}

