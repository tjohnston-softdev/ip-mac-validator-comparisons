# IP/MAC Address Validator Comparisons

---

### As of 8 April 2022, this repository has been discontinued

---

This is a demo project that compares IP and MAC Address string validation between different libraries. The idea is to validate a given string using a [heavy](https://www.npmjs.com/package/validator) and a [lighter](https://www.npmjs.com/package/ip-regex) validation library to see whether the results match.

Now, I love the [validator](https://www.npmjs.com/package/validator) library, I really do. However, I try to avoid unnecessary bloat in my projects. When you install 'validator', you install the whole suite of functions regardless of whether you actually plan on using them or not. This is fine when you're validating a wide variety of input but if its for just one or two types, it is a little excessive. Why download a ~700kb library full of stuff you're not going to use when the ~10kb library accomplishes the same thing? I ended up [downsizing](https://github.com/tjohnston-softdev/fox-controller-app/commit/4025ea6656266758a823f2b5910c80346713d77a) in one of my projects and it made no difference at all.

At the same time, I am well aware that just because the outcome is the same, that does not mean that the libraries function in exactly the same way. I felt the need to downsize in one of my other projects so I decided to put together a little experiment.

This unit testing project runs validation on different input strings using two different libraries. One of them is the classic 'validator' library and the other is a lighter alternative. If the two results match, that means the validation is the same. Otherwise, we know the libraries function differently enough to affect the outcome.

In doing this, I am not implying that one library is better than the other. All this proves is that while two libraries may appear to function the same, they can still produce different results depending on the input. I think it is up to you to decide which library is appropriate for which situation, and what trade-offs you might consider.

---

## Usage

1. Open a terminal inside the project folder.
2. Run `npm install`
3. Run `npm test` to perform the unit tests.

---

## Libraries Used

* [validator](https://www.npmjs.com/package/validator) - Classic, heavy validation library.
* [ip-regex](https://www.npmjs.com/package/ip-regex) - Lighter alternative for IP Addresses.
* [mac-regex](https://www.npmjs.com/package/mac-regex) - Lighter alternative for MAC Addresses.
* [mocha](https://mochajs.org/), [chai](https://www.chaijs.com/) - Unit testing framework.

---

## Credits

* [@tjohnston-softdev](https://github.com/tjohnston-softdev) - Unit testing script.
* Test data copied from 'validator' [unit tests](https://github.com/validatorjs/validator.js/blob/master/test/validators.js)
* See libraries for their respective developers.

---

## Disclaimer

This demo project is licensed under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). I only wrote this as an experiment to compare the results of different validation libraries. This is not an official project in any capacity. I have no affiliation with the respective developers nor their contributors. While I will make an effort to maintain this repository where applicable, I do not accept any responsibility for how you use this code or how you interpret the test results.
