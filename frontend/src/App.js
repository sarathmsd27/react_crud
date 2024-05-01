import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Datalist from './Component/Datalist';
import AddData from "./Component/AddData";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from './Component/Update';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Datalist/>}/>
      <Route path='/addData' element={<AddData/>}/>
      <Route path='/update/:id' element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
