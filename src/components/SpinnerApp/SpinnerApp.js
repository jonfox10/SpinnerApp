import React, {Component} from 'react'
import './SpinnerApp.css'
import logo from '../../media/spinIcon.svg'
import {keyframes} from 'styled-components'

class SpinnerApp extends Component{
    constructor(){
        super()
        this.state = {
            spinDegrees: 0,
            prevDegrees: 0,
            spin: true,
        }
    }
    // spin = keyframes`0% { transform: rotate(0deg);}
    // 100% {transform: rotate(780deg);}`

    componentDidMount(){
        // setInterval(() => {
        //     this.setState({spinDegrees: this.state.spinDegrees + 1});
        //     console.log(this.state.spinDegrees);
        // } ,5)

        // console.log(this.state.spinDegrees);
    }


    stopSpin = (time) => {
        setTimeout(() => {
            this.setState({spin: false})
        } ,time)
        console.log(this.state);
    }

    // randomSpin = () => {
    //     let time = Math.floor((Math.random() * 2000) + 500);

    //     this.setState({spin: true});

    //     this.stopSpin(time);

    //     console.log(this.state, time);

    //     this.setSpinDegree();
    // }



    spining = () => {
        if (this.state.spin) {
            setInterval(() => {
                this.setState({spinDegrees: this.state.spinDegrees + 1});
                console.log(this.state.spinDegrees);
            } ,500)
        }
    }


    setSpinDegree = () => {
        this.setState({spin: true})
        this.spining();
        
    }

    stop = () => {
        this.setState({spin: false});
        clearInterval(this.intervalHandle)
    }




    // degrees = this.state.spinDegrees;

    // const {spinDegrees} = this.state;

    // arrowSpin = {
    //     spinDegrees: this.state.spinDegrees,
    //     width: '50%',
    //     height: '6px',
    //     background: 'black',
    //     position: 'absolute',
    //     top: '50%',
    //     transformOrigin: '100%',
    //     transform: `rotate(${this.spinDegrees}deg)`,
    //     // transform: 'rotate(0deg)',
    //     transition: 'all 0.02s',
    //     transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, .5)',   
    //     // animationName: this.spin,
    //     // animationDuration: '300ms',
    //     // animationIterationCount: 'infinite', 
    //     /* animation-iteration-count: '2',  */
    //     // animationTimingFunction: 'linear',
    //     // zIndex: 5,
    // }
    arrowStop = {
        width: '50%',
        height: '6px',
        background: 'black',
        position: 'absolute',
        top: '50%',
        transformOrigin: '100%',
        // transform: `rotate(${10}deg)`,
        transition: 'all 0.02s',
        transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, .5)',   
        // animationName: this.spin,
        // animationDuration: '300ms',
        // animationIterationCount: 'infinite', 
        /* animation-iteration-count: '2',  */
        // animationTimingFunction: 'linear',
        // zIndex: 5,
    }





    




 

    render(){

        let arrowStyle = this.state.spin ? this.arrowSpin : this.arrowStop 


        const {spinDegrees} = this.state;


        return(
            <div className='spinner-app-home'>
                <img className='cornerLogo' src={logo} alt='spin logo'/>
                <div className='circle'>
                    {/* <div className='arrowSpin' style={{transform: `rotate(${this.state.spinDegrees}deg)`}} ></div> */}
                    <div className='arrowSpin' styl={{transform: `rotate(${spinDegrees}deg)`}} ></div>
                    {/* <div className={arrowStyle} ></div> */}
                </div>

                <div className='buttons'>
                    <button onClick={this.setSpinDegree}>SPIN</button>
                    <button onClick={this.stop}>STOP</button>
                </div>
            </div>

        )
    }
}

export default SpinnerApp