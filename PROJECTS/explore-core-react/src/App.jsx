import "./App.css";
import ToDo from "./Todo"




function App() {


	return (
		<>
			
			<h1>React Core Concepts</h1>
            
            <ToDo task="Learn React" isDone ={true}></ToDo>
            <ToDo task="Learn JS" isDone ={false}></ToDo>
            <ToDo task="Learn Django" isDone ={true}></ToDo>
            
        
            


		</>
	);
}


function Player({name,runs=0}){
    return (
        <div className="player">
            <h3>Player</h3>

            <p>
                Name: {name}
            </p>

            <p>
                Runs: {runs}
            </p>
        </div>
    )
}






function Student() {
    return (
        <div className="student">

            <h3>Student</h3>
            <p>Name: </p>
            <p>Dept: </p>
        </div>
    )
}




function Developer(props) {

    console.log(props);

    const name = props.name;
    const tech = props.tech;
    

    return (
        <div style={
            {
                color:'white',
                fontSize: '32px',
                margin: '10px',
                border: '3px solid blue',
                borderRadius: '20px',
            }
        }>
            <h3>Developer</h3>

            <p>
                Name: {name}
            </p>

            <p>
                Tech: {tech} 
            </p>
        </div>
    )
}







function Person() {
    const age = 17;
    const name = 'Jolil';

    const personStyle = {
        color: 'red',
        fontSize : '24px',
        textAlign: 'left', 
    }

    return (

        <p style={personStyle}>I am new person {name} . I am {age} years old. </p>
    )
}


function Sports () {
    return (
        <div>
            <h3>Cricket</h3>

            <p>
                Playing and loosing.
            </p>
        </div>
    )
}














export default App;









