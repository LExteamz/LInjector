define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Function: {

			/**
			 * Roblox
			 */

			'sub()': {
				insertText: 'sub(${1:string}, ${2:i}, ${3:j})',
				documentation: {
					value: ""
				},
			},

			'find()': {
				insertText: 'find(${1:string}, ${2:pattern}, ${3:init})',
				documentation: {
					value: ""
				}
			},

			'split()': {
				insertText: 'split(${1:string}, ${2:seperator})',
				documentation: {
					value: ""
				}
			},

      			'len()': {
				insertText: 'len(${1:string})',
				documentation: {
					value: "Returns the length of the string"
				}
			},
      			'rep()': {
				insertText: 'rep(${1:string}, ${2:number})',
				documentation: {
					value: ""
				}
			},
      			'gsub()': {
				insertText: 'gsub(${1:string}, ${2:pattern}, ${3:replacement}, ${4:replacements})',
				documentation: {
					value: ""
				}
			},
      			'upper()': {
				insertText: 'upper(${1:string})',
				documentation: {
					value: ""
				}
			},
     			 'lower()': {
				insertText: 'lower(${1:string})',
				documentation: {
					value: ""
				}
			},
      			'reverse()': {
				insertText: 'reverse(${1:string})',
				documentation: {
					value: ""
				}
			},

			'format()': {
				insertText: 'format(${1:string}, ...)',
				documentation: {
					value: ""
				}
			}
		},
	};
});
