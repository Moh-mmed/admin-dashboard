import './circularChart.scss'

const CircularChart = ({chart}) => {
  const radius = (chart.sqSize - chart.strokeWidth) / 2;
  const viewBox = `0 0 ${chart.sqSize} ${chart.sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * chart.percentage) / 100;

  return (
    <div className="chart">
        <svg width={chart.sqSize} height={chart.sqSize} viewBox={viewBox}>
        <circle
            className="circle-background"
            cx={chart.sqSize / 2}
            cy={chart.sqSize / 2}
            r={radius}
            strokeWidth={`${chart.strokeWidth}px`}
        />
        <circle
            className="circle-progress"
            cx={chart.sqSize / 2}
            cy={chart.sqSize / 2}
            r={radius}
            strokeWidth={`${chart.strokeWidth}px`}
            transform={`rotate(-90 ${chart.sqSize / 2} ${chart.sqSize / 2})`}
            style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            }}
        />
        <text
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
        >
            {`${chart.percentage}%`}
        </text>
        </svg>
    </div>
  );
}

export default CircularChart