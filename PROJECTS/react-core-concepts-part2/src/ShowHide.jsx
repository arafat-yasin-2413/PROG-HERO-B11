import { useState } from "react";

export default function ShowHideText() {
    
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleText=() => {
        setIsVisible(!isVisible);
    } ;
    
    
    return (
        <div>
            <button onClick={toggleText}>
                {
                    isVisible ? "Hide Text" : "Show Text"
                }
            </button>


            {
                isVisible && (
                    <p>Hello, React Learner ! </p>
                )
            }



            
        </div>
    )
}