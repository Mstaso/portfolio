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
      <Projectcontainer />
     
      <Form />

      
     <footer>

     </footer>
    </div>
  );
}

export default App;
