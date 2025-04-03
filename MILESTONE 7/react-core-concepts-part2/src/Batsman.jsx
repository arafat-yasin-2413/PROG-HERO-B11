import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0);
    const [countFour, setCountFour] = useState(0);
    const [countSix, setCountSix] = useState(0);

    const handleSingle = () =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);

    }

    const handleFour = () => {
        const updatedRuns = runs + 4;

        const totalFours = countFour + 1;
        setCountFour(totalFours);
        
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;

        const totalSix = countSix + 1;
        setCountSix(totalSix);

        setRuns (updatedRuns);
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>


            {
                runs > 50 && <p>You have scored 50.</p>
            }

            <h1>Score: {runs} </h1>

            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>


            <p>
                Total Fours : {countFour}
            </p>

            <p>
                Total Sixes : {countSix}
            </p>

        </div>
    )
}