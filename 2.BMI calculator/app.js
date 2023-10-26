let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#bmi');
    let dsc = document.querySelector("#dsc");
    let bmi;
    // console.log(dsc);
    // console.log(height);
    if (height > 0 && weight > 0) {
        let square = height * height;
         bmi = (weight / square).toFixed(1);
        result.innerHTML = bmi;
    } else {
        result.innerHTML = "<strong>Somthing Went Wrong</span> <br> Check valid weight and valid height";
    }
    let resultValue=bmi;
    if (resultValue >= 18.5 && resultValue <= 24.9)
        // console.log("you are healthy");
        dsc.innerHTML = "You are healthy";
    else if (resultValue > 25 && resultValue < 29.9)
        dsc.innerHTML = "you are overweight";
    else if (resultValue > 30)
        dsc.innerHTML = "You are obese";
    else if (resultValue < 18.5)
        dsc.innerHTML = "you are inder weight";
    else
        dsc.innerHTML="your are obese";
});


