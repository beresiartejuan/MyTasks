import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuid } from "uuid";

const useTasks = create(
    persist((set, get) => ({
        tasks: [],
        addTask: (title, body) => {
            set((state) => ({
                tasks: [{ title, body, id: uuid(), checked: false }, ...state.tasks]
            }))
        },
        clear: () => {
            set(() => ({
                tasks: []
            }));
        },
        update: (id, values, callback) => {
            set((state) => ({
                tasks: state.tasks.map(task => {
                    if (task.id !== id) return task;

                    return {
                        ...task,
                        ...values
                    }
                })
            }))

            if (callback) callback(get().get(id))
        },
        get: (id) => {
            return get().tasks.find((task) => task.id == id);
        },
        destroy: (id) => {
            const new_task = [];

            get().tasks.forEach(task => {
                if (task.id !== id) new_task.push(task);
            });

            set(() => ({
                tasks: new_task
            }));
        }
    }),
        {
            name: "_tasks_store",
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export default useTasks;