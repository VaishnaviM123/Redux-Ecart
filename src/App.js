import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import PNF from './pages/PNF';
import SingleView from './pages/SingleView';
import Notification from './components/notification/Notification';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Landing></Landing>}></Route>
          <Route path='/wish-list' element={<WishList></WishList>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/singleview/:id' element={<SingleView></SingleView>}></Route>
          <Route path='/*' element={<PNF></PNF>}></Route>
        </Routes>
        <Footer></Footer>
        <Notification/>
    </div>
  );
}

export default App;
