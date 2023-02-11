<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
=======
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { CompleteOrderPage } from './pages/Checkout/index';
import { DefaultLayout } from './layouts/DefaultLayout';
export function Router(){
    return(
        <Routes>
            <Route path='/' element = {<DefaultLayout/>}>
            <Route path='/' element ={<HomePage/>}/>
            <Route path='/completeOrder' element={<CompleteOrderPage/>}/>
            </Route>

          
        </Routes>
    )
}
>>>>>>> 739814d8f47a713fb92297cfaa48e6f4f0ee0408
