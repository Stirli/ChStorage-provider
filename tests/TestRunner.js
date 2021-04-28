import { Test } from "./Test.js";

class TestRunner {
	/**
	 * @type {Array<Test>}
	 */
	_tests = [];

	/**@param {Test} test */
	register(test) {
		this._tests.push(test);
	}

	/**
	 * @type {function}
	 * @throws {AssertionError} */
	run() {
		array.forEach((test) => {
			test.run();
		});
	}
}

export { TestRunner };
