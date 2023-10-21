define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Function: {

			/**
			 * Roblox
			 */

			'wrap()': {
				insertText: 'wrap(${1:function}, ${2:...args})',
				documentation: {
					value: ""
				},
			},

			'yield()': {
				insertText: 'yield()',
				documentation: {
					value: ""
				}
			},

			'resume()': {
				insertText: 'resume(${1:thread})',
				documentation: {
					value: ""
				}
			},

			'close()': {
				insertText: 'close(${1:thread})',
				documentation: {
					value: ""
				}
			},
      
      'status()': {
				insertText: 'create(${1:thread})',
				documentation: {
					value: ""
				}
			}
      
		},
	};
});
