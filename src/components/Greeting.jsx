const Greeting = (props) => {
  if (props.hidden) {
    return null;
  }

  return (
    <>
      <h2>Greeting Component</h2>
      <h3>Greeting Small</h3>
    </>
  );
};

export default Greeting;
