function getInputdepusitAmaunt(inputFieldId) {
    const inputField= document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue =parseFloat(inputFieldValueString);
    inputField.value='';
    
    return inputFieldValue;
}
function getElementsById(elementId) {
    const elementField= document.getElementById(elementId);
    const elementFieldValueString = elementField.innerText;
    const elementFieldValue =parseFloat(elementFieldValueString);
    return elementFieldValue;
}

function setTextElementById(elementId, newValue){
    const textElement=document.getElementById(elementId);
     textElement.innerText=newValue;
}

document.getElementById('Deposit').addEventListener("click",function(){

    const newInputAmount = getInputdepusitAmaunt("DepositBaleace");
    const newDepositAmount =getElementsById("depositAmaunts");

    const totalDeposit= newDepositAmount  + newInputAmount;
   
    setTextElementById("depositAmaunts", totalDeposit);

    const totalDepositAmount=getElementsById('balance');
    const totalDepositBalance= newInputAmount + totalDepositAmount;
    setTextElementById('balance', totalDepositBalance);
    
})