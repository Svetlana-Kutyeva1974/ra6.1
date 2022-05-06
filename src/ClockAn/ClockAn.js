import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import './ClockAn.css';

export default class ClockAn extends Component {
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
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss')});
  }

  render() {
    return (
      <div>
        <p>{this.name}</p>
        <div id='clock' className='clock'>
          <p>{this.state.timeZone}</p>
          <button className='btn-del' onClick={() => this.onDelete(this.id)}>✘</button>
          <canvas height='480' width='480' id='myCanvas'></canvas>
        </div>
      </div>
    )
  }
}

ClockAn.propTypes = {
  time: PropTypes.object,
  onDelete: PropTypes.func
}