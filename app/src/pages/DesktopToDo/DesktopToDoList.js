import React, { useState } from "react";
import DesktopToDoForm from "./DesktopToDoForm";
import DesktopToDo from "./DesktopToDo";
import DesktopToDoMenu from "./DesktopToDoMenu/DesktopToDoMenu";
import DesktopAnimatedStrip from "./DesktopAnimatedStrip/DesktopAnimatedStrip";
// import dividerToDo from "../../../img/dividerToDo.svg";
// import toDoAdd_ from "../../../img/toDoAdd_.svg";
// import toDoAdd from "../../../img/toDoAdd.svg";
// import toDoAddPlus from "../../../img/toDoAddPlus.svg";
// import toDoEditPencil from "../../../img/toDoEditPencil.svg";
// import toDoEdit_ from "../../../img/toDoEdit_.svg";
// import toDoEdit from "../../../img/toDoEdit.svg";
// import Carousel from "nuka-carousel";

// import calendar from "../../../img/calendar.svg";
// import notification from "../../../img/notification.svg";
// import settings from "../../../img/settings.svg";
// import watch from "../../../img/watch.svg";

// import DesktopPageMenu from "../../DesktopPageMenu/DesktopPageMenu";

// Когда мы редактируем или добавляем запись - в пространстве где был сам календарь появляются табы (иконки вверху)

function DesktopToDoList() {
  const [todos, setTodos] = useState([]);
  const [menuActive, setmenuActive] = useState(false);
  const [animatedStripActive, setanimatedStripActive] = useState(false);
  const items = [
    {
      src: "/static/media/calendar.4e8f269d.svg",
      href: "#",
      onClick: "animStripCalendar",
    },

    {
      src: "/static/media/notification.4cd23c97.svg",
      href: "#",
      onClick: "animStripNotification",
    },

    {
      src: "/static/media/settings.6d1045d6.svg",
      href: "#",
      onClick: "animStripSettings",
    },

    {
      src: "/static/media/watch.8be1be45.svg",
      href: "#",
      onClick: "animStripWatch",
    },
  ];
  // const itemsAnimatedStrip =[
  //     // {className:}
  // ]

  const addTodo = (todo) => {
    //если ничего не набрано, то оно не добавится
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeToDo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="notesContent">
        <div className="notes">
          <div onClick={() => setanimatedStripActive(!animatedStripActive)}>
            Example
          </div>
          <div className="notesHeader">
            <div className="notesHeaderHead">
              <span onClick={() => setmenuActive(!menuActive)}>
                10 сентября 2021 года
              </span>
              <div onClick={() => setmenuActive(!menuActive)}>
                {/* <img src={toDoAdd}></img>
                <img src={toDoAddPlus}></img>
                <img src={toDoAdd_}></img> */}
              </div>
              <div>
                {/* <img src={toDoEdit}></img>
                <img src={toDoEditPencil}></img>
                <img src={toDoEdit_}></img> */}
              </div>
            </div>
            {/* <img src={dividerToDo}></img> */}
          </div>
        </div>
        <DesktopToDoForm onSubmit={addTodo} />
        <DesktopToDo
          todos={todos}
          completeTodo={completeTodo}
          removeToDo={removeToDo}
          updateTodo={updateTodo}
        />
      </div>
      <DesktopToDoMenu
        active={menuActive}
        setActive={setmenuActive}
        items={items}
        >
        </DesktopToDoMenu>
        <DesktopAnimatedStrip
        active={animatedStripActive}
        setActive={setanimatedStripActive}
        items={items}
        />

        

    </>
  );
}

export default DesktopToDoList;
