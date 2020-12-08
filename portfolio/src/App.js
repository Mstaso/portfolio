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
      <div class="divider">
        <h1>Projects</h1>
        </div>    
      <Projectcontainer />
      <div class="divider">
        <h1>Contact</h1>
        </div>
      <Form />

      
     <footer>

     </footer>
    </div>
  );
}

export default App;
