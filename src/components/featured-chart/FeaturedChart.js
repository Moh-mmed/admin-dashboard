import { useState } from 'react';
import './featuredChart.scss'
import CircularChart from './CircularChart';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";


const initialChart = {
  sqSize: 130,
  percentage:60,
  strokeWidth: 6,
}

const FeaturedChart = () => {
  const [chart, setChart] = useState(initialChart);
 
  return (
    <div className="featured-chart">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <CircularChart chart={initialChart} />
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payment may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="result-amount">$18.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result-amount">$10.9k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result-amount">$12.3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedChart