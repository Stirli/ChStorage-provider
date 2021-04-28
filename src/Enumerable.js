/**
 * @template T
 * @template R
 * @callback SelectorExpression
 * @param {T} current
 * @returns {R}
 */

/**
 * @template T
 * @callback Predicate
 * @param {T} current
 * @returns {boolean}
 */

/**@template T */
class JEnumerator {
	/**@type {T} */
	current;
	/**@type {T[]} */
	#array;
	/**@type {number} */
	#index;

	/**@param {T[]} array */
	constructor(array) {
		if (array === undefined) {
			this.#array = [];
		} else {
			this.#array = array;
		}
		this.reset();
	}

	/**@returns {boolean} */
	moveNext() {
		if (this.#index + 1 < this.#array.length) {
			this.current = this.#array[++this.#index];
			return true;
		}

		return false;
	}

	/**@returns {void} */
	reset() {
		this.#index = -1;
		this.current = null;
	}
}

/**@template T */
class JEnumerable {
	/**@type {JEnumerator<T>} */
	#enumerator;

	/**@param {T[]} array */
	constructor(array) {
		this.#enumerator = new JEnumerator(array);
	}

	/**
	 * @returns {JEnumerator<T>}
	 */
	getEnumerator() {
		return this.#enumerator;
	}

	/**
	 * @template R
	 * @param {SelectorExpression<T,R>} selector
	 * @returns {JEnumerable<R>}
	 */
	select(selector) {
		let currentEnumerator = this.getEnumerator();
		let result = new JEnumerable();
		result.getEnumerator = function () {
			let enumerator = new JEnumerator();
			enumerator.moveNext = function () {
				if (currentEnumerator.moveNext()) {
					this.current = selector(currentEnumerator.current);
					return true;
				}

				return false;
			};
			return enumerator;
		};
		return result;
	}

	/**
	 * @param {Function<T>} predicate
	 * @returns {JEnumerable<T>}
	 */
	where(predicate) {
		let currentEnumerator = this.getEnumerator();
		let result = new JEnumerable();
		result.getEnumerator = function () {
			let enumerator = new JEnumerator();
			enumerator.moveNext = function () {
				if (currentEnumerator.moveNext()) {
					do {
						if (predicate(currentEnumerator.current)) {
							this.current = currentEnumerator.current;
							return true;
						}
					} while (currentEnumerator.moveNext());
				}

				return false;
			};
			return enumerator;
		};
		return result;
	}

	/**
	 * @returns {Array<T>}
	 */
	toArray() {
		let enumerator = this.getEnumerator();
		let array = [];
		enumerator.reset();
		while (enumerator.moveNext()) {
			array.push(enumerator.current);
		}

		enumerator.reset();
		return array;
	}
}

let a = new JEnumerable([1, 2, 3, 4, 5, 6]);
console.log(
	a
		.select((e) => {
			return e + 10;
		})
		.where((e) => {
			return e % 2 == 0;
		})
		.select((e) => {
			return `[${e}]`;
		})
		.toArray()
);
