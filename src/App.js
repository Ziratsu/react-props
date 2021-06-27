import Child from "./Child";

function App() {
  const deleteElement = (id) => {
    console.log("Delete", id);
  };

  return (
    <div className="App">
      <Child
        name={"John"}
        id={100}
        txt={"Lorem ipsum"}
        deleteFunc={deleteElement}
      />
      <Child
        name={"John"}
        id={99}
        txt={"Lorem ipsum"}
        deleteFunc={deleteElement}
      />
      <Child
        name={"John"}
        id={98}
        txt={"Lorem ipsum"}
        deleteFunc={deleteElement}
      />
    </div>
  );
}

export default App;
