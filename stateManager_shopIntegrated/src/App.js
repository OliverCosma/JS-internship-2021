import React, {useState} from 'react';
import NavbarComponent from './Components/NavbarComponent';
import ContentComponent from './Components/ContentComponent';
import FooterComponent from './Components/FooterComponent';
import CardComponent from './Components/CardComponent';


const products = [
  { id: 'p_7sz1qavdpzv', name: 'Product 1', price: 34, stock: 3, img: 'https://i.ibb.co/6y9pkBt/simple-backpack.jpg' },
  { id: 'p_hyiivotb1vf', name: 'Product 2', price: 47, stock: 17, img: 'https://i.ibb.co/GcLprcS/black-backpack.jpg' },
  { id: 'p_e9x4ecjhplr', name: 'Product 3', price: 43, stock: 16, img: 'https://i.ibb.co/rpsPcVd/white-bracelet.jpg' },
  { id: 'p_ex90ylyssse', name: 'Product 4', price: 30, stock: 21, img: 'https://i.ibb.co/BTQG6C9/brown-jacket.jpg' },
  { id: 'p_ngrhoro76s', name: 'Product 5', price: 51, stock: 12, img: 'https://i.ibb.co/NrjjDDz/bombardier.jpg' },
  { id: 'p_ygix0u31xa', name: 'Product 6', price: 17, stock: 23, img: 'https://i.ibb.co/rm9XKgF/white-man-shirt.jpg' },
  { id: 'p_dq11du0f1vm', name: 'Product 7', price: 45, stock: 6, img: 'https://i.ibb.co/0FY2KqF/blue-and-white.jpg' },
  { id: 'p_l4n1pe6748e', name: 'Product 8', price: 25, stock: 5, img: 'https://i.ibb.co/mTX5Kf8/black-jacket.jpg' },
  { id: 'p_my33ptpd9wn', name: 'Product 9', price: 30, stock: 9, img: 'https://i.ibb.co/wS6vPRM/red-berette.jpg' },
  { id: 'p_qpwtnd6kecj', name: 'Product 10', price: 13, stock: 13, img: 'https://i.ibb.co/XjyrrB1/white-woman-shirt.jpg' },
  { id: 'p_r290kpnxpw', name: 'Product 11', price: 39, stock: 21, img: 'https://i.ibb.co/DQRQb7b/fannypack.jpg' },
  { id: 'p_up4b17ltq4n', name: 'Product 12', price: 35, stock: 8, img: 'https://i.ibb.co/WvkzKQx/shades.jpg' },
  { id: 'p_gmmumlh3fc', name: 'Product 13', price: 34, stock: 14, img: 'https://i.ibb.co/tKdGy5J/red-cap.jpg' },
  { id: 'p_akynqzwel76', name: 'Product 14', price: 42, stock: 15, img: 'https://i.ibb.co/rw1LbdQ/Nike-green.jpg' },
  { id: 'p_vmn25gur3zr', name: 'Product 15', price: 28, stock: 5, img: 'https://i.ibb.co/WpMhnqy/blue-woman-shirt.jpg' },
  { id: 'p_7aie6l5u1ii', name: 'Product 16', price: 47, stock: 20, img: 'https://i.ibb.co/G7TM4KP/blue-man-shirt.jpg' },
  { id: 'p_r29kxw118xt', name: 'Product 17', price: 14, stock: 14, img: 'https://i.ibb.co/nR4L635/turquoise-jacket.jpg' },
  { id: 'p_9aoaer7ia46', name: 'Product 18', price: 50, stock: 12, img: 'https://i.ibb.co/0yyLPNm/blue-jacket.jpg' },
  { id: 'p_cy2xhp4bwo', name: 'Product 19', price: 29, stock: 21, img: 'https://i.ibb.co/Zdn7VDJ/berette.jpg' },
  { id: 'p_zq1gycu0w7', name: 'Product 20', price: 37, stock: 21, img: 'https://i.ibb.co/stZ42Hw/Pandantiv-3-YV.jpg' },
];
const shopCart=[{}]
shopCart.length=0;  
function App() {


  const [counter, setCounter]=useState(0);
  const [checkout, setCheckout]=useState(0);
  

  function alertStock(nume_produs)
  {
      alert("Stoc insuficient pentru produsul " + nume_produs);
  }
  
  function increase (productID)
  {
      const productFromList = products.find( ({ id }) => id  === productID );
      const productIndex = shopCart.findIndex((obj => obj.id === productID));

      if (shopCart[productIndex].quantity-productFromList.stock<0) 
      {
      
      shopCart[productIndex].quantity++;
      setCounter(counter +1);
      setCheckout(checkout + shopCart[productIndex].price)
      }
      else 
      {
          alertStock(productFromList.name)
      }
  }
  
  function addToCart(productID, products)
  {
      const productFromList = products.find( ({ id }) => id  === productID );
      const productFromList2 = shopCart.find( ({ id }) => id  === productID );   
      if (productFromList2 && productFromList2.quantity>productFromList.stock)  //check stock 
      {
          alertStock("Stoc insuficient pentru ", productFromList.name);
      }
      
      else if (productFromList2)
      {
          increase(productID);   
      }
      else 
      {
      setCounter(counter + 1)
      setCheckout(checkout + productFromList.price)
      shopCart.push(
          {
              id:productID,
              name:productFromList.name,
              price:productFromList.price,
              quantity:1
          }
      );
      }
      console.log(shopCart);
      
  }

  function clearCart ()
  {
    shopCart.splice();
    setCounter(0);
    setCheckout(0);
  }
  
  return (
    <div className="App">
    <NavbarComponent checkout={checkout}  counter={counter} clearCart={clearCart}/>
    <ContentComponent products={products} addToCart={addToCart}>
      <CardComponent />
    </ContentComponent>
    <FooterComponent/>
    </div>
  );
}

export default App;
