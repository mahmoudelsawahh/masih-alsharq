import dynamic from 'next/dynamic';

const Product_page = dynamic(() => import('../components/Product_page/Product_page'));
const page = () => {
  return (
    <>
        <main>
        <section>
            <Product_page/>
        </section>
        </main>
    </>
  )
}

export default page