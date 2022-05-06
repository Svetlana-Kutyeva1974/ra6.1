import PropTypes from 'prop-types'
import Clock from '../Clock/Clock';
import './List.css'

function List({ clocks, onDelete }) {
  const clockList = clocks.map((item) => <Clock className='clock' key={item.id} onDelete={onDelete} time={item} />)

  return (
    <div className='clock-list'>
      {clockList}
    </div>
  )
}

List.propTypes = {
  clocks: PropTypes.array
}

export default List
