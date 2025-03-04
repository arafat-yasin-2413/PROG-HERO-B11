
function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);

    return convertedValue;
}


function getInnerTextById(id) {
    const val = document.getElementById(id).innerText;
    const convertedVal = parseFloat(val);

    return convertedVal;
}


function setInnerTextByIdAndValue(id,value) {
    document.getElementById(id).innerText = value;
}


function handleToggleById(id,status) {
    document.getElementById(id).style.display = status;
    
}