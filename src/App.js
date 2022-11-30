import './App.css';
import { Route,Routes,Navigate, useLocation} from 'react-router-dom';
//Components
import Store from './components/Store';
import ProductDetails from './components/shared/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
import Silder from './components/Silder';
import Footer from './components/shared/Footer';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import CardContextProvider from './context/CardContextProvider';


function App() {
 const location=useLocation()
  return (
    
    
    <ProductContextProvider>
  <CardContextProvider>

    <Navbar/>
    {
      location.pathname==='/products'&&<Silder/>
    }
    
  <Routes>
    <Route path='/products/:id' element={<ProductDetails/>}/>
    <Route path='/products'  element={<Store/>}/>
    <Route path='/cart' element={<ShopCart/>}/>
    <Route
        path="*"
        element={<Navigate to="/products" replace />}
    />
  </Routes>
  {
      location.pathname==='/products'&& <Footer/>
    }
 
  </CardContextProvider>
 </ProductContextProvider>
  );
}

export default App;
