define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {
		},

		Event: {

			'ServiceRemoving': {
				label: {
					name: 'ServiceRemoving',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> service: Instance', '```',
						'',
						'Fired when a service is about to be removed.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/ServiceProvider/ServiceRemoving)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'ServiceAdded': {
				label: {
					name: 'ServiceAdded',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> service: Instance', '```',
						'',
						'Fired when a service is created.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/ServiceProvider/ServiceAdded)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'Close': {
				label: {
					name: 'Close',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						// '```lua', '-> nil', '```',
						// '',
						'Fires when the current place is exited.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/ServiceProvider/Close)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'CloseLate': {
				label: {
					name: 'CloseLate',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						// '```lua', '-> nil', '```',
						// '',
						'Fired immediately after the [`ServiceProvider.Close`](https://developer.roblox.com/en-us/api-reference/event/ServiceProvider/Close) signal is fired.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/ServiceProvider/CloseLate)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},
		},

		Method: {

			'GetService': {
				insertText: 'GetService("${1}")',
				label: 'GetService()',
				documentation: {
					value: [
						'```lua', 'function GetService(className: string)\n  -> Instance', '```',
						'',
						'Returns the service with the requested class name, creating it if it does not exist.',
						'',
						'```lua', 'className: string\n   | "ControllerService"\n   | "TimerService"\n   | "EventIngestService"\n   | "Visit"\n   | "VirtualInputManager"\n   | "ServerScriptService"\n   | "Chat"\n   | "Studio"\n   | "PluginGuiService"\n   | "HttpRbxApiService"\n   | "UserGameSettings"\n   | "NetworkClient"\n   | "ThirdPartyUserService"\n   | "InsertService"\n   | "HttpService"\n   | "StudioService"\n   | "PlayerEmulatorService"\n   | "HeightmapImporterService"\n   | "CSGDictionaryService"\n   | "GamepadService"\n   | "BulkImportService"\n   | "NetworkSettings"\n   | "ILegacyStudioBridge"\n   | "Teams"\n   | "SolidModelContentProvider"\n   | "UGCValidationService"\n   | "Debris"\n   | "AppStorageService"\n   | "StarterPlayer"\n   | "MouseService"\n   | "TeleportService"\n   | "LogService"\n   | "SoundService"\n   | "LocalizationService"\n   | "PhysicsService"\n   | "ReplicatedStorage"\n   | "CorePackages"\n   | "RuntimeScriptService"\n   | "AvatarEditorService"\n   | "ReplicatedScriptService"\n   | "CacheableContentProvider"\n   | "GroupService"\n   | "PolicyService"\n   | "DataStoreService"\n   | "CoreGui"\n   | "BadgeService"\n   | "FlyweightService"\n   | "TweenService"\n   | "TouchInputService"\n   | "CollectionService"\n   | "IncrementalPatchBuilder"\n   | "TextService"\n   | "VRService"\n   | "HapticService"\n   | "RobloxPluginGuiService"\n   | "ReplicatedFirst"\n   | "NetworkServer"\n   | "ABTestService"\n   | "FriendService"\n   | "IXPService"\n   | "PathfindingService"\n   | "PackageService"\n   | "DraftsService"\n   | "ScriptService"\n   | "UserStorageService"\n   | "CookiesService"\n   | "UnvalidatedAssetService"\n   | "StarterPack"\n   | "BrowserService"\n   | "NonReplicatedCSGDictionaryService"\n   | "SpawnerService"\n   | "MemStorageService"\n   | "CalloutService"\n   | "VirtualUser"\n   | "SocialService"\n   | "VersionControlService"\n   | "RenderSettings"\n   | "FlagStandService"\n   | "UserService"\n   | "ContentProvider"\n   | "UserInputService"\n   | "ChangeHistoryService"\n   | "CoreScriptSyncService"\n   | "AdService"\n   | "ContextActionService"\n   | "LoginService"\n   | "AssetService"\n   | "GoogleAnalyticsConfiguration"\n   | "StarterGui"\n   | "MeshContentProvider"\n   | "AssetCounterService"\n   | "LanguageService"\n   | "GamePassService"\n   | "Lighting"\n   | "PluginDebugService"\n   | "InternalContainer"\n   | "LocalStorageService"\n   | "Selection"\n   | "KeyboardService"\n   | "MemoryStoreService"\n   | "AssetDeliveryProxy"\n   | "ProximityPromptService"\n   | "MarketplaceService"\n   | "GuidRegistryService"\n   | "Geometry"\n   | "PluginPolicyService"\n   | "PermissionsService"\n   | "DebuggerManager"\n   | "GuiService"\n   | "LuaWebService"\n   | "MessagingService"\n   | "Workspace"\n   | "AssetManagerService"\n   | "Players"\n   | "StudioData"\n   | "LegacyStudioBridge"\n   | "ClusterPacketCache"\n   | "PublishService"\n   | "AnalyticsService"\n   | "RbxAnalyticsService"\n   | "SessionService"\n   | "AppUpdateService"\n   | "NotificationService"\n   | "KeyframeSequenceProvider"\n   | "RunService"\n   | "TracerService"\n   | "ServerStorage"\n   | "ScriptContext"\n   | "StopWatchReporter"\n   | "TaskScheduler"\n   | "RobloxReplicatedStorage"\n   | "StudioDeviceEmulatorService"\n   | "Stats"\n   | "TestService"\n   | "ToastNotificationService"', '```',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/ServiceProvider/GetService)',
					].join('\n')
				},
				command: { title: "Lua", id: "editor.action.triggerSuggest" },

				__children__: {},
				__using__: ['params/DataModelServices'],
			},

			'FindService()': {
				insertText: 'FindService(${1:className})',
				documentation: {
					value: [
						'```lua', 'function FindService(className: string)\n  -> Instance', '```',
						'',
						'Returns the service specified by the given className if it’s already created, errors for an invalid name.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/ServiceProvider/FindService)',
					].join('\n')
				},
			},
		},
	};
});