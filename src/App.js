import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Particles from 'react-particles-js';
import Aboutme from './components/Aboutme'

function App() {
  return (
    <>
    <Particles
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
        }
      }}
    />
      <Navbar/>
      <Hero/>
      <Aboutme/>
    </>
  );
}

export default App;
