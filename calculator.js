const displayCalc = document.getElementById('display_calc');
const keyPad = document.getElementById('key_pad');

keyPad.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON") {
        const key = e.target.getAttribute("data-key");
        handleButtonClick(key);
    }
})

function handleButtonClick(key) {
    console.log(key)
}


function input_values() {

}



function startup() {
    input_values()
}

startup()