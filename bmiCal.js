let overweight = 0;
let bmiCal = (data) => {
    overweight = 0;
    data.forEach(element => {
        let HeightCm = element.HeightCm;
        HeightCm *= element.HeightCm;
        element.BMI = parseFloat(parseFloat((element.WeightKg / HeightCm) * 10000).toFixed(2));
        calCategoryHealthRisk(element);
    });
    let obj = {};
    obj.overweight = overweight;
    obj.data = data;
    return obj;
}

let calCategoryHealthRisk = (element) => {
    if(element.BMI <= 18.4){
        element.BmiCategory = "Underweight";
        element.HealthRisk = "Malnutrition risk";
    }else if(element.BMI >= 18.5 && element.BMI <= 24.9){
        element.BmiCategory = "Normal weight";
        element.HealthRisk = "Low risk";
    }else if(element.BMI >= 25 && element.BMI <= 29.9){
        overweight++;
        element.BmiCategory = "Overweight";
        element.HealthRisk = "Enhanced risk";
    }else if(element.BMI >= 30 && element.BMI <= 34.9){
        element.BmiCategory = "Moderately obese";
        element.HealthRisk = "Medium risk";
    }else if(element.BMI >= 35 && element.BMI <= 39.9){
        element.BmiCategory = "Severel obese";
        element.HealthRisk = "High";
    }else if(element.BMI >= 40){
        element.BmiCategory = "Very severely obese";
        element.HealthRisk = "Very high risk";
    }
}

//console.log(bmiCal(value));

module.exports = bmiCal