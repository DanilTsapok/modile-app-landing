
import './App.css';
import DownPlayEnjoy from './components/Download-Play-enjoy/DownPlayEnjoy';
import Header from './components/Header/Header';
import Howworks from './components/How-it-works/how-it-works';
import Newsletter_section from './components/Newsletter/Newsletter-section';
import BG from './components/bg/bg';
import Footer from './components/footer/footer';
import Scroll from './components/scroll-up/scroll';



const App=()=> {
  return (
    <div className="App">
        <Header />
        <BG />
        <Howworks/>
        <DownPlayEnjoy/>
        <Newsletter_section/>
        <Footer />
        <Scroll />
    </div>
  );
}


export default App;
