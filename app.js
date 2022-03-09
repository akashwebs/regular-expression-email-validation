const messege=document.getElementById('messege');
document.getElementById('send-button').addEventListener('click', ()=>{
    messege.innerText='';
    const inputField=document.getElementById('input-filed');
    const inputValue=inputField.value;
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const isTrue=pattern.test(inputValue);
    if(!isTrue){

        messege.innerText='please enter valid email address';
        messege.style.color='red';
        return false;
    }else{
        messege.innerHTML= ` ${inputValue} <br> <small>email send successfully</small>`;
        messege.style.color='green';
    }

    inputField.value='';
})