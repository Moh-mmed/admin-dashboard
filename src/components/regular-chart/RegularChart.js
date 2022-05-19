import LineChart from './LineChart';
import './regularChart.scss'

const RegularChart = ({title}) => {
  return (
    <div className="regular-chart">
      <h1 className="title">{title}</h1>
      <LineChart />
    </div>
  );
}

export default RegularChart



