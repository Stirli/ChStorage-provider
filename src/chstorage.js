export class Document {
	_id;
	constructor() {}

	/**@returns {string} */
	static objectToString(obj, level) {
		let oneTab = "  ";
		let tab = oneTab.repeat(level);
		let spaceOrNewline =
			typeof level === "number" && !isNaN(level) ? "\n" : " ";
		return (
			"{" +
			spaceOrNewline +
			Object.keys(obj)
				.map((k) => {
					let val = obj[k];
					if (typeof val === "object" && val !== null) {
						val = Document.objectToString(val, level + 1);
					}

					return oneTab + tab + `${k} : ${val}`;
				})
				.join("," + spaceOrNewline) +
			spaceOrNewline +
			tab +
			"}"
		);
	}

	/**@returns {string} */
	toString() {
		return Document.objectToString(this);
	}

	/**@returns {string} */
	pretty() {
		return Document.objectToString(this, 0);
	}
}

export class DataContext {
	/**@type {("local"|"sync")} */
	mode;
	constructor(mode = "local") {
		for (const key in this) {
			if (Object.hasOwnProperty.call(this, key)) {
				this[key] = new DataCollection(key, this);
			}
		}
	}
	/**
	 * @callback DocumentReturnCallback
	 * @param {Document} document
	 */
	/**
	 *
	 * @param {string} collectionName
	 * @param {Document} document
	 * @param {DocumentReturnCallback} callback
	 */
	InsertValue(collectionName, document, callback) {}

	/**
	 *
	 * @param {string} collectionName
	 * @param {Document} document
	 * @param {DocumentReturnCallback} callback
	 */
	FindValue(collectionName, document, callback) {}
}

export class DataCollection {
	/**@type {DataContext} */
	name;
	#context;
	/**
	 * @param {string} name
	 * @param {DataContext} context
	 */
	constructor(name, context) {
		this.#context = context;
		this.name = name;
	}
}
