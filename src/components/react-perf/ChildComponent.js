import React, { useEffect } from "react";

const ChildComponent = ({ fetchData }) => {
  useEffect(() => {
    fetchData("CHILD_ENDPOINT");
  }, [fetchData]);

  console.log("CHILD COMPONENT RENDERING...");
  return (
    <div className="row">
      <h2 className="fs-3">Child component</h2>
    </div>
  );
};

export default React.memo(ChildComponent);
