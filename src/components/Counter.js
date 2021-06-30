import { useState } from "react";

import "./counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [bgColor, setBgColor] = useState("");

  const onAdd = (amount) => {
    setNumber((prevState) => prevState + amount);
  };

  const onSubtract = (amount) => {
    setNumber((prevState) => prevState - amount);
  };

  const onReset = () => {
    setNumber(0);
  };

  let titleClassName = "nepthritis";
  if (number > 80) {
    titleClassName = "alizarin";
  } else if (number < -80) {
    titleClassName = "orange";
  }

  return (
    <div className={`row p-4 ${bgColor}`}>
      <div className="btn-group">
        <button
          className="btn btn-dark"
          onClick={() => setBgColor("midnightBlue")}
        >
          midnight blue
        </button>
        <button
          className="btn btn-dark"
          onClick={() => setBgColor("wetAsphalt")}
        >
          wet asphalt
        </button>
      </div>

      <h2 className={titleClassName}>Counter Component - {number}</h2>
      <h4 className="text-muted">Max: +100, Min: -100</h4>
      <hr />
      <div className="btn-group">
        {number !== 100 ? (
          <button className="btn btn-primary" onClick={() => onAdd(10)}>
            მნიშვნელობის გაზრდა +10
          </button>
        ) : (
          <div className="btn btn-primary">Action Blocked</div>
        )}

        {number !== -100 && (
          <button className="btn btn-danger" onClick={() => onSubtract(10)}>
            მნიშვნელობის შემცირება -10
          </button>
        )}

        <button className="btn btn-info" onClick={onReset}>
          მნიშვნელობის განულება
        </button>
      </div>
    </div>
  );
};

export default Counter;
