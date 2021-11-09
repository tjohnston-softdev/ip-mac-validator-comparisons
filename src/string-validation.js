const mocha = require("mocha");
const chai = require("chai");
const validator = require("validator");
const ipRegex = require("ip-regex");
const macRegex = require("mac-regex");
const expect = chai.expect;
const regOpts = {exact: true};

/*
	This file is used to compare string validation between different libraries.
	Functions are interchangable between valid and invalid.
*/


// IPv4
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


// IPv6
function compareIpSixStrings(stringArr, expectValid)
{
	var stringIndex = 0;
	var currentString = "";
	var currentHeavy = false;
	var currentLight = false;
	
	for (stringIndex = 0; stringIndex < stringArr.length; stringIndex = stringIndex + 1)
	{
		currentString = stringArr[stringIndex];
		currentHeavy = validator.isIP(currentString, 6);
		currentLight = ipRegex.v6(regOpts).test(currentString);
		handleOutcome(currentString, "IPv6", currentHeavy, currentLight, expectValid);
	}
}


// MAC Address
function compareMacStrings(stringArr, expectValid)
{
	var stringIndex = 0;
	var currentString = "";
	var currentHeavy = false;
	var currentLight = false;
	
	for (stringIndex = 0; stringIndex < stringArr.length; stringIndex = stringIndex + 1)
	{
		currentString = stringArr[stringIndex];
		currentHeavy = validator.isMACAddress(currentString);
		currentLight = macRegex(regOpts).test(currentString);
		handleOutcome(currentString, "MAC Address", currentHeavy, currentLight, expectValid);
	}
}


// Checks whether validation matches between libraries.
function handleOutcome(inpStr, inpType, heavyValid, lightValid, exVal)
{
	var handleRes = false;
	var flaggedMessage = "";
	
	if (heavyValid === exVal && lightValid === exVal)
	{
		// Correct
		handleRes = true;
	}
	else
	{
		// Incorrect
		flaggedMessage = writeErrorMessage(inpType, inpStr, exVal, heavyValid, lightValid);
		throw new Error(flaggedMessage);
	}
}


// Writes custom error message for unit test.
function writeErrorMessage(vType, vString, vExpect, vHeavy, vLight)
{
	var writeRes = "";
	
	writeRes += ["The ", vType, "string '", vString, "' should be "].join("");
	writeRes += formatExpectedValue(vExpect);
	writeRes += [" for both libraries.", "\r\n\t"].join("");
	writeRes += formatActualValue("Heavy", vHeavy);
	writeRes += "\r\n\t";
	writeRes += formatActualValue("Light", vLight);
	
	
	return writeRes;
}


// Adds expected result to error message.
function formatExpectedValue(exp)
{
	var formatRes = "invalid";
	
	if (exp === true)
	{
		formatRes = "valid";
	}
	
	return formatRes;
}


// Adds validation outcome to error message.
function formatActualValue(actLbl, actVal)
{
	var formatRes = actLbl + ": " + actVal;
	return formatRes;
}



module.exports =
{
	compareIpFour: compareIpFourStrings,
	compareIpSix: compareIpSixStrings,
	compareMac: compareMacStrings
};