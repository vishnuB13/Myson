import CardComponent from './Components/CardComponents';
import HeaderComponent from './Components/HeaderComponent';
import CategoryComponents from './Components/CategoryComponents';
import BannerSlider from './Components/BannerSlider';
import Testimonial from './Components/TestimonialComponent';
import Footer from './Components/FooterComponent';
import FormComponent from './Components/FormComponent';
import OfferComponent from './Components/OfferComponent';

// import ProductPage from './Components/ProductPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <FormComponent />
      <HeaderComponent />
      <CategoryComponents />
      <BannerSlider />
      <CardComponent title="Best Sellers" />
      <CardComponent title="Trending Products" />  
      <OfferComponent />
      <CardComponent title="New Arrival" />
      <CardComponent title="Recently Visited" />

      <Testimonial />

      {/* <ProductPage /> */}
       


      <Footer />

    </div>
  );
}

export default App;
