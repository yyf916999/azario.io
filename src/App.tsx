import ListGroup from "./components/ListGroup";
// import Button from "./components/Button";
import SliderBars from "./components/SliderBars";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Input></Input>
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ListGroup
            items={[
              "9th Grade",
              "10th Grade",
              "11th Grade",
              "12th Grade",
              "Others",
            ]}
            heading="Grade"
            onSelectItem={handleSelectItem}
          />
          <ListGroup
            items={[
              "Mathematics",
              "Language Arts",
              "Science",
              "Arts & Humanities",
              "Economics",
              "Others",
            ]}
            heading="Subject"
            onSelectItem={handleSelectItem}
          />
          <ListGroup
            items={["True/False", "Multiple Choice"]}
            heading="Type of Question"
            onSelectItem={handleSelectItem}
          />
        </div>
        <div>
          <SliderBars max={20} heading={"Number of Questions"} />
          <br></br>
          <SliderBars max={10} heading={"Difficulty"} />
        </div>

        <div>
          <Buttons></Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
