document.getElementById('Withdraw').addEventListener('click',function(){
    const newInputWithdraw= document.getElementById('WithdrawAmaunt');
    const newInputWithdrawString=newInputWithdraw.value;
    const inputWithdrawAmaunt=parseFloat(newInputWithdrawString)
    
     newInputWithdraw.value='';
   
    
    if(isNaN(inputWithdrawAmaunt)){
        alert("not a valuded number")
        return;
    }
    const newWithdraw=document.getElementById('withdrawAmaunts');
    const newWithdrawBaleanceString=newWithdraw.innerText;
    const newWithdrawBaleance=parseFloat(newWithdrawBaleanceString);
    
   

    const newBalance= document.getElementById('balance');
    const newBalanceAmaunt= newBalance.innerText;
    const newBalanceAmauntString=parseFloat(newBalanceAmaunt);

    if(inputWithdrawAmaunt > newBalanceAmauntString){
        alert("baap ar bank a ato taka nai");
        return;
     }
     const totalWithdrawBalance = inputWithdrawAmaunt + newWithdrawBaleance;
     newWithdraw.innerText=totalWithdrawBalance;

   const WithdrawTotalBaleance=newBalanceAmauntString - inputWithdrawAmaunt;
   newBalance.innerText=WithdrawTotalBaleance;
})