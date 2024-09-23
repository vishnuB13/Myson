import CardComponent from './Components/CardComponents';
import HeaderComponent from './Components/HeaderComponent';
import CategoryComponents from './Components/CategoryComponents';
import BannerSlider from './Components/BannerSlider';
// import Testimonial from './Components/TestimonialComponent';
import Footer from './Components/FooterComponent';
// import ProductPage from './Components/ProductPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <CategoryComponents />
      <BannerSlider />
      <CardComponent />
      {/* <Testimonial /> */}
      {/* <ProductPage /> */}
      <Footer />

    </div>
  );
}

export default App;
