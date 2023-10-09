

define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	let autocompletes = {
		"Constant": {
			"false": {},
			"nil": {},
			"true": {},
		},
	};
	let isRegistered = false;

	async function register(file, target) {
		if (!target) target = autocompletes;
		return new Promise((resolve) => {
			require([`vs/basic-languages/lua/autocompletes/${file}.js`], (module) => {
				for (const kind in module.autocompletes) {
					const autocompleteContainer = module.autocompletes[kind];
					if (!target[kind]) {
						target[kind] = {};
					};
					for (const name in autocompleteContainer) {
						target[kind][name] = autocompleteContainer[name]
					};
				};
				resolve();
			});
		});
	};

	function loadusing(parent) {
		if (!parent) parent = autocompletes;
		let promises = [];

		if (parent.__requires__) {
			let requiringPromises = [];
			for (let i = 0; i < parent.__requires__[0].length; i++) {
				requiringPromises.push(register(parent.__requires__[0][i], parent));
			};
			parent.__requires__ = undefined;
			promises.push(
				Promise.all(requiringPromises)
					.then(() => {
						promises.push(loadusing(parent));
					})
			);
		};

		for (const kind in parent) {
			for (const name in parent[kind]) {
				let data = parent[kind][name]

				// If the data has __children__, then look through children:
				if (data.__children__) {

					let usingPromises = [];

					// If dependencies are found, register them:
					if (data.__using__) {
						for (let i = 0; i < data.__using__.length; i++) {
							usingPromises.push(register(data.__using__[i], data.__children__));
						};
					};

					// Add children once everything is inherited,
					// adding support for nested requirements:
					promises.push(
						Promise.all(usingPromises)
							.then(() => {
								promises.push(loadusing(data.__children__));
							})
					);
				};
			};
		};
		return Promise.all(promises);
	};

	exports.Load = async () => {
		if (isRegistered) {
			return Promise.resolve(autocompletes)
		} else {
			return Promise.all([
				register("classes"),
				register("functions"),
				register("functions-krnl"),
				register("modules"),
				register("globals"),
				register("keywords"),
				register("snippets"),
			])
				.then(() => loadusing())
				.then(() => {
					isRegistered = true;
					return autocompletes;
				});
		};
	};

});
