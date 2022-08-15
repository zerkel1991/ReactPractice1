import data from '../../data/data.json'
import PropTypes from 'prop-types'; // ES6

function Statistic({title,stats}){
    return(
        <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
    {stats.map(element => (
        <li key={element.id}>
            <span className="label"> {element.label}</span>
            <span className="percentage"> {element.percentage}</span>
        </li>
      ))}
    </ul>
</section>
    );
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape.isRequired,
}

export default Statistic;



