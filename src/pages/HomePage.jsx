import Experts from '../features/HomePage/Experts'
import Offer from '../features/HomePage/Offer'
import WelSection from '../features/HomePage/WelSection'
import Work from '../features/HomePage/Work'
import Main from '../ui/Main'

function HomePage() {
  return (
    <Main>
      <WelSection />
      <Experts />
      <Offer />
      <Work />
    </Main>
  )
}

export default HomePage
