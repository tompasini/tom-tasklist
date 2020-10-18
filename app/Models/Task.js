import { generateId } from "../Utils/GenerateId.js";

export default class Task {
  constructor(data) {
    this.name = data.name
    this.id = data.id || generateId();
    this.listId = data.listId
  }


  get Template() {

    return /*html*/`<div class= "col-12">
    <h3>${this.name} <button class="btn-gamer close" onclick="app.taskController.delete('${this.id}')"><span aria-hidden="true" >&times;</span></button></h3>
    </div>
    `
  }

}
