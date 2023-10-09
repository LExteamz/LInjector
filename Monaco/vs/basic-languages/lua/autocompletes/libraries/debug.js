define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Function: {

			/**
			 * Roblox
			 */

			'traceback()': {
				insertText: 'traceback(${1:thread}, ${2:message}, ${3:level})',
				documentation: {
					value: [
						'```lua', 'function traceback([thread,] [message: any [, level: any(1)]])\n  -> message: any', '```',
						'',
						'Returns a string with a traceback of the call stack. The optional message string is appended at the beginning of the traceback.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/debug)',
					].join('\n')
				},
			},

			'profilebegin()': {
				insertText: 'profilebegin(${1:label})',
				documentation: {
					value: [
						'```lua', 'function profilebegin(label: string)', '```',
						'',
						'Opens a microprofiler label.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/debug)',
					].join('\n')
				},
			},

			'profileend()': {
				insertText: 'profileend()',
				documentation: {
					value: [
						'```lua', 'function profileend()', '```',
						'',
						'Closes the top microprofiler label.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/debug)',
					].join('\n')
				},
			},

			'info()': {
				insertText: 'info(${1:level}, ${2:options})',
				documentation: {
					value: [
						'```lua', 'function info(level: number, options: string)\n  -> table', '```',
						'',
						'Returns debug information about a given stack frame or function object based on the options string (that can contain characters nslfa).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/debug)',
					].join('\n')
				},
			},

			'getupvalue()': {
				insertText: 'getupvalue(${1:func|integer}, ${2:index})',
				documentation: {
					value: [
						'```lua', 'function getupvalue(f: function|integer, index: number)\n  -> any', '```',
						'',
						'Returns the value of the upvalue at the given index of the function or level `f`.',
						'The function returns `nil` if there is no upvalue with the given index.',
						'',
						'---',
						'',
						'```lua',
						'local Lighting = game:GetService("Lighting")',
						'local Players = game:GetService("Players")',
						';(function()',
						'\tLighting.Name = "Michael"',
						'\tPlayers.Name = "Robin"',
						'\tdebug.getupvalues(1, 1) --> Lighting',
						'\tdebug.getupvalues(1, 2) --> Players',
						'end)()',
						'```',
						'',
						'[View Lua documents](https://www.lua.org/manual/5.3/manual.html#pdf-debug.getupvalue)',
					].join('\n')
				},
			},

			'getconstant()': {
				insertText: 'getconstant(${1:func|integer}, ${2:index})',
				documentation: {
					value: [
						'```lua', 'function getconstant(f: function|integer, index: number)\n  -> any', '```',
						'',
						'Returns the constant at the given index of the function or level `f`.',
						'',
						'---',
						'',
						'```lua',
						'local x = 1',
						'print(x)',
						'debug.getconstant(1, 1) --> 1 (number)',
						'debug.getconstant(1, 2) --> print (string)',
						'```',
					].join('\n')
				},
			},

			'setstack()': {
				insertText: 'setstack(${1:level}, ${2:index}, ${3:value})',
				documentation: {
					value: [
						'```lua', 'function setstack(f: number, index: number, value: any)', '```',
						'',
						'Assigns the value to the stack item with the given index of the function `f`.',
						'',
						'---',
						'',
						'```lua',
						'local function MyFunc()',
						'\tprint("Yo\'")',
						'end',
						'',
						'-- Sets the element at index 1 (MyFunc) to another function:',
						'debug.setstack(1, 1, function()',
						'\tprint("Aha!")',
						'end)',
						'',
						'MyFunc() --> Aha!',
						'```',
					].join('\n')
				},
			},

			'getstack()': {
				insertText: 'getstack(${1:level})',
				documentation: {
					value: [
						'```lua', 'function getstack(f: number)', '```',
						'',
						'Gets the runtime stack for the level `f`.',
						'',
						'---',
						'',
						'```lua',
						'local function MyFunc()',
						'end',
						'',
						'local children = workspace:GetChildren()',
						'',
						'table.foreach(children, MyFunc)',
						'',
						'--> { MyFunc, children, MyFunc }',
						'```',
					].join('\n')
				},
			},

			'getproto()': {
				insertText: 'getproto(${1:func|integer}, ${2:index}, ${3:list})',
				documentation: {
					value: [
						'```lua', 'function getproto(f: function|integer, index: number)\n  -> function', '```',
						'',
						'```lua', 'function getproto(f: function|integer, index: number, list: boolean)\n  -> Array<function>', '```',
						'',
						'Gets the inner function at the given index of the function or number `f`.',
						'If `list` is true, returns a list of garbage collected instances of the function.',
						'The function returned is not equivalent to the original function.',
						'',
						'---',
						'',
						'```lua',
						'local function f()',
						'end',
						'',
						'debug.getproto(1, 1) --> Proto<f>',
						'```',
					].join('\n')
				},
			},

			'getprotos()': {
				insertText: 'getprotos(${1:func|integer})',
				documentation: {
					value: [
						'```lua', 'function getprotos(f: function|integer)\n  -> Array<function>', '```',
						'',
						'Returns a list of inner functions for the function or number `f`.',
						'The functions returned will not have upvalues and are not equivalent to the original function.',
						'',
						'---',
						'',
						'```lua',
						'local function a()',
						'end',
						'local function b()',
						'end',
						'local function c()',
						'end',
						'',
						'debug.getprotos(1) --> { Proto<a>, Proto<b>, Proto<c> }',
						'```',
					].join('\n')
				},
			},

			'setproto()': {
				insertText: 'setproto(${1:func|integer}, ${2:index}, ${3:func})',
				documentation: {
					value: [
						'```lua', 'function setproto(f: function|integer, index: number, func: function)', '```',
						'',
						'Assigns the function to the inner function with the given index of the function `f`.',
						'',
						'---',
						'',
						'```lua',
						'local function MyFunc()',
						'\tlocal function Inner()',
						'\t\tprint("Yo\'")',
						'\tend',
						'\tInner()',
						'end',
						'debug.setproto(MyFunc, 1, function()',
						'\tprint("Aha")',
						'end',
						'MyFunc() --> Aha',
						'```',
					].join('\n')
				},
			},

			'getconstants()': {
				insertText: 'getconstants(${1:func|integer})',
				documentation: {
					value: [
						'```lua', 'function getconstants(f: function|integer)\n  -> Array<any>', '```',
						'',
						'Returns the list of constants in the function or level `f`.',
						'',
						'---',
						'',
						'```lua',
						'workspace.Name = "Michael"',
						'debug.getconstants(1) --> { "workspace", "Name", "Michael" }',
						'```',
					].join('\n')
				},
			},

			'getinfo()': {
				insertText: 'getinfo(${1:func|integer})',
				documentation: {
					value: [
						'```lua', 'function getinfo(f: function|integer)\n  -> FunctionInfo', '```',
						'',
						'Returns a table with information about a function. You can give the function directly',
						'or you can give a number as the value of `f`, which means the function running at level',
						'`f` of the call stack of the given thread. The second argument, `options`, is still in progress.',
						'',
						'```lua',
						'export type FunctionInfo = {',
						'\tname: string,',
						'\tshort_src: string,',
						'\twhat: string,',
						'\tcurrentline: number,',
						'\tnups: number,',
						'\tfunc: function<f>,',
						'\tsource: string,',
						'}',
						'```',
						'',
						'[View Lua documents](https://www.lua.org/manual/5.3/manual.html#pdf-debug.getinfo)',
					].join('\n')
				},
			},

			'setupvalue()': {
				insertText: 'setupvalue(${1:func|integer}, ${2:index}, ${3:value})',
				documentation: {
					value: [
						'```lua', 'function setupvalue(f: function|integer, index: number, value: any)\n  -> string?', '```',
						'',
						'Assigns the value to the upvalue with the given index of the function `f`.',
						'The function returns `nil` if there is no upvalue with the given index. Otherwise,',
						'it returns the name of the upvalue.',
						'',
						'---',
						'',
						'```lua',
						'local keys = {',
						'\t["asd123"] = "blacklisted",',
						'}',
						'local myKey = "asd123"',
						'',
						'local function IsValid()',
						'\treturn keys[myKey] == "whitelisted"',
						'end',
						'',
						'-- Replaces upvalue \'keys\' with one where we\'re whitelisted:',
						'debug.setupvalue(IsValid, 1, { asd123 = "whitelisted" })',
						'```',
						'',
						'[View Lua documents](https://www.lua.org/manual/5.3/manual.html#pdf-debug.setupvalue)',
					].join('\n')
				},
			},

			'setconstant()': {
				insertText: 'setconstant(${1:func|integer}, ${2:index}, ${3:value})',
				documentation: {
					value: [
						'```lua', 'function setconstant(f: function|integer, index: number, value: any)', '```',
						'',
						'Assigns the value to the constant with the given index of the function `f`.',
						'',
						'---',
						'',
						'```lua',
						'local keys = {',
						'\t["asd123"] = "blacklisted",',
						'}',
						'local myKey = "asd123"',
						'',
						'local function IsValid()',
						'\treturn keys[myKey] == "whitelisted"',
						'end',
						'',
						'-- Makes \'IsValid\' true for blacklisted keys by changing the \'whitelisted\' check:',
						'debug.setconstant(IsValid, 3, "blacklisted")',
						'```',
					].join('\n')
				},
			},

			'getregistry()': {
				insertText: 'getregistry()',
				documentation: {
					value: [
						'```lua', 'function getregistry()\n  -> Map<lightuserdata | string | number, any>', '```',
						'',
						'Returns the registry table.',
						'Lua provides a *registry*, a predefined table that can be used by any C code to store whatever Lua values it needs to store.',
						'The executor allows you to view the registry through Lua code.',
						'',
						'[View Lua documents](https://www.lua.org/manual/5.3/manual.html#pdf-debug.getregistry)',
					].join('\n')
				},
			},

			'getupvalues()': {
				insertText: 'getupvalues(${1:func|integer})',
				documentation: {
					value: [
						'```lua', 'function getupvalues(f: function|integer)\n  -> Array<any>', '```',
						'',
						'Returns the list of upvalues in the function or level `f`.',
						'',
						'---',
						'',
						'```lua',
						'local Lighting = game:GetService("Lighting")',
						'local Players = game:GetService("Players")',
						';(function()',
						'\tLighting.Name = "Michael"',
						'\tPlayers.Name = "Robin"',
						'\tdebug.getupvalues(1) --> { Lighting, Players }',
						'end)()',
						'```',
					].join('\n')
				},
			},
		},
	};
});