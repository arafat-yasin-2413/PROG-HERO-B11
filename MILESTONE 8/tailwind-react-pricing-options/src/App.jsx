import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/Navbar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultsChart/ResultChart";
import { LineChart } from "lucide-react";



const pricingPromise = fetch('pricingData.json').then(res=> res.json())


function App() {
	return (
		<>
			<header>

                <NavBar></NavBar>
                


            </header>


            <main>

                <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                    
                    <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

                </Suspense>



                <ResultChart></ResultChart>
                
            </main>
		</>
	);
}

export default App;
