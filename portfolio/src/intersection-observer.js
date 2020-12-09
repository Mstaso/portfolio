import Navbar from './components/navbar';
import Form from './components/form';
import About from './components/about';
import Projectcontainer from './containers/projectcontainer'

const header = document.querySelector('header');
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
      } else {
        header.classList.remove('nav-scrolled');
      }
    });
}, sectionOneOptions);



  sectionOneObserver.observe(sectionOne)

