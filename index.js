document.addEventListener('DOMContentLoaded', function(){
    //DOMContentLoaded is not needed. this is only needed if the 
    //script in html is not at the end of the body. i js put ts here for notes lol
    const display = document.querySelector('.display');
    const btns = document.querySelectorAll('input');
    let inputValue = '';

    btns.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('value');
            //A string representing the name of the attribute whose value you 
            //want to retrieve.


            if (value === 'AC') {
                inputValue = '';
            }
            else if (value === 'DEL'){
                inputValue = inputValue.slice(0, -1); // Removes the last character
            }
            else if (value === '%'){
                inputValue = inputValue/100;
            }
            else if (value === '+/-'){
                inputValue = inputValue*-1;
            }
            else if (value === '=') {
                
                try{
                    inputValue = eval(display.value);
                    //The try block contains code that you want to execute 
                    //and potentially might throw an error. If an error occurs in this block,
                    //JavaScript will stop executing that block and jump to the catch block.
                }
                catch{
                    inputValue = 'Error'; 
                    //The catch block is used to handle any errors that occur 
                    //in the corresponding try block. If an error is thrown, 
                    //the code inside the catch block will execute, allowing 
                    //you to handle the error (e.g., log it, show an error message,
                    // or take corrective action).
                }
            }
            else {
                inputValue += value;
            }

            display.value = inputValue;
        });
    });
})

