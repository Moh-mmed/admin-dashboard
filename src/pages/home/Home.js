import FeaturedChart from '../../components/featured-chart/FeaturedChart'
import Navbar from '../../components/navbar/Navbar'
import RegularChart from '../../components/regular-chart/RegularChart'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <FeaturedChart />
          <RegularChart/>
        </div>
      </div>
    </div>
  );
}

export default Home