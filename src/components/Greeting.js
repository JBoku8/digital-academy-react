import { useThemeContext } from "../contexts/ThemeContext";

const Greeting = (props) => {
  const { setTheme } = useThemeContext();

  if (props.hidden) {
    return null;
  }

  return (
    <>
      <h2>Greeting Component</h2>
      <h3>Greeting Small</h3>
      <button className="btn btn-primary" onClick={() => setTheme("warning")}>
        Theme Warning
      </button>
      <button className="btn btn-primary" onClick={() => setTheme("danger")}>
        Theme Danger
      </button>
    </>
  );
};

export default Greeting;
