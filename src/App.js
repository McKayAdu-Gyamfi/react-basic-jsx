import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import Image from './components/image';
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Content/>
      <Image />
      <Footer />
    </div>
  );
}

export default App;
//What makes your imported file defined but never read in app.js?