import { useLazyQuery } from "@apollo/client";
import Welcome from "../../components/Welcome";
import Greeting from "../../components/Greeting";
import { ParentComponent } from "../../components/react-perf/ParentComponent";
// import Counter from "../../components/Counter";
// import ClassComponent from "../../components/ClassComponent";
import { useThemeContext } from "../../contexts/ThemeContext";
import { GET_CHARACTERS } from "../../queries";

const Home = () => {
  const { theme } = useThemeContext();
  const [lazyGetCharacters, query] = useLazyQuery(GET_CHARACTERS, {
    variables: {
      page: 10,
    },
  });

  const renderCharacters = () => {
    if (!query.called) return null;
    if (query.loading) return null;

    const { info, results } = query.data.characters;

    return (
      <>
        <Welcome title={`TOTAL RECORDS - ${results.length}`} />
        <p>pages - {info.pages}</p>
        <p>count - {info.count}</p>
      </>
    );
  };

  return (
    <div className={`bg-${theme}`}>
      {/* <ClassComponent /> */}
      <button
        className="btn btn-primary"
        onClick={() => {
          lazyGetCharacters({
            variables: {
              page: 5,
            },
          });
        }}
      >
        Get Data
      </button>
      <ParentComponent />
      <hr />
      <Greeting />
      {renderCharacters()}
      {/* <hr /> */}
      {/* <Counter /> */}
    </div>
  );
};

export default Home;
