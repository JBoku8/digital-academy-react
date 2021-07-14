import Welcome from "../../components/Welcome";
import Greeting from "../../components/Greeting";
import Counter from "../../components/Counter";
import ClassComponent from "../../components/ClassComponent";

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
