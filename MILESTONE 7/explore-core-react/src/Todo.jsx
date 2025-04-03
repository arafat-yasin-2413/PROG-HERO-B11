export default function ToDo({task,isDone}){

    if(isDone === true) {
        return <p>Done : {task}</p>
    }

    else {
        return <p>Not done {task} </p>
    }
}