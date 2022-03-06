var graphBox = document.querySelector('#graphBox');
var arr = [60, 40, 10, 35];
function createColums(arr) {
    arr.forEach(function (element) {
        var newColum = document.createElement('div');
        console.log(element);
        newColum.classList.add('graph');
        newColum.style.height = element + "%";
        graphBox.appendChild(newColum);
    });
}
