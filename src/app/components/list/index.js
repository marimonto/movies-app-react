import './styles.scss';

const List = ({ list, headers, actions, className }) => {

    const header = headers.map((header) =>
        <div className="col">{header}</div>
    );

    const row = (item) => (
        <div className="row">
            {Object.values(item).map(col => column(col))}
            <div className="col">{actions.map(item => action(item))}</div>
        </div>
    )
    const column = (col) => (
        <div className="col">{col}</div>
    )

    const action = (action) => action.icon;

    return (
        <section className={`list-card ${className}`}>
            <header className="header" >
                {header}
            </header>
            <body className="body">
                {list.map(item => row(item))}
            </body>
        </section >
    );
}

export default List;