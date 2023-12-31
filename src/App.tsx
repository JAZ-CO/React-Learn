import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San francisco", "Tokyo"];
  const handleSelectedItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
    </div>
  );
}

export default App;
