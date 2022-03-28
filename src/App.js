import './App.scss';
import Explorer from './components/Explorer';
import Filenames from './components/Filenames';
import Footer from './components/Footer';
import IconAside from './components/IconAside';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='main'>
        <IconAside />
        <Explorer />
        <Filenames />
      </div>
      <Footer />
    </div>
  );
}

export default App;
