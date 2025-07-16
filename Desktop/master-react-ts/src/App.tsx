import React, { useEffect, useState } from "react";

import "./App.css";

import InputField from "./TsF/InputField";
import type { ITodoElement } from "./Interfaces/ITodoElment";
import ToDoListItem from "./TsF/ToDoListItem";
import type { ITabElements } from "./Interfaces/ITabElement";

export default function App() {
  const [toDoField, setToDoField] = useState<string>("");
  const [toDoCreated, setToDoCreated] = useState<ITodoElement[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(
    "Toutes les tâches"
  );
  const [selectedTask, setSelectedTask] = useState<string>("");
  const [wantToEditTask, setWantToEditTask] = useState<boolean>(false);

  const filteredTodos = toDoCreated.filter((todo) => {
    if (activeTab === "Terminées") return todo.completed;
    if (activeTab === "Inachevées") return !todo.completed;
    return true;
  });

  const tabElement: ITabElements[] = [
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
      label: "Inachevées",
    },
  ];

  const LOCAL_STORAGE_TODO_KEY: string = "todosCreacted";

  /**
   *
   * @returns
   */

  const storeToDosInLocalStorage = () => {
    const storageTodos = localStorage.getItem(LOCAL_STORAGE_TODO_KEY);
    if (!storageTodos) {
      return;
    }
    setToDoCreated(JSON.parse(storageTodos));
  };

  /**
   *
   * @param todos
   */

  const loadTodoSinceLocalStorage = (todos: ITodoElement[]): void => {
    localStorage.setItem("todosCreacted", JSON.stringify(todos));
  };

  /**
   *
   *@function handleAddTask
   * @param e
   */

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDoField.trim() === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      description: toDoField,
      completed: false,
    };
    setToDoCreated((previousTodos) => {
      const updateTodo = [...previousTodos, newTodo].reverse();
      loadTodoSinceLocalStorage(updateTodo);
      return updateTodo;
    });
    setToDoField("");
  };

  /**
   *
   * @param taskToEdit
   */
  const selectedTaskToEdit = (taskToEdit: string) => {
    setSelectedTask(taskToEdit);
    setToDoField(taskToEdit);
    setWantToEditTask(true);
  };

  /**
   * @handleUpdateTask
   * @param e
   * @returns
   */
  const handleUpdateTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDoField.trim() === "") {
      return;
    }

    const updatedTodos = toDoCreated.map((todo) => {
      if (todo.description === selectedTask) {
        return { ...todo, description: toDoField };
      }
      return todo;
    });

    setToDoCreated(updatedTodos);
    loadTodoSinceLocalStorage(updatedTodos);
    setToDoField("");
    setWantToEditTask(false);
    setSelectedTask("");
  };

  /**
   *
   * @param todoToDeleteId
   */

  const handleDeleteTodo = (todoToDeleteId: number): void => {
    const toDoDeleted = toDoCreated.filter(
      (toDoSelectedId) => toDoSelectedId.id !== todoToDeleteId
    );

    loadTodoSinceLocalStorage(toDoDeleted);
    storeToDosInLocalStorage();
  };

  /**
   *
   * @param TodoId
   */

  const toggleToDo = (TodoId: number) => {
    const completedTask = toDoCreated.map((todo) => {
      if (todo.id === TodoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setToDoCreated(completedTask);
    loadTodoSinceLocalStorage(completedTask);
    storeToDosInLocalStorage();
  };

  useEffect(() => {
    storeToDosInLocalStorage();
  }, []);

  return (
    <div className="flex items-center flex-col bg-gray-100 h-full min-h-screen">
      <span className="text-gray-600 text-xl mt-6 ">
        Just une pratique de React && TypeScript
      </span>

      <div className="mb-4">
        <InputField
          toDoField={toDoField}
          setToDoField={setToDoField}
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          wantToEditTask={wantToEditTask}
          selectedTask={selectedTask}
        />
      </div>

      <div className="w-[334px]">
        <div className="w-full flex items-center mb-5 gap-8 border-b-2 border-gray-300">
          {tabElement.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.label)}
              className={`pb-1 transition-all duration-300 border-b-2 text-nowrap ${
                item.label === activeTab
                  ? "text-orange-600 border-b-orange-600 font-semibold"
                  : "text-gray-500 border-b-transparent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <ToDoListItem
          toDos={filteredTodos}
          setToDoCreated={setToDoCreated}
          handleDeleteTodo={handleDeleteTodo}
          selectedTaskToEdit={selectedTaskToEdit}
          toggleToDo={toggleToDo}
        />
      </div>
    </div>
  );
}
