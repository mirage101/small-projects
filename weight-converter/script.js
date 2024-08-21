const inputEl = document.getElementById("pounds");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");
let errorTime = null;
let resultTime = null;

inputEl.addEventListener("input", convert);

function convert(value) {
    const pounds = value.target.value;
    console.log("pounds: " + pounds);
    errorEl.style.display = "none";
     if (pounds < 0 || isNaN(pounds) || pounds === "") {
        resultEl.innerText = "";
        errorEl.style.display = "block";
        errorEl.innerText = "Please enter a correct number";
        clearTimeout(errorTime);
        errorTime = setTimeout(() =>
        resetFormFiled("error")
        , 2000);
        return;
    }
    const kgs = (pounds * 0.453592).toFixed(2);
    resultEl.innerText = kgs + ' kg';
    clearTimeout(resultTime);
    resultTime = 
    setTimeout(() => 
        resetFormFiled("result")
    , 10000)
}

function resetFormFiled(type, time) {
    let el;
    if(type ==="error"){
        time = 2000;
        el = errorEl;
        el.innerText = "";
        resultEl.innerText = "";             
    }else{
        time = 20000;
        el = resultEl;
        el.innerText = "";
        inputEl.value = "";
    }
}
