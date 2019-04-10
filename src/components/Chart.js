import * as React from 'react' 
import d3 from 'd3' 
// import rd3 from 'rd3'


const data = [1,2,3,4];
// const PieChart = rd3.PieChart;
// const pieData = [
//     {label: 'purple1', value: 8},
//     {label: 'yellow1', value: 8},
//     {label: 'pink1', value: 8},
//     {label: 'blue1', value: 8},
//     {label: 'green1', value: 8},
//     {label: 'orange1', value: 8},
//     {label: 'purple2', value: 8},
//     {label: 'yellow2', value: 8},
//     {label: 'pink2', value: 8},
//     {label: 'blue2', value: 8},
//     {label: 'green2', value: 8},
//     {label: 'orange2', value: 8},
// ];

const SimplePieChart = () => {
    const height = 300;
    const width = 300;

    let pie = d3.pie(data);

    return (
        <svg height={height} width={width}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                <Slice pie={pie}/>
            </g>
        </svg>
    )



}

const Slice = props => {
    let {pie} = props;

    let arc = d3.arc()
      .innerRadius(20)
      .outerRadius(100);
    
    let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index / (pie.length -1));

        return <path d={arc(slice)} fill={sliceColor} />
    });
}


export default SimplePieChart;