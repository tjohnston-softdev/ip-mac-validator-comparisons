const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const inputData = require("../src/input-data");
const stringValidation = require("../src/string-validation");
const ipValues = inputData.getIpFour();

describe("Validator Comparisons", function()
{
	describe("IP Address V4", function()
	{
		it("Valid", function()
		{
			stringValidation.compareIpFour(ipValues.valid, true);
		});
		
		it("Invalid", function()
		{
			stringValidation.compareIpFour(ipValues.invalid, false);
		});
		
	});
});