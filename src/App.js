import './App.css';
import Fetchrepo from './components/Fetchrepo';
import { Header } from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Fetchrepo />
       <Footer/>
    </div>
  );
}

export default App;
