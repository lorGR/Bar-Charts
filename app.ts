const graphBox:HTMLDivElement = document.querySelector('#graphBox')

const arr:Array<number> = [60,40,10,35]

function createColums(arr:Array<number>){
    arr.forEach(element => {
        const newColum:HTMLDivElement = document.createElement('div')
        console.log(element)
        newColum.classList.add('graph')
        newColum.style.height = `${element}%`
        graphBox.appendChild(newColum)
    })
}
