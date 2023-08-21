import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('../components/Contact/Contact'));
const page = () => {
  return (
    <>
      <main>
          <section>
            <Contact/>
        </section>
      </main>
    </>
  )
}

export default page