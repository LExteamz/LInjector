define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Method: {
			'Connect()': {
				insertText: 'Connect(${1:func})',
				sortText: 'Connect',
				documentation: {
					value: [
						'```lua', 'function Connect(func: (...any) -> nil)\n  -> RBXScriptConnection', '```',
						'',
						'Establishes a function to be called whenever the event is raised. Returns a [`RBXScriptConnection`](https://developer.roblox.com/en-us/api-reference/datatype/RBXScriptConnection) object associated with the connection.',
						'',
						'```lua',
						'export type RBXScriptConnection = {',
						'\tConnected: bool,',
						'\tDisconnect: (self) -> nil,',
						'}',
						'```',
					].join('\n')
				},
			},

			'Wait()': {
				insertText: 'Wait()',
				sortText: 'Wait',
				documentation: {
					value: [
						'```lua', 'function Wait()\n  -> ...any', '```',
						'',
						'Yields the current thread until this signal is fired. Returns what was fired to the signal.',
					].join('\n')
				},
			},
		},
	};
});