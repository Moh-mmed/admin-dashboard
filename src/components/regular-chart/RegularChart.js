import LineChart from './LineChart';
import './regularChart.scss'

const RegularChart = () => {
  return (
    <div className="regular-chart">
      <h1 className="title">Last 6 Months (income)</h1>
      <LineChart/>
    </div>
  );
}

export default RegularChart



