import './globals.css'
import dynamic from 'next/dynamic';

const LayoutContainer = dynamic(() => import('./components/LayoutContaner'),{
  ssr : false
});
export const metadata = {
  title: 'ماسيه الشرق لاستقدام و الحاق العمالة بالخارج  '
}
export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang='ar'>
         <head>  
         <link rel="canonical" href="https://masia.deltawy.com"/>
         <meta name="geo.placename" content="saudi arabia" />
         <meta name="geo.position" content="30.9685798;31.1664157" />
          <meta name="geo.region" content="saudi arabia" />
          <meta name="black"/>
          <meta name="ICBM" content="30.9685798, 31.1664157" />
          <meta name="robots" content="index,follow" />
          <meta name="keywords" content="ماسيه الشرق لاستقدام و الحاق العمالة بالخارج" />
          <meta author="شركة برمجيات دلتاوي"/>
          <meta name="description" content="
          يتميز مكتبنا بشهادة عملائنا بالسرعة والتميز في اختيار الأيدي العاملة اللازمة وفقًا لطلب العميل بالضبط، مما يجعل عملائنا يشعرون بالراحة في التعامل مع مكتبنا على مر السنين   " />
        <meta property="og:url" rel="canonical" content="https://masia.deltawy.com" />
        <meta property="og:image" content="m-alsharq.sa.com/images?id=81" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="يتميز مكتبنا بشهادة عملائنا بالسرعة والتميز في اختيار الأيدي العاملة اللازمة وفقًا لطلب العميل بالضبط، مما يجعل عملائنا يشعرون بالراحة في التعامل مع مكتبنا على مر السنين " />
      <meta property="og:site_name" content=" ماسيه الشرق لاستقدام و الحاق العمالة بالخارج " />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="932636840239088" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@m-alsharq.sa" />
      <meta name="twitter:domain" content="m-alsharq.sa" />
      <meta name="twitter:creator" content="@m-alsharq.sa" />
        </head>
      <body>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </body>
    </html>
  )
}
