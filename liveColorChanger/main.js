const colorPicker = document.getElementById("picker");

let selectedColor = "#000000"

colorPicker.addEventListener('input',(event)=>{
    selectedColor = event.target.value;
    document.getElementById("result").innerText = selectedColor;
    
    document.body.style.backgroundColor = selectedColor
})
