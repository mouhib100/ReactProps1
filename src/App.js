import './App.css';
import CustomNavBar from './components/CustomNav/CustomNav'
import CustomTable from './components/ui/CustomTable/CustomTable'
import {data} from './data'
function App() {
  return (
    <div className="App">
       <CustomNavBar />
       <CustomTable data={data} />
    </div>
  );
}

export default App;
