currentDiary: {
}
// {
// 				entry: "I luv uuuuuu #brad",
// 				tags: ["brad"],
// 				id: "4"
// 			};

let diary = {
	load: path => {
		return require(path);
	},

	entry: message => {
		tags = [];

		/#(\w+){#|\s}/;

		return {};
	},

	insertEntry: () => {},

	entriesWithTag: () => {},

	entries: () => {},

	tags: () => {},

	today: () => {},

	date: () => {},

	search: () => {},

	save: () => {}
};

module.exports = diary;
