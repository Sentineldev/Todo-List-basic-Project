export default function update_storage(data){
    window.localStorage.setItem("TASKS",JSON.stringify(data))
}


export function get_tasks(){
    let tasks = window.localStorage.getItem("TASKS") || []
    return tasks
}
