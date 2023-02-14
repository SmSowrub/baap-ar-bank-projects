document.getElementById('Deposit').addEventListener('click',function(){
    const newInputDeposit= document.getElementById('depositAmaunt');
    const newInputDepositAmauntString =newInputDeposit.value;
    const newInputDepositAmaunt=parseFloat(newInputDepositAmauntString);
    // console.log(typeof newDepositAmaunt);

    const newDeposit=document.getElementById('depositAmaunts');
    const newDepositAmauntString = newDeposit.innerText;
    const newDepositAmaunt=parseFloat(newDepositAmauntString);
    const totalDepositAmaunt= newInputDepositAmaunt + newDepositAmaunt;
    newDeposit.innerText=totalDepositAmaunt;

                               
    const newBalance= document.getElementById('balance');
    const newBalanceAmaunt= newBalance.innerText;
    const newBalanceAmauntString=parseFloat(newBalanceAmaunt);
    const totalBalance=newBalanceAmauntString + newInputDepositAmaunt;
    newBalance.innerText=totalBalance;

    newInputDeposit.value='';
})