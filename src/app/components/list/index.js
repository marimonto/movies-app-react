import './styles.scss';

const List = ({ list, headers, actions, className, handleActionClick }) => {

    const header = headers.map((header) =>
        <div className="col">{header}</div>
    );
    const row = (row) => (
        <div className="row">
            {Object.values(row).map(col => column(col))}
            {actions && <div className="col actions-col">{actions.map(item => action(item, row))}</div>}
        </div>
    )
    const column = (col) => (
        <div className="col">{col}</div>
    )

    const action = (action, row) => <div className="action" onClick={e => handleActionClick(action.action, row, e)}>
        {action.icon}
    </div>

    return (
        <section className={`list-card ${className}`}>
            <header className="header" >
                {header}
                {actions && <div className="col actions-col">Acciones</div>}
            </header>
            <body className="body">
                {list.map(item => row(item))}
            </body>
        </section >
    );
}

export default List;