import React from "react";
import type { ITodo } from "../Interface/ITodo";

import deleteIcon from "../../assets/TrashDelete.svg";
import editIcon from "../../assets/MarkDown.svg";

interface todoListElementProps {
  toDoCreated: ITodo[];
  handleDeleteTodo: (toDoToDeleteId: number) => void;
  selectToDoToEdit: (toDoToEdit: string) => void;
  handleToggleToDo: (toDoId: number) => void;
  activeBtn: string;
}
export default function TodoListElment({
  toDoCreated,
  handleDeleteTodo,
  selectToDoToEdit,
  handleToggleToDo,
  activeBtn,
}: todoListElementProps) {
  return (
    <div className="h-72 overflow-y-auto">
      {toDoCreated.map((t) => (
        <div
          key={t.id}
          className=" p-2 w-[350px] border border-gray-300 bg-green-100 rounded-md  my-3"
        >
          <div className="flex items-center justify-between  ">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => handleToggleToDo(t.id)}
                checked={t.completed ? true : false}
                id={t.content}
                name={t.content}
                className="mt-1 cursor-pointer"
              />
              <label
                htmlFor={t.content}
                className={`${
                  t.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800 font-semibold "
                } cursor-pointer`}
              >
                {t.content}
              </label>
            </div>
            <div className="flex items-center gap-1">
              <img
                src={deleteIcon}
                alt=""
                className="w-6 h-6 bg-red-600 rounded-md cursor-pointer"
                onClick={() => handleDeleteTodo(t.id)}
              />
              <img
                src={editIcon}
                alt=""
                onClick={() => selectToDoToEdit(t.content)}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
      {/* MESSAGE INFO */}
      <div className="message__info">
        {toDoCreated.length === 0 && (
          <div>
            {activeBtn === "Terminées" ? (
              <p className="text-lg font-semibold text-gray-600">
                Aucune tâche terminée ...
              </p>
            ) : activeBtn === "Inachévées" ? (
              <p className="text-lg font-semibold text-gray-600">
                Aucune tâche inachévée ...
              </p>
            ) : (
              <p className="text-lg font-semibold text-gray-600">
                Aucune tâche disponible ...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
