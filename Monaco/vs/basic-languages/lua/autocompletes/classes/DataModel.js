define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {

			'JobId': {
				label: {
					name: 'JobId',
					type: '(string)',
				},
				documentation: {
					value: [
						'A unique identifier for the game server instance running.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId)',
					].join('\n')
				}
			},

			'PrivateServerOwnerId': {
				label: {
					name: 'PrivateServerOwnerId',
					type: '(number)',
				},
				documentation: {
					value: [
						'The `UserId` of the `Player` that owns the VIP server if the server is a VIP server.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/PrivateServerOwnerId)',
					].join('\n')
				}
			},

			'PlaceVersion': {
				label: {
					name: 'PlaceVersion',
					type: '(number)',
				},
				documentation: {
					value: [
						'The version of the place the server is running on.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceVersion)',
					].join('\n')
				}
			},

			'PlaceId': {
				label: {
					name: 'PlaceId',
					type: '(number)',
				},
				documentation: {
					value: [
						'The ID of the [place](https://developer.roblox.com/en-us/articles/Place) running on the server.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId)',
					].join('\n')
				}
			},

			'PrivateServerId': {
				label: {
					name: 'PrivateServerId',
					type: '(string)',
				},
				documentation: {
					value: [
						'The private server ID of the server, if the server is a private server. If the server is not a private server then this property will be an empty string.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/PrivateServerId)',
					].join('\n')
				}
			},

			'GameId': {
				label: {
					name: 'GameId',
					type: '(number)',
				},
				documentation: {
					value: [
						'The ID of the [game](https://developer.roblox.com/en-us/articles/Multi-Place-Games) the [place](https://developer.roblox.com/en-us/articles/Place) running on the server belongs to.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/GameId)',
					].join('\n')
				}
			},

			'Genre': {
				label: {
					name: 'Genre',
					type: '(Enum.Genre)',
				},
				tags: [1],
				documentation: {
					value: [
						'```lua',
						'--[[',
						'\t@deprecated This item is broken and should not be used.',
						']]',
						'```',
						'',
						'This property historically described the [`Genre`](https://developer.roblox.com/en-us/api-reference/enum/Genre) of the [place](https://developer.roblox.com/en-us/articles/Place) as set on the Roblox website.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/Genre)',
					].join('\n')
				},
			},

			'CreatorId': {
				label: {
					name: 'CreatorId',
					type: '(number)',
				},
				documentation: {
					value: [
						'The ID of the user or group that owns the [place](https://developer.roblox.com/en-us/articles/Place).',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/CreatorId)',
					].join('\n')
				},
			},

			'CreatorType': {
				label: {
					name: 'CreatorType',
					type: '(Enum.CreatorType)',
				},
				documentation: {
					value: [
						'The [`CreatorType`](https://developer.roblox.com/en-us/api-reference/enum/CreatorType) of the place, whether the [place](https://developer.roblox.com/en-us/articles/Place) is owned by a user or a group.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/CreatorType)',
					].join('\n')
				},
			},
		},

		Class: {

			'Workspace': {
				label: {
					name: 'Workspace',
					type: '(Workspace)',
				},
				documentation: {
					value: [
						'A reference to Workspace.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/DataModel/Workspace)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/Workspace'],
			},
		},

		Event: {

			'GraphicsQualityChangeRequest': {
				label: {
					name: 'GraphicsQualityChangeRequest',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> betterQuality: boolean', '```',
						'',
						'Fires when the user prompts and increase or decrease in graphics quality using the hotkeys.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/DataModel/GraphicsQualityChangeRequest)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'Loaded': {
				label: {
					name: 'Loaded',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						// '```lua', '-> betterQuality: boolean', '```',
						// '',
						'Fires on the client when the game finishes loading for the first time.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/DataModel/Loaded)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},
		},

		Method: {

			'BindToClose()': {
				insertText: 'BindToClose(${1:func})',
				documentation: {
					value: [
						'```lua', 'function BindToClose(func: function)', '```',
						'',
						'Binds a function to be called before the game shuts down. The game will wait for all functions bound to complete before shutting down.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/BindToClose)',
					].join('\n')
				},
			},

			'GetEngineFeature()': {
				insertText: 'GetEngineFeature(${1:name})',
				documentation: {
					value: [
						'```lua', 'function GetEngineFeature(name: string)\n  -> boolean', '```',
						'',
						'No info found.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetEngineFeature)',
					].join('\n')
				},
			},

			'GetFastFlag()': {
				insertText: 'GetFastFlag(${1:name})',
				documentation: {
					value: [
						'```lua', 'function GetFastFlag(name: string)\n  -> enabled: boolean', '```',
						'',
						'Returns the value of an FFlag if it exists.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetFastFlag)',
					].join('\n')
				},
			},

			'GetFastInt()': {
				insertText: 'GetFastInt(${1:name})',
				documentation: {
					value: [
						'```lua', 'function GetFastInt(name: string)\n  -> number', '```',
						'',
						'Returns the value of an FInt if it exists.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetFastInt)',
					].join('\n')
				},
			},

			'GetFastString()': {
				insertText: 'GetFastString(${1:name})',
				documentation: {
					value: [
						'```lua', 'function GetFastString(name: string)\n  -> string', '```',
						'',
						'Returns the value of an FString if it exists.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetFastString)',
					].join('\n')
				},
			},

			'GetJobsInfo()': {
				insertText: 'GetJobsInfo()',
				documentation: {
					value: [
						'```lua', 'function GetJobsInfo()\n  -> Array<table>', '```',
						'',
						'Returns a table containing basic information about the jobs performed by the task scheduler.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetJobsInfo) or [TaskScheduler](https://developer.roblox.com/en-us/api-reference/class/TaskScheduler)',
					].join('\n')
				},
			},

			'GetObjects()': {
				insertText: 'GetObjects(${1:url})',
				documentation: {
					value: [
						'```lua', 'function GetObjects(url: Content)\n  -> Array<Instance>', '```',
						'',
						'Returns an array of Instances associated with the given [`content`](https://developer.roblox.com/en-us/articles/Content) URL.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/GetObjects)',
					].join('\n')
				},
			},

			'IsLoaded()': {
				insertText: 'IsLoaded()',
				documentation: {
					value: [
						'```lua', 'function IsLoaded()\n  -> boolean', '```',
						'',
						'Returns true if the client has finished loading the game for the first time.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/IsLoaded)',
					].join('\n')
				},
			},

			'Load()': {
				insertText: 'Load(${1:content})',
				documentation: {
					value: [
						'```lua', 'function Load(url: Content)', '```',
						'',
						'Loads a Roblox Place File from the given [`content`](https://developer.roblox.com/en-us/articles/Content) URL.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/Load)',
					].join('\n')
				},
			},

			'SetPlaceId()': {
				insertText: 'SetPlaceId(${1:placeId})',
				documentation: {
					value: [
						'```lua', 'function SetPlaceId(placeId: number)', '```',
						'',
						'Sets the [`DataModel.PlaceId`](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) of the current game instance to the given `placeId`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/SetPlaceId)',
					].join('\n')
				},
			},

			'SetUniverseId()': {
				insertText: 'SetUniverseId(${1:universeId})',
				documentation: {
					value: [
						'```lua', 'function SetUniverseId(universeId: number)', '```',
						'',
						'Sets the [`DataModel.GameId`](https://developer.roblox.com/en-us/api-reference/property/DataModel/GameId) of the current game instance to the given `placeId`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/SetUniverseId)',
					].join('\n')
				},
			},

			'Shutdown()': {
				insertText: 'Shutdown()',
				documentation: {
					value: [
						'```lua', 'function Shutdown()', '```',
						'',
						'Shuts down the current game instance.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/DataModel/Shutdown)',
					].join('\n')
				},
			},
		},

		__requires__: [['classes/ServiceProvider', 'classes/Instance']],
	};
});