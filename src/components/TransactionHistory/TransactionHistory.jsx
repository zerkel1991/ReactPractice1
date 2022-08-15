import transactions from '../../data/transactions.json';
import PropTypes from 'prop-types';
import s from './TransactionStyle.module.css';
function TransactionHistory({ id, type, amount, currency }) {
  return (
    <table className={s.TransactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(el => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TransactionHistory;
