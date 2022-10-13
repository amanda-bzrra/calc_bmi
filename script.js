
const calc = document.getElementById("calc");


function bmi() {
	const height = document.getElementById("height").value;
	const weight = document.getElementById("weight").value;
	const result = document.getElementById("result");


	if (height !== '' && weight !== '') {
		const bmiResult = (weight / (height * height)).toFixed(1);

		let status = '';

		if (bmiResult < 18.5) {
			status = 'You are underweight.'

		} else if (bmiResult < 24.9) {
			status = 'Your weight is normal.'

		} else if (bmiResult < 29.9) {
			status = 'You are overweight.'

		} else if (bmiResult < 39.9) {
			status = 'You have type II obesity.'

		} else if (bmiResult > 40) {
			status = 'You have severe type III obesity.'
		}

		result.textContent = ` Your BMI is ${bmiResult} and ${status} `


	} else {
		result.textContent = 'Please fill in all fields!!';
	}

}
calc.addEventListener("click", bmi);
