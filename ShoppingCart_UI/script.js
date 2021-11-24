// later on document.getElementById("demo").innerHTML = add('p_ex90ylyssse');

const products = [
    {id: 'p_7sz1qavdpzv', name: 'Product 1', price: 340, stock: 4, image: 'p1.png'}, // Should look almost similar to smth from a DB :) each product with its image
    {id: 'p_hyiivotb1vf', name: 'Product 2', price: 47, stock: 17, image: 'p2.png'},
    {id: 'p_e9x4ecjhplr', name: 'Product 3', price: 435, stock: 16, image: 'p3.png'},
    {id: 'p_ex90ylyssse', name: 'Product 4', price: 302, stock: 21, image: 'p4.png'},
    {id: 'p_ngrhoro76s', name: 'Product 5', price: 516, stock: 12, image:'p5.png'},
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
            alertStock(productFromList.name)
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
        //products[productIndex2].stock++;              // will increase stock because customer renounced to buy it
        shopCart[productIndex2].quantity--;           //decrease quantity from shop cart
        }
        
        
    }
   
    function checkout() // probably the price in products is per 1 quantity
    {
        
        if(shopCart.length==0) {document.getElementById("cart").innerHTML = "No money because no product in your cart";}
        else
        {
            let checkSum=0;
            for (let index = 0; index < shopCart.length; index++)
            {
                checkSum=checkSum + (shopCart[index].quantity * shopCart[index].price);
            }
        order(); //before cleaning the cart you should be able to see the products you've ordered

        document.getElementById("cart").innerHTML = "You ll have to pay: " + checkSum;

        shopCart.length=0;
        }
    }

    function order () //function to display the ordered products and their price 
    {
        document.getElementById("myList").innerHTML=""
        
        if (shopCart.length==0) 
        {
        document.getElementById("ordered_products1").innerHTML="empty cart";
        }
        else 
        {
        document.getElementById("ordered_products1").innerHTML="Your order has the following products: ";
        for (let index = 0; index < shopCart.length; index++)
        {   

            let btn2 = document.createElement("button")
            let btn3 = document.createElement("button")
            let btn4 = document.createElement("button")
            btn2.innerHTML="Remove "+shopCart[index].name
            btn3.innerHTML="Decrease quantity "+shopCart[index].name
            btn4.innerHTML="Increase quantity " + shopCart[index].name
            //document.body.appendChild(btn2);
            btn2.onclick = function () {
                remove(shopCart[index].id);
                order();
              }; 
              btn3.onclick = function () {
                decrease(shopCart[index].id);
                order();
              }; 
              btn4.onclick = function () {
                increase(shopCart[index].id);
                order();
              }; 

            var node=document.createElement("LI");
            var textnode=document.createTextNode(shopCart[index].name+" in quantity of "+ shopCart[index].quantity+" and at a price of "+shopCart[index].price)
            node.appendChild(textnode);
            node.appendChild(btn2);
            node.appendChild(btn3);
            node.appendChild(btn4)
            document.getElementById("myList").appendChild(node,btn2,btn3,btn4);
           
            
        }
        }
    }

    function alertStock(nume_produs)
    {
        alert("Stoc insuficient pentru produsul " + nume_produs);
    }

    function add(productID)
    {
        const productFromList = products.find( ({ id }) => id  === productID );
        productIndex = products.findIndex((obj => obj.id == productID));                    //find index of the added product 
        const productFromList2 = shopCart.find( ({ id }) => id  === productID );            //if we find the product already in our cart
        if (productFromList.stock <= 0)

        alertStock(productFromList.name)

        else if (productFromList2)
        {
            increase(productID);   // i guess if we add the product but it already exists in shopcart, we just increase its quantity
        }
        else 
        {
        products[productIndex].stock--;
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

    /* Other functions added to this challenge */

    function display_all_products ()             // Function to display all the products in the shopping page
    {
        
        for (let i=0;i<products.length;i++)
        {   
            let img = document.createElement("img");
            img.width = 180;
            img.height = 180;
            img.alt = 180;
            img.src=products[i].image;

            let btn = document.createElement("button")
            btn.innerHTML="Buy "+products[i].name
            btn.onclick = function () {
                add(products[i].id)
                order()
              };

          

            document.body.appendChild(img);
            document.body.appendChild(btn);
        }
        
    }

    

    display_all_products();

    /* testing 

   add('p_7sz1qavdpzv');
   increase('p_7sz1qavdpzv');
   console.log(shopCart[0].quantity)
   decrease('p_7sz1qavdpzv');
   console.log(shopCart[0].quantity)
   decrease('p_7sz1qavdpzv');
   decrease('p_7sz1qavdpzv');

  */

   
   
   
    