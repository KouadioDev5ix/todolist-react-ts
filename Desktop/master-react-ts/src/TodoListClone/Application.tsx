import React, { useEffect, useState } from "react";
import InputComponent from "./Components/InputComponent";
import type { IBouton } from "./Interface/IButton";
import TodoListElment from "./Components/TodoListElment";
import type { ITodo } from "./Interface/ITodo";
import "../Ts/Generic";
export default function Application() {
  const [activeBtn, setActiveBtn] = useState<string>("Toutes les tâches");
  const tabElements: IBouton[] = [
    {
      id: 1,
      label: "Toutes les tâches",
    },
    {
      id: 2,
      label: "Terminées",
    },
    {
      id: 3,
      label: "Inachévées",
    },
  ];
  const [InputFieldValue, setInputFieldValue] = useState<string>("");
  const [toDoCreated, setToDoCreated] = useState<ITodo[]>([]);

  const [wantToEditTodo, setWantToEditToDo] = useState<boolean>(false);

  const [toDoSlected, setToDoSlected] = useState<string | null>(null);

  const loadTodoSinceLocalStorage = () => {
    const todoExistInLocalStorage = localStorage.getItem("TODOS_KEY");

    if (!todoExistInLocalStorage) return;

    setToDoCreated(JSON.parse(todoExistInLocalStorage));
    return todoExistInLocalStorage;
  };

  const filterToDo = toDoCreated.filter((t) => {
    if (activeBtn === "Terminées") return t.completed;
    if (activeBtn === "Inachévées") return !t.completed;
    return true;
  });

  // console.log("todo filtered goes here=======>", filterToDo);

  const storeToDosInLocalStorage = (toDo: ITodo[]): void => {
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDo));
  };

  /**
   *
   * @param e
   * @returns
   */

  const handleAddSingleTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (InputFieldValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      content: InputFieldValue,
      completed: false,
    };

    setToDoCreated((previousState) => {
      const upDateTodo = [...previousState, newTodo].reverse();
      storeToDosInLocalStorage(upDateTodo);
      loadTodoSinceLocalStorage();
      return upDateTodo;
    });
    setInputFieldValue("");
  };

  /**
   *
   * @param toDoToEdit
   */
  const selectToDoToEdit = (toDoToEdit: string) => {
    setToDoSlected(toDoToEdit);
    setInputFieldValue(toDoToEdit);
    setWantToEditToDo(true);
  };

  /**
   *
   * @param e
   * @returns
   */
  const handleUpdateTodo = (e: React.FormEvent): void => {
    e.preventDefault();

    if (InputFieldValue.trim() === "") return;

    const toDoEdited = toDoCreated.map((todo) => {
      if (todo.content === toDoSlected) {
        return { ...todo, content: InputFieldValue };
      }
      return todo;
    });

    storeToDosInLocalStorage(toDoEdited);
    loadTodoSinceLocalStorage();
    selectToDoToEdit("");
    setInputFieldValue("");
    setWantToEditToDo(false);
  };

  /**
   * @function handleDeleteTodo
   * @param toDoToDeleteId
   */
  const handleDeleteTodo = (toDoToDeleteId: number): void => {
    const toDoDeleted = toDoCreated.filter((t) => t.id !== toDoToDeleteId);
    storeToDosInLocalStorage(toDoDeleted);
    loadTodoSinceLocalStorage();
  };

  /**
   *
   * @param toDoId
   */

  const handleToggleToDo = (toDoId: number): void => {
    const toggleToDo = toDoCreated.map((t) => {
      if (t.id === toDoId) {
        return {
          ...t,
          completed: !t.completed,
        };
      }

      return t;
    });

    storeToDosInLocalStorage(toggleToDo);
    loadTodoSinceLocalStorage();
  };

  useEffect(() => {
    loadTodoSinceLocalStorage();
  }, []);

  return (
    <div className="flex items-center flex-col bg-slate-50 min-h-screen">
      <h1 className="text-lg font-bold mt-5 uppercase ">
        This is a pratice of React & Ts
      </h1>

      <div>
        <InputComponent
          InputFieldValue={InputFieldValue}
          setInputFieldValue={setInputFieldValue}
          handleAddSingleTodo={handleAddSingleTodo}
          wantToEditTodo={wantToEditTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      </div>

      <div className="w-[339px] mt-4 ">
        <div className=" w-full flex items-center gap-8 border-b-2 border-gray-500 ">
          {tabElements.map((item) => (
            <button
              className={`${
                item.label === activeBtn
                  ? " border-b-2 border-red-600 text-red-500 transition-colors "
                  : ""
              } text-nowrap pb-1 font-medium`}
              key={item.id}
              onClick={() => setActiveBtn(item.label)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <TodoListElment
          activeBtn={activeBtn}
          selectToDoToEdit={selectToDoToEdit}
          toDoCreated={filterToDo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleToDo={handleToggleToDo}
        />
      </div>
    </div>
  );
}
