import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Article 
          date="11/12/20"
          title="On the Street in Brooklyn"
          imageSrc="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"
          imageAlt="On the Street in Brooklyn"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        />
        <Article 
          date="11/11/20"
          title="Vintage in Vogue"
          imageSrc="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"
          imageAlt="Vintage in Vogue"
          content="Selfies swag forage, viral wayfarers tote bag. Pinterest meditation master cleanse, chambray leggings blue bottle art party ethical fingerstache kickstarter."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
