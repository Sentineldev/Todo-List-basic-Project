


//variables

var tasks = [];
var form_create_task = document.querySelector('#create-form');
var task_table_body = document.querySelector('#task-table-body');
const model_box = document.querySelector(".model-box")



//funciones

function passToArray(HTMLCollection){
	let array = []
	for(let i = 0;i<HTMLCollection.length;i++){
		array.push(task_table_body.children[i])
	}
	return array
}

function getIndex(htmlParent){
	//COnvertir la collecion html generada por la tabla y convertirlo a una lista
	const array = passToArray(task_table_body.children)
	return array.indexOf(htmlParent)
}

function modify_task(e){

	//obtener el elemento seleccionado y su elemento padre
	const selected_element_parent = e.srcElement.parentElement

	
	//obtener el indice del elemento en el array de elmentos html para obtener el indice del objeto en el array de tasks
	const index = getIndex(selected_element_parent)

	//Mostrar la ventana emergente para modificar
	model_box.style.display = "flex"


	//obtener el formulario y los inputs
	const modify_form = document.querySelector("#modify-form")
	const input_modify_title = document.querySelector("#input_modify_title")
	const input_modify_date = document.querySelector("#input_modify_date")
	

	//establecer los valores de los inputs con los valores en el objeto task
	input_modify_title.value = selected_element_parent.children[0].innerText
	input_modify_date.value = selected_element_parent.children[1].innerText

	//Ocultar la ventana emergente modificar el objeto y modificar el elemento en la tabla html
	modify_form.onsubmit = (e)=>{
		e.preventDefault()
		
		tasks[index].title =  input_modify_title.value
		tasks[index].date = input_modify_date.value
		model_box.style.display = "none"
		selected_element_parent.children[0].innerText = tasks[index].title
		selected_element_parent.children[1].innerText = tasks[index].date
	}

}

function delete_task(e){
	//Obtener el padre del elemento seleccionado
	const selected_element_parent = e.srcElement.parentElement

	//obtener el indice del elemento en  el html
	const index = getIndex(selected_element_parent)

	//remover del array task y del html.
	task_table_body.removeChild(selected_element_parent)
	tasks.splice(index,1)

}

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

function update_table(){
	var last_table = tasks.length - 1;
	var new_table = `
		<tr>
    		<td>${tasks[last_table]['title']}</td>
    		<td>${tasks[last_table]['date']}</td>
    		<td>Modificar</td>
    		<td>Eliminar</td>
    	</tr>
	`
	task_table_body.insertAdjacentHTML('beforeend', new_table)
	const last_row = task_table_body.lastElementChild
	last_row.children[2].addEventListener("click",modify_task)
	last_row.children[3].addEventListener("click",delete_task)
}

form_create_task.onsubmit = (e) => {
	e.preventDefault()
	var title = document.querySelector('#input-create-title').value;
	var date = document.querySelector('#input-create-date').value;
	if (title != '' && date != ''){
		add_task(title, date)
	}
	update_table()
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