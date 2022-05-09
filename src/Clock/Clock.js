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
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    console.log('this.timex', this.timeZone,this.state.timeZone,
     this.state.timeZone.split(':')[0], this.state.timeZone.split(':')[1],
     this.state.timeZone.split(':')[2]);
    this.setState({timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss')});
  }
    

  render() {
    return (
      <div>
        <p>{this.name}</p>
        <p>{this.state.timeZone}</p>
        <div id='clock' className='clock'>
          <div className="hour">
            <div className="hr" id="hr" style={{transform : `rotateZ(${(this.state.timeZone.split(':'))[0]*30 + ((this.state.timeZone.split(':'))[1]*6/12)}deg)`}}></div>
          </div>
          <div className="min">
            <div className="mn" id="mn" style={{transform : `rotateZ(${(this.state.timeZone.split(':'))[1]*6}deg)`}}></div>
          </div>
          <div className="sec">
            <div className="sc" id="sc" style={{transform : `rotateZ(${(this.state.timeZone.split(':'))[2]*6}deg)`}}></div>
          </div>
          <button className='btn-del' onClick={() => this.onDelete(this.id)}>&#10006;</button>
        </div>
      </div>
    )
  }
}

Clock.propTypes = {
  time: PropTypes.object,
  onDelete: PropTypes.func
}
