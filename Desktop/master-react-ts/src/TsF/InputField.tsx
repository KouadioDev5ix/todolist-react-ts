interface TodoProps {
  toDoField: string;
  setToDoField: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
  handleUpdateTask: (e: React.FormEvent) => void;
  wantToEditTask: boolean;
  selectedTask: string;
}

export default function InputField({
  toDoField,
  setToDoField,
  handleAddTask,
  handleUpdateTask,
  wantToEditTask,
  selectedTask,
}: TodoProps) {
  return (
    <div>
      <form
        className="relative mt-5 w-full"
        onSubmit={wantToEditTask ? handleUpdateTask : handleAddTask}
      >
        <input
          value={toDoField}
          onChange={(e) => setToDoField(e.target.value)}
          type="text"
          placeholder="Ajouter une tâche..."
          className="flex items-center px-2 py-2 w-[350px] border border-orange-400 focus:outline-orange-600 rounded-md text-sm"
        />

        <button
          type="submit"
          className="absolute right-0.5 top-0.5 bottom-0.5 bg-black px-2 py-1 rounded-md text-white active:scale(0.8)"
        >
          {wantToEditTask ? "Modifier" : "Ajouter"}
        </button>
      </form>
    </div>
  );
}
