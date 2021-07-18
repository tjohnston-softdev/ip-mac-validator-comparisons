const mocha = require("mocha");
const chai = require("chai");
const validator = require("validator");
const ipRegex = require("ip-regex");
const expect = chai.expect;
const regOpts = {exact: true};


function compareIpFourStrings(stringArr, expectValid)
{
	var stringIndex = 0;
	var currentString = "";
	var currentHeavy = false;
	var currentLight = false;
	
	for (stringIndex = 0; stringIndex < stringArr.length; stringIndex = stringIndex + 1)
	{
		currentString = stringArr[stringIndex];
		currentHeavy = validator.isIP(currentString, 4);
		currentLight = ipRegex.v4(regOpts).test(currentString);
		handleOutcome(currentString, "IPv4", currentHeavy, currentLight, expectValid);
	}
}


function handleOutcome(inpStr, inpType, heavyValid, lightValid, expectVal)
{
	var handleRes = false;
	var flaggedMessage = "";
	
	if (heavyValid === expectVal && lightValid === expectVal)
	{
		handleRes = true;
	}
	else
	{
		flaggedMessage = writeErrorMessage(inpType, inpStr, expectVal);
		throw new Error(flaggedMessage);
	}
}


function writeErrorMessage(vType, vString, vExpect)
{
	var writeRes = "";
	
	writeRes += "The ";
	writeRes += vType;
	writeRes += " '";
	writeRes += vString;
	writeRes += "' should be ";
	writeRes += formatExpectedValue(vExpect);
	writeRes += " for both libraries.";
	
	return writeRes;
}


function formatExpectedValue(exp)
{
	var formatRes = "invalid";
	
	if (exp === true)
	{
		formatRes = "valid";
	}
	
	return formatRes;
}



module.exports =
{
	compareIpFour: compareIpFourStrings
};