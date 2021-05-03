import { DataObject } from "../src/chstorage.js";

class MyDoc extends DataObject {
	name;
	age;
	constructor(name, age) {
		super();
		this.name = name;
		this.age = age;
	}
}

let myDoc = new MyDoc(
	{ name: "Bob", lastName: "Johnson" },
	{ ageNum: 5, birthday: { day: 5, month: 3, year: 1995 } }
);
myDoc._id = 1;

QUnit.module("Document", function () {
	QUnit.test(".toString()", (assert) => {
		assert.equal(
			myDoc.toString(),
			"{   _id : 1,   name : {   name : Bob,   lastName : Johnson },   age : {   ageNum : 5,   birthday : {   day : 5,   month : 3,   year : 1995 } } }".replaceAll(
				" : ",
				" : "
			)
		);
	});
	QUnit.test(".pretty()", (assert) => {
		assert.equal(
			myDoc.pretty(),
			(
				"{\n" +
				"  _id : 1,\n" +
				"  name : {\n" +
				"    name : Bob,\n" +
				"    lastName : Johnson\n" +
				"  },\n" +
				"  age : {\n" +
				"    ageNum : 5,\n" +
				"    birthday : {\n" +
				"      day : 5,\n" +
				"      month : 3,\n" +
				"      year : 1995\n" +
				"    }\n" +
				"  }\n" +
				"}"
			).replaceAll(" : ", " : ")
		);
	});
});
