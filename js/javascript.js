function calculate(value){
    document.getElementById('display').value = document.getElementById('display').value + value  
}

function clrdply(){
    document.getElementById('display').value = ''
}

function calculator(){
    document.getElementById('display').value =  eval(document.getElementById('display').value)
}
