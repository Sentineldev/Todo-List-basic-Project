


//variables




//funciones



function create_task(title, date) {
	const task = {
		title,
		date
	}
	return task
}

//Actualiza la data que este en el localstorage
/*function update_storage(data){
    window.localStorage.setItem("TASKS",JSON.stringify(data))
}

//Obtiene los datos guardados en el localstorage con la key "TASKS"
function get_tasks(){
    let tasks = window.localStorage.getItem("TASKS") || []
    return tasks
}*/

//eventos