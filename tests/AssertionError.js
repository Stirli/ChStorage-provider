/**
 * @template T
 */
export class AssertionError extends Error {
	/**@type {string} */
	_assertType;
	get assertType() {
		return this._assertType;
	}
	/**@type {T} */
	_expected;
	get expected() {
		return this._expected;
	}
	/**@type {T} */
	_actual;
	get actual() {
		return this._actual;
	}

	/**
	 * @param {string} assertType
	 * @param {T} expected
	 * @param {T} actual
	 */
	constructor(assertType, expected, actual) {
		this._assertType = assertType;
		this._actual = actual;
		this.expected = expected;
	}
}
