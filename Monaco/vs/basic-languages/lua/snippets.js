

define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.snippets = {
		"Class": {
			"Axes": {},
			"BrickColor": {},
			"CFrame": {},
			"Color3": {},
			"CatalogSearchParams": {},
			"ColorSequence": {},
			"ColorSequenceKeypoint": {},
			"DateTime": {},
			"DockWidgetPluginGuiInfo": {},
			"Faces": {},
			"Instance": {},
			"NumberRange": {},
			"NumberSequence": {},
			"NumberSequenceKeypoint": {},
			"PhysicalProperties": {},
			"PathWaypoint": {},
			"Ray": {},
			"Region3int16": {},
			"Random": {},
			"Region3": {},
			"Rect": {},
			"RaycastParams": {},
			"TweenInfo": {},
			"UDim": {},
			"UDim2": {},
			"Vector3int16": {},
			"Vector3": {},
			"Vector2": {},
			"Vector2int16": {},
		},

		"Enum": {
			"Enum": {},
		},

		"Module": {
			"bit32": {},
			"coroutine": {},
			"debug": {},
			"math": {},
			"os": {},
			"string": {},
			"table": {},
			"utf8": {},
		},

		"Keyword": {

			// Operators:
			"and": {},
			"not": {},
			"or": {},

			// Keywords:
			"break": {},
			"continue": {},
			"end": {},
			"in": {},
			"local": {},
			"then": {},
			"until": {},

			// Special words:
			"self": {},

		},

		"Variable": {
			"game": {},
			"shared": {},
			"script": {},
			"_G": {},
			"_VERSION": {},
			"workspace": {},
			"plugin": {},
		},

		"Constant": {
			"false": {},
			"nil": {},
			"true": {},
		},

		"Snippet": {

			// Statements:
			"if-statement": {
				"prefix": "if",
				"body": [
					"if ${1} then",
					"\t${0}",
					"end",
				],
				"description": "If statement",
			},
			"elseif-statement": {
				"prefix": "elseif",
				"body": [
					"elseif ${1} then",
					"\t${0}",
				],
				"description": "If statement",
			},
			"else-statement": {
				"prefix": "else",
				"body": [
					"else",
					"\t${1}",
				],
				"description": "If statement",
			},
			"do-statement": {
				"prefix": "do",
				"body": [
					"do",
					"\t${0}",
					"end",
				],
				"description": "Do statement",
			},

			// Loops:
			"while-loop": {
				"prefix": "while",
				"body": [
					"while ${1} do",
					"\t${0}",
					"end",
				],
				"description": "While loop",
			},
			"repeat-loop": {
				"prefix": "while",
				"body": [
					"repeat",
					"\t${0}",
					"until",
				],
				"description": "Repeat loop",
			},
			"for-loop": {
				"prefix": "for",
				"body": [
					"for ${1:i} = ${2}, ${3}, ${4} do",
					"\t${0}",
					"end",
				],
				"description": "Numerical for loop",
			},
			"for-in-loop": {
				"prefix": "for in",
				"body": [
					"for ${1} in ${2:pairs}(${3}) do",
					"\t${0}",
					"end",
				],
				"description": "For-in loop",
			},

			// Definitions:
			"function-def": {
				"prefix": "function",
				"body": [
					"function ${1}(${2})",
					"\t${0}",
					"end",
				],
				"description": "Function definition",
			},

		},

		"Function": {

			// Roblox:
			"delay": {
				"body": "delay(${1:delayTime}, ${2:callback})",
				"documentation": {
					value: [
						"```lua\nfunction delay(delayTime: number, callback: function)\n```",
						"",
						"Schedules a function to be executed after `delayTime` seconds have passed, without yielding the current thread."
					].join("\n")
				},
			},

			"elapsedTime": {
				"body": "elapsedTime()",
				"documentation": {
					value: [
						"```lua\nfunction elapsedTime()\n  -> number\n```",
						"",
						"Returns how much time has elapsed since the current instance of Roblox was started."
					].join("\n")
				},
			},

			"error": {
				"body": "error(${1:message}, ${2:level})",
				"documentation": {
					value: [
						"```lua\nfunction error(message: any [, level: integer])\n  -> number\n```",
						"",
						"Terminates the last protected function called and returns message as the error object."
					].join("\n")
				},
			},

			"getmetatable": {
				"body": "getmetatable(${1:object})",
				"documentation": {
					value: [
						"```lua\nfunction getmetatable(object: any)\n  -> metatable: table\n```",
						"",
						"Returns the metatable of the given object."
					].join("\n")
				},
			},

			"getfenv": {
				"body": "getfenv(${1:f})",
				"documentation": {
					value: [
						"```lua\nfunction getfenv([f: any(1)])\n  -> table\n```",
						"",
						"Returns the current environment in use by the function. `f` can be a Lua function or a number that specifies the function at that stack level."
					].join("\n")
				},
			},

			"ipairs": {
				"body": "ipairs(${1:t})",
				"documentation": {
					value: [
						"```lua\nfunction ipairs(t: table)\n  -> iterator: any\n  2. t: table\n  3. i: integer(0)\n```",
						"---",
						"```lua\nfor i, v in ipairs(t) do\n\tbody\nend\n```"
					].join("\n")
				},
			},

			"loadstring": {
				"body": "loadstring(${1:string}, ${2:chunkname})",
				"documentation": {
					value: [
						"```lua\nfunction loadstring(string [, chunkname: string])\n  -> function\n  2. error_message: string\n```",
						"",
						"Loads a chunk from the given string."
					].join("\n")
				},
			},

			"next": {
				"body": "next(${1:table}, ${2:index})",
				"documentation": {
					value: [
						"```lua\nfunction next(table: table [, index: any])\n  -> key: any\n  2. value: any\n```",
						"",
						"Returns the next index of the table and its associated value."
					].join("\n")
				},
			},

			"newproxy": {
				"body": "newproxy(${1:addMetatable})",
				"documentation": {
					value: "```lua\nfunction newproxy(addMetatable: boolean)\n  -> userdata\n```",
				},
			},

			"pairs": {
				"body": "pairs(${1:t})",
				"documentation": {
					value: [
						"```lua\nfunction pairs(t: table)\n  -> @next: function\n  2. t: table\n  3. nil\n```",
						"---",
						"```lua\nfor i, v in pairs(t) do\n\tbody\nend\n```"
					].join("\n")
				},
			},

			"pcall": {
				"body": "pcall(${1:f}, ${2:arg}, ${3:...})",
				"documentation": {
					value: [
						"```lua\nfunction pcall(f: function [, arg1: any, ...])\n  -> success: boolean\n  2. result: any\n  3. ...\n```",
						"",
						"Calls function with the given arguments in protected mode."
					].join("\n")
				},
			},

			"RandomString": {
				"body": "crypt.generatekey(${1:int})",
				documentation: {
					value: [
						"```lua\nEncryption library \n-> crypt.generatekey(...)\n```", 
						"",
						"Returns an string of the specified integer length."
					].join("\n")
				},
			},

			"print": {
				"body": "print(${1:...})",
				"documentation": {
					value: [
						"```lua\nfunction print(...)\n```",
						"",
						"Receives any number of arguments and prints their values to stdout."
					].join("\n")
				},
			},

			"rawequal": {
				"body": "rawequal(${1:v1}, ${2:v2})",
				"documentation": {
					value: [
						"```lua\nfunction rawequal(v1: any, v2: any)\n  -> boolean\n```",
						"",
						"Checks whether `v1` is equal to `v2`, without invoking the `__eq` metamethod."
					].join("\n")
				},
			},

			"rawget": {
				"body": "rawget(${1:table}, ${2:index})",
				"documentation": {
					value: [
						"```lua\nfunction rawget(table: table, index: any)\n  -> any\n```",
						"",
						"Gets the real value of `table[index]`, without invoking the `__index` metamethod."
					].join("\n")
				},
			},

			"require": {
				"body": "require(${1:module})",
				"documentation": {
					value: "```lua\nfunction rawget(module: ModuleScript)\n  -> any\n```",
				},
			},

			"rawset": {
				"body": "rawset(${1:table}, ${2:index})",
				"documentation": {
					value: [
						"```lua\nfunction rawset(table: table, index: any, value: any)\n  -> table\n  -> any\n```",
						"",
						"Sets the real value of `table[index]` to value, without invoking the `__newindex` metamethod."
					].join("\n")
				},
			},

			"spawn": {
				"body": "spawn(${1:callback})",
				"documentation": {
					value: [
						"```lua\nfunction spawn(callback: function)\n```",
						"",
						"Runs the specified callback function in a separate thread, without yielding the current thread."
					].join("\n")
				},
			},

			"setfenv": {
				"body": "setfenv(${1:f|integer}, ${2:table})",
				"documentation": {
					value: [
						"```lua\nfunction setfenv(f: function|integer, table)\n  -> function\n```",
						"",
						"Sets the environment to be used by the given function. 'f' can be a Lua function or a number that specifies the function at that stack level."
					].join("\n")
				},
			},

			"select": {
				"body": "select(${1:f})",
				"documentation": {
					value: '```lua\nfunction select(index: string|integer, ...)\n  -> any\n\nindex: string/integer\n   | "#"\n   | integer\n```',
				},
			},

			"settings": {
				"body": "settings()",
				"documentation": {
					value: [
						"```lua\nfunction settings()\n  -> GlobalSettings\n```",
						"",
						"Returns the GlobalSettings object, which can be used to access the settings objects that are used in Roblox Studio’s settings menu."
					].join("\n")
				},
			},

			"setmetatable": {
				"body": "setmetatable(${1:table}, ${2:metatable})",
				"documentation": {
					value: [
						"```lua\nfunction setmetatable(table: table, metatable: table)\n  -> table\n```",
						"",
						"Sets the metatable for the given table."
					].join("\n")
				},
			},

			"type": {
				"body": "type(${1:v})",
				"documentation": {
					value: [
						"```lua\nfunction type(v: any)\n  -> type: string\n```",
						"",
						"Returns the type of its only argument, coded as a string.",
						"",
						'type: string\n   | "nil"\n   | "number"\n   | "string"\n   | "boolean"\n   | "table"\n   | "function"\n   | "thread"\n   | "userdata"'
					].join("\n")
				},
			},

			"typeof": {
				"body": "typeof(${1:object})",
				"documentation": {
					value: [
						"```lua\nfunction typeof(object: any)\n  -> string\n```",
						"",
						"Returns the type of the object specified, as a string. This function is more accurate than Lua’s native `type` function, as it does not denote Roblox-specific types as userdata."
					].join("\n")
				},
			},

			"tostring": {
				"body": "tostring(${1:v})",
				"documentation": {
					value: [
						"```lua\nfunction tostring(v: any)\n  -> string\n```",
						"",
						"Receives a value of any type and converts it to a string in a human-readable format."
					].join("\n")
				},
			},

			"time": {
				"body": "time()",
				"documentation": {
					value: [
						"```lua\nfunction time()\n  -> number\n```",
						"",
						"Returns the amount of time, in seconds, that has elapsed since the current game instance started running. If the current game instance is not running, this will be 0"
					].join("\n")
				},
			},

			"tonumber": {
				"body": "tonumber(${1:e|number}, ${2:base})",
				"documentation": {
					value: [
						"```lua\nfunction tonumber(e: string|number [, base: integer])\n  -> number\n```",
						"",
						"Tries to convert its argument to a number."
					].join("\n")
				},
			},

			"tick": {
				"body": "tick()",
				"documentation": {
					value: [
						"```lua\nfunction tick()\n  -> number\n```",
						"",
						"Returns how much time has elapsed, in seconds, since the UNIX epoch, on the current local session’s computer."
					].join("\n")
				},
			},

			"unpack": {
				"body": "sample(${1:list}, ${2:i}, ${3:j})",
				"documentation": {
					value: [
						"```lua\nfunction unpack(list: table [, i: integer(1) [, j: integer]])\n```",
						"---",
						"```lua\nreturn list[i], list[i+1], ···, list[j]\n```"
					].join("\n")
				},
			},

			"UserSettings": {
				"body": "UserSettings()",
				"documentation": {
					value: [
						"```lua\nfunction UserSettings()\n  -> UserSettings\n```",
						"",
						"eturns the UserSettings object, which is used to read information from the current user’s game menu settings."
					].join("\n")
				},
			},

			"warn": {
				"body": "warn(${1:...})",
				"documentation": {
					value: [
						"```lua\nfunction warn(...)\n```",
						"",
						"Emits a warning with a message composed by the concatenation of all its arguments (which should be strings)."
					].join("\n")
				},
			},

			"wait": {
				"body": "wait(${1:seconds})",
				"documentation": {
					value: [
						"```lua\nfunction wait(seconds: number)\n  -> number\n  2. number\n```",
						"",
						"Yields the current thread until the specified amount of `seconds` have elapsed."
					].join("\n")
				},
			},

			"xpcall": {
				"body": "xpcall(${1:f}, ${2:err}, ${3:arg1}, ${4:...})",
				"documentation": {
					value: [
						"```lua\nfunction xpcall(f: function, err: function [, arg1: any, ...])\n	-> success: boolean\n	2. result: any\n	3. ...\n```",
						"",
						"Calls function `f` in protected mode with a new message handler."
					].join("\n")
				},
			},

			"sample": {
				"body": "sample(${1:object})",
				"documentation": {
					value: [
						"```lua\n\n```",
						"",
						"Sets the metatable for the given table."
					].join("\n")
				},
			},

		}
	};
});
