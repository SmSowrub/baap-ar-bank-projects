
document.getElementById('submit').addEventListener('click',function(){
    const inputEmail=document.getElementById('email');
    const inputEmailFiled =inputEmail.value;
    inputEmail.value='';
    const inputPassword=document.getElementById('password');
    const inputPasswordFiled =inputPassword.value;
    // console.log(inputEmailFiled,inputPasswordFiled)
    inputPassword.value='';
    if(inputEmailFiled === 'nazmulhasun7@gmail.com' && inputPasswordFiled === 'sowrub321'){
        window.location.href='bank.html'
        
    } 
    else{
        alert("Please another tri")
    }

    
})