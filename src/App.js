
// import './App.css';
import Layout from './Components/Layout';
import Women from './Women/Women';
import Men from './pages/Men';
import Kids from './Kids/Kids';
import Indie from './pages/Indie';
import payment from './pages/payment';
import Outlet from './Components/Outlet';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Singleproduct from './pages/Singleproduct';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Outlet/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>
      <Route path='/Terms' element={<Terms/>}/>
      <Route path='/payment' element={<Terms/>}/>

      <Route path='/Women' element={<Women/>}/>
      <Route path='/Kids' element={<Kids/>}/>
      <Route path='/Indie' element={<Indie/>}/>
      <Route path='/product/:id' element={<Singleproduct/>}/>

      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
