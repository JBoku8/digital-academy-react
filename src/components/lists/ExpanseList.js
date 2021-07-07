export const ExpanseList = ({ data, onEdit, onRemove }) => {
  return (
    <div className="shadow my-2">
      <ul className="list-group">
        {data.map((item) => {
          return (
            <li className="list-group-item" key={item.id}>
              <div className="row">
                <div className="col-10">
                  <h2 className="text-muted">{item.name}</h2>
                  <h4 className="text-warning">
                    დახარჯული თანხა - ${item.amount}
                  </h4>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={() => onEdit(item.id)}
                  >
                    Edit
                  </button>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
