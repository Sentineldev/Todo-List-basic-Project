function create_task(title, date) {
	const task = {
		title,
		date
	}
	return task
}

console.log(create_task('Follar', 'Hoy'));