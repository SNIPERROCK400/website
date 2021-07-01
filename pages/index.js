import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../components/Navebar';
import Header from "../components/Header";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Header />
     
      <Navigation />
      <h1>Home</h1>
       <Footer />
    </div>
   
  );
}

export default Home;