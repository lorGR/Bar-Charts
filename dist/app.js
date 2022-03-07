var graphBox = document.querySelector('#graphBox');
var arr = [60, 30, 10];
function createColums(arr) {
    arr.forEach(function (element) {
        var newColum = document.createElement('div');
        var newText = document.createElement('span');
        console.log(element);
        newColum.classList.add('graph');
        newColum.style.height = element + "%";
        // newColum.style.transform = `translateY(${854 - ((854 * element)/100)}px)`        console.log(newColum.style.top)
        newText.classList.add('textPrecentage');
        newText.innerHTML = element + "%";
        graphBox.appendChild(newColum);
        newColum.appendChild(newText);
    });
}
