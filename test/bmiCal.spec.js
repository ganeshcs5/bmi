let bmi = require('../bmiCal');
const assert = require('assert');

describe("BMI", () => {
    it("Overweight", () => {
      let value = bmi([{Gender: 'Female',
      HeightCm: 167,
      WeightKg: 82},
      {Gender: 'Female',
      HeightCm: 155,
      WeightKg: 75}])
      assert.equal(value.overweight, 1);
    });

    it("lenght of the data is equal to lenght of the data", () => {
      let value = bmi([{Gender: 'Female',
      HeightCm: 167,
      WeightKg: 82},
      {Gender: 'Female',
      HeightCm: 167,
      WeightKg: 82}])
      assert.equal(value.data.length, 2);
    });

    it(" new values are coming for the data sent ", () => {
      let value = bmi([{Gender: 'Female',
      HeightCm: 150,
      WeightKg: 70}])
      assert.notEqual(value.data[0].BmiCategory,undefined)
    });

    it(" data and overwieght cant be undefined ", () => {
      let value = bmi([{Gender: 'Female',
      HeightCm: 150,
      WeightKg: 70}])
      assert.notEqual(value.data,undefined)
      assert.notEqual(value.overweight,undefined)
    });

    it(" no values sent  ", () => {
      let value = bmi([])
      assert.notEqual(value.data,undefined)
      assert.notEqual(value.overweight,undefined)
    });
  
  });