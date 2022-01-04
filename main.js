


//variables

var tasks = [];
var form_create_task = document.querySelector('#create-form');

//funciones



function create_task(title, date) {
	const task = {
		title,
		date
	}
	return task
}

function add_task(title, date) {
	var new_task = create_task(title, date);
	tasks.push(new_task)
}

form_create_task.onsubmit = (e) => {
	e.preventDefault()
	var title = document.querySelector('#input-create-title').value;
	var date = document.querySelector('#input-create-date').value;
	if (title != "" && date != ''){
		add_task(title, date)
	}
	console.log(tasks);
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