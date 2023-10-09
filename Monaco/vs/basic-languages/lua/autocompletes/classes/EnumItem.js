define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {

			'Name': {
				label: {
					name: 'Name',
					type: '(string)',
				},
				documentation: {
					value: [
						'The name of this EnumItem.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/datatype/EnumItem)',
					].join('\n')
				}
			},

			'Value': {
				label: {
					name: 'Value',
					type: '(number)',
				},
				documentation: {
					value: [
						'The integral value assigned to this enum.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/datatype/EnumItem)',
					].join('\n')
				}
			},

			'EnumType': {
				label: {
					name: 'EnumType',
					type: '(Enum)',
				},
				documentation: {
					value: [
						'A reference to the parent Enum of this EnumItem.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/datatype/EnumItem)',
					].join('\n')
				}
			},
		},
	};
});