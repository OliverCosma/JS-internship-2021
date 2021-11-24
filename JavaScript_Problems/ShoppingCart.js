

const products = [
    {id: 'p_7sz1qavdpzv', name: 'Product 1', price: 340, stock: 4},
    {id: 'p_hyiivotb1vf', name: 'Product 2', price: 47, stock: 17},
    {id: 'p_e9x4ecjhplr', name: 'Product 3', price: 435, stock: 16},
    {id: 'p_ex90ylyssse', name: 'Product 4', price: 302, stock: 21},
    {id: 'p_ngrhoro76s', name: 'Product 5', price: 516, stock: 12},
    {id: 'p_ygix0u31xa', name: 'Product 6', price: 176, stock: 23},
    {id: 'p_dq11du0f1vm', name: 'Product 7', price: 455, stock: 6},
    {id: 'p_l4n1pe6748e', name: 'Product 8', price: 258, stock: 5},
    {id: 'p_my33ptpd9wn', name: 'Product 9', price: 306, stock: 9},
    {id: 'p_qpwtnd6kecj', name: 'Product 10', price: 138, stock: 13},
    {id: 'p_r290kpnxpw', name: 'Product 11', price: 394, stock: 21},
    {id: 'p_up4b17ltq4n', name: 'Product 12', price: 355, stock: 8},
    {id: 'p_gmmumlh3fc', name: 'Product 13', price: 344, stock: 14},
    {id: 'p_akynqzwel76', name: 'Product 14', price: 427, stock: 15},
    {id: 'p_vmn25gur3zr', name: 'Product 15', price: 287, stock: 5},
    {id: 'p_7aie6l5u1ii', name: 'Product 16', price: 470, stock: 20},
    {id: 'p_r29kxw118xt', name: 'Product 17', price: 149, stock: 14},
    {id: 'p_9aoaer7ia46', name: 'Product 18', price: 509, stock: 12},
    {id: 'p_cy2xhp4bwo', name: 'Product 19', price: 291, stock: 21},
    {id: 'p_zq1gycu0w7', name: 'Product 20', price: 370, stock: 21}
    ]

    const shopCart=[{}]
    shopCart.length=0;

    function remove (productID)
    {
        productIndex = shopCart.findIndex((obj => obj.id == productID));
        shopCart.splice(productIndex, 1)
    }

    function increase (productID)
    {
        const productFromList = products.find( ({ id }) => id  === productID );
        const productIndex = shopCart.findIndex((obj => obj.id == productID));

        if (shopCart[productIndex].quantity-productFromList.stock<=0) 
        {
        shopCart[productIndex].quantity++;
        }
        else 
        {
            console.log("There are no more stocks for product: ", productFromList.name);
        }
    }

    function decrease (productID)
    {
        const productFromList = shopCart.find( ({ id }) => id  === productID );
        const productIndex2 = shopCart.findIndex((obj => obj.id == productID));
        if(!productFromList)
        {
            console.log("There is nothing to decrease!") //for repeated decrease command
        }
        else if (shopCart[productIndex2].quantity-1==0)           //if another decrease will go to 0 products in cart xD
        {
            remove(productID);
        }
        
         else if (shopCart[productIndex2].quantity > 0)
        {
                                                         
        shopCart[productIndex2].quantity--;           //decrease quantity from shop cart
        }
        
        
    }
   
    function checkout() // probably the price in products is per 1 quantity
    {
        
        if(shopCart.length==0) {console.log("empty cart");}
        else
        {
            let checkSum=0;
            for (let index = 0; index < shopCart.length; index++)
            {
                checkSum=checkSum + (shopCart[index].quantity * shopCart[index].price);
            }
        order(); //before cleaning the cart you should be able to see the products you've ordered
        console.log("You have to pay:",checkSum);
        shopCart.splice(0, shopCart.length)
        }
    }

    function order () //function to display the ordered products
    {
        if (shopCart.length==0) console.log("Empty order");
        else 
        {
        console.log("Your order has the following products: ")
        for (let index = 0; index < shopCart.length; index++)
        {
            console.log(shopCart[index].name," in quantity of ", shopCart[index].quantity, "and at a price of ",shopCart[index].price);
        }
        }
    }

    function add(productID) // we assume that in our interface we ve got just the products --- that means its not possible to have add(unknow product)
    {
        const productFromList = products.find( ({ id }) => id  === productID );
        productIndex = products.findIndex((obj => obj.id == productID));                    //find index of the added product 
        const productFromList2 = shopCart.find( ({ id }) => id  === productID );            //if we find the product already in our cart
        if (productFromList2 && productFromList2.quantity>productFromList.stock)  //check stock 
        {
            console.log("Stoc insuficient pentru produsul ", productFromList.name)
        }
        
        else if (productFromList2)
        {
            increase(productID);   // i guess if we add the product but it already exists in shopcart, we just increase its quantity
        }
        else 
        {
        shopCart.push(
            {
                id:productID,
                name:productFromList.name,
                price:productFromList.price,
                quantity:1
            }
        );
        }
    }
  
/* tests 
   add('p_7sz1qavdpzv');
   increase('p_7sz1qavdpzv');
   decrease('p_7sz1qavdpzv');
   add('p_7sz1qavdpzv');
   add('p_7sz1qavdpzv');
   add('p_qpwtnd6kecj');
   add('p_cy2xhp4bwo');
   increase('p_cy2xhp4bwo');
   remove('p_cy2xhp4bwo');
   */
   checkout(); 
   
    