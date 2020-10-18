import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TaskService {

  constructor() {
    console.log("hello from task service")
    ProxyState.on("tasks", saveState)
  }

  add(rawTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(rawTask))
    ProxyState.tasks = tasks
    console.log(ProxyState.tasks)
  }

  delete(id) {
    let tasks = ProxyState.tasks
    let newTasks = tasks.filter(t => t.id != id)
    ProxyState.tasks = newTasks
    console.log(ProxyState.tasks)
  }
}

export const taskService = new TaskService()