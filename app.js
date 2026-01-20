//SELECT ELEMENT
const productEl = document.querySelector('.cardGroup');
const cartItemsEl = document.querySelector('.cartList');

//RENDER PRODUCTS
function renderProducts(){
    products.forEach( (product) => {
        productEl.innerHTML += `
                <div class="group">
                    <div class="img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="groupDetails">
                        <p class="text productTitle">${product.name}</p>
                        <P class="text productPrice">$${product.price}</P>
                    </div>
                    <div class="productBtn">
                        <button class="addCart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            `
    });
}
renderProducts();
//CART ARRAY
let cart = [];

//ADD TO CART
function addToCart(id){
    //CHECK ALREADY EXISTING PRODUCTS
    if(cart.some((item) => item.id === id)) {
        alert("Product already in cart");
    } else {
        const item = products.find( (product) => product.id === id );
        cart.push({
            ...item,
            numberOfUnit: 1,
        });

        console.log(cart);
    }

    updateCart();
};

//UPDATE CART
function updateCart(){
    renderCartItems();
    // renderSubtotal();
};

// RENDERING CART
function renderCartItems(){
    cartItemsEl.innerHTML = ""; //clear cart element
    cart.forEach((item) => {
        cartItemsEl.innerHTML  +=    `
                <div class="item">
                    <div class="imageContainer">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="itemDetails">
                        <h4>${item.name}</h4>
                        <h4 class="itemPrice">$${item.price}</h4>
                    </div>
                    <div class="itemBtn">
                        <div class="quantityBtn">
                                <i class="uil uil-minus"></i>
                        </div>
                            <h4 class="quantityValue">${item.numberOfUnit}</h4>
                        <div class="quantityBtn">
                            <i class="uil uil-plus"></i>
                        </div>
                    </div>
                </div>
            `;
    });
}