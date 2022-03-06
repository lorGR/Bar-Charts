var graphBox = document.querySelector('#graphBox');
var arr = [60, 40, 30];
function createColums(arr) {
    arr.forEach(function (element) {
        var newColum = document.createElement('div');
        console.log(element);
        newColum.style.height = element + "%";
        newColum.style.width = "30px";
        newColum.style.backgroundColor = 'teal';
        newColum.style.position = 'absolute';
        newColum.style.bottom = "0";
        graphBox.appendChild(newColum);
    });
}
