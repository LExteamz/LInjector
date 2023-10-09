define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Module": {
			"bit32": {},
			"coroutine": {},
			"debug": {
				__children__: {},
				__using__: ['libraries/debug'],
			},
			"math": {
				__children__: {},
				__using__: ['libraries/math'],
			},
			"os": {},
			"string": {},
			"table": {
				__children__: {},
				__using__: ['libraries/table'],
			},
			"utf8": {},
		},
	};
});