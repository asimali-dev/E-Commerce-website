let selection = document.querySelector('.selection');
let list = document.querySelector('.list');
let angle = document.querySelector('.fa-angle-down');
let listing = document.querySelectorAll('.listing');

// make product array
const product = [
    {
        product_id : 'CRITUS SYMPHONY',
        size : '',
        quantity : '',
        img : 'images/84770f_8c4481c38bf94077a44a7ef8bf328db4~mv2.jpg'
    },
    {
        product_id: 'Amber Allure',
        img : 'images/c837a6_6e06897a0379410b94e15d34c7160a8f~mv2.jpeg',
        size : '',
        quantity : ''
    }
];

function angle_up(angle){
    if(angle.classList.contains('fa-angle-down')){
        angle.classList.add('fa-angle-up');
        angle.classList.remove('fa-angle-down');
    }
    else{
         angle.classList.add('fa-angle-down');
        angle.classList.remove('fa-angle-up');
    }
}

selection.addEventListener('click',()=>{
    list.classList.toggle('active');
    angle_up(angle);
    
});
let id = 0;
let size1;
function getCurrentProductIndex() {
    return parseInt(add_cart_btn.getAttribute('data-product-index')) || 0;
}
listing.forEach((l1)=>{
    l1.addEventListener('click',(res)=>{
        id = l1.getAttribute('id');
        console.log(id);
        selection.innerHTML = ` <p style="margin-top: 5px;">${id}</p>
        <i class="fa-solid fa-angle-down"></i>`;
        let currentIndex = getCurrentProductIndex();
        product[currentIndex].size = id; 
        size1 = product[currentIndex].size;
        adding_product(product[currentIndex].product_id,size1,counter);
        console.log('asim',size1);
    })
})

// quantity button
let minus_btn = document.getElementById('minus');
let plus_btn = document.getElementById('plus');
let quan_num = document.getElementById('quan-num');
let counter = 1;
let counting;
plus_btn.addEventListener('click',()=>{
    counter ++;
    quan_num.innerHTML = `${counter}`;
    console.log(counter);
    let currentIndex = getCurrentProductIndex();
    product[currentIndex].quantity = counter;
    adding_product(product[currentIndex].product_id, size1, counter, currentIndex);
});
minus_btn.addEventListener('click',()=>{
    counter --;
    if(counter < 1){
      counter = 1;
    };
    quan_num.innerHTML = `${counter}`;
    console.log(counter);
    let currentIndex = getCurrentProductIndex();
    product[currentIndex].quantity = counter;
    adding_product(product[currentIndex].product_id,size1,currentIndex);
});
let product_info = document.querySelectorAll('.product-header');
let pro_text = document.querySelectorAll('.pro-text');
let angle2 = document.getElementById('angle2');
let angle3 = document.getElementById('angle3');
let angle4 = document.getElementById('angle4');

const add_active = (a,b)=>{
    if(a == 0){
        pro_text[1].classList.remove('active');
        pro_text[2].classList.remove('active');
    }
    else if(a == 1){
        pro_text[0].classList.remove('active');
        pro_text[2].classList.remove('active');
    }
    else{
        pro_text[0].classList.remove('active');
        pro_text[1].classList.remove('active');
    }
    pro_text[a].classList.toggle('active');
    angle_up(b);
}
product_info.forEach((product_detail)=>{
    product_detail.addEventListener('click',()=>{
        let id1 = product_detail.getAttribute('id');
        console.log(id1);
        if(id1 == 'pro-info'){
            a = 0;
            b = angle2;
        }
        else if(id1 == 'pro-policy'){
            a = 1;
            b = angle3
        }
        else{
            a = 2;
            b = angle4;

        }
        add_active(a,b);
    })
});
let add_cart_btn = document.getElementById('add-to-cart');
let cart = document.querySelector('.cart');
let pro_content = document.querySelector('.product-content');
let cart_shopping = document.querySelector('.fa-cart-shopping');
cart_shopping.addEventListener('click',()=>{
    cart.classList.add('active');
})
add_cart_btn.addEventListener('click',()=>{
    let cart_class = add_cart_btn.getAttribute('class');
    console.log('class',cart_class);
    if(id == ''){
        alert('Kindly Enter your product size');
        return;
    }
    else if(add_cart_btn.classList.contains('amber-allure')){
        res = 1;
    }
    else{
        res = 0; 
    }
    cart.classList.add('active');
    let currentIndex = getCurrentProductIndex();
    product[currentIndex].size = id; 
    size1 = product[currentIndex].size;
    adding_product(product[currentIndex].product_id, size1, counter, currentIndex);
});
const count_total_product = (total_product)=>{
    let cart_header = document.querySelector('.cart-header');
    cart_header.innerHTML = `
        <h2>Cart (${total_product} items)</h2> 
        <i class="fa-solid fa-xmark"></i>
    `
    // remove cart from page view
    let cross = document.querySelector('.fa-xmark');
    cross.addEventListener('click',()=>{
        let cart = document.querySelector('.cart');
        cart.classList.remove('active');    
    })
};
let  totalAmount = 0;
let price = 0;
function add_product(id,size,qty,index){
        if(size1 == '100Grams'){
            price = 10.00;
        }
        else if(size1 == '500Grams' || size1 =='wholesale'){
            price = 45.00;
        }
        else{
            price = 0;
        }
        let total_price = qty*price;
        // let imgpath = product[res].img;
        let newItems = {
            product_id: id,
            size: size,
            quantity: qty,
            price: price,
            total_price: total_price,
            // img: product[res].img,
            img : product[index].img,
            total_amount : totalAmount
        };
        // first delete already existing array or object from local storage
        let cartItem = JSON.parse(localStorage.getItem('cart-items')) || [];
        // than newItems objects push in cartitem
        cartItem.push(newItems);
        // and now we store this obj on localstorage
        localStorage.setItem('cart-items',JSON.stringify(cartItem));
        renderProductToCart(newItems);
        console.log(newItems);
    
}

console.log('id',id);
let adding_product = (product_id, size1, counter, currentIndex)=>{
    add_product(product_id, size1, counter, currentIndex)
};
let total_product = 0;
let total_amount = 0;
function cal_total_amount(total_amount){
    let sub_header = document.querySelector('.sub-header');
    sub_header.innerHTML = `
        <p>Subtotal</p>
        <p>$${total_amount}.00</p>
    `
}
function renderProductToCart(item){
    let ele = document.createElement('div'); 
        ele.innerHTML = 
        `
        <div class="product-content">
            <div class="pro-div">
                <div class="pro-img">
                    <img src="${item.img}" alt="product-img">
                </div>
                <div class="pro-discription">
                    <div class="pro-header">
                        <p>CRITUS <br> SYMPHONY</p>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <p>$${item.price}.00</p>
                    <p><span>Quantity: </span>${item.quantity}</p>
                    <p><span>Size: </span>${item.size}</p>
                    <p id="total-amount">$${item.total_price}.00</p>
                </div>
            </div>
        </div>`
        total_amount = total_amount + item.total_price;
        cal_total_amount(total_amount);
        console.log('totaling', total_amount);
        total_product++;
        count_total_product(total_product);
        console.log('asim ali',total_product);
        pro_content.append(ele);
        let trash = ele.querySelector('.fa-trash');
        trash.addEventListener('click',()=>{
            ele.remove();
            let stored_item = JSON.parse(localStorage.getItem('cart-items')) || [];
            stored_item = stored_item.filter(cartItem =>
            cartItem.product_id !== item.product_id ||
            cartItem.size !== item.size ||
            cartItem.quantity !== item.quantity
            );
            total_product--;
            count_total_product(total_product);
            total_amount -= item.total_price;
            cal_total_amount(total_amount);
            localStorage.setItem('cart-items',JSON.stringify(stored_item));
        });
}
document.addEventListener('DOMContentLoaded',()=>{
    let storedItem = JSON.parse(localStorage.getItem('cart-items')) || [];
    storedItem.forEach(newItems=>{
        renderProductToCart(newItems);
        console.log('reloading', total_product);
    });
});
let parent = document.querySelector('.main');
parent.addEventListener('click',()=>{
    parent.classList.toggle('active');
})







