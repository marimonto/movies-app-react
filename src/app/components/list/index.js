import PropTypes from 'prop-types';
import { actions } from '../../../models/list.model';
import './styles.scss';

const List = ({ list, headers, actions, className, handleActionClick }) => {
    const renderHeader = (header, index) => <div className="col" key={index}>{header}</div>

    const renderRow = (row) => (
        <div key={row.id} className="row">
            {Object.values(row).map((col, index) => renderColumn(col, index))}
            {actions && <div className="col actions-col">{actions.map(item => renderAction(item, row))}</div>}
        </div>
    )
    const renderColumn = (col, index) => <div className="col" key={index}>{col}</div>

    const renderAction = (action, row) => (
        <div key={action.key} data-testid={`${action.key}_${row.id}`} className="action" onClick={e => handleActionClick(action.action, row, e)}>
            {action.icon}
        </div>)

    return (
        <section className={`list-card ${className}`}>
            <header className="header" >
                {headers.map((header, index) => renderHeader(header, index))}
                {actions && <div className="col actions-col">Acciones</div>}
            </header>
            <main className="main">
                {list.map(item => renderRow(item))}
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