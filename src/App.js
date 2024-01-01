import logo from './logo.svg';
import './style/App.css';
import './style/main_style.css';
import './style/elements_style.css'
import TopSide from './components/top_side.js';
import BottoomSide from './components/bottom_left.js'
import CenterImage from './components/center_circle_image';
import UnderDev from './components/under_dev';
import Playground from './components/playground';
import RoundedBox from './components/rounded_element';

function App() {
  return (
    <div id='main_container'>
      <Playground/>
    </div>
  );
}

export default App;
