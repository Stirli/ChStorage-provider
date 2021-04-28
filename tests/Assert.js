/**
 * @callback comparator
 * @param param1
 * @param param2
 * @returns {boolean}
 */

export class Assert {
	/**
	 * @template T
	 * @param {T} expected
	 * @param {T} actual
	 * @param {comparator}
	 * @returns {boolean}
	 * @throws {AssertionError}
	 */
	equals(expected, actual, comparator) {
		if (expected === actual || expected == actual) {
			return true;
		}
		if (comparator !== undefined && comparator(expected, actual)) {
			return true;
		}
		throw new AssertionError("equals", expected, actual);
	}
}
