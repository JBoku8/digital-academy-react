import { useState } from "react";
import { useHistory } from "react-router";

import { AddExpanseForm } from "../../components/forms/AddExpanseForm";
import { ExpanseList } from "../../components/lists/ExpanseList";
import { withAuthProtection } from "../../hoc/withAuthProtection";
import { getExpanses } from "../../service/expanseService";
import { generateExpanseInfo } from "../../utils/helpers";
import { logOut } from "../../service/auth";
import { useUserContext } from "../../contexts/UserContext";

import "./expanse.css";
import { useThemeContext } from "../../contexts/ThemeContext";

const Expanse = () => {
  const [data, setData] = useState(() => getExpanses());
  const [editing, setEditing] = useState(null);
  const history = useHistory();
  const { setLoggedIn } = useUserContext();
  const { theme } = useThemeContext();

  // useEffect(() => {
  //   const response = getExpanses();
  //   setData(response);
  // }, []);

  const onSubmit = (newExpanse) => {
    if (editing) {
      const editIndex = data.findIndex(
        (element) => element.id === newExpanse.id
      );

      setData([
        ...data.slice(0, editIndex),
        {
          ...data[editIndex],
          ...newExpanse,
        },
        ...data.slice(editIndex + 1),
      ]);

      setEditing(null);
    } else {
      setData([...data, newExpanse]);
    }
  };

  const onEditHandler = (itemId) => {
    const editElement = data.find((element) => element.id === itemId);
    setEditing(editElement);
  };

  const onRemoveHandler = (itemId) => {
    const filtered = data.filter((element) => element.id !== itemId);
    // backend call itemId
    setData(filtered);
  };

  const onLogOutHandler = () => {
    logOut();
    setLoggedIn(false);
    history.replace("/");
  };

  const renderInfoCard = () => {
    const info = generateExpanseInfo(data);
    return (
      <>
        <p className="text-info fs-2">Total - ${info.total}</p>
        <p className="text-info fs-2">Average - ${info.average}</p>
        <p className="text-info fs-2">
          Min - ${info.min}, Max - ${info.max}
        </p>
      </>
    );
  };

  return (
    <div className={`row bg-${theme}`}>
      <div className="col-12 p-3">
        <h2
          className="expanseTitle"
          style={{
            color: "#8e44ad",
          }}
        >
          Expanse Manager App
        </h2>
        <button
          className="btn btn-danger"
          type="button"
          onClick={onLogOutHandler}
        >
          logOut
        </button>
      </div>

      <div className="col-8 shadow pt-5">
        <AddExpanseForm onSubmit={onSubmit} editing={editing} />
      </div>
      <div className="col-4 p-3">{renderInfoCard()}</div>
      <div className="col-12 p-3">
        <ExpanseList
          data={data}
          onEdit={onEditHandler}
          onRemove={onRemoveHandler}
        />
      </div>
    </div>
  );
};

export default withAuthProtection(Expanse);
