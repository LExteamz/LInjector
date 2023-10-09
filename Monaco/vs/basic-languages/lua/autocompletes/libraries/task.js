define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Function: {

			/**
			 * Roblox
			 */

			'spawn()': {
				insertText: 'spawn(${1:function}, ${2:...args})',
				documentation: {
					value: [
						'```lua', 'function spawn([function,] [args: any])\n  -> void', '```',
						'',
						'This function is based on the fastSpawn pattern.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/task)',
					].join('\n')
				},
			},

			'defer()': {
				insertText: 'defer(${1:function}, ${2:...args})',
				documentation: {
					value: [
						'```lua', 'function defer([function,] [args: any]\n  -> void', '```',
						'',
						'Calls the function later at the next resumption cycle.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/task)'
					].join('\n')
				}
			},

			'delay()': {
				insertText: 'delay(${1:number}, ${2:function}, ${3:...args})',
				documentation: {
					value: [
						'```lua', 'function delay([duration: number], [function, [args: any]])\n  -> void', '```',
						'',
						'Scheduled to be called/resumed on the next Heartbeat after the given amount of time in seconds has elapsed.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/task)'
					].join('\n')
				}
			},

			'wait()': {
				insertText: 'wait(${1:number})',
				documentation: {
					value: [
						'```lua', 'function wait([duration: number])\n  -> number', '```',
						'',
						'Yields the current thread until the given duration (in seconds) has elapsed, then resumes the thread on the next Heartbeat step.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/task)'
					].join('\n')
				}
			}
		},
	};
});