import "./App.css";
import ActiveAuctions from "./components/ActiveAuctions/ActiveAuctions";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <>
        <Navbar></Navbar>

        <Banner></Banner>


        <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
            />

            <ActiveAuctions></ActiveAuctions>


            <Footer></Footer>

      
    </>
  )
}

export default App
