const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const inputData = require("../src/input-data");
const stringValidation = require("../src/string-validation");

describe("Validator Comparisons", function()
{
	describe("IP Address V4", function()
	{
		it("Valid", function()
		{
			var entryStrings = inputData.getIpFourValid();
			stringValidation.compareIpFour(entryStrings, true);
		});
		
		it("Invalid", function()
		{
			var entryStrings = inputData.getIpFourInvalid();
			stringValidation.compareIpFour(entryStrings, false);
		});
		
	});
});