import { Outlet } from 'react-router-dom'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
