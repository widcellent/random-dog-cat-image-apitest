const firstImg = document.querySelector('#img1');
const SecondImg = document.querySelector('#img2');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');



fetch('https://dog.ceo/api/breeds/image/random')
    .then((Response)=> Response.json())
    .then((data)=> firstImg.src = data.message );
    
    


fetch('https://api.thecatapi.com/v1/images/search')
    .then( (res) => res.json())
    .then((data) => SecondImg.src= data[0].url);
 
btn1.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((Response)=> Response.json())
    .then((data)=> firstImg.src = data.message );
})
btn2.addEventListener('click', function() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((Response)=> Response.json())
    .then((data)=> SecondImg.src= data[0].url );
})
