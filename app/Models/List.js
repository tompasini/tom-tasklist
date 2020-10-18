import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class List {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId();
  }


  get Template() {
    return /*html*/ `
    <div class="col-md-3 mt-3">
    <div class="card text-light card-bg-gamer-1 shadow-lg p-3 mb-5 rounded">
        <div class="card-body">
            <h2 class="card-title">${this.title}  <button class="btn-gamer close" onclick="app.listController.delete('${this.id}')"><span aria-hidden="true" >&times;</span></button></h2>
            <form onsubmit= "app.taskController.add('${this.id}')">
            <div class="form-group form-inline">
              <input type="text"
                class="form-control" name="taskName" aria-describedby="helpId" placeholder="Enter task here">
            </div>
            <button class = "btn-gamer" type="submit">Create Task</button>
            </form>
            <div class="row">
            ${this.Tasks}
            </div>

        </div>
    </div>
</div>
    `
  }

  get Tasks() {
    let template = ''
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }




  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
