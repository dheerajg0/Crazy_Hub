let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML === '='){
            string = eval(string);
            document.querySelector('.inputBox').innerHTML = string;
        }
        else if(e.target.innerHTML === 'C'){
            string = "";
            document.querySelector('.inputBox').innerHTML = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('.inputBox').innerHTML = string;
        }
    })
})