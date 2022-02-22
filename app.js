const changeBtn = document.querySelector('#change');
const tlInput = document.querySelector('#tl');
const euroInput = document.querySelector('#amount');


changeBtn.addEventListener('click',changeTL);


function changeTL(e){
    const xhr = new XMLHttpRequest(); // create a new request
    // open the request
    xhr.open('GET','http://api.exchangeratesapi.io/v1/latest?access_key=96dda103f054ad59c9713e44d7850c29',true); 

    xhr.onload = function(){ // when the request is loaded
        if(this.status === 200){ // if the request is OK
            const res = JSON.parse(this.responseText); // parse the response
            const tl = res.rates.TRY; // get the value of the TRY
            const euro = euroInput.value; // get the value of the euro
            const amount = euro * tl; // calculate the amount
            tlInput.value = amount; // set the value of the tl
        }
    }
    xhr.send(); // send the request

    e.preventDefault(); // prevent the default behaviour of the button

}