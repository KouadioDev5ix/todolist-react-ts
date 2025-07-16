import React from "react";

interface InputCompentProps {
  setInputFieldValue: React.Dispatch<React.SetStateAction<string>>;
  InputFieldValue: string;
  wantToEditTodo: boolean;
  handleAddSingleTodo: (e: React.FocusEvent) => void;
  handleUpdateTodo: (e: React.FocusEvent) => void;
}
export default function InputComponent({
  InputFieldValue,
  setInputFieldValue,
  wantToEditTodo,
  handleAddSingleTodo,
  handleUpdateTodo,
}: InputCompentProps) {
  return (
    <div className="relative mt-7">
      <form onSubmit={wantToEditTodo ? handleUpdateTodo : handleAddSingleTodo}>
        <input
          type="text"
          value={InputFieldValue}
          placeholder="Ajouter une tâche..."
          className="flex items-center px-2 py-2 w-[350px] border border-blue-400 focus:outline-blue-600 rounded-md text-black text-sm"
          onChange={(e) => setInputFieldValue(e.target.value)}
        />

        <button
          className="absolute right-0.5  top-0.5 px-2 py-1 text-white bg-green-500 rounded-md"
          type="submit"
        >
          {wantToEditTodo ? "Modifier" : "Ajouter"}
        </button>
      </form>
    </div>
  );
}
