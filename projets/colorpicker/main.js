const btnRandom= document.querySelector('#btn-random');
const colorRandom= document.querySelector('#color-random');
const pickerColor= document.querySelector('#picker-color');
const bodyBg= document.querySelector('body');
const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btnRandom.addEventListener('click', (e) =>{
        const colorPicked = [];
            for(let i = 0; i<6; i++){
                let pickColor = hexArray[Math.floor(Math.random()*hexArray.length)];
                colorPicked.push(pickColor);
            }
            const colorHex = colorPicked.join('');
            bodyBg.style.background = `#${colorHex}`;

            const randomRGB = function () {
                return Math.floor(Math.random()*255);
            }

            // let rgbString=`rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
            // bodyBg.style.background = `${rgbString}`;

            pickerColor.innerText = `#${colorHex}`;
            colorRandom.value =`#${colorHex}`;
        
            pickerColor.value =`#${colorHex}`;
            pickerColor.innerText = `#${colorHex}`;
            pickerColor.style.color=`#${colorHex}`;
            colorRandom.style.color=`#${colorHex}`;
            btnRandom.style.color=`#${colorHex}`;
});