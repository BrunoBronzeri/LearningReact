import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import NavigationBar from './components/layout/NavigationBar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <NavigationBar /> {/*tanto o navigation bar quanto o footer são compnentes que queremos que sejm fixos */}
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route path='/contato' element={<Contato />}>
        </Route>
        <Route path='/empresa' element={<Empresa />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
