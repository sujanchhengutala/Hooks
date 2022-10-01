import React, { useState, useEffect } from "react";
import "./style.css";
// import todo from "../image/todo.svg";

//local storage
const getLocalStorage = () => {
  const list = localStorage.getItem("mytodolist");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
////////////////////////////////

const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(getLocalStorage());
  const [toggle, setToggle] = useState(false);
  const [isEditedItem, setIseditItem] = useState("");

  //adding list
  const addHandler = () => {
    if (input === "") {
      alert("enter data");
    } else if (input && toggle) {
      setItem(
        item.map((curElem) => {
          if (curElem.id === isEditedItem) {
            return { ...curElem, name: input };
          } else {
            return curElem;
          }
        })
      );
      setInput("");
      setIseditItem(null);
      setToggle(false);
    } else {
      const newData = { id: new Date().getTime().toString(), name: input };
      setItem([...item, newData]);
      setInput("");
    }
  };
  //deleting list
  const deleteItem = (index) => {
    const upDateItem = item.filter((Elem) => {
      const { id } = Elem;
      return index !== id;
    });
    setItem(upDateItem);
  };

  ////editing list
  const editItem = (index) => {
    let editedItem = item.find((curElem) => {
      return curElem.id === index;
    });
    setInput(editedItem.name);
    setIseditItem(index);
    setToggle(true);
  };

  //removing allList
  const removeAll = () => {
    setItem([]);
  };

  //sending data to web server in string format
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(item));
  }, [item]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./image/todo.svg" alt="todolog" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItem">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            
            { toggle ? (
              <i className="far fa-edit add-btn" onClick={addHandler}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addHandler}></i>
            )}
          </div>

          <div className="showItems">
            {item.map((curElem) => {
              const { id, name } = curElem;
              return (
                <div className="eachItem" key={id}>
                  <h3>{name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => {
                        deleteItem(id);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>           
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
