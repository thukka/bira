import { useEffect, useState } from "react";
import type { Task } from "../../../interface/task.interface";

export const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    const getTasks = async (): Promise<Task[]> => {
      try {
        const res = await fetch("/api/task", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("Response status: " + res.status);
        }

        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }

      return [];
    };

    getTasks();
  }, []);

  console.log("tasks: ", tasks);

  return (
    <div>
      {tasks?.map((x) => (
        <p>
          {x.assigned} {x.subject}<br />
        </p>
      ))}
    </div>
  );
};
