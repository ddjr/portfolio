import './App.scss';
import Explorer from './components/Explorer';
import Filenames from './components/Filenames';
import Footer from './components/Footer';
import Home from './components/Home';
import IconAside from './components/IconAside';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='main'>
        <IconAside />
        <Explorer />
        <div className='wrapper-main'>
          <Filenames />
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
