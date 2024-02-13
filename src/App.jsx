import './App.css';
import { Slider } from '../src/components/Slider/Slider'
import photo_1 from '../src/img/1.jpeg'
import photo_2 from '../src/img/2.jpeg'
import photo_3 from '../src/img/3.jpeg'
import photo_4 from '../src/img/4.jpeg'
import photo_5 from'../src/img/5.jpeg'
import photo_6 from '../src/img/6.png'

function App() {
  const sliderData = [
    {
      img: photo_1
    },
    {
      img: photo_2
    },
    {
      img: photo_3
    },
    {
      img: photo_4
    },
    {
      img: photo_5
    },
    {
      img: photo_6
    },
  ]


  return (
    <div className="App">
      <div className="content">
         <Slider data={sliderData} />
      </div>
    </div>
  );
}

export default App;
