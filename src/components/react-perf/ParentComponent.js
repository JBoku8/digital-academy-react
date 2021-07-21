import React, { useState, useMemo, useEffect, useCallback } from "react";
import ChildComponent from "./ChildComponent";

// oldValue !== newValue

export const ParentComponent = () => {
  const [value, setValue] = useState();
  const numbers = useMemo(() => [1, 2, 3, 4, 5], []);

  const fetchData = useCallback((endpoint) => {
    setTimeout(() => {
      console.log("FETCHING DATA", endpoint);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchData("PARENT_ENDPOINT");
  }, [fetchData]);

  //   console.log("PARENT COMPONENT RENDERING...");
  return (
    <div className="row">
      <div className="col-8">
        <h2 className="text-info">Parent component - {value}</h2>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setValue(Math.random())}
        >
          Random Value
        </button>
        <ChildComponent
          title="test title"
          isAdmin
          numbers={numbers}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default React.memo(ParentComponent);
