
import './App.css'
import Footer from './footer';
import Menu from './menu';
import Header from './header';


import { pizzaData } from './Database';


function App() {
  return <div className='container'>
      <Header />
      <Menu pizzaData = {pizzaData}/>
      <Footer />
  </div>
}


export default App
