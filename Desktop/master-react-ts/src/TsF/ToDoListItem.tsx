import React from "react";
import type { ITodoElement } from "../Interfaces/ITodoElment";
import deleteTOdoIcon from "../assets/TrashDelete.svg";
import updateToDoIcon from "../assets/MarkDown.svg";

interface ToDoListItemProps {
  toDos: ITodoElement[];
  setToDoCreated: React.Dispatch<React.SetStateAction<ITodoElement[]>>;
  handleDeleteTodo: (todoToDeleteId: number) => void;
  selectedTaskToEdit: (taskToEdit: string) => void;
  toggleToDo: (TodoId: number) => void;
}

export default function ToDoListItem({
  toDos,

  handleDeleteTodo,
  selectedTaskToEdit,
  toggleToDo,
}: ToDoListItemProps) {
  return (
    <div className="h-96 overflow-y-auto no-scollbar">
      {toDos.map((item) => (
        <div
          key={item.id}
          className="flex w-[370px] my-2 px-2 py-2 rounded-md items-center justify-between gap-4 border bg-gray-500 "
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id={item.description}
              name={item.description}
              className="mt-1 cursor-pointer "
              checked={item.completed ? true : false}
              onChange={() => toggleToDo(item.id)}
            />
            <label
              htmlFor={item.description}
              className={`cursor-pointer ${
                item.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {item.description}
            </label>
          </div>
          <button className="flex items-center gap-1">
            <img
              src={deleteTOdoIcon}
              alt="delete icon"
              className="w-5 h-5 bg-red-600 rounded-md"
              onClick={() => handleDeleteTodo(item.id)}
            />

            <img
              src={updateToDoIcon}
              alt="pencil icon"
              onClick={() => selectedTaskToEdit(item.description)}
            />
          </button>
        </div>
      ))}

      {toDos.length === 0 && (
        <div>
          <span className="text-gray-500 font-medium text-lg">
            Aucune tâche disponible...
          </span>
        </div>
      )}
    </div>
  );
}
