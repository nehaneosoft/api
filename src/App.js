import './App.css';
import AddData from './components/AddData';
import AllData from './components/AllData';
import Head from './components/Head';
import Notfound from './components/Notfound';
import Home from './components/Home';
import EditData from './components/EditData';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
  
   <Head />
   <Switch>
    
    <Route path="/" component={Home} exact/>
    <Route path ="/AllData" component={AllData} exact/>
    <Route path = "/AddData" component={AddData} exact />
    <Route path="/edit/:id" component={EditData} exact />
    <Route component={Notfound} />
    </Switch>
   </BrowserRouter>
  
   </>
  );
}

export default App;
