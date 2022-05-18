import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">container</div>
    </div>
  )
}

export default Home