import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"

//Public
class ListService {

  constructor() {
    ProxyState.on("lists", saveState)
  }
  add(rawList) {
    let lists = ProxyState.lists
    lists.push(new List(rawList))
    ProxyState.lists = lists
  }


  delete(id) {
    let lists = ProxyState.lists
    let tasks = ProxyState.tasks
    let newLists = lists.filter(l => l.id != id)
    let newTasks = tasks.filter(t => t.listId != id)
    ProxyState.lists = newLists
    ProxyState.tasks = newTasks
  }

}

export const listService = new ListService();
