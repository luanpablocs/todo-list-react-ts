
import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";

import { ITask } from "./Interfaces";

import './styles/styles.css'

function App() {

	const [task, setTask] = useState("")

	const [todoList, setTodoList] = useState<ITask[]>([])

	function addTask(): void{

		const idRandom = (num: number) => Math.floor(Math.random() * num)
		const newTask = { id: idRandom(999999999), nameTask: task }

		setTodoList([...todoList, newTask])

	}

	function deleteTask(DeleteTaskById: number): void {
		setTodoList(todoList.filter((taskName) => taskName.id !== DeleteTaskById))
	}

	return (
		<div className="App">

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					className="input"
					value={task}
					onChange={(event) => setTask(event.target.value)}
				/>

				<button type="submit" onClick={addTask} className="btn-header">Adicionar Task</button>
			</header>
			
			<div className="line"></div>

			{todoList.map((task, key) => (
				<TodoTask key={key} task={task} deleteTask={deleteTask}/>
			))}

		</div>
	);
}

export default App;
