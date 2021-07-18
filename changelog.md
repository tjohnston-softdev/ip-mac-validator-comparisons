# Changelog

**./src/input-data.js**
* Split 'getIpFourData' into two separate functions:
	* getIpFourValidStrings
	* getIpFourInvalidStrings
* Removed the 'defineArgumentObject' function.
* Each function returns an array of (in)valid values for the corresponding type.

---

**./test/index.js**
* Removed 'ipValues' global.
* Restructured unit tests to:
	* Retrieve array of input values.
	* Pass into validation loop.
