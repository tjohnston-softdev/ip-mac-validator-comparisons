# Changelog

**./package.json**
* Installed 'ip-regex' module.

---

**./src/input-data.js**
* New file - Defines arguments for input validation tests.
* Returns arrays of valid and invalid values.
* So far, only IPv4 has been defined.

---

**./src/string-validation.js**
* New file - Runs input validation for strings and compares results.
* Only supports IPv4 so far.

---

**./src/readme.md**
* Deleted placeholder file.

---

**./test/index.js**
* Added requirements:
	* ./src/input-data
	* ./src/string-validation
* Declared 'ipValues' global.
	* Retrieves IPv4 values from 'inputData'
* Wrote unit tests for IPv4 values.
