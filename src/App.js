// import logo from './logo.svg';
import './App.css';
/* import shortid from 'shortid'
import { nanoid } from 'nanoid';
import Rates from "./components/Rates";
import Search from "./components/Search";
import Widgets from "./components/Widgets";
import Banner from "./components/Banner";
import News from "./components/News";
import * as data from "./data/data";
*/
import Watches from "./Watches/Watches";
  
//console.log('дата', new Date(Date.now()).toLocaleString());
    function App() {
      return (
        <div className="App">
          <Watches />
        </div>
      );
    }

export default App;