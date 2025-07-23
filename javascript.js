let plus_btn = document.querySelectorAll('.fa-plus');
let sunrise_serenade = document.querySelectorAll('.sunrise-serenade-info');
let add_minus_icon = document.querySelector('.sunrise-serenade');
let num;

function add_class(num,btn){
    sunrise_serenade[num].classList.toggle('active');
    if(btn.classList.contains('fa-plus')){
        btn.classList.remove('fa-plus');
        btn.classList.add('fa-minus');
    }
    else{
        btn.classList.add('fa-plus');
        btn.classList.remove('fa-minus');
    }
}

plus_btn.forEach((plus_btn)=>{
    plus_btn.addEventListener('click',()=>{
    let id = plus_btn.getAttribute('id');
       if(id === 'sunrise'){
        num = 0;
       }
       else if(id === 'caramel'){
        num = 1;
       }
       else if(id === 'nutty'){
        num = 2;
       }
       else{
        num = 3;
       }
    add_class(num,plus_btn);

       console.log(id);
    
    })
});
let critrus_simphony = document.querySelector('#critrus-simphony');
critrus_simphony.addEventListener('click',()=>{
    window.location.href = 'critus-symphony.html';
});
let amber = document.querySelector('#amber-allure');
amber.addEventListener('click',()=>{
    window.location.href ='amber-allure.html';
});

