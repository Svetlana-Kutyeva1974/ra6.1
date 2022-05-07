import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import './Clock.css';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.id = props.time.id;
    this.name = props.time.name;
    this.timeZone = Number(props.time.timeZone);
    this.onDelete = props.onDelete;
    this.state = {
      timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss'),
      canvas: this.displayClock(), 
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.canvasinterval = setInterval(() => this.displayClock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.canvasinterval);
  }

  tick() {
    //this.setState({timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss')});
    this.setState({timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss'), canvas: this.displayClock()});
    // this.displayCanvas();
  }

  displayClock(){

    const deg = 6;
    const hr = document.querySelector('#hr');
    const sc = document.querySelector('#sc');
    const mn = document.querySelector('#mn');

    //setInterval(() => {
    //let day = new Date();
    let day = new Date(moment().utcOffset(this.timeZone));
    // day=  moment().utcOffset(this.timeZone).format('HH:mm:ss');
    //day =  Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(),
    //day.getUTCHours(), day.getUTCMinutes(), day.getUTCSeconds());

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    //})
  }
    

  render() {
    return (
      <div>
        <p>{this.name}</p>
        <div id='clock' className='clock'>
          <p>{this.state.timeZone}</p>

          <div className="hour">
            <div className="hr" id="hr"></div>
          </div>
          <div className="min">
            <div className="mn" id="mn"></div>
          </div>
          <div className="sec">
            <div className="sc" id="sc"></div>
          </div>

          <button className='btn-del' onClick={() => this.onDelete(this.id)}>✘</button>
          
        </div>
      </div>
    )
  }
}

Clock.propTypes = {
  time: PropTypes.object,
  onDelete: PropTypes.func
}

//{this.displayCanvas()}  <canvas height='480' width='480' id='myCanvas'></canvas>
