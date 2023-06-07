
import './App.css';
import DownPlayEnjoy from './Download-Play-enjoy/DownPlayEnjoy';
import Header from './Header/Header';
import Howworks from './How-it-works/how-it-works';
import Newsletter_section from './Newsletter/Newsletter-section';
import BG from './bg/bg';
function App() {
  return (
    <div className="App">
        <Header />
        <BG/>
        <Howworks/>
        <DownPlayEnjoy/>
        <Newsletter_section/>
    </div>
  );
}

export default App;
