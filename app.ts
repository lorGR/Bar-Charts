const graphBox:HTMLDivElement = document.querySelector('#graphBox')

const arr:Array<number> = [60,40,30]

function createColums(arr:Array<number>){
    arr.forEach(element => {
        const newColum:HTMLDivElement = document.createElement('div')
        console.log(element)
        newColum.style.height = `${element}%`
        newColum.style.width = `30px`
        newColum.style.backgroundColor = 'teal'
        newColum.style.position = 'absolute'
        newColum.style.bottom = `0`
        graphBox.appendChild(newColum)
    })
}
