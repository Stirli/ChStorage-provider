/**
 * @callback MoveNextFuncton
 * @returns {boolean}
 */

/**
 * @template T
 * @typedef {Object} MyEnumerator
 * @property {T} current
 * @property {MoveNextFuncton} moveNext {@link MoveNextFuncton}
 */

/**
 * @template T
 * @param {MyEnumerator<T>} param
 */
function F(param) {
	param.moveNext();
}
