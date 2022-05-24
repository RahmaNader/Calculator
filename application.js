function insert(num) {
    var input = document.form.textview.value;
    var lastInput = input[input.length - 1];
    if (input.length < 30) {
        if (!isNaN(lastInput) || lastInput == null || !isNaN(num)) {
            document.form.textview.value = input + num;
        } else if (num != lastInput) {
            document.form.textview.value = input.replace(lastInput, num);
        }
    }
}

function equal() {
    var output = document.form.textview.value;
    if (output) {
        document.form.textview.value = eval(output);
    }
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}