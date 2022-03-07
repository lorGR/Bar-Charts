var graphBox = document.querySelector('#graphBox');
var arr = [60, 40];
function createColums(arr) {
    arr.forEach(function (element) {
        var newColum = document.createElement('div');
        var newText = document.createElement('span');
        console.log(element);
        newColum.classList.add('graph');
        newColum.style.height = element + "%";
        newText.classList.add('textPrecentage');
        newText.innerHTML = element + "%";
        graphBox.appendChild(newColum);
        newColum.appendChild(newText);
    });
}
