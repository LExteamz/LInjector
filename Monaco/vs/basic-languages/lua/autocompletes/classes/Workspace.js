define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {

			'AllowThirdPartySales': {
				label: {
					name: 'AllowThirdPartySales',
					type: '(boolean)',
				},
				documentation: {
					value: [
						'Determines whether assets created by other uses can be sold in the game.',
						'',
						'* Tags: NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/AllowThirdPartySales)',
					].join('\n')
				}
			},

			'DistributedGameTime': {
				label: {
					name: 'DistributedGameTime',
					type: '(number)',
				},
				documentation: {
					value: [
						'The amount of time, in seconds, that the game has been running.',
						'',
						'* Tags: NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/DistributedGameTime)',
					].join('\n')
				}
			},

			'FallenPartsDestroyHeight': {
				label: {
					name: 'FallenPartsDestroyHeight',
					type: '(number)',
				},
				documentation: {
					value: [
						'Determines the height at which falling BaseParts (and their ancestor Models) are destroyed.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/FallenPartsDestroyHeight)',
					].join('\n')
				}
			},

			'Gravity': {
				label: {
					name: 'Gravity',
					type: '(number)',
				},
				documentation: {
					value: [
						'Determines the acceleration due to gravity applied to falling BaseParts.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/Gravity)',
					].join('\n')
				}
			},

			'MeshPartHeadsAndAccessories': {
				label: {
					name: 'MeshPartHeadsAndAccessories',
					type: '(Enum.MeshPartHeadsAndAccessories)',
				},
				documentation: {
					value: [
						'Determines whether the game loads Heads and Accessories as MeshParts.',
						'',
						'* Tags: NotScriptable',
						'',
						'```lua',
						'MeshPartHeadsAndAccessories:',
						'   | Default',
						'   | Disabled',
						'   | Enabled',
						'```',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/MeshPartHeadsAndAccessories)',
					].join('\n')
				}
			},

			'PhysicsSimulationRate': {
				label: {
					name: 'PhysicsSimulationRate',
					type: '(Enum.PhysicsSimulationRate)',
				},
				documentation: {
					value: [
						'The rate at which the physics simulator runs at. Note that this property does not speed up or slow down physics.',
						'',
						'* Tags: NotScriptable',
						'',
						'```lua',
						'PhysicsSimulationRate:',
						'   | Fixed240Hz',
						'   | Fixed120Hz',
						'   | Fixed60Hz',
						'```',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/PhysicsSimulationRate)',
					].join('\n')
				}
			},

			'PhysicsSteppingMethod': {
				label: {
					name: 'PhysicsSteppingMethod',
					type: '(Enum.PhysicsSteppingMethod)',
				},
				documentation: {
					value: [
						'The physics simulation stepping method.',
						'',
						'* Tags: NotScriptable',
						'',
						'```lua',
						'PhysicsSteppingMethod:',
						'   | Default',
						'   | Fixed',
						'   | Adaptive',
						'```',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/PhysicsSteppingMethod)',
					].join('\n')
				}
			},

			'SignalBehavior': {
				label: {
					name: 'SignalBehavior',
					type: '(Enum.SignalBehavior)',
				},
				documentation: {
					value: [
						'No info available.',
						'',
						'* Tags: NotScriptable',
						'',
						'```lua',
						'SignalBehavior:',
						'   | Default',
						'   | Immediate',
						'   | Deferred',
						'```',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/SignalBehavior)',
					].join('\n')
				}
			},

			'StreamingEnabled': {
				label: {
					name: 'StreamingEnabled',
					type: '(boolean)',
				},
				documentation: {
					value: [
						'Whether content streaming is enabled for the place.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingEnabled)',
					].join('\n')
				}
			},

			'StreamingMinRadius': {
				label: {
					name: 'StreamingMinRadius',
					type: '(number)',
				},
				documentation: {
					value: [
						'Minimum distance that content will be streamed to players with high priority.',
						'',
						'* Tags: NotScriptable',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingMinRadius)',
					].join('\n')
				}
			},

			'StreamingPauseMode': {
				label: {
					name: 'StreamingPauseMode',
					type: '(Enum.StreamingPauseMode)',
				},
				documentation: {
					value: [
						'Whether streaming physics pause mode is active.',
						'The **streaming pause** feature pauses the local physical simulation and normal character movement if content within `StreamingMinRadius` isn’t yet streamed in.',
						'',
						'* Tags: NotScriptable',
						'',
						'```lua',
						'StreamingPauseMode:',
						'   | Default -- Default behavior (currently no change to gameplay)',
						'   | Disabled -- No change to gameplay due to streaming region availability',
						'   | ClientPhysicsPause -- Client owned physics is paused',
						'```',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingPauseMode)',
					].join('\n')
				}
			},

			'StreamingTargetRadius': {
				label: {
					name: 'StreamingTargetRadius',
					type: '(number)',
				},
				documentation: {
					value: [
						'Maximum distance that content will be streamed to players.',
						'',
						'* Tags: NotScriptable',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingTargetRadius)',
					].join('\n')
				}
			},

			'TouchesUseCollisionGroups': {
				label: {
					name: 'TouchesUseCollisionGroups',
					type: '(boolean)',
				},
				documentation: {
					value: [
						'Determines whether parts in different groups set to not collide will ignore collisions and touch events.',
						'',
						'* Tags: NotScriptable',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/TouchesUseCollisionGroups)',
					].join('\n')
				}
			},
		},

		Class: {
			// TODO: Add autocompletes

			'Terrain': {
				label: {
					name: 'Terrain',
					type: '(Instance)',
				},
				documentation: {
					value: [
						'A reference to the `Terrain` object parented to the Workspace.',
						'',
						'* Tags: ReadOnly, NotScriptable',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/Terrain)',
					].join('\n')
				}
			},

			'CurrentCamera': {
				label: {
					name: 'CurrentCamera',
					type: '(Instance)',
				},
				documentation: {
					value: [
						'The Camera object being used by the local player.',
						'',
						'* Tags: NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera)',
					].join('\n')
				}
			},
		},

		Method: {

			'BreakJoints()': {
				insertText: 'BreakJoints()',
				documentation: {
					value: [
						'```lua', 'function BreakJoints(objects: Array<BaseParts>?)', '```',
						'',
						'Goes through all BaseParts given, breaking any joints connected to these parts.',
						'If `objects` is not provided, breaks connections between descending BaseParts, ',
						'including surface connections with any adjacent parts, WeldConstraints and all ',
						'Welds and other JointInstances.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/BreakJoints)',
					].join('\n')
				},
			},

			'ExperimentalSolverIsEnabled()': {
				insertText: 'ExperimentalSolverIsEnabled()',
				documentation: {
					value: [
						'```lua', 'function ExperimentalSolverIsEnabled()\n  -> boolean', '```',
						'',
						'Returns true if the game has the PGS Physics solver enabled.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/ExperimentalSolverIsEnabled)',
					].join('\n')
				},
			},

			'GetNumAwakeParts()': {
				insertText: 'GetNumAwakeParts()',
				documentation: {
					value: [
						'```lua', 'function GetNumAwakeParts()\n  -> number', '```',
						'',
						'Returns the number of BaseParts that are deemed physically active, due to being recently under the influence of physics.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/GetNumAwakeParts)',
					].join('\n')
				},
			},

			'GetPhysicsThrottling()': {
				insertText: 'GetPhysicsThrottling()',
				documentation: {
					value: [
						'```lua', 'function GetPhysicsThrottling()\n  -> number', '```',
						'',
						'Returns an integer, between 0 and 100, representing the percentage of real-time that physics simulation is currently being throttled to.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/GetPhysicsThrottling)',
					].join('\n')
				},
			},

			'GetRealPhysicsFPS()': {
				insertText: 'GetRealPhysicsFPS()',
				documentation: {
					value: [
						'```lua', 'function GetRealPhysicsFPS()\n  -> number', '```',
						'',
						'Returns the number of frames per second that physics is currently being simulated at.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/GetRealPhysicsFPS)',
					].join('\n')
				},
			},

			'JoinToOutsiders()': {
				insertText: 'JoinToOutsiders(${1:objects}, Enum.JointCreationMode${2})',
				documentation: {
					value: [
						'```lua', 'function JoinToOutsiders(objects: Array<Part>, jointType: Enum.JointCreationMode)', '```',
						'',
						'Creates joints between the specified Parts and any touching parts depending on the parts’ surfaces and the specified joint creation mode.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/JoinToOutsiders)',
					].join('\n')
				},
			},

			'MakeJoints()': {
				insertText: 'MakeJoints(${1:objects})',
				documentation: {
					value: [
						'```lua', 'function MakeJoints(objects: Array<BasePart>)', '```',
						'',
						'Goes through all BaseParts given. If any part’s side has a [`SurfaceType`](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType) that can make a joint it will create a joint with any adjacent parts.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/MakeJoints)',
					].join('\n')
				},
			},

			'PGSIsEnabled()': {
				insertText: 'PGSIsEnabled()',
				documentation: {
					value: [
						'```lua', 'function PGSIsEnabled()\n  -> boolean', '```',
						'',
						'Returns true if the game has the PGS Physics solver enabled.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/PGSIsEnabled)',
					].join('\n')
				},
			},

			'SetPhysicsThrottleEnabled()': {
				insertText: 'SetPhysicsThrottleEnabled(${1:true})',
				documentation: {
					value: [
						'```lua', 'function SetPhysicsThrottleEnabled(value: boolean)', '```',
						'',
						'Determines whether physics throttling is enabled.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/SetPhysicsThrottleEnabled)',
					].join('\n')
				},
			},

			'UnjoinFromOutsiders()': {
				insertText: 'UnjoinFromOutsiders(${1:objects})',
				documentation: {
					value: [
						'```lua', 'function UnjoinFromOutsiders(objects: Array<BasePart>)', '```',
						'',
						'Breaks all joints between the specified BaseParts and other BaseParts.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/UnjoinFromOutsiders)',
					].join('\n')
				},
			},

			'ZoomToExtents()': {
				insertText: 'ZoomToExtents()',
				documentation: {
					value: [
						'```lua', 'function ZoomToExtents()', '```',
						'',
						'Positions and zooms the Workspace.CurrentCamera to show the extent of BaseParts currently in the Workspace.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/ZoomToExtents)',
					].join('\n')
				},
			},
		},

		__requires__: [['classes/Model']],
	};
});