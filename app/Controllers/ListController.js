import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template

}

//Public
export default class ListController {
  constructor() {
    ProxyState.on("lists", _drawLists)
    ProxyState.on("tasks", _drawLists)
    _drawLists();
  }

  add() {
    event.preventDefault()
    let form = event.target
    let rawList = {
      // @ts-ignore
      title: form.title.value
    }

    listService.add(rawList)


    // @ts-ignore
    form.reset()
  }

  delete(id) {
    if (window.confirm("Are you sure you want to delete this list?") == true) {
      listService.delete(id)
    } else {
      return
    }
  }

}
