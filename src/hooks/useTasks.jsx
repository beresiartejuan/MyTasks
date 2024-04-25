import { create } from 'zustand'

const useTasks = create((set, get) => ({
    tasks: [],
    addTask: () => { }
}));

export default useTasks;