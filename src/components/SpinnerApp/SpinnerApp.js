import React, {Component} from 'react'
import './SpinnerApp.css'
import logo from '../../media/spinIcon.svg'

import ReactSvgPieChart from "react-svg-piechart"

const data = [
    {title: 'purple1', value: 8, color: "#800080"},
    {title: 'yellow1', value: 8, color: "#FFFF00"},
    {title: 'pink1', value: 8, color: "#FF69B4"},
    {title: 'blue1', value: 8, color: "#87CEFA"},
    {title: 'green1', value: 8, color: "#90EE90"},
    {title: 'orange1', value: 8, color: "#FF8C00"},
    {title: 'purple2', value: 8, color: "#800080"},
    {title: 'yellow2', value: 8, color: "#FFFF00"},
    {title: 'pink2', value: 8, color: "#FF69B4"},
    {title: 'blue2', value: 8, color: "#87CEFA"},
    {title: 'green2', value: 8, color: "#90EE90"},
    {title: 'orange2', value: 8, color: "#FF8C00"},
];

class SpinnerApp extends Component{
    constructor(){
        super()
        this.state = {
            spinDegrees: 0,
            // prevDegrees: 0,
            // spin: true,
        }
    }

    
    stopSpin = (time) => {
        setTimeout(() => {
            this.setState({spin: false})
        } ,time)
        console.log(this.state);
    }


    spining = () => {
        if(this.state.spinDegrees === 360){
            this.setState({spinDegrees: 0})
        } else {
            this.setState({spinDegrees: this.state.spinDegrees + 5});
        }
        // console.log(this.state.spinDegrees);
    }


    startSpinner = () => {
        
        setTimeout(this.stopIt, Math.floor((Math.random() * 2000) + 1000));
        this.intervalHandle = setInterval(this.spining, 1);
    }
    

    stopIt = () => {
        clearInterval(this.intervalHandle);
    }

    setSpinDegree = () => {
        this.setState({spin: true})
        this.spining();
        
    }

    stopSpinner = () => {
        clearInterval(this.intervalHandle)
        this.setState({spin: false});
    }



    render(){

        // let arrowStyle = this.state.spin ? this.arrowSpin : this.arrowStop 


        const {spinDegrees} = this.state;


        return(
            <div className='spinner-app-home'>
                <img className='cornerLogo' src={logo} alt='spin logo'/>
                <div className='circle'>
                    {/* <div className='arrowSpin' style={{transform: `rotate(${this.state.spinDegrees}deg)`}} ></div> */}
                    <div className='arrowDot'></div>
                    <div className='arrowSpin' style={{transform: `rotate(${spinDegrees}deg)`}} ></div>
                    {/* <div className={arrowStyle} ></div> */}
                </div>

                <div className='buttons'>
                    <button onClick={this.startSpinner}>SPIN</button>
                    {/* <button onClick={this.stopSpinner}>STOP</button> */}
                </div>
                <div className='pieChart'>
                    <ReactSvgPieChart
                        data={data}
                        // // If you need expand on hover (or touch) effect
                        // expandOnHover
                        // // If you need custom behavior when sector is hovered (or touched)
                        // onSectorHover={(d, i, e) => {
                        // if (d) {
                        //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                        // } else {
                        //     console.log("Mouse leave - Index:", i, "Event:", e)
                        // }
                        // }}
                        strokeColor={'#7CD8C7'}
                        strokeLinejoin='round'
                        // strokeWidth={1}
                        // viewBoxSize={50}
                        startAngle={10}
                    />
                </div>
                

            </div>

        )
    }
}

export default SpinnerApp