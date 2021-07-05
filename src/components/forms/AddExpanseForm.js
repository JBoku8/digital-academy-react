import { useState } from "react";

export const AddExpanseForm = () => {
  const [expanseName, setExpanseName] = useState("");
  const [data, setData] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    const newExpanse = {
      name: expanseName,
      id: Date.now(),
    };

    // oldObject !== newObject

    // const newData = [...data, newExpanse];

    setData([...data, newExpanse]);
    setExpanseName("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            $
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="ხარჯის დასახელება"
            value={expanseName}
            onChange={({ target }) => {
              setExpanseName(target.value);
            }}
            required
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary" type="submit">
            ხარჯის დამატება
          </button>
        </div>
      </form>
      <div className="shadow my-2">
        <ul className="list-group">
          {data.map((item) => {
            return (
              <li className="list-group-item" key={item.id}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
