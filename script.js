const btn = document.querySelector('.btn');
const textArea = document.querySelector('.text');
const errorMessage = document.querySelector('.message');






btn.addEventListener('click',function(e){
    e.preventDefault();
    if (textArea.value === ''){
    errorMessage.innerHTML = 'Whoops! It looks like you forgot to add your email';
    textArea.style.borderColor = 'red';
    errorMessage.style.color = 'red';
    }else if (!textArea.value.includes('@')){
    errorMessage.innerHTML = 'Please provide a valid email address';
    errorMessage.style.color = 'red';
    textArea.style.borderColor = 'red';
    textArea.value = '';
    }else{
        textArea.value = '';
        errorMessage.innerHTML = "";
        textArea.style.borderColor = 'grey';

    }

    
})