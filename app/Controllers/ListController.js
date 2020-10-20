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
    console.log(form)
    // @ts-ignore
    let colorValue = document.getElementById("listColor").value
    console.log(colorValue)
    let rawList = {
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      color: colorValue
    }

    listService.add(rawList)


    // @ts-ignore
    form.reset()
  }

  delete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        listService.delete(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


    //   if (window.confirm("Are you sure you want to delete this list?") == true) {
    //     listService.delete(id)
    //   } else {
    //     return
    //   }
    // }

  }
}
