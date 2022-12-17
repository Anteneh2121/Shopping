import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    < >
    <Header/>
    <main>
      <container>
<HomeScreen/>     
 </container>
      </main>
      <Footer/>
    </>
  )
}

export default App;
