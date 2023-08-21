import dynamic from 'next/dynamic';
const Login_Page = dynamic(() => import('../components/Login_Page/Login_Page'));
const page = () => {
  return (
    <>
      <main>
      <section>
        <Login_Page/>
      </section>
    </main>
    </>
  )
}

export default page