
let input_unit = document.getElementById('unit');
let output_unit = document.getElementById('changed-unit');
let input_text = document.getElementById('text');
let output_text = document.getElementById('changed-text');
let swapBtn = document.getElementById('swap');
let convertBtn = document.getElementById('convert');


swapBtn.addEventListener('click', swap);
convertBtn.addEventListener('click', convert);


function swap() {


    let temp = input_unit.value;
    input_unit.value = output_unit.value;
    output_unit.value = temp;

    let num = input_text.value;
    input_text.value = output_text.value;
    output_text.value = num;

    convert();

}


function convert() {
    let input_value = input_unit.value;
    let output_value = output_unit.value;

    if (input_value == "bin") {
        let binVal = input_text.value;

        if (output_value == "dec") {
            output_text.value = parseInt(binVal, 2).toString();
        }
        else if (output_value == "octa") {
            output_text.value = parseInt(binVal, 2).toString(8).toUpperCase();
        }
        else if (output_value == "hexa") {
            output_text.value = parseInt(binVal, 2).toString(16).toUpperCase();
        }
        else if (output_value == "bin") {
            output_text.value = binVal;
        }
    }

    if (input_value == "dec") {
        let decVal = input_text.value;

        if (output_value == "bin") {
            output_text.value = parseInt(decVal, 10).toString(2);
        }
        else if (output_value == "octa") {
            output_text.value = parseInt(decVal, 10).toString(8).toUpperCase();
        }
        else if (output_value == "hexa") {
            output_text.value = parseInt(decVal, 10).toString(16).toUpperCase();
        }
        else if (output_value == "dec") {
            output_text.value = decVal;
        }
    }


    if (input_value == "octa") {
        let octaVal = input_text.value;

        if (output_value == "bin") {
            output_text.value = parseInt(octaVal, 8).toString(2);
        }
        else if (output_value == "dec") {
            output_text.value = parseInt(octaVal, 8).toString(10).toUpperCase();
        }
        else if (output_value == "hexa") {
            output_text.value = parseInt(octaVal, 8).toString(16).toUpperCase();
        }
        else if (output_value == "octa") {
            output_text.value = octaVal;
        }
    }


    if (input_value == "hexa") {
        let hexaVal = input_text.value;

        if (output_value == "bin") {
            output_text.value = parseInt(hexaVal, 16).toString(2);
        }
        else if (output_value == "dec") {
            output_text.value = parseInt(hexaVal, 16).toString(10).toUpperCase();
        }
        else if (output_value == "octa") {
            output_text.value = parseInt(hexaVal, 16).toString(8).toUpperCase();
        }
        else if (output_value == "hexa") {
            output_text.value = hexaVal;
        }
    }


}