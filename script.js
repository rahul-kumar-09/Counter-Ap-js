let count = 0;

document.getElementById('decreaseBtn').onclick = function(){
    count = count - 1;
    document.getElementById('countLable').innerHTML = count
}

document.getElementById('increase').onclick = function(){
    count = count + 1;
    document.getElementById('countLable').innerHTML = count
}

document.getElementById('reset').onclick = function(){
    count = 0;
    document.getElementById('countLable').innerHTML = count
}