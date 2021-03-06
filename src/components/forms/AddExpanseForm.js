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
            โ ๐ค
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="แฎแแ แฏแแก แแแกแแฎแแแแแ"
            value={name}
            onChange={({ target }) => {
              setName(target.value);
            }}
            required
          />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            ๐ต ๐ต
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="แแแแฎแ"
            value={amount}
            onChange={({ target }) => {
              setAmount(target.value);
            }}
            required
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary" type="submit">
            แฎแแ แฏแแก {editing ? "แ แแแแฅแขแแ แแแ" : "แแแแแขแแแ"}
          </button>
        </div>
      </form>
    </>
  );
};
