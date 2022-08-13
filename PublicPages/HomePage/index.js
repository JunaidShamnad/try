import Banner from '../../Components/HomeComponents/Banner'
import About from '../../Components/HomeComponents/About'
import Services from '../../Components/HomeComponents/services'
import Mission from '../../Components/HomeComponents/missionAndVission'
import Vission from '../../Components/HomeComponents/mission'
import Contact from '../../Components/HomeComponents/Contact'
function index() {
  return (
    <div>
        <Banner/>
        <About/>
        <Services/>
        <Mission/>
        <Vission/>
        <Contact/>
    </div>
  )
}

export default index