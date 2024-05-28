import './App.css';
import Sidebar from './Components/Sidebar';

import Chart from './Components/Chart';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';

import Footer from './Components/Footer.jsx';
import Table from './Components/Table.jsx';



function App() {
  return (
    <div className="app-container">
      <Sidebar />
      
      <div className="main-content">
      
      <NavBar></NavBar>
        <div className="chart-section">
          <Chart />
          
     
        </div>
        <div className="table-section">
          <Table></Table>
         
          </div>
         <div>
         <Footer></Footer>
         </div>
     
          
      </div>
    
    </div>
  );
}

export default App;
