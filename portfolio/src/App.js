import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import About from './components/about';
import Projectcontainer from './containers/projectcontainer'


function App() {

  return (
    <div className="App">
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/> 
      <Navbar />
      <About />
      <div id="project" class="divider">
        <h1>Projects</h1>
        </div>    
      <Projectcontainer />
      <div id="contact" class="divider">
        <h1>Contact</h1>
        </div>
      <Form />

      
     <footer>

     </footer>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', (event) => {

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const sectionOne = document.querySelector('.home-hero');

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"

 };

const sectionOneObserver = new IntersectionObserver (function(
  entries, sectionOneObserver
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add('nav-scrolled');
        nav.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
        nav.classList.remove('nav-scrolled');
      }
    });
}, sectionOneOptions);



  sectionOneObserver.observe(sectionOne)
  
})



  



export default App;
