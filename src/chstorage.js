export class DataObject {
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
						val = DataObject.objectToString(val, level + 1);
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
		return DataObject.objectToString(this);
	}

	/**@returns {string} */
	pretty() {
		return DataObject.objectToString(this, 0);
	}
}
