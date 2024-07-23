import ProductCard from "./ProductCard";
import  "./MainPage.css"
import { Link } from "react-router-dom";
function MainPage({products}) {
  return (
    <>
      <div className="wrapper">
        {products.map((val, index) => {
          return <ProductCard product={val} key={index}  />;
        })}
      </div>
      <Link to="/cart">TO Cart</Link>
      
    </>
  );
}

export default MainPage;
