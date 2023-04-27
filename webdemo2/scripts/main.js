function init(){
    const source_number = document.getElementById("source_number");
    const output_results = document.getElementById("output_results");

    function doubleMe(){
    // let result = parseFloat(source_number.value); 
    // output_results.innerHTML = result * 2;
    output_results.value = parseFloat(source_number.value) * 2;
    }

    // double_button.onclick = doubleMe; old way
    double_button.addEventListener("click", doubleMe)
}

// window.onload = init;
document.addEventListener("DOMContentLoaded", init);