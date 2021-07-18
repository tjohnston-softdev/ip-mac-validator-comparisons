# Changelog

**./package.json**
* Installed 'mac-regex' module.

---

**./src/input-data.js**
* Wrote new functions for MAC Address values:
	* getMacValidStrings
	* getMacInvalidStrings

---

**./src/string-validation.js**
* Required 'mac-regex' module.
* Wrote 'compareMacStrings' function - Used to validate MAC Address strings.
* handleOutcome
	* Renamed 'expectVal' parameter to 'exVal'

---

**./test/index.js**
* Wrote unit tests for MAC Address values.
