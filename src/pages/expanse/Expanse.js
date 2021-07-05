import { AddExpanseForm } from "../../components/forms/AddExpanseForm";
import "./expanse.css";

const Expanse = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h2
          className="expanseTitle"
          style={{
            color: "#8e44ad",
          }}
        >
          Expanse Manager App
        </h2>
      </div>

      <div className="col-12">
        <AddExpanseForm />
      </div>
    </div>
  );
};

export default Expanse;
