# Changelog

**./src/input-data.js**
* Wrote new functions for IPv6 values:
	* getIpSixValidStrings
	* getIpSixInvalidStrings

---

**./src/string-validation.js**
* Wrote 'compareIpSixStrings' function - Used to validate IPv6 strings.
* Fixed mistake in 'writeErrorMessage'
	* Before: `%vType% '%vString%'`
	* After: `%vType string '%vString%'`

---

**./test/index.js**
* Wrote unit tests for IPv6 values.
