import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"

export default class TaskController {
  constructor() {
    console.log("hello from task controller")
  }

  add(listId) {
    event.preventDefault()
    let form = event.target
    let rawTask = {
      // @ts-ignore
      name: form.taskName.value,
      listId: listId
    }
    taskService.add(rawTask)

    // @ts-ignore
    form.reset()
  }

  delete(id) {
    if (window.confirm("Are you sure you want to delete this task?") == true) {
      taskService.delete(id)
    } else {
      return
    }
  }

  complete(id) {
    taskService.complete(id)
  }
}