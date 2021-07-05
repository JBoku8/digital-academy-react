import Welcome from "../../components/Welcome";
import Greeting from "../../components/Greeting";
import Counter from "../../components/Counter";
import ClassComponent from "../../components/ClassComponent";

// const spanElement = React.createElement("span", null, "Span Element");
// const h2Element = React.createElement("h2", null, spanElement);

// console.log(spanElement);

const Home = () => {
  return (
    <>
      <ClassComponent />
      <Greeting />
      <Welcome title="ReactJs Rocks." />
      <hr />
      <Counter />
    </>
  );
};

export default Home;
