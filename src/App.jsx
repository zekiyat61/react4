import { useState } from "react";
import "./App.css";
function App() {
  const [items, setItems] = useState([]); 
  const [input, setInput] = useState(""); 
  const addElement = () => {
    if (input !== "") {
      const newElement = [...items, input];
      setItems(newElement);
      setInput("");
    }
  };
  const handleDelete = (index) => {
    const deleted = [...items];
    deleted.splice(index, 1);
    setItems(deleted);
  };
  return (
    <div className="container">
      <h2 className="h2">item list </h2> <br/>
      <input className="input"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className="button" onClick={addElement}>Add Elemnt </button>
      <ul className="ul">
        {items.length === 0 ? (
          <p>no item</p>
        ) : (
          items.map((item, index) => {
            return (
              <li className="list" key={index}>
                <div className="item-list">
                {item}
                <button className="button"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  delete
                </button>
                </div>
              </li>
            );
          })
        )}
      </ul>
      </div>
  );
}
export default App;
