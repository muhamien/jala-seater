import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
        <main className='py-20 mx-4 sm:mx-24'>{children}</main>
      <Footer />
    </>
  )
}