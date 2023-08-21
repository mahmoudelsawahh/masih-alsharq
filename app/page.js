import dynamic from 'next/dynamic';
import SecondaryBanner from './components/SecondaryBanner/SecondaryBanner';
import MainPage from './components/MainPage';

const Footer = dynamic(() => import('./components/Footer/Footer'),{
  ssr : false
});

export default function page(){
  return (
    <>
          <SecondaryBanner/>
        <MainPage/>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}

