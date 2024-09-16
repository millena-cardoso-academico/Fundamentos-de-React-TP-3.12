import PropTypes from 'prop-types';
import '../styles/List.css';

const List = ({ numbers }) => {
  if (numbers.length === 0) {
    return <p>A lista está vazia</p>;
  }

  return (
    <ul className="number-list">
      {numbers.map((number, index) => (
        <li key={index} className="list-item">
          Número: {number}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default List;