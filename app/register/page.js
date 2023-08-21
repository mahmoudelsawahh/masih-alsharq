// import Register_page from "../components/Register_page/Register_page"
import dynamic from 'next/dynamic';
const Product_container = dynamic(() => import('../components/Register_page/Register_page'));
const page = () => {
  return (
    <>
      <main>
      <section>
        <Product_container/>
    </section>
      </main>
    </>
  )
}

export default page