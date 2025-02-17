const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

const button = document.querySelector("button");
const bmiValue = document.querySelector("#BMI-value");
let indexMeter = document.querySelector("#index-meter")

button.addEventListener("click", () => {
    let BMI = (weight.value / (height.value * height.value)).toFixed(2);

    if (BMI < 18.5) {
        bmiValue.innerHTML = `${BMI} (UNDERWEIGHT)`;
    }
    else if (BMI < 25.0) {
       bmiValue.innerHTML = `${BMI} (NORMAL)`;
    }
    else if (BMI < 30.0) {
        bmiValue.innerHTML = `${BMI} (OVERWEIGHT)`;
    }
    else if (BMI < 40.0) {
        bmiValue.innerHTML = `${BMI} (OBESE)`;
    } 
    else {
        bmiValue.innerHTML = `${BMI} (SEVERELY OBESE)`;
    }
})