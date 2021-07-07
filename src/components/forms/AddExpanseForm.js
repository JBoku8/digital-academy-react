import { useEffect, useState } from "react";

export const AddExpanseForm = ({ onSubmit, editing }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setAmount(editing.amount);
    }
  }, [editing]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // validation
    let newExpanse = {
      ...editing,
      name,
      amount: parseFloat(amount),
    };

    if (!editing) {
      newExpanse = {
        ...newExpanse,
        id: Date.now(),
      };
    }

    onSubmit(newExpanse);
    setName("");
    setAmount(0);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="input-group flex-nowrap mb-2">
          <span className="input-group-text" id="addon-wrapping">
            ✅ 🤑
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="ხარჯის დასახელება"
            value={name}
            onChange={({ target }) => {
              setName(target.value);
            }}
            required
          />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            💵 💵
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="თანხა"
            value={amount}
            onChange={({ target }) => {
              setAmount(target.value);
            }}
            required
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary" type="submit">
            ხარჯის {editing ? "რედაქტირება" : "დამატება"}
          </button>
        </div>
      </form>
    </>
  );
};
