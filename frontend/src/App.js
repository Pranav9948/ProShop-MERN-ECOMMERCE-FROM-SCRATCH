import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from 'react-bootstrap/esm/Container';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Header/>
     <main className='py-4'>
    
      <Container>
        
        <Outlet/>

       </Container>

     </main>
    <Footer/>
    </div>
  );
}

export default App;
