import {get_tasks} from "./localstorage.js"
import update_storage from "./localstorage.js"
let tasks;



window.onload = ()=>{
    tasks = get_tasks()
}

