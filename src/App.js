import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import ProductCard from "./components/ProductCard";
import ProductsGrid from "./components/ProductsGrid";

const products = [
    <ProductCard title={"React JS"}
                   shortDescription={"awesome react courses"}
                   price={"399.99"}
                   salePrice={"299.99"}/>,
    <ProductCard title={"React JS"}
                   shortDescription={"awesome react courses"}
                   price={"399.99"}
                   salePrice={"299.99"}/>,
    <ProductCard title={"React JS"}
                   shortDescription={"awesome react courses"}
                   price={"399.99"}
                   salePrice={"299.99"}/>,
    <ProductCard title={"React JS"}
                   shortDescription={"awesome react courses"}
                   price={"399.99"}
                   salePrice={"299.99"}/>,

]

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ProductsGrid products={products}/>
      {/*<img src="/logo512.png" alt="image" />*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
