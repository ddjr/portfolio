import './App.scss';
import Explorer from './components/Explorer';
import Filenames from './components/Filenames';
import Footer from './components/Footer';
import Home from './components/Home';
import IconAside from './components/IconAside';
import Main from './components/Main';
import Navbar from './components/Navbar';

// const filenames = document.querySelector(".filenames__item");
// const project = document.querySelector('.project'); 
// const projectOptions = {};
// const projectObserver = new IntersectionObserver((entries, projectObserver) => {
//   entries.forEach(entry => {
//     console.log(entry.target);
//   })
// }, projectOptions);
// projectObserver.observe(project);


function App() {

  return (
    <div className="app">
      <Navbar />
      <div className='main'>
        <IconAside />
        <Explorer />
        <div className='wrapper-main'>
          <Filenames />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
