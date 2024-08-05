"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Tasks = () => {
  const tasks = useQuery(api.tasks.get);

  return (
    <div>
      {tasks?.map((task, index) => <p key={index}>{JSON.stringify(task)}</p>)}
    </div>
  );
};

export default Tasks;
