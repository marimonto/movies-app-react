import PropTypes from 'prop-types';
import { actions } from '../../../models/list.model';
import './styles.scss';

const List = ({ list, headers, actions, className, handleActionClick }) => {
    const header = headers.map((header, index) =>
        <div className="col" key={index}>{header}</div>
    );
    const row = (row) => (
        <div key={row.id} className="row">
            {Object.values(row).map((col, index) => column(col, index))}
            {actions && <div className="col actions-col">{actions.map(item => action(item, row))}</div>}
        </div>
    )
    const column = (col, index) => <div className="col" key={index}>{col}</div>

    const action = (action, row) => (
        <div key={action.key} className="action" onClick={e => handleActionClick(action.action, row, e)}>
            {action.icon}
        </div>)

    return (
        <section className={`list-card ${className}`}>
            <header className="header" >
                {header}
                {actions && <div className="col actions-col">Acciones</div>}
            </header>
            <main className="body">
                {list.map(item => row(item))}
            </main>
        </section >
    );
}

List.propTypes = {
    list: PropTypes.array.isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    actions: PropTypes.arrayOf(actions),
    className: PropTypes.string,
    handleActionClick: PropTypes.func
}

export default List;