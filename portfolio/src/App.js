import './App.css';
import Navbar from './components/navbar';
import Projectcontainer from './containers/projectcontainer'


function App() {
  return (
    <div className="App">
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/> 
      <Navbar />
      <Projectcontainer />
      <section class="home-hero">
      {/* <a href='' class='button'>View Projects</a> */}
      </section>
      <div class="content">
    
      </div> 
      {/* <Form /> */}
     <footer>

     </footer>
    </div>
  );
}

export default App;
