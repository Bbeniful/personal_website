import logo from './logo.svg';
import './App.css';
import './elements_style.css'
import TopSide from './components/top_side.js';
import BottoomSide from './components/bottom_left.js'
import CenterImage from './components/center_circle_image';

function App() {
  return (
    <div>
      <TopSide/>
      <BottoomSide/>
    </div>
  );
}

export default App;
