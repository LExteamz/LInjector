define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Method: {

			'GetEnumItems()': {
				'insertText': 'GetEnumItems()',
				documentation: {
					value: [
						'```lua', 'GetEnumItems()\n  -> Array<EnumItem>', '```',
						'',
						'Returns an array containing all of the `EnumItem` options available for this enum.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/datatype/Enum)',
					].join('\n')
				},
			},
		},
	};
});