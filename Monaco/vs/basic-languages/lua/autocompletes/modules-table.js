define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		Module: {

			table: {

				__children__: {

					Function: {

						'insert()': {
							insertText: 'insert(${1:list}, ${2:pos}, ${3:value})',
							sortText: 'insert',
							documentation: {
								value: [
									'```lua', 'function insert(list: table [, pos: integer], value: any)', '```',
									'',
									'Inserts element `value` at position `pos` in list.',
								].join('\n')
							},
						},

						'clear()': {
							insertText: 'clear(${1:table})',
							sortText: 'clear',
							documentation: {
								value: [
									'```lua', 'function clear(table)', '```',
									'',
									'Clears all keys from the table, but leaves their capacity allocated so that future keys added to the table can re-use that storage, avoiding additional allocations.',
								].join('\n')
							},
						},

						'move()': {
							insertText: 'move(${1:list}, ${2:pos}, ${2:value})',
							sortText: 'move',
							documentation: {
								value: [
									'```lua', 'function move(a1: table, f: integer, e: integer, t: integer [, a2: table])\n  -> a2: table', '```',
									'',
									'Moves elements from table `a1` to table `a2`.',
									'',
									'```lua', 'a2[t],··· = a1[f],···,a1[e]\nreturn a2', '```',
								].join('\n')
							},
						},

						'pack()': {
							insertText: 'pack(${1:...})',
							sortText: 'pack',
							documentation: {
								value: [
									'```lua', 'function pack(...)\n  -> table', '```',
									'',
									'Returns a new table with all arguments stored into keys `1`, `2`, etc. and with a field `"n"` with the total number of arguments.',
								].join('\n')
							},
						},

						'remove()': {
							insertText: 'remove(${1:list}, ${2:pos})',
							sortText: 'remove',
							documentation: {
								value: [
									'```lua', 'function remove(list: table [, pos: integer])\n  -> any', '```',
									'',
									'Removes from `list` the element at position `pos`, returning the value of the removed element.',
								].join('\n')
							},
						},

						'sort()': {
							insertText: 'sort(${1:list}, ${2:comp})',
							sortText: 'sort',
							documentation: {
								value: [
									'```lua', 'function sort(list: table [, comp: (a, b) -> boolean])', '```',
									'',
									'Sorts list elements in a given order, *in-place*, from `list[1]` to `list[#list]`.',
								].join('\n')
							},
						},

						'getn()': {
							insertText: 'getn(${1:table})',
							sortText: 'getn',
							documentation: {
								value: [
									'```lua', 'function getn(table)\n  -> integer', '```',
									'',
									'Returns the number of elements in the table passed.',
								].join('\n')
							},
						},

						'foreach()': {
							insertText: 'foreach(${1:table}, ${2:f})',
							sortText: 'foreach',
							documentation: {
								value: [
									'```lua', 'function foreach(table, f: (any, any) -> nil)', '```',
									'',
									'Apply the function `f` to the elements of the table passed.',
								].join('\n')
							},
						},

						'concat()': {
							insertText: 'concat(${1:list}, ${2:sep}, ${3:i}, ${4:j})',
							sortText: 'concat',
							documentation: {
								value: [
									'```lua', 'function concat(list: table [, sep: string("") [, i: integer(1) [, j: integer]]])\n  -> string', '```',
									'',
									'Returns a string of all the values of array `list` separated by `sep`.',
									'',
									'---',
									'```lua', 'return list[i]..sep..list[i+1] ··· sep..list[j]', '```',
								].join('\n')
							},
						},

						'foreachi()': {
							insertText: 'foreachi(${1:table}, ${2:f})',
							sortText: 'foreachi',
							documentation: {
								value: [
									'```lua', 'function foreachi(table, f: (number, any) -> nil)', '```',
									'',
									'Apply the function `f` to the elements of the table passed. This is similar to `table.foreach()` except that index-value pairs are passed, not key-value pairs.',
								].join('\n')
							},
						},

						'create()': {
							insertText: 'create(${1:count}, ${2:value})',
							sortText: 'create',
							documentation: {
								value: [
									'```lua', 'function create(count: integer, value: any?)\n  -> table', '```',
									'',
									'Creates an array-like table with count `values`, initialized to value. When value is `nil` or omitted, the resulting table has length 0, but has preallocated storage for count elements.',
								].join('\n')
							},
						},

						'find()': {
							insertText: 'find(${1:table}, ${2:value}, ${3:init})',
							sortText: 'find',
							documentation: {
								value: [
									'```lua', 'function find(table, value: any [, init: integer(1)])\n  -> any', '```',
									'',
									'Returns the numeric index of the first occurence of `value`, starting from `init`, or nil if value isn\'t present in the table. The default for `init` is 1.',
								].join('\n')
							},
						},

						'unpack()': {
							insertText: 'unpack(${1:list}, ${2:i}, ${3:j})',
							sortText: 'unpack',
							documentation: {
								value: [
									'```lua', 'function unpack(list: table [, i: integer(1) [, j: integer]]): ...any', '```',
									'',
									'Returns all elements from an array as results.',
									'',
									'---',
									'```lua', 'return list[i], list[i+1], ···, list[j]', '```',
								].join('\n')
							},
						},
					},
				},
			},
		},
	};
});