const containerDiv = document.getElementById("container");
const gridCreate = (lengthInput=16)=>{
    for (let i=0;i<(lengthInput*lengthInput);i++){
        const divElement = document.createElement("div")
        divElement.id = i.toString()
        divElement.setAttribute("class", "flexElement")
        const totalGap = ( 4*(lengthInput-1))
        divElement.style.flex = `0 0 calc((100% - ${totalGap}px) / ${lengthInput})`;
        containerDiv.appendChild(divElement)    
        divElement.addEventListener('mouseenter', (event) => {
            const r = Math.floor(Math.random() * 255)
            const g = Math.floor(Math.random() * 255)
            const b = Math.floor(Math.random() * 255)
            event.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
        });
        divElement.addEventListener('mouseleave', (event) => {
            event.target.style.backgroundColor = 'white';
        });
    }
}
gridCreate()
const generateGrid = ()=>{
    let gridLength = prompt("Please enter grid length:", "16");
    containerDiv.innerHTML = '';
    const num = Number(gridLength); // or +str;
    if ((Number.isFinite(num) && num < 100)===false){
        gridCreate()
    }else{
        gridCreate(num)
    }
}
