define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Snippet": {

			// Statements:
			"if-statement": {
				"label": "if",
				"insertText": [
					"if ${1} then",
					"\t${0}",
					"end",
				],
				"detail": "If statement",
			},
			"elseif-statement": {
				"label": "elseif",
				"insertText": [
					"elseif ${1} then",
					"\t${0}",
				],
				"detail": "If statement",
			},
			"else-statement": {
				"label": "else",
				"insertText": [
					"else",
					"\t${1}",
				],
				"detail": "If statement",
			},
			"do-statement": {
				"label": "do",
				"insertText": [
					"do",
					"\t${0}",
					"end",
				],
				"detail": "Do statement",
			},

			// Loops:
			"while-loop": {
				"label": "while",
				"insertText": [
					"while ${1} do",
					"\t${0}",
					"end",
				],
				"detail": "While loop",
			},
			"repeat-loop": {
				"label": "repeat",
				"insertText": [
					"repeat",
					"\t${0}",
					"until",
				],
				"detail": "Repeat loop",
			},
			"for-loop": {
				"label": "for",
				"insertText": [
					"for ${1:i} = ${2}, ${3}, ${4} do",
					"\t${0}",
					"end",
				],
				"detail": "Numerical for loop",
			},
			"for-in-loop": {
				"label": "for in",
				"insertText": [
					"for ${1} in ${2:pairs}(${3}) do",
					"\t${0}",
					"end",
				],
				"detail": "For-in loop",
			},

			// Definitions:
			"function-def": {
				"label": "function",
				"insertText": [
					"function ${1}(${2})",
					"\t${0}",
					"end",
				],
				"detail": "Function definition",
			},
			"type-def": {
				"label": "typedef",
				"insertText": "type ${1} = ",
				"detail": "Type definition",
			},

		},
	};
});