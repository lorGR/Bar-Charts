const graphBox:HTMLDivElement = document.querySelector('#graphBox')

const arr:Array<number> = [60,30,10]

function createColums(arr:Array<number>){
    arr.forEach(element => {
        const newColum:HTMLDivElement = document.createElement('div')
        const newText = document.createElement('span')
        console.log(element)
        newColum.classList.add('graph')
        newColum.style.height = `${element}%`
        // newColum.style.transform = `translateY(${854 - ((854 * element)/100)}px)`
        // newColum.style.top = `${854 - ((854 * element)/100)}px`
        console.log(newColum.style.top)
        newText.classList.add('textPrecentage')
        newText.innerHTML = `${element}%`
        graphBox.appendChild(newColum)
        newColum.appendChild(newText)
    })
        
}