import { DataObject } from "./chstorage";

export class DataContext {
	/** @type {chrome.storage.StorageArea} */
	_storage;

	_cache;
	/**
	 * @param {(local|sync)} mode
	 */
	constructor(mode = "local") {
		for (const key in this) {
			if (Object.hasOwnProperty.call(this, key)) {
				this[key] = new DataCollection(key, this);
			}
		}
		this._storage = chrome.storage[mode];
	}

	/**
	 * @callback DocumentReturnCallback
	 * @param {DataObject} document
	 */
	/**
	 * @param {string} collectionName
	 * @param {DataObject | DataObject[]} document
	 * @param {DocumentReturnCallback} callback
	 */
	InsertValue(collectionName, document, callback) {
		let value = {};
		if (Array.isArray(document)) {
			document.forEach((element) => {
				value;
			});
		}
		this._storage.set(value);
	}

	/**
	 *
	 * @param {string} collectionName
	 * @param {DataObject} document
	 * @param {DocumentReturnCallback} callback
	 */
	FindValue(collectionName, document, callback) {}
}

/**
 * @template T
 * @callback ToArrayCallback
 * @param {T[]} array
 */

/**@template T */
export class ChromeStorageCollection {
	/**@returns {ChromeStorageCollection} */
	select() {}

	/**@param {ToArrayCallback<T>} callback */
	toArray(callback) {}
}
