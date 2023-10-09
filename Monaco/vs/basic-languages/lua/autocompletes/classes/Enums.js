define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Method: {

			'GetEnums()': {
				'insertText': 'GetEnums()',
				documentation: {
					value: [
						'```lua', 'GetEnums()\n  -> Array<Enum>', '```',
						'',
						'Returns an array containing all available `Enums` on Roblox.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/datatype/Enums)',
					].join('\n')
				},
			},
		},

		Enum: {
			'ABTestLoadingStatus': {
				label: {
					name: 'ABTestLoadingStatus',
					type: '(Enum)',
				},
				insertText: 'ABTestLoadingStatus',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ABTestLoadingStatus)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ABTestLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pending': {
							label: {
								name: 'Pending',
								type: '(EnumItem)',
							},
							insertText: 'Pending',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ABTestLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Initialized': {
							label: {
								name: 'Initialized',
								type: '(EnumItem)',
							},
							insertText: 'Initialized',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ABTestLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Error': {
							label: {
								name: 'Error',
								type: '(EnumItem)',
							},
							insertText: 'Error',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ABTestLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TimedOut': {
							label: {
								name: 'TimedOut',
								type: '(EnumItem)',
							},
							insertText: 'TimedOut',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ABTestLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShutOff': {
							label: {
								name: 'ShutOff',
								type: '(EnumItem)',
							},
							insertText: 'ShutOff',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ABTestLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AccessoryType': {
				label: {
					name: 'AccessoryType',
					type: '(Enum)',
				},
				insertText: 'AccessoryType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Hat': {
							label: {
								name: 'Hat',
								type: '(EnumItem)',
							},
							insertText: 'Hat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hair': {
							label: {
								name: 'Hair',
								type: '(EnumItem)',
							},
							insertText: 'Hair',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Face': {
							label: {
								name: 'Face',
								type: '(EnumItem)',
							},
							insertText: 'Face',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Neck': {
							label: {
								name: 'Neck',
								type: '(EnumItem)',
							},
							insertText: 'Neck',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Shoulder': {
							label: {
								name: 'Shoulder',
								type: '(EnumItem)',
							},
							insertText: 'Shoulder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Front': {
							label: {
								name: 'Front',
								type: '(EnumItem)',
							},
							insertText: 'Front',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Back': {
							label: {
								name: 'Back',
								type: '(EnumItem)',
							},
							insertText: 'Back',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Waist': {
							label: {
								name: 'Waist',
								type: '(EnumItem)',
							},
							insertText: 'Waist',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeeShirt': {
							label: {
								name: 'TeeShirt',
								type: '(EnumItem)',
							},
							insertText: 'TeeShirt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Shirt': {
							label: {
								name: 'Shirt',
								type: '(EnumItem)',
							},
							insertText: 'Shirt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pants': {
							label: {
								name: 'Pants',
								type: '(EnumItem)',
							},
							insertText: 'Pants',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Jacket': {
							label: {
								name: 'Jacket',
								type: '(EnumItem)',
							},
							insertText: 'Jacket',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sweater': {
							label: {
								name: 'Sweater',
								type: '(EnumItem)',
							},
							insertText: 'Sweater',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Shorts': {
							label: {
								name: 'Shorts',
								type: '(EnumItem)',
							},
							insertText: 'Shorts',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftShoe': {
							label: {
								name: 'LeftShoe',
								type: '(EnumItem)',
							},
							insertText: 'LeftShoe',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightShoe': {
							label: {
								name: 'RightShoe',
								type: '(EnumItem)',
							},
							insertText: 'RightShoe',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DressSkirt': {
							label: {
								name: 'DressSkirt',
								type: '(EnumItem)',
							},
							insertText: 'DressSkirt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AccessoryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ActionType': {
				label: {
					name: 'ActionType',
					type: '(Enum)',
				},
				insertText: 'ActionType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActionType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Nothing': {
							label: {
								name: 'Nothing',
								type: '(EnumItem)',
							},
							insertText: 'Nothing',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pause': {
							label: {
								name: 'Pause',
								type: '(EnumItem)',
							},
							insertText: 'Pause',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Lose': {
							label: {
								name: 'Lose',
								type: '(EnumItem)',
							},
							insertText: 'Lose',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Draw': {
							label: {
								name: 'Draw',
								type: '(EnumItem)',
							},
							insertText: 'Draw',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Win': {
							label: {
								name: 'Win',
								type: '(EnumItem)',
							},
							insertText: 'Win',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ActuatorRelativeTo': {
				label: {
					name: 'ActuatorRelativeTo',
					type: '(Enum)',
				},
				insertText: 'ActuatorRelativeTo',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Attachment0': {
							label: {
								name: 'Attachment0',
								type: '(EnumItem)',
							},
							insertText: 'Attachment0',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Attachment1': {
							label: {
								name: 'Attachment1',
								type: '(EnumItem)',
							},
							insertText: 'Attachment1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World': {
							label: {
								name: 'World',
								type: '(EnumItem)',
							},
							insertText: 'World',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ActuatorType': {
				label: {
					name: 'ActuatorType',
					type: '(Enum)',
				},
				insertText: 'ActuatorType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActuatorType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActuatorType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Motor': {
							label: {
								name: 'Motor',
								type: '(EnumItem)',
							},
							insertText: 'Motor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActuatorType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Servo': {
							label: {
								name: 'Servo',
								type: '(EnumItem)',
							},
							insertText: 'Servo',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ActuatorType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AdornCullingMode': {
				label: {
					name: 'AdornCullingMode',
					type: '(Enum)',
				},
				insertText: 'AdornCullingMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AdornCullingMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Automatic': {
							label: {
								name: 'Automatic',
								type: '(EnumItem)',
							},
							insertText: 'Automatic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AdornCullingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Never': {
							label: {
								name: 'Never',
								type: '(EnumItem)',
							},
							insertText: 'Never',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AdornCullingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AlignType': {
				label: {
					name: 'AlignType',
					type: '(Enum)',
				},
				insertText: 'AlignType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AlignType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Parallel': {
							label: {
								name: 'Parallel',
								type: '(EnumItem)',
							},
							insertText: 'Parallel',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AlignType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Perpendicular': {
							label: {
								name: 'Perpendicular',
								type: '(EnumItem)',
							},
							insertText: 'Perpendicular',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AlignType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AlphaMode': {
				label: {
					name: 'AlphaMode',
					type: '(Enum)',
				},
				insertText: 'AlphaMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AlphaMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Overlay': {
							label: {
								name: 'Overlay',
								type: '(EnumItem)',
							},
							insertText: 'Overlay',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AlphaMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Transparency': {
							label: {
								name: 'Transparency',
								type: '(EnumItem)',
							},
							insertText: 'Transparency',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AlphaMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AnalyticsEconomyAction': {
				label: {
					name: 'AnalyticsEconomyAction',
					type: '(Enum)',
				},
				insertText: 'AnalyticsEconomyAction',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsEconomyAction)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsEconomyAction)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Acquire': {
							label: {
								name: 'Acquire',
								type: '(EnumItem)',
							},
							insertText: 'Acquire',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsEconomyAction)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Spend': {
							label: {
								name: 'Spend',
								type: '(EnumItem)',
							},
							insertText: 'Spend',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsEconomyAction)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AnalyticsLogLevel': {
				label: {
					name: 'AnalyticsLogLevel',
					type: '(Enum)',
				},
				insertText: 'AnalyticsLogLevel',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsLogLevel)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Trace': {
							label: {
								name: 'Trace',
								type: '(EnumItem)',
							},
							insertText: 'Trace',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsLogLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Debug': {
							label: {
								name: 'Debug',
								type: '(EnumItem)',
							},
							insertText: 'Debug',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsLogLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Information': {
							label: {
								name: 'Information',
								type: '(EnumItem)',
							},
							insertText: 'Information',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsLogLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Warning': {
							label: {
								name: 'Warning',
								type: '(EnumItem)',
							},
							insertText: 'Warning',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsLogLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Error': {
							label: {
								name: 'Error',
								type: '(EnumItem)',
							},
							insertText: 'Error',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsLogLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fatal': {
							label: {
								name: 'Fatal',
								type: '(EnumItem)',
							},
							insertText: 'Fatal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsLogLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AnalyticsProgressionStatus': {
				label: {
					name: 'AnalyticsProgressionStatus',
					type: '(Enum)',
				},
				insertText: 'AnalyticsProgressionStatus',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsProgressionStatus)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsProgressionStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Begin': {
							label: {
								name: 'Begin',
								type: '(EnumItem)',
							},
							insertText: 'Begin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsProgressionStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Complete': {
							label: {
								name: 'Complete',
								type: '(EnumItem)',
							},
							insertText: 'Complete',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsProgressionStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Abandon': {
							label: {
								name: 'Abandon',
								type: '(EnumItem)',
							},
							insertText: 'Abandon',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsProgressionStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fail': {
							label: {
								name: 'Fail',
								type: '(EnumItem)',
							},
							insertText: 'Fail',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnalyticsProgressionStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AnimationPriority': {
				label: {
					name: 'AnimationPriority',
					type: '(Enum)',
				},
				insertText: 'AnimationPriority',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnimationPriority)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Idle': {
							label: {
								name: 'Idle',
								type: '(EnumItem)',
							},
							insertText: 'Idle',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnimationPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Movement': {
							label: {
								name: 'Movement',
								type: '(EnumItem)',
							},
							insertText: 'Movement',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnimationPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Action': {
							label: {
								name: 'Action',
								type: '(EnumItem)',
							},
							insertText: 'Action',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnimationPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Core': {
							label: {
								name: 'Core',
								type: '(EnumItem)',
							},
							insertText: 'Core',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AnimationPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AppShellActionType': {
				label: {
					name: 'AppShellActionType',
					type: '(Enum)',
				},
				insertText: 'AppShellActionType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OpenApp': {
							label: {
								name: 'OpenApp',
								type: '(EnumItem)',
							},
							insertText: 'OpenApp',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TapChatTab': {
							label: {
								name: 'TapChatTab',
								type: '(EnumItem)',
							},
							insertText: 'TapChatTab',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TapConversationEntry': {
							label: {
								name: 'TapConversationEntry',
								type: '(EnumItem)',
							},
							insertText: 'TapConversationEntry',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TapAvatarTab': {
							label: {
								name: 'TapAvatarTab',
								type: '(EnumItem)',
							},
							insertText: 'TapAvatarTab',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ReadConversation': {
							label: {
								name: 'ReadConversation',
								type: '(EnumItem)',
							},
							insertText: 'ReadConversation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TapGamePageTab': {
							label: {
								name: 'TapGamePageTab',
								type: '(EnumItem)',
							},
							insertText: 'TapGamePageTab',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TapHomePageTab': {
							label: {
								name: 'TapHomePageTab',
								type: '(EnumItem)',
							},
							insertText: 'TapHomePageTab',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GamePageLoaded': {
							label: {
								name: 'GamePageLoaded',
								type: '(EnumItem)',
							},
							insertText: 'GamePageLoaded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HomePageLoaded': {
							label: {
								name: 'HomePageLoaded',
								type: '(EnumItem)',
							},
							insertText: 'HomePageLoaded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AvatarEditorPageLoaded': {
							label: {
								name: 'AvatarEditorPageLoaded',
								type: '(EnumItem)',
							},
							insertText: 'AvatarEditorPageLoaded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellActionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AppShellFeature': {
				label: {
					name: 'AppShellFeature',
					type: '(Enum)',
				},
				insertText: 'AppShellFeature',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellFeature)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellFeature)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Chat': {
							label: {
								name: 'Chat',
								type: '(EnumItem)',
							},
							insertText: 'Chat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellFeature)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AvatarEditor': {
							label: {
								name: 'AvatarEditor',
								type: '(EnumItem)',
							},
							insertText: 'AvatarEditor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellFeature)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GamePage': {
							label: {
								name: 'GamePage',
								type: '(EnumItem)',
							},
							insertText: 'GamePage',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellFeature)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HomePage': {
							label: {
								name: 'HomePage',
								type: '(EnumItem)',
							},
							insertText: 'HomePage',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellFeature)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'More': {
							label: {
								name: 'More',
								type: '(EnumItem)',
							},
							insertText: 'More',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellFeature)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Landing': {
							label: {
								name: 'Landing',
								type: '(EnumItem)',
							},
							insertText: 'Landing',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppShellFeature)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AppUpdateStatus': {
				label: {
					name: 'AppUpdateStatus',
					type: '(Enum)',
				},
				insertText: 'AppUpdateStatus',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppUpdateStatus)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Unknown': {
							label: {
								name: 'Unknown',
								type: '(EnumItem)',
							},
							insertText: 'Unknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppUpdateStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NotSupported': {
							label: {
								name: 'NotSupported',
								type: '(EnumItem)',
							},
							insertText: 'NotSupported',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppUpdateStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Failed': {
							label: {
								name: 'Failed',
								type: '(EnumItem)',
							},
							insertText: 'Failed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppUpdateStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NotAvailable': {
							label: {
								name: 'NotAvailable',
								type: '(EnumItem)',
							},
							insertText: 'NotAvailable',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppUpdateStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Available': {
							label: {
								name: 'Available',
								type: '(EnumItem)',
							},
							insertText: 'Available',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AppUpdateStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ApplyStrokeMode': {
				label: {
					name: 'ApplyStrokeMode',
					type: '(Enum)',
				},
				insertText: 'ApplyStrokeMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ApplyStrokeMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Contextual': {
							label: {
								name: 'Contextual',
								type: '(EnumItem)',
							},
							insertText: 'Contextual',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ApplyStrokeMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Border': {
							label: {
								name: 'Border',
								type: '(EnumItem)',
							},
							insertText: 'Border',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ApplyStrokeMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AspectType': {
				label: {
					name: 'AspectType',
					type: '(Enum)',
				},
				insertText: 'AspectType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AspectType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'FitWithinMaxSize': {
							label: {
								name: 'FitWithinMaxSize',
								type: '(EnumItem)',
							},
							insertText: 'FitWithinMaxSize',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AspectType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScaleWithParentSize': {
							label: {
								name: 'ScaleWithParentSize',
								type: '(EnumItem)',
							},
							insertText: 'ScaleWithParentSize',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AspectType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AssetFetchStatus': {
				label: {
					name: 'AssetFetchStatus',
					type: '(Enum)',
				},
				insertText: 'AssetFetchStatus',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetFetchStatus)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Success': {
							label: {
								name: 'Success',
								type: '(EnumItem)',
							},
							insertText: 'Success',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetFetchStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Failure': {
							label: {
								name: 'Failure',
								type: '(EnumItem)',
							},
							insertText: 'Failure',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetFetchStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AssetType': {
				label: {
					name: 'AssetType',
					type: '(Enum)',
				},
				insertText: 'AssetType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Image': {
							label: {
								name: 'Image',
								type: '(EnumItem)',
							},
							insertText: 'Image',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeeShirt': {
							label: {
								name: 'TeeShirt',
								type: '(EnumItem)',
							},
							insertText: 'TeeShirt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Audio': {
							label: {
								name: 'Audio',
								type: '(EnumItem)',
							},
							insertText: 'Audio',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Mesh': {
							label: {
								name: 'Mesh',
								type: '(EnumItem)',
							},
							insertText: 'Mesh',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Lua': {
							label: {
								name: 'Lua',
								type: '(EnumItem)',
							},
							insertText: 'Lua',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hat': {
							label: {
								name: 'Hat',
								type: '(EnumItem)',
							},
							insertText: 'Hat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Place': {
							label: {
								name: 'Place',
								type: '(EnumItem)',
							},
							insertText: 'Place',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Model': {
							label: {
								name: 'Model',
								type: '(EnumItem)',
							},
							insertText: 'Model',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Shirt': {
							label: {
								name: 'Shirt',
								type: '(EnumItem)',
							},
							insertText: 'Shirt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pants': {
							label: {
								name: 'Pants',
								type: '(EnumItem)',
							},
							insertText: 'Pants',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Decal': {
							label: {
								name: 'Decal',
								type: '(EnumItem)',
							},
							insertText: 'Decal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Head': {
							label: {
								name: 'Head',
								type: '(EnumItem)',
							},
							insertText: 'Head',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Face': {
							label: {
								name: 'Face',
								type: '(EnumItem)',
							},
							insertText: 'Face',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gear': {
							label: {
								name: 'Gear',
								type: '(EnumItem)',
							},
							insertText: 'Gear',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Badge': {
							label: {
								name: 'Badge',
								type: '(EnumItem)',
							},
							insertText: 'Badge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Animation': {
							label: {
								name: 'Animation',
								type: '(EnumItem)',
							},
							insertText: 'Animation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Torso': {
							label: {
								name: 'Torso',
								type: '(EnumItem)',
							},
							insertText: 'Torso',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightArm': {
							label: {
								name: 'RightArm',
								type: '(EnumItem)',
							},
							insertText: 'RightArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftArm': {
							label: {
								name: 'LeftArm',
								type: '(EnumItem)',
							},
							insertText: 'LeftArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftLeg': {
							label: {
								name: 'LeftLeg',
								type: '(EnumItem)',
							},
							insertText: 'LeftLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightLeg': {
							label: {
								name: 'RightLeg',
								type: '(EnumItem)',
							},
							insertText: 'RightLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Package': {
							label: {
								name: 'Package',
								type: '(EnumItem)',
							},
							insertText: 'Package',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GamePass': {
							label: {
								name: 'GamePass',
								type: '(EnumItem)',
							},
							insertText: 'GamePass',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Plugin': {
							label: {
								name: 'Plugin',
								type: '(EnumItem)',
							},
							insertText: 'Plugin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MeshPart': {
							label: {
								name: 'MeshPart',
								type: '(EnumItem)',
							},
							insertText: 'MeshPart',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HairAccessory': {
							label: {
								name: 'HairAccessory',
								type: '(EnumItem)',
							},
							insertText: 'HairAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FaceAccessory': {
							label: {
								name: 'FaceAccessory',
								type: '(EnumItem)',
							},
							insertText: 'FaceAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NeckAccessory': {
							label: {
								name: 'NeckAccessory',
								type: '(EnumItem)',
							},
							insertText: 'NeckAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShoulderAccessory': {
							label: {
								name: 'ShoulderAccessory',
								type: '(EnumItem)',
							},
							insertText: 'ShoulderAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FrontAccessory': {
							label: {
								name: 'FrontAccessory',
								type: '(EnumItem)',
							},
							insertText: 'FrontAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BackAccessory': {
							label: {
								name: 'BackAccessory',
								type: '(EnumItem)',
							},
							insertText: 'BackAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WaistAccessory': {
							label: {
								name: 'WaistAccessory',
								type: '(EnumItem)',
							},
							insertText: 'WaistAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClimbAnimation': {
							label: {
								name: 'ClimbAnimation',
								type: '(EnumItem)',
							},
							insertText: 'ClimbAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DeathAnimation': {
							label: {
								name: 'DeathAnimation',
								type: '(EnumItem)',
							},
							insertText: 'DeathAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FallAnimation': {
							label: {
								name: 'FallAnimation',
								type: '(EnumItem)',
							},
							insertText: 'FallAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'IdleAnimation': {
							label: {
								name: 'IdleAnimation',
								type: '(EnumItem)',
							},
							insertText: 'IdleAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'JumpAnimation': {
							label: {
								name: 'JumpAnimation',
								type: '(EnumItem)',
							},
							insertText: 'JumpAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RunAnimation': {
							label: {
								name: 'RunAnimation',
								type: '(EnumItem)',
							},
							insertText: 'RunAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SwimAnimation': {
							label: {
								name: 'SwimAnimation',
								type: '(EnumItem)',
							},
							insertText: 'SwimAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WalkAnimation': {
							label: {
								name: 'WalkAnimation',
								type: '(EnumItem)',
							},
							insertText: 'WalkAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PoseAnimation': {
							label: {
								name: 'PoseAnimation',
								type: '(EnumItem)',
							},
							insertText: 'PoseAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EarAccessory': {
							label: {
								name: 'EarAccessory',
								type: '(EnumItem)',
							},
							insertText: 'EarAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EyeAccessory': {
							label: {
								name: 'EyeAccessory',
								type: '(EnumItem)',
							},
							insertText: 'EyeAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EmoteAnimation': {
							label: {
								name: 'EmoteAnimation',
								type: '(EnumItem)',
							},
							insertText: 'EmoteAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Video': {
							label: {
								name: 'Video',
								type: '(EnumItem)',
							},
							insertText: 'Video',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeeShirtAccessory': {
							label: {
								name: 'TeeShirtAccessory',
								type: '(EnumItem)',
							},
							insertText: 'TeeShirtAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShirtAccessory': {
							label: {
								name: 'ShirtAccessory',
								type: '(EnumItem)',
							},
							insertText: 'ShirtAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PantsAccessory': {
							label: {
								name: 'PantsAccessory',
								type: '(EnumItem)',
							},
							insertText: 'PantsAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'JacketAccessory': {
							label: {
								name: 'JacketAccessory',
								type: '(EnumItem)',
							},
							insertText: 'JacketAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SweaterAccessory': {
							label: {
								name: 'SweaterAccessory',
								type: '(EnumItem)',
							},
							insertText: 'SweaterAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShortsAccessory': {
							label: {
								name: 'ShortsAccessory',
								type: '(EnumItem)',
							},
							insertText: 'ShortsAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftShoeAccessory': {
							label: {
								name: 'LeftShoeAccessory',
								type: '(EnumItem)',
							},
							insertText: 'LeftShoeAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightShoeAccessory': {
							label: {
								name: 'RightShoeAccessory',
								type: '(EnumItem)',
							},
							insertText: 'RightShoeAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DressSkirtAccessory': {
							label: {
								name: 'DressSkirtAccessory',
								type: '(EnumItem)',
							},
							insertText: 'DressSkirtAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AssetTypeVerification': {
				label: {
					name: 'AssetTypeVerification',
					type: '(Enum)',
				},
				insertText: 'AssetTypeVerification',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetTypeVerification)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetTypeVerification)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClientOnly': {
							label: {
								name: 'ClientOnly',
								type: '(EnumItem)',
							},
							insertText: 'ClientOnly',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetTypeVerification)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Always': {
							label: {
								name: 'Always',
								type: '(EnumItem)',
							},
							insertText: 'Always',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AssetTypeVerification)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AutoIndentRule': {
				label: {
					name: 'AutoIndentRule',
					type: '(Enum)',
				},
				insertText: 'AutoIndentRule',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutoIndentRule)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Off': {
							label: {
								name: 'Off',
								type: '(EnumItem)',
							},
							insertText: 'Off',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutoIndentRule)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Absolute': {
							label: {
								name: 'Absolute',
								type: '(EnumItem)',
							},
							insertText: 'Absolute',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutoIndentRule)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Relative': {
							label: {
								name: 'Relative',
								type: '(EnumItem)',
							},
							insertText: 'Relative',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutoIndentRule)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AutomaticSize': {
				label: {
					name: 'AutomaticSize',
					type: '(Enum)',
				},
				insertText: 'AutomaticSize',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutomaticSize)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutomaticSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'X': {
							label: {
								name: 'X',
								type: '(EnumItem)',
							},
							insertText: 'X',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutomaticSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Y': {
							label: {
								name: 'Y',
								type: '(EnumItem)',
							},
							insertText: 'Y',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutomaticSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'XY': {
							label: {
								name: 'XY',
								type: '(EnumItem)',
							},
							insertText: 'XY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AutomaticSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AvatarAssetType': {
				label: {
					name: 'AvatarAssetType',
					type: '(Enum)',
				},
				insertText: 'AvatarAssetType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'TShirt': {
							label: {
								name: 'TShirt',
								type: '(EnumItem)',
							},
							insertText: 'TShirt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hat': {
							label: {
								name: 'Hat',
								type: '(EnumItem)',
							},
							insertText: 'Hat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HairAccessory': {
							label: {
								name: 'HairAccessory',
								type: '(EnumItem)',
							},
							insertText: 'HairAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FaceAccessory': {
							label: {
								name: 'FaceAccessory',
								type: '(EnumItem)',
							},
							insertText: 'FaceAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NeckAccessory': {
							label: {
								name: 'NeckAccessory',
								type: '(EnumItem)',
							},
							insertText: 'NeckAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShoulderAccessory': {
							label: {
								name: 'ShoulderAccessory',
								type: '(EnumItem)',
							},
							insertText: 'ShoulderAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FrontAccessory': {
							label: {
								name: 'FrontAccessory',
								type: '(EnumItem)',
							},
							insertText: 'FrontAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BackAccessory': {
							label: {
								name: 'BackAccessory',
								type: '(EnumItem)',
							},
							insertText: 'BackAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WaistAccessory': {
							label: {
								name: 'WaistAccessory',
								type: '(EnumItem)',
							},
							insertText: 'WaistAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Shirt': {
							label: {
								name: 'Shirt',
								type: '(EnumItem)',
							},
							insertText: 'Shirt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pants': {
							label: {
								name: 'Pants',
								type: '(EnumItem)',
							},
							insertText: 'Pants',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gear': {
							label: {
								name: 'Gear',
								type: '(EnumItem)',
							},
							insertText: 'Gear',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Head': {
							label: {
								name: 'Head',
								type: '(EnumItem)',
							},
							insertText: 'Head',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Face': {
							label: {
								name: 'Face',
								type: '(EnumItem)',
							},
							insertText: 'Face',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Torso': {
							label: {
								name: 'Torso',
								type: '(EnumItem)',
							},
							insertText: 'Torso',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightArm': {
							label: {
								name: 'RightArm',
								type: '(EnumItem)',
							},
							insertText: 'RightArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftArm': {
							label: {
								name: 'LeftArm',
								type: '(EnumItem)',
							},
							insertText: 'LeftArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftLeg': {
							label: {
								name: 'LeftLeg',
								type: '(EnumItem)',
							},
							insertText: 'LeftLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightLeg': {
							label: {
								name: 'RightLeg',
								type: '(EnumItem)',
							},
							insertText: 'RightLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClimbAnimation': {
							label: {
								name: 'ClimbAnimation',
								type: '(EnumItem)',
							},
							insertText: 'ClimbAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FallAnimation': {
							label: {
								name: 'FallAnimation',
								type: '(EnumItem)',
							},
							insertText: 'FallAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'IdleAnimation': {
							label: {
								name: 'IdleAnimation',
								type: '(EnumItem)',
							},
							insertText: 'IdleAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'JumpAnimation': {
							label: {
								name: 'JumpAnimation',
								type: '(EnumItem)',
							},
							insertText: 'JumpAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RunAnimation': {
							label: {
								name: 'RunAnimation',
								type: '(EnumItem)',
							},
							insertText: 'RunAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SwimAnimation': {
							label: {
								name: 'SwimAnimation',
								type: '(EnumItem)',
							},
							insertText: 'SwimAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WalkAnimation': {
							label: {
								name: 'WalkAnimation',
								type: '(EnumItem)',
							},
							insertText: 'WalkAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EmoteAnimation': {
							label: {
								name: 'EmoteAnimation',
								type: '(EnumItem)',
							},
							insertText: 'EmoteAnimation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeeShirtAccessory': {
							label: {
								name: 'TeeShirtAccessory',
								type: '(EnumItem)',
							},
							insertText: 'TeeShirtAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShirtAccessory': {
							label: {
								name: 'ShirtAccessory',
								type: '(EnumItem)',
							},
							insertText: 'ShirtAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PantsAccessory': {
							label: {
								name: 'PantsAccessory',
								type: '(EnumItem)',
							},
							insertText: 'PantsAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'JacketAccessory': {
							label: {
								name: 'JacketAccessory',
								type: '(EnumItem)',
							},
							insertText: 'JacketAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SweaterAccessory': {
							label: {
								name: 'SweaterAccessory',
								type: '(EnumItem)',
							},
							insertText: 'SweaterAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShortsAccessory': {
							label: {
								name: 'ShortsAccessory',
								type: '(EnumItem)',
							},
							insertText: 'ShortsAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftShoeAccessory': {
							label: {
								name: 'LeftShoeAccessory',
								type: '(EnumItem)',
							},
							insertText: 'LeftShoeAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightShoeAccessory': {
							label: {
								name: 'RightShoeAccessory',
								type: '(EnumItem)',
							},
							insertText: 'RightShoeAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DressSkirtAccessory': {
							label: {
								name: 'DressSkirtAccessory',
								type: '(EnumItem)',
							},
							insertText: 'DressSkirtAccessory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarAssetType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AvatarContextMenuOption': {
				label: {
					name: 'AvatarContextMenuOption',
					type: '(Enum)',
				},
				insertText: 'AvatarContextMenuOption',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarContextMenuOption)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Friend': {
							label: {
								name: 'Friend',
								type: '(EnumItem)',
							},
							insertText: 'Friend',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarContextMenuOption)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Chat': {
							label: {
								name: 'Chat',
								type: '(EnumItem)',
							},
							insertText: 'Chat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarContextMenuOption)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Emote': {
							label: {
								name: 'Emote',
								type: '(EnumItem)',
							},
							insertText: 'Emote',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarContextMenuOption)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InspectMenu': {
							label: {
								name: 'InspectMenu',
								type: '(EnumItem)',
							},
							insertText: 'InspectMenu',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarContextMenuOption)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AvatarItemType': {
				label: {
					name: 'AvatarItemType',
					type: '(Enum)',
				},
				insertText: 'AvatarItemType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarItemType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Asset': {
							label: {
								name: 'Asset',
								type: '(EnumItem)',
							},
							insertText: 'Asset',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarItemType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bundle': {
							label: {
								name: 'Bundle',
								type: '(EnumItem)',
							},
							insertText: 'Bundle',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarItemType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AvatarJointPositionType': {
				label: {
					name: 'AvatarJointPositionType',
					type: '(Enum)',
				},
				insertText: 'AvatarJointPositionType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarJointPositionType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Fixed': {
							label: {
								name: 'Fixed',
								type: '(EnumItem)',
							},
							insertText: 'Fixed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarJointPositionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ArtistIntent': {
							label: {
								name: 'ArtistIntent',
								type: '(EnumItem)',
							},
							insertText: 'ArtistIntent',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarJointPositionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'AvatarPromptResult': {
				label: {
					name: 'AvatarPromptResult',
					type: '(Enum)',
				},
				insertText: 'AvatarPromptResult',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarPromptResult)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Success': {
							label: {
								name: 'Success',
								type: '(EnumItem)',
							},
							insertText: 'Success',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarPromptResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PermissionDenied': {
							label: {
								name: 'PermissionDenied',
								type: '(EnumItem)',
							},
							insertText: 'PermissionDenied',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarPromptResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Failed': {
							label: {
								name: 'Failed',
								type: '(EnumItem)',
							},
							insertText: 'Failed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/AvatarPromptResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Axis': {
				label: {
					name: 'Axis',
					type: '(Enum)',
				},
				insertText: 'Axis',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Axis)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'X': {
							label: {
								name: 'X',
								type: '(EnumItem)',
							},
							insertText: 'X',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Axis)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Y': {
							label: {
								name: 'Y',
								type: '(EnumItem)',
							},
							insertText: 'Y',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Axis)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Z': {
							label: {
								name: 'Z',
								type: '(EnumItem)',
							},
							insertText: 'Z',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Axis)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'BinType': {
				label: {
					name: 'BinType',
					type: '(Enum)',
				},
				insertText: 'BinType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BinType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Script': {
							label: {
								name: 'Script',
								type: '(EnumItem)',
							},
							insertText: 'Script',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BinType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GameTool': {
							label: {
								name: 'GameTool',
								type: '(EnumItem)',
							},
							insertText: 'GameTool',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BinType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Grab': {
							label: {
								name: 'Grab',
								type: '(EnumItem)',
							},
							insertText: 'Grab',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BinType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Clone': {
							label: {
								name: 'Clone',
								type: '(EnumItem)',
							},
							insertText: 'Clone',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BinType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hammer': {
							label: {
								name: 'Hammer',
								type: '(EnumItem)',
							},
							insertText: 'Hammer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BinType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'BodyPart': {
				label: {
					name: 'BodyPart',
					type: '(Enum)',
				},
				insertText: 'BodyPart',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPart)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Head': {
							label: {
								name: 'Head',
								type: '(EnumItem)',
							},
							insertText: 'Head',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPart)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Torso': {
							label: {
								name: 'Torso',
								type: '(EnumItem)',
							},
							insertText: 'Torso',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPart)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftArm': {
							label: {
								name: 'LeftArm',
								type: '(EnumItem)',
							},
							insertText: 'LeftArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPart)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightArm': {
							label: {
								name: 'RightArm',
								type: '(EnumItem)',
							},
							insertText: 'RightArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPart)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftLeg': {
							label: {
								name: 'LeftLeg',
								type: '(EnumItem)',
							},
							insertText: 'LeftLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPart)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightLeg': {
							label: {
								name: 'RightLeg',
								type: '(EnumItem)',
							},
							insertText: 'RightLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPart)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'BodyPartR15': {
				label: {
					name: 'BodyPartR15',
					type: '(Enum)',
				},
				insertText: 'BodyPartR15',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Head': {
							label: {
								name: 'Head',
								type: '(EnumItem)',
							},
							insertText: 'Head',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'UpperTorso': {
							label: {
								name: 'UpperTorso',
								type: '(EnumItem)',
							},
							insertText: 'UpperTorso',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LowerTorso': {
							label: {
								name: 'LowerTorso',
								type: '(EnumItem)',
							},
							insertText: 'LowerTorso',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftFoot': {
							label: {
								name: 'LeftFoot',
								type: '(EnumItem)',
							},
							insertText: 'LeftFoot',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftLowerLeg': {
							label: {
								name: 'LeftLowerLeg',
								type: '(EnumItem)',
							},
							insertText: 'LeftLowerLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftUpperLeg': {
							label: {
								name: 'LeftUpperLeg',
								type: '(EnumItem)',
							},
							insertText: 'LeftUpperLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightFoot': {
							label: {
								name: 'RightFoot',
								type: '(EnumItem)',
							},
							insertText: 'RightFoot',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightLowerLeg': {
							label: {
								name: 'RightLowerLeg',
								type: '(EnumItem)',
							},
							insertText: 'RightLowerLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightUpperLeg': {
							label: {
								name: 'RightUpperLeg',
								type: '(EnumItem)',
							},
							insertText: 'RightUpperLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftHand': {
							label: {
								name: 'LeftHand',
								type: '(EnumItem)',
							},
							insertText: 'LeftHand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftLowerArm': {
							label: {
								name: 'LeftLowerArm',
								type: '(EnumItem)',
							},
							insertText: 'LeftLowerArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftUpperArm': {
							label: {
								name: 'LeftUpperArm',
								type: '(EnumItem)',
							},
							insertText: 'LeftUpperArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightHand': {
							label: {
								name: 'RightHand',
								type: '(EnumItem)',
							},
							insertText: 'RightHand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightLowerArm': {
							label: {
								name: 'RightLowerArm',
								type: '(EnumItem)',
							},
							insertText: 'RightLowerArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightUpperArm': {
							label: {
								name: 'RightUpperArm',
								type: '(EnumItem)',
							},
							insertText: 'RightUpperArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RootPart': {
							label: {
								name: 'RootPart',
								type: '(EnumItem)',
							},
							insertText: 'RootPart',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Unknown': {
							label: {
								name: 'Unknown',
								type: '(EnumItem)',
							},
							insertText: 'Unknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BodyPartR15)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'BorderMode': {
				label: {
					name: 'BorderMode',
					type: '(Enum)',
				},
				insertText: 'BorderMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BorderMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Outline': {
							label: {
								name: 'Outline',
								type: '(EnumItem)',
							},
							insertText: 'Outline',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BorderMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Middle': {
							label: {
								name: 'Middle',
								type: '(EnumItem)',
							},
							insertText: 'Middle',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BorderMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Inset': {
							label: {
								name: 'Inset',
								type: '(EnumItem)',
							},
							insertText: 'Inset',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BorderMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'BreakReason': {
				label: {
					name: 'BreakReason',
					type: '(Enum)',
				},
				insertText: 'BreakReason',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BreakReason)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Other': {
							label: {
								name: 'Other',
								type: '(EnumItem)',
							},
							insertText: 'Other',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BreakReason)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Error': {
							label: {
								name: 'Error',
								type: '(EnumItem)',
							},
							insertText: 'Error',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BreakReason)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'UserBreakpoint': {
							label: {
								name: 'UserBreakpoint',
								type: '(EnumItem)',
							},
							insertText: 'UserBreakpoint',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BreakReason)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SpecialBreakpoint': {
							label: {
								name: 'SpecialBreakpoint',
								type: '(EnumItem)',
							},
							insertText: 'SpecialBreakpoint',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BreakReason)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'BulkMoveMode': {
				label: {
					name: 'BulkMoveMode',
					type: '(Enum)',
				},
				insertText: 'BulkMoveMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BulkMoveMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'FireAllEvents': {
							label: {
								name: 'FireAllEvents',
								type: '(EnumItem)',
							},
							insertText: 'FireAllEvents',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BulkMoveMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FireCFrameChanged': {
							label: {
								name: 'FireCFrameChanged',
								type: '(EnumItem)',
							},
							insertText: 'FireCFrameChanged',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BulkMoveMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'BundleType': {
				label: {
					name: 'BundleType',
					type: '(Enum)',
				},
				insertText: 'BundleType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BundleType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'BodyParts': {
							label: {
								name: 'BodyParts',
								type: '(EnumItem)',
							},
							insertText: 'BodyParts',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BundleType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Animations': {
							label: {
								name: 'Animations',
								type: '(EnumItem)',
							},
							insertText: 'Animations',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/BundleType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Button': {
				label: {
					name: 'Button',
					type: '(Enum)',
				},
				insertText: 'Button',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Button)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Jump': {
							label: {
								name: 'Jump',
								type: '(EnumItem)',
							},
							insertText: 'Jump',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Button)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Dismount': {
							label: {
								name: 'Dismount',
								type: '(EnumItem)',
							},
							insertText: 'Dismount',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Button)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ButtonStyle': {
				label: {
					name: 'ButtonStyle',
					type: '(Enum)',
				},
				insertText: 'ButtonStyle',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ButtonStyle)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Custom': {
							label: {
								name: 'Custom',
								type: '(EnumItem)',
							},
							insertText: 'Custom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ButtonStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxButtonDefault': {
							label: {
								name: 'RobloxButtonDefault',
								type: '(EnumItem)',
							},
							insertText: 'RobloxButtonDefault',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ButtonStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxButton': {
							label: {
								name: 'RobloxButton',
								type: '(EnumItem)',
							},
							insertText: 'RobloxButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ButtonStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxRoundButton': {
							label: {
								name: 'RobloxRoundButton',
								type: '(EnumItem)',
							},
							insertText: 'RobloxRoundButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ButtonStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxRoundDefaultButton': {
							label: {
								name: 'RobloxRoundDefaultButton',
								type: '(EnumItem)',
							},
							insertText: 'RobloxRoundDefaultButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ButtonStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxRoundDropdownButton': {
							label: {
								name: 'RobloxRoundDropdownButton',
								type: '(EnumItem)',
							},
							insertText: 'RobloxRoundDropdownButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ButtonStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CageType': {
				label: {
					name: 'CageType',
					type: '(Enum)',
				},
				insertText: 'CageType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CageType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Inner': {
							label: {
								name: 'Inner',
								type: '(EnumItem)',
							},
							insertText: 'Inner',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CageType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Outer': {
							label: {
								name: 'Outer',
								type: '(EnumItem)',
							},
							insertText: 'Outer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CageType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CameraMode': {
				label: {
					name: 'CameraMode',
					type: '(Enum)',
				},
				insertText: 'CameraMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LockFirstPerson': {
							label: {
								name: 'LockFirstPerson',
								type: '(EnumItem)',
							},
							insertText: 'LockFirstPerson',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CameraPanMode': {
				label: {
					name: 'CameraPanMode',
					type: '(Enum)',
				},
				insertText: 'CameraPanMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraPanMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraPanMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EdgeBump': {
							label: {
								name: 'EdgeBump',
								type: '(EnumItem)',
							},
							insertText: 'EdgeBump',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraPanMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CameraType': {
				label: {
					name: 'CameraType',
					type: '(Enum)',
				},
				insertText: 'CameraType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Fixed': {
							label: {
								name: 'Fixed',
								type: '(EnumItem)',
							},
							insertText: 'Fixed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Watch': {
							label: {
								name: 'Watch',
								type: '(EnumItem)',
							},
							insertText: 'Watch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Attach': {
							label: {
								name: 'Attach',
								type: '(EnumItem)',
							},
							insertText: 'Attach',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Track': {
							label: {
								name: 'Track',
								type: '(EnumItem)',
							},
							insertText: 'Track',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Follow': {
							label: {
								name: 'Follow',
								type: '(EnumItem)',
							},
							insertText: 'Follow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Custom': {
							label: {
								name: 'Custom',
								type: '(EnumItem)',
							},
							insertText: 'Custom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Scriptable': {
							label: {
								name: 'Scriptable',
								type: '(EnumItem)',
							},
							insertText: 'Scriptable',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Orbital': {
							label: {
								name: 'Orbital',
								type: '(EnumItem)',
							},
							insertText: 'Orbital',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CameraType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CatalogCategoryFilter': {
				label: {
					name: 'CatalogCategoryFilter',
					type: '(Enum)',
				},
				insertText: 'CatalogCategoryFilter',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogCategoryFilter)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogCategoryFilter)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Featured': {
							label: {
								name: 'Featured',
								type: '(EnumItem)',
							},
							insertText: 'Featured',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogCategoryFilter)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Collectibles': {
							label: {
								name: 'Collectibles',
								type: '(EnumItem)',
							},
							insertText: 'Collectibles',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogCategoryFilter)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CommunityCreations': {
							label: {
								name: 'CommunityCreations',
								type: '(EnumItem)',
							},
							insertText: 'CommunityCreations',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogCategoryFilter)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Premium': {
							label: {
								name: 'Premium',
								type: '(EnumItem)',
							},
							insertText: 'Premium',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogCategoryFilter)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CatalogSortType': {
				label: {
					name: 'CatalogSortType',
					type: '(Enum)',
				},
				insertText: 'CatalogSortType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogSortType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Relevance': {
							label: {
								name: 'Relevance',
								type: '(EnumItem)',
							},
							insertText: 'Relevance',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogSortType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PriceHighToLow': {
							label: {
								name: 'PriceHighToLow',
								type: '(EnumItem)',
							},
							insertText: 'PriceHighToLow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogSortType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PriceLowToHigh': {
							label: {
								name: 'PriceLowToHigh',
								type: '(EnumItem)',
							},
							insertText: 'PriceLowToHigh',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogSortType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RecentlyUpdated': {
							label: {
								name: 'RecentlyUpdated',
								type: '(EnumItem)',
							},
							insertText: 'RecentlyUpdated',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogSortType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MostFavorited': {
							label: {
								name: 'MostFavorited',
								type: '(EnumItem)',
							},
							insertText: 'MostFavorited',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CatalogSortType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CellBlock': {
				label: {
					name: 'CellBlock',
					type: '(Enum)',
				},
				insertText: 'CellBlock',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellBlock)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Solid': {
							label: {
								name: 'Solid',
								type: '(EnumItem)',
							},
							insertText: 'Solid',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellBlock)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'VerticalWedge': {
							label: {
								name: 'VerticalWedge',
								type: '(EnumItem)',
							},
							insertText: 'VerticalWedge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellBlock)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CornerWedge': {
							label: {
								name: 'CornerWedge',
								type: '(EnumItem)',
							},
							insertText: 'CornerWedge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellBlock)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InverseCornerWedge': {
							label: {
								name: 'InverseCornerWedge',
								type: '(EnumItem)',
							},
							insertText: 'InverseCornerWedge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellBlock)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HorizontalWedge': {
							label: {
								name: 'HorizontalWedge',
								type: '(EnumItem)',
							},
							insertText: 'HorizontalWedge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellBlock)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CellMaterial': {
				label: {
					name: 'CellMaterial',
					type: '(Enum)',
				},
				insertText: 'CellMaterial',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Empty': {
							label: {
								name: 'Empty',
								type: '(EnumItem)',
							},
							insertText: 'Empty',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Grass': {
							label: {
								name: 'Grass',
								type: '(EnumItem)',
							},
							insertText: 'Grass',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sand': {
							label: {
								name: 'Sand',
								type: '(EnumItem)',
							},
							insertText: 'Sand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Brick': {
							label: {
								name: 'Brick',
								type: '(EnumItem)',
							},
							insertText: 'Brick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Granite': {
							label: {
								name: 'Granite',
								type: '(EnumItem)',
							},
							insertText: 'Granite',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Asphalt': {
							label: {
								name: 'Asphalt',
								type: '(EnumItem)',
							},
							insertText: 'Asphalt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Iron': {
							label: {
								name: 'Iron',
								type: '(EnumItem)',
							},
							insertText: 'Iron',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Aluminum': {
							label: {
								name: 'Aluminum',
								type: '(EnumItem)',
							},
							insertText: 'Aluminum',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gold': {
							label: {
								name: 'Gold',
								type: '(EnumItem)',
							},
							insertText: 'Gold',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WoodPlank': {
							label: {
								name: 'WoodPlank',
								type: '(EnumItem)',
							},
							insertText: 'WoodPlank',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WoodLog': {
							label: {
								name: 'WoodLog',
								type: '(EnumItem)',
							},
							insertText: 'WoodLog',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gravel': {
							label: {
								name: 'Gravel',
								type: '(EnumItem)',
							},
							insertText: 'Gravel',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CinderBlock': {
							label: {
								name: 'CinderBlock',
								type: '(EnumItem)',
							},
							insertText: 'CinderBlock',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MossyStone': {
							label: {
								name: 'MossyStone',
								type: '(EnumItem)',
							},
							insertText: 'MossyStone',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cement': {
							label: {
								name: 'Cement',
								type: '(EnumItem)',
							},
							insertText: 'Cement',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RedPlastic': {
							label: {
								name: 'RedPlastic',
								type: '(EnumItem)',
							},
							insertText: 'RedPlastic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BluePlastic': {
							label: {
								name: 'BluePlastic',
								type: '(EnumItem)',
							},
							insertText: 'BluePlastic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Water': {
							label: {
								name: 'Water',
								type: '(EnumItem)',
							},
							insertText: 'Water',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellMaterial)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CellOrientation': {
				label: {
					name: 'CellOrientation',
					type: '(Enum)',
				},
				insertText: 'CellOrientation',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellOrientation)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NegZ': {
							label: {
								name: 'NegZ',
								type: '(EnumItem)',
							},
							insertText: 'NegZ',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'X': {
							label: {
								name: 'X',
								type: '(EnumItem)',
							},
							insertText: 'X',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Z': {
							label: {
								name: 'Z',
								type: '(EnumItem)',
							},
							insertText: 'Z',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NegX': {
							label: {
								name: 'NegX',
								type: '(EnumItem)',
							},
							insertText: 'NegX',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CellOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CenterDialogType': {
				label: {
					name: 'CenterDialogType',
					type: '(Enum)',
				},
				insertText: 'CenterDialogType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CenterDialogType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'UnsolicitedDialog': {
							label: {
								name: 'UnsolicitedDialog',
								type: '(EnumItem)',
							},
							insertText: 'UnsolicitedDialog',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CenterDialogType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlayerInitiatedDialog': {
							label: {
								name: 'PlayerInitiatedDialog',
								type: '(EnumItem)',
							},
							insertText: 'PlayerInitiatedDialog',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CenterDialogType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ModalDialog': {
							label: {
								name: 'ModalDialog',
								type: '(EnumItem)',
							},
							insertText: 'ModalDialog',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CenterDialogType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QuitDialog': {
							label: {
								name: 'QuitDialog',
								type: '(EnumItem)',
							},
							insertText: 'QuitDialog',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CenterDialogType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ChatCallbackType': {
				label: {
					name: 'ChatCallbackType',
					type: '(Enum)',
				},
				insertText: 'ChatCallbackType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatCallbackType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'OnCreatingChatWindow': {
							label: {
								name: 'OnCreatingChatWindow',
								type: '(EnumItem)',
							},
							insertText: 'OnCreatingChatWindow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatCallbackType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OnClientSendingMessage': {
							label: {
								name: 'OnClientSendingMessage',
								type: '(EnumItem)',
							},
							insertText: 'OnClientSendingMessage',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatCallbackType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OnClientFormattingMessage': {
							label: {
								name: 'OnClientFormattingMessage',
								type: '(EnumItem)',
							},
							insertText: 'OnClientFormattingMessage',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatCallbackType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OnServerReceivingMessage': {
							label: {
								name: 'OnServerReceivingMessage',
								type: '(EnumItem)',
							},
							insertText: 'OnServerReceivingMessage',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatCallbackType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ChatColor': {
				label: {
					name: 'ChatColor',
					type: '(Enum)',
				},
				insertText: 'ChatColor',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatColor)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Blue': {
							label: {
								name: 'Blue',
								type: '(EnumItem)',
							},
							insertText: 'Blue',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Green': {
							label: {
								name: 'Green',
								type: '(EnumItem)',
							},
							insertText: 'Green',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Red': {
							label: {
								name: 'Red',
								type: '(EnumItem)',
							},
							insertText: 'Red',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'White': {
							label: {
								name: 'White',
								type: '(EnumItem)',
							},
							insertText: 'White',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ChatMode': {
				label: {
					name: 'ChatMode',
					type: '(Enum)',
				},
				insertText: 'ChatMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Menu': {
							label: {
								name: 'Menu',
								type: '(EnumItem)',
							},
							insertText: 'Menu',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TextAndMenu': {
							label: {
								name: 'TextAndMenu',
								type: '(EnumItem)',
							},
							insertText: 'TextAndMenu',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ChatPrivacyMode': {
				label: {
					name: 'ChatPrivacyMode',
					type: '(Enum)',
				},
				insertText: 'ChatPrivacyMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatPrivacyMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'AllUsers': {
							label: {
								name: 'AllUsers',
								type: '(EnumItem)',
							},
							insertText: 'AllUsers',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatPrivacyMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NoOne': {
							label: {
								name: 'NoOne',
								type: '(EnumItem)',
							},
							insertText: 'NoOne',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatPrivacyMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Friends': {
							label: {
								name: 'Friends',
								type: '(EnumItem)',
							},
							insertText: 'Friends',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatPrivacyMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ChatStyle': {
				label: {
					name: 'ChatStyle',
					type: '(Enum)',
				},
				insertText: 'ChatStyle',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatStyle)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bubble': {
							label: {
								name: 'Bubble',
								type: '(EnumItem)',
							},
							insertText: 'Bubble',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClassicAndBubble': {
							label: {
								name: 'ClassicAndBubble',
								type: '(EnumItem)',
							},
							insertText: 'ClassicAndBubble',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ChatStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ClientAnimatorThrottlingMode': {
				label: {
					name: 'ClientAnimatorThrottlingMode',
					type: '(Enum)',
				},
				insertText: 'ClientAnimatorThrottlingMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ClientAnimatorThrottlingMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ClientAnimatorThrottlingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ClientAnimatorThrottlingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Enabled': {
							label: {
								name: 'Enabled',
								type: '(EnumItem)',
							},
							insertText: 'Enabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ClientAnimatorThrottlingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CollisionFidelity': {
				label: {
					name: 'CollisionFidelity',
					type: '(Enum)',
				},
				insertText: 'CollisionFidelity',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CollisionFidelity)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CollisionFidelity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hull': {
							label: {
								name: 'Hull',
								type: '(EnumItem)',
							},
							insertText: 'Hull',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CollisionFidelity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Box': {
							label: {
								name: 'Box',
								type: '(EnumItem)',
							},
							insertText: 'Box',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CollisionFidelity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PreciseConvexDecomposition': {
							label: {
								name: 'PreciseConvexDecomposition',
								type: '(EnumItem)',
							},
							insertText: 'PreciseConvexDecomposition',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CollisionFidelity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ComputerCameraMovementMode': {
				label: {
					name: 'ComputerCameraMovementMode',
					type: '(Enum)',
				},
				insertText: 'ComputerCameraMovementMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerCameraMovementMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Follow': {
							label: {
								name: 'Follow',
								type: '(EnumItem)',
							},
							insertText: 'Follow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Orbital': {
							label: {
								name: 'Orbital',
								type: '(EnumItem)',
							},
							insertText: 'Orbital',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CameraToggle': {
							label: {
								name: 'CameraToggle',
								type: '(EnumItem)',
							},
							insertText: 'CameraToggle',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ComputerMovementMode': {
				label: {
					name: 'ComputerMovementMode',
					type: '(Enum)',
				},
				insertText: 'ComputerMovementMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerMovementMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeyboardMouse': {
							label: {
								name: 'KeyboardMouse',
								type: '(EnumItem)',
							},
							insertText: 'KeyboardMouse',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClickToMove': {
							label: {
								name: 'ClickToMove',
								type: '(EnumItem)',
							},
							insertText: 'ClickToMove',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ComputerMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ConnectionError': {
				label: {
					name: 'ConnectionError',
					type: '(Enum)',
				},
				insertText: 'ConnectionError',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'OK': {
							label: {
								name: 'OK',
								type: '(EnumItem)',
							},
							insertText: 'OK',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectErrors': {
							label: {
								name: 'DisconnectErrors',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectErrors',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectBadhash': {
							label: {
								name: 'DisconnectBadhash',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectBadhash',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectSecurityKeyMismatch': {
							label: {
								name: 'DisconnectSecurityKeyMismatch',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectSecurityKeyMismatch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectNewSecurityKeyMismatch': {
							label: {
								name: 'DisconnectNewSecurityKeyMismatch',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectNewSecurityKeyMismatch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectProtocolMismatch': {
							label: {
								name: 'DisconnectProtocolMismatch',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectProtocolMismatch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectReceivePacketError': {
							label: {
								name: 'DisconnectReceivePacketError',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectReceivePacketError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectReceivePacketStreamError': {
							label: {
								name: 'DisconnectReceivePacketStreamError',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectReceivePacketStreamError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectSendPacketError': {
							label: {
								name: 'DisconnectSendPacketError',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectSendPacketError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectIllegalTeleport': {
							label: {
								name: 'DisconnectIllegalTeleport',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectIllegalTeleport',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectDuplicatePlayer': {
							label: {
								name: 'DisconnectDuplicatePlayer',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectDuplicatePlayer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectDuplicateTicket': {
							label: {
								name: 'DisconnectDuplicateTicket',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectDuplicateTicket',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectTimeout': {
							label: {
								name: 'DisconnectTimeout',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectTimeout',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectLuaKick': {
							label: {
								name: 'DisconnectLuaKick',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectLuaKick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectOnRemoteSysStats': {
							label: {
								name: 'DisconnectOnRemoteSysStats',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectOnRemoteSysStats',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectHashTimeout': {
							label: {
								name: 'DisconnectHashTimeout',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectHashTimeout',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectCloudEditKick': {
							label: {
								name: 'DisconnectCloudEditKick',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectCloudEditKick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectPlayerless': {
							label: {
								name: 'DisconnectPlayerless',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectPlayerless',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectEvicted': {
							label: {
								name: 'DisconnectEvicted',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectEvicted',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectDevMaintenance': {
							label: {
								name: 'DisconnectDevMaintenance',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectDevMaintenance',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectRobloxMaintenance': {
							label: {
								name: 'DisconnectRobloxMaintenance',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectRobloxMaintenance',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectRejoin': {
							label: {
								name: 'DisconnectRejoin',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectRejoin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectConnectionLost': {
							label: {
								name: 'DisconnectConnectionLost',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectConnectionLost',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectIdle': {
							label: {
								name: 'DisconnectIdle',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectIdle',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectRaknetErrors': {
							label: {
								name: 'DisconnectRaknetErrors',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectRaknetErrors',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectWrongVersion': {
							label: {
								name: 'DisconnectWrongVersion',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectWrongVersion',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectBySecurityPolicy': {
							label: {
								name: 'DisconnectBySecurityPolicy',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectBySecurityPolicy',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DisconnectBlockedIP': {
							label: {
								name: 'DisconnectBlockedIP',
								type: '(EnumItem)',
							},
							insertText: 'DisconnectBlockedIP',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchErrors': {
							label: {
								name: 'PlacelaunchErrors',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchErrors',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchDisabled': {
							label: {
								name: 'PlacelaunchDisabled',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchDisabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchError': {
							label: {
								name: 'PlacelaunchError',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchGameEnded': {
							label: {
								name: 'PlacelaunchGameEnded',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchGameEnded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchGameFull': {
							label: {
								name: 'PlacelaunchGameFull',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchGameFull',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchUserLeft': {
							label: {
								name: 'PlacelaunchUserLeft',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchUserLeft',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchRestricted': {
							label: {
								name: 'PlacelaunchRestricted',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchRestricted',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchUnauthorized': {
							label: {
								name: 'PlacelaunchUnauthorized',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchUnauthorized',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchFlooded': {
							label: {
								name: 'PlacelaunchFlooded',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchFlooded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchHashExpired': {
							label: {
								name: 'PlacelaunchHashExpired',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchHashExpired',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchHashException': {
							label: {
								name: 'PlacelaunchHashException',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchHashException',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchPartyCannotFit': {
							label: {
								name: 'PlacelaunchPartyCannotFit',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchPartyCannotFit',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchHttpError': {
							label: {
								name: 'PlacelaunchHttpError',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchHttpError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchCustomMessage': {
							label: {
								name: 'PlacelaunchCustomMessage',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchCustomMessage',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlacelaunchOtherError': {
							label: {
								name: 'PlacelaunchOtherError',
								type: '(EnumItem)',
							},
							insertText: 'PlacelaunchOtherError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportErrors': {
							label: {
								name: 'TeleportErrors',
								type: '(EnumItem)',
							},
							insertText: 'TeleportErrors',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportFailure': {
							label: {
								name: 'TeleportFailure',
								type: '(EnumItem)',
							},
							insertText: 'TeleportFailure',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportGameNotFound': {
							label: {
								name: 'TeleportGameNotFound',
								type: '(EnumItem)',
							},
							insertText: 'TeleportGameNotFound',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportGameEnded': {
							label: {
								name: 'TeleportGameEnded',
								type: '(EnumItem)',
							},
							insertText: 'TeleportGameEnded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportGameFull': {
							label: {
								name: 'TeleportGameFull',
								type: '(EnumItem)',
							},
							insertText: 'TeleportGameFull',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportUnauthorized': {
							label: {
								name: 'TeleportUnauthorized',
								type: '(EnumItem)',
							},
							insertText: 'TeleportUnauthorized',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportFlooded': {
							label: {
								name: 'TeleportFlooded',
								type: '(EnumItem)',
							},
							insertText: 'TeleportFlooded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportIsTeleporting': {
							label: {
								name: 'TeleportIsTeleporting',
								type: '(EnumItem)',
							},
							insertText: 'TeleportIsTeleporting',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ConnectionState': {
				label: {
					name: 'ConnectionState',
					type: '(Enum)',
				},
				insertText: 'ConnectionState',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionState)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Connected': {
							label: {
								name: 'Connected',
								type: '(EnumItem)',
							},
							insertText: 'Connected',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disconnected': {
							label: {
								name: 'Disconnected',
								type: '(EnumItem)',
							},
							insertText: 'Disconnected',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ConnectionState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ContextActionPriority': {
				label: {
					name: 'ContextActionPriority',
					type: '(Enum)',
				},
				insertText: 'ContextActionPriority',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ContextActionPriority)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Low': {
							label: {
								name: 'Low',
								type: '(EnumItem)',
							},
							insertText: 'Low',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ContextActionPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Medium': {
							label: {
								name: 'Medium',
								type: '(EnumItem)',
							},
							insertText: 'Medium',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ContextActionPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ContextActionPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'High': {
							label: {
								name: 'High',
								type: '(EnumItem)',
							},
							insertText: 'High',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ContextActionPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ContextActionResult': {
				label: {
					name: 'ContextActionResult',
					type: '(Enum)',
				},
				insertText: 'ContextActionResult',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ContextActionResult)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Pass': {
							label: {
								name: 'Pass',
								type: '(EnumItem)',
							},
							insertText: 'Pass',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ContextActionResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sink': {
							label: {
								name: 'Sink',
								type: '(EnumItem)',
							},
							insertText: 'Sink',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ContextActionResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ControlMode': {
				label: {
					name: 'ControlMode',
					type: '(Enum)',
				},
				insertText: 'ControlMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ControlMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'MouseLockSwitch': {
							label: {
								name: 'MouseLockSwitch',
								type: '(EnumItem)',
							},
							insertText: 'MouseLockSwitch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ControlMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ControlMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CoreGuiType': {
				label: {
					name: 'CoreGuiType',
					type: '(Enum)',
				},
				insertText: 'CoreGuiType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'PlayerList': {
							label: {
								name: 'PlayerList',
								type: '(EnumItem)',
							},
							insertText: 'PlayerList',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Health': {
							label: {
								name: 'Health',
								type: '(EnumItem)',
							},
							insertText: 'Health',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Backpack': {
							label: {
								name: 'Backpack',
								type: '(EnumItem)',
							},
							insertText: 'Backpack',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Chat': {
							label: {
								name: 'Chat',
								type: '(EnumItem)',
							},
							insertText: 'Chat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'All': {
							label: {
								name: 'All',
								type: '(EnumItem)',
							},
							insertText: 'All',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EmotesMenu': {
							label: {
								name: 'EmotesMenu',
								type: '(EnumItem)',
							},
							insertText: 'EmotesMenu',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CoreGuiType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CreatorType': {
				label: {
					name: 'CreatorType',
					type: '(Enum)',
				},
				insertText: 'CreatorType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CreatorType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'User': {
							label: {
								name: 'User',
								type: '(EnumItem)',
							},
							insertText: 'User',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CreatorType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Group': {
							label: {
								name: 'Group',
								type: '(EnumItem)',
							},
							insertText: 'Group',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CreatorType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CurrencyType': {
				label: {
					name: 'CurrencyType',
					type: '(Enum)',
				},
				insertText: 'CurrencyType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CurrencyType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CurrencyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Robux': {
							label: {
								name: 'Robux',
								type: '(EnumItem)',
							},
							insertText: 'Robux',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CurrencyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Tix': {
							label: {
								name: 'Tix',
								type: '(EnumItem)',
							},
							insertText: 'Tix',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CurrencyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'CustomCameraMode': {
				label: {
					name: 'CustomCameraMode',
					type: '(Enum)',
				},
				insertText: 'CustomCameraMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CustomCameraMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CustomCameraMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Follow': {
							label: {
								name: 'Follow',
								type: '(EnumItem)',
							},
							insertText: 'Follow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CustomCameraMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/CustomCameraMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DataStoreRequestType': {
				label: {
					name: 'DataStoreRequestType',
					type: '(Enum)',
				},
				insertText: 'DataStoreRequestType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DataStoreRequestType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'GetAsync': {
							label: {
								name: 'GetAsync',
								type: '(EnumItem)',
							},
							insertText: 'GetAsync',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DataStoreRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SetIncrementAsync': {
							label: {
								name: 'SetIncrementAsync',
								type: '(EnumItem)',
							},
							insertText: 'SetIncrementAsync',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DataStoreRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'UpdateAsync': {
							label: {
								name: 'UpdateAsync',
								type: '(EnumItem)',
							},
							insertText: 'UpdateAsync',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DataStoreRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GetSortedAsync': {
							label: {
								name: 'GetSortedAsync',
								type: '(EnumItem)',
							},
							insertText: 'GetSortedAsync',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DataStoreRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SetIncrementSortedAsync': {
							label: {
								name: 'SetIncrementSortedAsync',
								type: '(EnumItem)',
							},
							insertText: 'SetIncrementSortedAsync',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DataStoreRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OnUpdate': {
							label: {
								name: 'OnUpdate',
								type: '(EnumItem)',
							},
							insertText: 'OnUpdate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DataStoreRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DevCameraOcclusionMode': {
				label: {
					name: 'DevCameraOcclusionMode',
					type: '(Enum)',
				},
				insertText: 'DevCameraOcclusionMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevCameraOcclusionMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Zoom': {
							label: {
								name: 'Zoom',
								type: '(EnumItem)',
							},
							insertText: 'Zoom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevCameraOcclusionMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Invisicam': {
							label: {
								name: 'Invisicam',
								type: '(EnumItem)',
							},
							insertText: 'Invisicam',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevCameraOcclusionMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DevComputerCameraMovementMode': {
				label: {
					name: 'DevComputerCameraMovementMode',
					type: '(Enum)',
				},
				insertText: 'DevComputerCameraMovementMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerCameraMovementMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'UserChoice': {
							label: {
								name: 'UserChoice',
								type: '(EnumItem)',
							},
							insertText: 'UserChoice',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Follow': {
							label: {
								name: 'Follow',
								type: '(EnumItem)',
							},
							insertText: 'Follow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Orbital': {
							label: {
								name: 'Orbital',
								type: '(EnumItem)',
							},
							insertText: 'Orbital',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CameraToggle': {
							label: {
								name: 'CameraToggle',
								type: '(EnumItem)',
							},
							insertText: 'CameraToggle',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DevComputerMovementMode': {
				label: {
					name: 'DevComputerMovementMode',
					type: '(Enum)',
				},
				insertText: 'DevComputerMovementMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerMovementMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'UserChoice': {
							label: {
								name: 'UserChoice',
								type: '(EnumItem)',
							},
							insertText: 'UserChoice',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeyboardMouse': {
							label: {
								name: 'KeyboardMouse',
								type: '(EnumItem)',
							},
							insertText: 'KeyboardMouse',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClickToMove': {
							label: {
								name: 'ClickToMove',
								type: '(EnumItem)',
							},
							insertText: 'ClickToMove',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Scriptable': {
							label: {
								name: 'Scriptable',
								type: '(EnumItem)',
							},
							insertText: 'Scriptable',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevComputerMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DevTouchCameraMovementMode': {
				label: {
					name: 'DevTouchCameraMovementMode',
					type: '(Enum)',
				},
				insertText: 'DevTouchCameraMovementMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchCameraMovementMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'UserChoice': {
							label: {
								name: 'UserChoice',
								type: '(EnumItem)',
							},
							insertText: 'UserChoice',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Follow': {
							label: {
								name: 'Follow',
								type: '(EnumItem)',
							},
							insertText: 'Follow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Orbital': {
							label: {
								name: 'Orbital',
								type: '(EnumItem)',
							},
							insertText: 'Orbital',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DevTouchMovementMode': {
				label: {
					name: 'DevTouchMovementMode',
					type: '(Enum)',
				},
				insertText: 'DevTouchMovementMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchMovementMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'UserChoice': {
							label: {
								name: 'UserChoice',
								type: '(EnumItem)',
							},
							insertText: 'UserChoice',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Thumbstick': {
							label: {
								name: 'Thumbstick',
								type: '(EnumItem)',
							},
							insertText: 'Thumbstick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DPad': {
							label: {
								name: 'DPad',
								type: '(EnumItem)',
							},
							insertText: 'DPad',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Thumbpad': {
							label: {
								name: 'Thumbpad',
								type: '(EnumItem)',
							},
							insertText: 'Thumbpad',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClickToMove': {
							label: {
								name: 'ClickToMove',
								type: '(EnumItem)',
							},
							insertText: 'ClickToMove',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Scriptable': {
							label: {
								name: 'Scriptable',
								type: '(EnumItem)',
							},
							insertText: 'Scriptable',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DynamicThumbstick': {
							label: {
								name: 'DynamicThumbstick',
								type: '(EnumItem)',
							},
							insertText: 'DynamicThumbstick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DevTouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DeveloperMemoryTag': {
				label: {
					name: 'DeveloperMemoryTag',
					type: '(Enum)',
				},
				insertText: 'DeveloperMemoryTag',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Internal': {
							label: {
								name: 'Internal',
								type: '(EnumItem)',
							},
							insertText: 'Internal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HttpCache': {
							label: {
								name: 'HttpCache',
								type: '(EnumItem)',
							},
							insertText: 'HttpCache',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Instances': {
							label: {
								name: 'Instances',
								type: '(EnumItem)',
							},
							insertText: 'Instances',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Signals': {
							label: {
								name: 'Signals',
								type: '(EnumItem)',
							},
							insertText: 'Signals',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LuaHeap': {
							label: {
								name: 'LuaHeap',
								type: '(EnumItem)',
							},
							insertText: 'LuaHeap',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Script': {
							label: {
								name: 'Script',
								type: '(EnumItem)',
							},
							insertText: 'Script',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PhysicsCollision': {
							label: {
								name: 'PhysicsCollision',
								type: '(EnumItem)',
							},
							insertText: 'PhysicsCollision',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PhysicsParts': {
							label: {
								name: 'PhysicsParts',
								type: '(EnumItem)',
							},
							insertText: 'PhysicsParts',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GraphicsSolidModels': {
							label: {
								name: 'GraphicsSolidModels',
								type: '(EnumItem)',
							},
							insertText: 'GraphicsSolidModels',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GraphicsMeshParts': {
							label: {
								name: 'GraphicsMeshParts',
								type: '(EnumItem)',
							},
							insertText: 'GraphicsMeshParts',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GraphicsParticles': {
							label: {
								name: 'GraphicsParticles',
								type: '(EnumItem)',
							},
							insertText: 'GraphicsParticles',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GraphicsParts': {
							label: {
								name: 'GraphicsParts',
								type: '(EnumItem)',
							},
							insertText: 'GraphicsParts',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GraphicsSpatialHash': {
							label: {
								name: 'GraphicsSpatialHash',
								type: '(EnumItem)',
							},
							insertText: 'GraphicsSpatialHash',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GraphicsTerrain': {
							label: {
								name: 'GraphicsTerrain',
								type: '(EnumItem)',
							},
							insertText: 'GraphicsTerrain',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GraphicsTexture': {
							label: {
								name: 'GraphicsTexture',
								type: '(EnumItem)',
							},
							insertText: 'GraphicsTexture',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GraphicsTextureCharacter': {
							label: {
								name: 'GraphicsTextureCharacter',
								type: '(EnumItem)',
							},
							insertText: 'GraphicsTextureCharacter',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sounds': {
							label: {
								name: 'Sounds',
								type: '(EnumItem)',
							},
							insertText: 'Sounds',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'StreamingSounds': {
							label: {
								name: 'StreamingSounds',
								type: '(EnumItem)',
							},
							insertText: 'StreamingSounds',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TerrainVoxels': {
							label: {
								name: 'TerrainVoxels',
								type: '(EnumItem)',
							},
							insertText: 'TerrainVoxels',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gui': {
							label: {
								name: 'Gui',
								type: '(EnumItem)',
							},
							insertText: 'Gui',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Animation': {
							label: {
								name: 'Animation',
								type: '(EnumItem)',
							},
							insertText: 'Animation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Navigation': {
							label: {
								name: 'Navigation',
								type: '(EnumItem)',
							},
							insertText: 'Navigation',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeveloperMemoryTag)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DeviceType': {
				label: {
					name: 'DeviceType',
					type: '(Enum)',
				},
				insertText: 'DeviceType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeviceType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Unknown': {
							label: {
								name: 'Unknown',
								type: '(EnumItem)',
							},
							insertText: 'Unknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeviceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Desktop': {
							label: {
								name: 'Desktop',
								type: '(EnumItem)',
							},
							insertText: 'Desktop',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeviceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Tablet': {
							label: {
								name: 'Tablet',
								type: '(EnumItem)',
							},
							insertText: 'Tablet',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeviceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Phone': {
							label: {
								name: 'Phone',
								type: '(EnumItem)',
							},
							insertText: 'Phone',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DeviceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DialogBehaviorType': {
				label: {
					name: 'DialogBehaviorType',
					type: '(Enum)',
				},
				insertText: 'DialogBehaviorType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogBehaviorType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'SinglePlayer': {
							label: {
								name: 'SinglePlayer',
								type: '(EnumItem)',
							},
							insertText: 'SinglePlayer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogBehaviorType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MultiplePlayers': {
							label: {
								name: 'MultiplePlayers',
								type: '(EnumItem)',
							},
							insertText: 'MultiplePlayers',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogBehaviorType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DialogPurpose': {
				label: {
					name: 'DialogPurpose',
					type: '(Enum)',
				},
				insertText: 'DialogPurpose',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogPurpose)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Quest': {
							label: {
								name: 'Quest',
								type: '(EnumItem)',
							},
							insertText: 'Quest',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogPurpose)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Help': {
							label: {
								name: 'Help',
								type: '(EnumItem)',
							},
							insertText: 'Help',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogPurpose)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Shop': {
							label: {
								name: 'Shop',
								type: '(EnumItem)',
							},
							insertText: 'Shop',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogPurpose)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DialogTone': {
				label: {
					name: 'DialogTone',
					type: '(Enum)',
				},
				insertText: 'DialogTone',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogTone)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Neutral': {
							label: {
								name: 'Neutral',
								type: '(EnumItem)',
							},
							insertText: 'Neutral',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogTone)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Friendly': {
							label: {
								name: 'Friendly',
								type: '(EnumItem)',
							},
							insertText: 'Friendly',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogTone)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Enemy': {
							label: {
								name: 'Enemy',
								type: '(EnumItem)',
							},
							insertText: 'Enemy',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DialogTone)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DominantAxis': {
				label: {
					name: 'DominantAxis',
					type: '(Enum)',
				},
				insertText: 'DominantAxis',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DominantAxis)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Width': {
							label: {
								name: 'Width',
								type: '(EnumItem)',
							},
							insertText: 'Width',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DominantAxis)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Height': {
							label: {
								name: 'Height',
								type: '(EnumItem)',
							},
							insertText: 'Height',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DominantAxis)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'DraftStatusCode': {
				label: {
					name: 'DraftStatusCode',
					type: '(Enum)',
				},
				insertText: 'DraftStatusCode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DraftStatusCode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'OK': {
							label: {
								name: 'OK',
								type: '(EnumItem)',
							},
							insertText: 'OK',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DraftStatusCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DraftOutdated': {
							label: {
								name: 'DraftOutdated',
								type: '(EnumItem)',
							},
							insertText: 'DraftOutdated',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DraftStatusCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptRemoved': {
							label: {
								name: 'ScriptRemoved',
								type: '(EnumItem)',
							},
							insertText: 'ScriptRemoved',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DraftStatusCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DraftCommitted': {
							label: {
								name: 'DraftCommitted',
								type: '(EnumItem)',
							},
							insertText: 'DraftCommitted',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/DraftStatusCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'EasingDirection': {
				label: {
					name: 'EasingDirection',
					type: '(Enum)',
				},
				insertText: 'EasingDirection',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingDirection)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'In': {
							label: {
								name: 'In',
								type: '(EnumItem)',
							},
							insertText: 'In',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Out': {
							label: {
								name: 'Out',
								type: '(EnumItem)',
							},
							insertText: 'Out',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InOut': {
							label: {
								name: 'InOut',
								type: '(EnumItem)',
							},
							insertText: 'InOut',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'EasingStyle': {
				label: {
					name: 'EasingStyle',
					type: '(Enum)',
				},
				insertText: 'EasingStyle',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Linear': {
							label: {
								name: 'Linear',
								type: '(EnumItem)',
							},
							insertText: 'Linear',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sine': {
							label: {
								name: 'Sine',
								type: '(EnumItem)',
							},
							insertText: 'Sine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Back': {
							label: {
								name: 'Back',
								type: '(EnumItem)',
							},
							insertText: 'Back',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Quad': {
							label: {
								name: 'Quad',
								type: '(EnumItem)',
							},
							insertText: 'Quad',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Quart': {
							label: {
								name: 'Quart',
								type: '(EnumItem)',
							},
							insertText: 'Quart',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Quint': {
							label: {
								name: 'Quint',
								type: '(EnumItem)',
							},
							insertText: 'Quint',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bounce': {
							label: {
								name: 'Bounce',
								type: '(EnumItem)',
							},
							insertText: 'Bounce',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Elastic': {
							label: {
								name: 'Elastic',
								type: '(EnumItem)',
							},
							insertText: 'Elastic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Exponential': {
							label: {
								name: 'Exponential',
								type: '(EnumItem)',
							},
							insertText: 'Exponential',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Circular': {
							label: {
								name: 'Circular',
								type: '(EnumItem)',
							},
							insertText: 'Circular',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cubic': {
							label: {
								name: 'Cubic',
								type: '(EnumItem)',
							},
							insertText: 'Cubic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ElasticBehavior': {
				label: {
					name: 'ElasticBehavior',
					type: '(Enum)',
				},
				insertText: 'ElasticBehavior',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ElasticBehavior)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'WhenScrollable': {
							label: {
								name: 'WhenScrollable',
								type: '(EnumItem)',
							},
							insertText: 'WhenScrollable',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ElasticBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Always': {
							label: {
								name: 'Always',
								type: '(EnumItem)',
							},
							insertText: 'Always',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ElasticBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Never': {
							label: {
								name: 'Never',
								type: '(EnumItem)',
							},
							insertText: 'Never',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ElasticBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'EnviromentalPhysicsThrottle': {
				label: {
					name: 'EnviromentalPhysicsThrottle',
					type: '(Enum)',
				},
				insertText: 'EnviromentalPhysicsThrottle',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EnviromentalPhysicsThrottle)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'DefaultAuto': {
							label: {
								name: 'DefaultAuto',
								type: '(EnumItem)',
							},
							insertText: 'DefaultAuto',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EnviromentalPhysicsThrottle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EnviromentalPhysicsThrottle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Always': {
							label: {
								name: 'Always',
								type: '(EnumItem)',
							},
							insertText: 'Always',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EnviromentalPhysicsThrottle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Skip2': {
							label: {
								name: 'Skip2',
								type: '(EnumItem)',
							},
							insertText: 'Skip2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EnviromentalPhysicsThrottle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Skip4': {
							label: {
								name: 'Skip4',
								type: '(EnumItem)',
							},
							insertText: 'Skip4',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EnviromentalPhysicsThrottle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Skip8': {
							label: {
								name: 'Skip8',
								type: '(EnumItem)',
							},
							insertText: 'Skip8',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EnviromentalPhysicsThrottle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Skip16': {
							label: {
								name: 'Skip16',
								type: '(EnumItem)',
							},
							insertText: 'Skip16',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/EnviromentalPhysicsThrottle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ExplosionType': {
				label: {
					name: 'ExplosionType',
					type: '(Enum)',
				},
				insertText: 'ExplosionType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ExplosionType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NoCraters': {
							label: {
								name: 'NoCraters',
								type: '(EnumItem)',
							},
							insertText: 'NoCraters',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ExplosionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Craters': {
							label: {
								name: 'Craters',
								type: '(EnumItem)',
							},
							insertText: 'Craters',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ExplosionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FieldOfViewMode': {
				label: {
					name: 'FieldOfViewMode',
					type: '(Enum)',
				},
				insertText: 'FieldOfViewMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FieldOfViewMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Vertical': {
							label: {
								name: 'Vertical',
								type: '(EnumItem)',
							},
							insertText: 'Vertical',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FieldOfViewMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Diagonal': {
							label: {
								name: 'Diagonal',
								type: '(EnumItem)',
							},
							insertText: 'Diagonal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FieldOfViewMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MaxAxis': {
							label: {
								name: 'MaxAxis',
								type: '(EnumItem)',
							},
							insertText: 'MaxAxis',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FieldOfViewMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FillDirection': {
				label: {
					name: 'FillDirection',
					type: '(Enum)',
				},
				insertText: 'FillDirection',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FillDirection)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Horizontal': {
							label: {
								name: 'Horizontal',
								type: '(EnumItem)',
							},
							insertText: 'Horizontal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FillDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Vertical': {
							label: {
								name: 'Vertical',
								type: '(EnumItem)',
							},
							insertText: 'Vertical',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FillDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FilterResult': {
				label: {
					name: 'FilterResult',
					type: '(Enum)',
				},
				insertText: 'FilterResult',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FilterResult)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Rejected': {
							label: {
								name: 'Rejected',
								type: '(EnumItem)',
							},
							insertText: 'Rejected',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FilterResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Accepted': {
							label: {
								name: 'Accepted',
								type: '(EnumItem)',
							},
							insertText: 'Accepted',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FilterResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Font': {
				label: {
					name: 'Font',
					type: '(Enum)',
				},
				insertText: 'Font',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Legacy': {
							label: {
								name: 'Legacy',
								type: '(EnumItem)',
							},
							insertText: 'Legacy',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Arial': {
							label: {
								name: 'Arial',
								type: '(EnumItem)',
							},
							insertText: 'Arial',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ArialBold': {
							label: {
								name: 'ArialBold',
								type: '(EnumItem)',
							},
							insertText: 'ArialBold',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SourceSans': {
							label: {
								name: 'SourceSans',
								type: '(EnumItem)',
							},
							insertText: 'SourceSans',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SourceSansBold': {
							label: {
								name: 'SourceSansBold',
								type: '(EnumItem)',
							},
							insertText: 'SourceSansBold',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SourceSansSemibold': {
							label: {
								name: 'SourceSansSemibold',
								type: '(EnumItem)',
							},
							insertText: 'SourceSansSemibold',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SourceSansLight': {
							label: {
								name: 'SourceSansLight',
								type: '(EnumItem)',
							},
							insertText: 'SourceSansLight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SourceSansItalic': {
							label: {
								name: 'SourceSansItalic',
								type: '(EnumItem)',
							},
							insertText: 'SourceSansItalic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bodoni': {
							label: {
								name: 'Bodoni',
								type: '(EnumItem)',
							},
							insertText: 'Bodoni',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Garamond': {
							label: {
								name: 'Garamond',
								type: '(EnumItem)',
							},
							insertText: 'Garamond',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cartoon': {
							label: {
								name: 'Cartoon',
								type: '(EnumItem)',
							},
							insertText: 'Cartoon',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Code': {
							label: {
								name: 'Code',
								type: '(EnumItem)',
							},
							insertText: 'Code',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Highway': {
							label: {
								name: 'Highway',
								type: '(EnumItem)',
							},
							insertText: 'Highway',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SciFi': {
							label: {
								name: 'SciFi',
								type: '(EnumItem)',
							},
							insertText: 'SciFi',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Arcade': {
							label: {
								name: 'Arcade',
								type: '(EnumItem)',
							},
							insertText: 'Arcade',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fantasy': {
							label: {
								name: 'Fantasy',
								type: '(EnumItem)',
							},
							insertText: 'Fantasy',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Antique': {
							label: {
								name: 'Antique',
								type: '(EnumItem)',
							},
							insertText: 'Antique',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gotham': {
							label: {
								name: 'Gotham',
								type: '(EnumItem)',
							},
							insertText: 'Gotham',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GothamSemibold': {
							label: {
								name: 'GothamSemibold',
								type: '(EnumItem)',
							},
							insertText: 'GothamSemibold',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GothamBold': {
							label: {
								name: 'GothamBold',
								type: '(EnumItem)',
							},
							insertText: 'GothamBold',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GothamBlack': {
							label: {
								name: 'GothamBlack',
								type: '(EnumItem)',
							},
							insertText: 'GothamBlack',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AmaticSC': {
							label: {
								name: 'AmaticSC',
								type: '(EnumItem)',
							},
							insertText: 'AmaticSC',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bangers': {
							label: {
								name: 'Bangers',
								type: '(EnumItem)',
							},
							insertText: 'Bangers',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Creepster': {
							label: {
								name: 'Creepster',
								type: '(EnumItem)',
							},
							insertText: 'Creepster',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DenkOne': {
							label: {
								name: 'DenkOne',
								type: '(EnumItem)',
							},
							insertText: 'DenkOne',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fondamento': {
							label: {
								name: 'Fondamento',
								type: '(EnumItem)',
							},
							insertText: 'Fondamento',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FredokaOne': {
							label: {
								name: 'FredokaOne',
								type: '(EnumItem)',
							},
							insertText: 'FredokaOne',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GrenzeGotisch': {
							label: {
								name: 'GrenzeGotisch',
								type: '(EnumItem)',
							},
							insertText: 'GrenzeGotisch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'IndieFlower': {
							label: {
								name: 'IndieFlower',
								type: '(EnumItem)',
							},
							insertText: 'IndieFlower',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'JosefinSans': {
							label: {
								name: 'JosefinSans',
								type: '(EnumItem)',
							},
							insertText: 'JosefinSans',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Jura': {
							label: {
								name: 'Jura',
								type: '(EnumItem)',
							},
							insertText: 'Jura',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Kalam': {
							label: {
								name: 'Kalam',
								type: '(EnumItem)',
							},
							insertText: 'Kalam',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LuckiestGuy': {
							label: {
								name: 'LuckiestGuy',
								type: '(EnumItem)',
							},
							insertText: 'LuckiestGuy',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Merriweather': {
							label: {
								name: 'Merriweather',
								type: '(EnumItem)',
							},
							insertText: 'Merriweather',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Michroma': {
							label: {
								name: 'Michroma',
								type: '(EnumItem)',
							},
							insertText: 'Michroma',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Nunito': {
							label: {
								name: 'Nunito',
								type: '(EnumItem)',
							},
							insertText: 'Nunito',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Oswald': {
							label: {
								name: 'Oswald',
								type: '(EnumItem)',
							},
							insertText: 'Oswald',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PatrickHand': {
							label: {
								name: 'PatrickHand',
								type: '(EnumItem)',
							},
							insertText: 'PatrickHand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PermanentMarker': {
							label: {
								name: 'PermanentMarker',
								type: '(EnumItem)',
							},
							insertText: 'PermanentMarker',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Roboto': {
							label: {
								name: 'Roboto',
								type: '(EnumItem)',
							},
							insertText: 'Roboto',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobotoCondensed': {
							label: {
								name: 'RobotoCondensed',
								type: '(EnumItem)',
							},
							insertText: 'RobotoCondensed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobotoMono': {
							label: {
								name: 'RobotoMono',
								type: '(EnumItem)',
							},
							insertText: 'RobotoMono',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sarpanch': {
							label: {
								name: 'Sarpanch',
								type: '(EnumItem)',
							},
							insertText: 'Sarpanch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SpecialElite': {
							label: {
								name: 'SpecialElite',
								type: '(EnumItem)',
							},
							insertText: 'SpecialElite',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TitilliumWeb': {
							label: {
								name: 'TitilliumWeb',
								type: '(EnumItem)',
							},
							insertText: 'TitilliumWeb',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ubuntu': {
							label: {
								name: 'Ubuntu',
								type: '(EnumItem)',
							},
							insertText: 'Ubuntu',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Font)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FontSize': {
				label: {
					name: 'FontSize',
					type: '(Enum)',
				},
				insertText: 'FontSize',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Size8': {
							label: {
								name: 'Size8',
								type: '(EnumItem)',
							},
							insertText: 'Size8',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size9': {
							label: {
								name: 'Size9',
								type: '(EnumItem)',
							},
							insertText: 'Size9',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size10': {
							label: {
								name: 'Size10',
								type: '(EnumItem)',
							},
							insertText: 'Size10',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size11': {
							label: {
								name: 'Size11',
								type: '(EnumItem)',
							},
							insertText: 'Size11',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size12': {
							label: {
								name: 'Size12',
								type: '(EnumItem)',
							},
							insertText: 'Size12',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size14': {
							label: {
								name: 'Size14',
								type: '(EnumItem)',
							},
							insertText: 'Size14',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size18': {
							label: {
								name: 'Size18',
								type: '(EnumItem)',
							},
							insertText: 'Size18',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size24': {
							label: {
								name: 'Size24',
								type: '(EnumItem)',
							},
							insertText: 'Size24',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size36': {
							label: {
								name: 'Size36',
								type: '(EnumItem)',
							},
							insertText: 'Size36',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size48': {
							label: {
								name: 'Size48',
								type: '(EnumItem)',
							},
							insertText: 'Size48',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size28': {
							label: {
								name: 'Size28',
								type: '(EnumItem)',
							},
							insertText: 'Size28',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size32': {
							label: {
								name: 'Size32',
								type: '(EnumItem)',
							},
							insertText: 'Size32',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size42': {
							label: {
								name: 'Size42',
								type: '(EnumItem)',
							},
							insertText: 'Size42',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size60': {
							label: {
								name: 'Size60',
								type: '(EnumItem)',
							},
							insertText: 'Size60',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size96': {
							label: {
								name: 'Size96',
								type: '(EnumItem)',
							},
							insertText: 'Size96',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FontSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FormFactor': {
				label: {
					name: 'FormFactor',
					type: '(Enum)',
				},
				insertText: 'FormFactor',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FormFactor)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Symmetric': {
							label: {
								name: 'Symmetric',
								type: '(EnumItem)',
							},
							insertText: 'Symmetric',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FormFactor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Brick': {
							label: {
								name: 'Brick',
								type: '(EnumItem)',
							},
							insertText: 'Brick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FormFactor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Plate': {
							label: {
								name: 'Plate',
								type: '(EnumItem)',
							},
							insertText: 'Plate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FormFactor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Custom': {
							label: {
								name: 'Custom',
								type: '(EnumItem)',
							},
							insertText: 'Custom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FormFactor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FrameStyle': {
				label: {
					name: 'FrameStyle',
					type: '(Enum)',
				},
				insertText: 'FrameStyle',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FrameStyle)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Custom': {
							label: {
								name: 'Custom',
								type: '(EnumItem)',
							},
							insertText: 'Custom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FrameStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatBlue': {
							label: {
								name: 'ChatBlue',
								type: '(EnumItem)',
							},
							insertText: 'ChatBlue',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FrameStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxSquare': {
							label: {
								name: 'RobloxSquare',
								type: '(EnumItem)',
							},
							insertText: 'RobloxSquare',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FrameStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxRound': {
							label: {
								name: 'RobloxRound',
								type: '(EnumItem)',
							},
							insertText: 'RobloxRound',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FrameStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatGreen': {
							label: {
								name: 'ChatGreen',
								type: '(EnumItem)',
							},
							insertText: 'ChatGreen',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FrameStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatRed': {
							label: {
								name: 'ChatRed',
								type: '(EnumItem)',
							},
							insertText: 'ChatRed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FrameStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DropShadow': {
							label: {
								name: 'DropShadow',
								type: '(EnumItem)',
							},
							insertText: 'DropShadow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FrameStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FramerateManagerMode': {
				label: {
					name: 'FramerateManagerMode',
					type: '(Enum)',
				},
				insertText: 'FramerateManagerMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FramerateManagerMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Automatic': {
							label: {
								name: 'Automatic',
								type: '(EnumItem)',
							},
							insertText: 'Automatic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FramerateManagerMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'On': {
							label: {
								name: 'On',
								type: '(EnumItem)',
							},
							insertText: 'On',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FramerateManagerMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Off': {
							label: {
								name: 'Off',
								type: '(EnumItem)',
							},
							insertText: 'Off',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FramerateManagerMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FriendRequestEvent': {
				label: {
					name: 'FriendRequestEvent',
					type: '(Enum)',
				},
				insertText: 'FriendRequestEvent',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendRequestEvent)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Issue': {
							label: {
								name: 'Issue',
								type: '(EnumItem)',
							},
							insertText: 'Issue',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendRequestEvent)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Revoke': {
							label: {
								name: 'Revoke',
								type: '(EnumItem)',
							},
							insertText: 'Revoke',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendRequestEvent)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Accept': {
							label: {
								name: 'Accept',
								type: '(EnumItem)',
							},
							insertText: 'Accept',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendRequestEvent)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Deny': {
							label: {
								name: 'Deny',
								type: '(EnumItem)',
							},
							insertText: 'Deny',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendRequestEvent)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FriendStatus': {
				label: {
					name: 'FriendStatus',
					type: '(Enum)',
				},
				insertText: 'FriendStatus',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendStatus)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Unknown': {
							label: {
								name: 'Unknown',
								type: '(EnumItem)',
							},
							insertText: 'Unknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NotFriend': {
							label: {
								name: 'NotFriend',
								type: '(EnumItem)',
							},
							insertText: 'NotFriend',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Friend': {
							label: {
								name: 'Friend',
								type: '(EnumItem)',
							},
							insertText: 'Friend',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FriendRequestSent': {
							label: {
								name: 'FriendRequestSent',
								type: '(EnumItem)',
							},
							insertText: 'FriendRequestSent',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FriendRequestReceived': {
							label: {
								name: 'FriendRequestReceived',
								type: '(EnumItem)',
							},
							insertText: 'FriendRequestReceived',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FriendStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'FunctionalTestResult': {
				label: {
					name: 'FunctionalTestResult',
					type: '(Enum)',
				},
				insertText: 'FunctionalTestResult',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FunctionalTestResult)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Passed': {
							label: {
								name: 'Passed',
								type: '(EnumItem)',
							},
							insertText: 'Passed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FunctionalTestResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Warning': {
							label: {
								name: 'Warning',
								type: '(EnumItem)',
							},
							insertText: 'Warning',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FunctionalTestResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Error': {
							label: {
								name: 'Error',
								type: '(EnumItem)',
							},
							insertText: 'Error',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/FunctionalTestResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'GameAvatarType': {
				label: {
					name: 'GameAvatarType',
					type: '(Enum)',
				},
				insertText: 'GameAvatarType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GameAvatarType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'R6': {
							label: {
								name: 'R6',
								type: '(EnumItem)',
							},
							insertText: 'R6',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GameAvatarType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'R15': {
							label: {
								name: 'R15',
								type: '(EnumItem)',
							},
							insertText: 'R15',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GameAvatarType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlayerChoice': {
							label: {
								name: 'PlayerChoice',
								type: '(EnumItem)',
							},
							insertText: 'PlayerChoice',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GameAvatarType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'GearGenreSetting': {
				label: {
					name: 'GearGenreSetting',
					type: '(Enum)',
				},
				insertText: 'GearGenreSetting',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearGenreSetting)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'AllGenres': {
							label: {
								name: 'AllGenres',
								type: '(EnumItem)',
							},
							insertText: 'AllGenres',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearGenreSetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MatchingGenreOnly': {
							label: {
								name: 'MatchingGenreOnly',
								type: '(EnumItem)',
							},
							insertText: 'MatchingGenreOnly',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearGenreSetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'GearType': {
				label: {
					name: 'GearType',
					type: '(Enum)',
				},
				insertText: 'GearType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'MeleeWeapons': {
							label: {
								name: 'MeleeWeapons',
								type: '(EnumItem)',
							},
							insertText: 'MeleeWeapons',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RangedWeapons': {
							label: {
								name: 'RangedWeapons',
								type: '(EnumItem)',
							},
							insertText: 'RangedWeapons',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Explosives': {
							label: {
								name: 'Explosives',
								type: '(EnumItem)',
							},
							insertText: 'Explosives',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PowerUps': {
							label: {
								name: 'PowerUps',
								type: '(EnumItem)',
							},
							insertText: 'PowerUps',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NavigationEnhancers': {
							label: {
								name: 'NavigationEnhancers',
								type: '(EnumItem)',
							},
							insertText: 'NavigationEnhancers',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MusicalInstruments': {
							label: {
								name: 'MusicalInstruments',
								type: '(EnumItem)',
							},
							insertText: 'MusicalInstruments',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SocialItems': {
							label: {
								name: 'SocialItems',
								type: '(EnumItem)',
							},
							insertText: 'SocialItems',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BuildingTools': {
							label: {
								name: 'BuildingTools',
								type: '(EnumItem)',
							},
							insertText: 'BuildingTools',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Transport': {
							label: {
								name: 'Transport',
								type: '(EnumItem)',
							},
							insertText: 'Transport',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GearType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Genre': {
				label: {
					name: 'Genre',
					type: '(Enum)',
				},
				insertText: 'Genre',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'All': {
							label: {
								name: 'All',
								type: '(EnumItem)',
							},
							insertText: 'All',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TownAndCity': {
							label: {
								name: 'TownAndCity',
								type: '(EnumItem)',
							},
							insertText: 'TownAndCity',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fantasy': {
							label: {
								name: 'Fantasy',
								type: '(EnumItem)',
							},
							insertText: 'Fantasy',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SciFi': {
							label: {
								name: 'SciFi',
								type: '(EnumItem)',
							},
							insertText: 'SciFi',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ninja': {
							label: {
								name: 'Ninja',
								type: '(EnumItem)',
							},
							insertText: 'Ninja',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Scary': {
							label: {
								name: 'Scary',
								type: '(EnumItem)',
							},
							insertText: 'Scary',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pirate': {
							label: {
								name: 'Pirate',
								type: '(EnumItem)',
							},
							insertText: 'Pirate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Adventure': {
							label: {
								name: 'Adventure',
								type: '(EnumItem)',
							},
							insertText: 'Adventure',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sports': {
							label: {
								name: 'Sports',
								type: '(EnumItem)',
							},
							insertText: 'Sports',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Funny': {
							label: {
								name: 'Funny',
								type: '(EnumItem)',
							},
							insertText: 'Funny',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WildWest': {
							label: {
								name: 'WildWest',
								type: '(EnumItem)',
							},
							insertText: 'WildWest',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'War': {
							label: {
								name: 'War',
								type: '(EnumItem)',
							},
							insertText: 'War',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SkatePark': {
							label: {
								name: 'SkatePark',
								type: '(EnumItem)',
							},
							insertText: 'SkatePark',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Tutorial': {
							label: {
								name: 'Tutorial',
								type: '(EnumItem)',
							},
							insertText: 'Tutorial',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Genre)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'GraphicsMode': {
				label: {
					name: 'GraphicsMode',
					type: '(Enum)',
				},
				insertText: 'GraphicsMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GraphicsMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Automatic': {
							label: {
								name: 'Automatic',
								type: '(EnumItem)',
							},
							insertText: 'Automatic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GraphicsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Direct3D9': {
							label: {
								name: 'Direct3D9',
								type: '(EnumItem)',
							},
							insertText: 'Direct3D9',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GraphicsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Direct3D11': {
							label: {
								name: 'Direct3D11',
								type: '(EnumItem)',
							},
							insertText: 'Direct3D11',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GraphicsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OpenGL': {
							label: {
								name: 'OpenGL',
								type: '(EnumItem)',
							},
							insertText: 'OpenGL',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GraphicsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Metal': {
							label: {
								name: 'Metal',
								type: '(EnumItem)',
							},
							insertText: 'Metal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GraphicsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Vulkan': {
							label: {
								name: 'Vulkan',
								type: '(EnumItem)',
							},
							insertText: 'Vulkan',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GraphicsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NoGraphics': {
							label: {
								name: 'NoGraphics',
								type: '(EnumItem)',
							},
							insertText: 'NoGraphics',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/GraphicsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HandlesStyle': {
				label: {
					name: 'HandlesStyle',
					type: '(Enum)',
				},
				insertText: 'HandlesStyle',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HandlesStyle)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Resize': {
							label: {
								name: 'Resize',
								type: '(EnumItem)',
							},
							insertText: 'Resize',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HandlesStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Movement': {
							label: {
								name: 'Movement',
								type: '(EnumItem)',
							},
							insertText: 'Movement',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HandlesStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HorizontalAlignment': {
				label: {
					name: 'HorizontalAlignment',
					type: '(Enum)',
				},
				insertText: 'HorizontalAlignment',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HorizontalAlignment)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Center': {
							label: {
								name: 'Center',
								type: '(EnumItem)',
							},
							insertText: 'Center',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HorizontalAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HorizontalAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HorizontalAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HoverAnimateSpeed': {
				label: {
					name: 'HoverAnimateSpeed',
					type: '(Enum)',
				},
				insertText: 'HoverAnimateSpeed',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HoverAnimateSpeed)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'VerySlow': {
							label: {
								name: 'VerySlow',
								type: '(EnumItem)',
							},
							insertText: 'VerySlow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HoverAnimateSpeed)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Slow': {
							label: {
								name: 'Slow',
								type: '(EnumItem)',
							},
							insertText: 'Slow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HoverAnimateSpeed)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Medium': {
							label: {
								name: 'Medium',
								type: '(EnumItem)',
							},
							insertText: 'Medium',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HoverAnimateSpeed)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fast': {
							label: {
								name: 'Fast',
								type: '(EnumItem)',
							},
							insertText: 'Fast',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HoverAnimateSpeed)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'VeryFast': {
							label: {
								name: 'VeryFast',
								type: '(EnumItem)',
							},
							insertText: 'VeryFast',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HoverAnimateSpeed)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HttpCachePolicy': {
				label: {
					name: 'HttpCachePolicy',
					type: '(Enum)',
				},
				insertText: 'HttpCachePolicy',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpCachePolicy)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpCachePolicy)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Full': {
							label: {
								name: 'Full',
								type: '(EnumItem)',
							},
							insertText: 'Full',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpCachePolicy)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DataOnly': {
							label: {
								name: 'DataOnly',
								type: '(EnumItem)',
							},
							insertText: 'DataOnly',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpCachePolicy)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpCachePolicy)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InternalRedirectRefresh': {
							label: {
								name: 'InternalRedirectRefresh',
								type: '(EnumItem)',
							},
							insertText: 'InternalRedirectRefresh',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpCachePolicy)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HttpContentType': {
				label: {
					name: 'HttpContentType',
					type: '(Enum)',
				},
				insertText: 'HttpContentType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpContentType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'ApplicationJson': {
							label: {
								name: 'ApplicationJson',
								type: '(EnumItem)',
							},
							insertText: 'ApplicationJson',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpContentType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ApplicationXml': {
							label: {
								name: 'ApplicationXml',
								type: '(EnumItem)',
							},
							insertText: 'ApplicationXml',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpContentType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ApplicationUrlEncoded': {
							label: {
								name: 'ApplicationUrlEncoded',
								type: '(EnumItem)',
							},
							insertText: 'ApplicationUrlEncoded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpContentType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TextPlain': {
							label: {
								name: 'TextPlain',
								type: '(EnumItem)',
							},
							insertText: 'TextPlain',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpContentType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TextXml': {
							label: {
								name: 'TextXml',
								type: '(EnumItem)',
							},
							insertText: 'TextXml',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpContentType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HttpError': {
				label: {
					name: 'HttpError',
					type: '(Enum)',
				},
				insertText: 'HttpError',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'OK': {
							label: {
								name: 'OK',
								type: '(EnumItem)',
							},
							insertText: 'OK',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InvalidUrl': {
							label: {
								name: 'InvalidUrl',
								type: '(EnumItem)',
							},
							insertText: 'InvalidUrl',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DnsResolve': {
							label: {
								name: 'DnsResolve',
								type: '(EnumItem)',
							},
							insertText: 'DnsResolve',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ConnectFail': {
							label: {
								name: 'ConnectFail',
								type: '(EnumItem)',
							},
							insertText: 'ConnectFail',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OutOfMemory': {
							label: {
								name: 'OutOfMemory',
								type: '(EnumItem)',
							},
							insertText: 'OutOfMemory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TimedOut': {
							label: {
								name: 'TimedOut',
								type: '(EnumItem)',
							},
							insertText: 'TimedOut',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TooManyRedirects': {
							label: {
								name: 'TooManyRedirects',
								type: '(EnumItem)',
							},
							insertText: 'TooManyRedirects',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InvalidRedirect': {
							label: {
								name: 'InvalidRedirect',
								type: '(EnumItem)',
							},
							insertText: 'InvalidRedirect',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NetFail': {
							label: {
								name: 'NetFail',
								type: '(EnumItem)',
							},
							insertText: 'NetFail',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Aborted': {
							label: {
								name: 'Aborted',
								type: '(EnumItem)',
							},
							insertText: 'Aborted',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SslConnectFail': {
							label: {
								name: 'SslConnectFail',
								type: '(EnumItem)',
							},
							insertText: 'SslConnectFail',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SslVerificationFail': {
							label: {
								name: 'SslVerificationFail',
								type: '(EnumItem)',
							},
							insertText: 'SslVerificationFail',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Unknown': {
							label: {
								name: 'Unknown',
								type: '(EnumItem)',
							},
							insertText: 'Unknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpError)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HttpRequestType': {
				label: {
					name: 'HttpRequestType',
					type: '(Enum)',
				},
				insertText: 'HttpRequestType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpRequestType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MarketplaceService': {
							label: {
								name: 'MarketplaceService',
								type: '(EnumItem)',
							},
							insertText: 'MarketplaceService',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Players': {
							label: {
								name: 'Players',
								type: '(EnumItem)',
							},
							insertText: 'Players',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Chat': {
							label: {
								name: 'Chat',
								type: '(EnumItem)',
							},
							insertText: 'Chat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Avatar': {
							label: {
								name: 'Avatar',
								type: '(EnumItem)',
							},
							insertText: 'Avatar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Analytics': {
							label: {
								name: 'Analytics',
								type: '(EnumItem)',
							},
							insertText: 'Analytics',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Localization': {
							label: {
								name: 'Localization',
								type: '(EnumItem)',
							},
							insertText: 'Localization',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HttpRequestType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HumanoidCollisionType': {
				label: {
					name: 'HumanoidCollisionType',
					type: '(Enum)',
				},
				insertText: 'HumanoidCollisionType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidCollisionType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'OuterBox': {
							label: {
								name: 'OuterBox',
								type: '(EnumItem)',
							},
							insertText: 'OuterBox',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidCollisionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InnerBox': {
							label: {
								name: 'InnerBox',
								type: '(EnumItem)',
							},
							insertText: 'InnerBox',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidCollisionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HumanoidDisplayDistanceType': {
				label: {
					name: 'HumanoidDisplayDistanceType',
					type: '(Enum)',
				},
				insertText: 'HumanoidDisplayDistanceType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidDisplayDistanceType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Viewer': {
							label: {
								name: 'Viewer',
								type: '(EnumItem)',
							},
							insertText: 'Viewer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidDisplayDistanceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Subject': {
							label: {
								name: 'Subject',
								type: '(EnumItem)',
							},
							insertText: 'Subject',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidDisplayDistanceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidDisplayDistanceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HumanoidHealthDisplayType': {
				label: {
					name: 'HumanoidHealthDisplayType',
					type: '(Enum)',
				},
				insertText: 'HumanoidHealthDisplayType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidHealthDisplayType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'DisplayWhenDamaged': {
							label: {
								name: 'DisplayWhenDamaged',
								type: '(EnumItem)',
							},
							insertText: 'DisplayWhenDamaged',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidHealthDisplayType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AlwaysOn': {
							label: {
								name: 'AlwaysOn',
								type: '(EnumItem)',
							},
							insertText: 'AlwaysOn',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidHealthDisplayType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AlwaysOff': {
							label: {
								name: 'AlwaysOff',
								type: '(EnumItem)',
							},
							insertText: 'AlwaysOff',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidHealthDisplayType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HumanoidRigType': {
				label: {
					name: 'HumanoidRigType',
					type: '(Enum)',
				},
				insertText: 'HumanoidRigType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidRigType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'R6': {
							label: {
								name: 'R6',
								type: '(EnumItem)',
							},
							insertText: 'R6',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidRigType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'R15': {
							label: {
								name: 'R15',
								type: '(EnumItem)',
							},
							insertText: 'R15',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidRigType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'HumanoidStateType': {
				label: {
					name: 'HumanoidStateType',
					type: '(Enum)',
				},
				insertText: 'HumanoidStateType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'FallingDown': {
							label: {
								name: 'FallingDown',
								type: '(EnumItem)',
							},
							insertText: 'FallingDown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Running': {
							label: {
								name: 'Running',
								type: '(EnumItem)',
							},
							insertText: 'Running',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RunningNoPhysics': {
							label: {
								name: 'RunningNoPhysics',
								type: '(EnumItem)',
							},
							insertText: 'RunningNoPhysics',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Climbing': {
							label: {
								name: 'Climbing',
								type: '(EnumItem)',
							},
							insertText: 'Climbing',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'StrafingNoPhysics': {
							label: {
								name: 'StrafingNoPhysics',
								type: '(EnumItem)',
							},
							insertText: 'StrafingNoPhysics',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ragdoll': {
							label: {
								name: 'Ragdoll',
								type: '(EnumItem)',
							},
							insertText: 'Ragdoll',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GettingUp': {
							label: {
								name: 'GettingUp',
								type: '(EnumItem)',
							},
							insertText: 'GettingUp',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Jumping': {
							label: {
								name: 'Jumping',
								type: '(EnumItem)',
							},
							insertText: 'Jumping',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Landed': {
							label: {
								name: 'Landed',
								type: '(EnumItem)',
							},
							insertText: 'Landed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Flying': {
							label: {
								name: 'Flying',
								type: '(EnumItem)',
							},
							insertText: 'Flying',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Freefall': {
							label: {
								name: 'Freefall',
								type: '(EnumItem)',
							},
							insertText: 'Freefall',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Seated': {
							label: {
								name: 'Seated',
								type: '(EnumItem)',
							},
							insertText: 'Seated',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlatformStanding': {
							label: {
								name: 'PlatformStanding',
								type: '(EnumItem)',
							},
							insertText: 'PlatformStanding',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Dead': {
							label: {
								name: 'Dead',
								type: '(EnumItem)',
							},
							insertText: 'Dead',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Swimming': {
							label: {
								name: 'Swimming',
								type: '(EnumItem)',
							},
							insertText: 'Swimming',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Physics': {
							label: {
								name: 'Physics',
								type: '(EnumItem)',
							},
							insertText: 'Physics',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'IKCollisionsMode': {
				label: {
					name: 'IKCollisionsMode',
					type: '(Enum)',
				},
				insertText: 'IKCollisionsMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IKCollisionsMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NoCollisions': {
							label: {
								name: 'NoCollisions',
								type: '(EnumItem)',
							},
							insertText: 'NoCollisions',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IKCollisionsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OtherMechanismsAnchored': {
							label: {
								name: 'OtherMechanismsAnchored',
								type: '(EnumItem)',
							},
							insertText: 'OtherMechanismsAnchored',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IKCollisionsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'IncludeContactedMechanisms': {
							label: {
								name: 'IncludeContactedMechanisms',
								type: '(EnumItem)',
							},
							insertText: 'IncludeContactedMechanisms',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IKCollisionsMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'IXPLoadingStatus': {
				label: {
					name: 'IXPLoadingStatus',
					type: '(Enum)',
				},
				insertText: 'IXPLoadingStatus',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pending': {
							label: {
								name: 'Pending',
								type: '(EnumItem)',
							},
							insertText: 'Pending',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Initialized': {
							label: {
								name: 'Initialized',
								type: '(EnumItem)',
							},
							insertText: 'Initialized',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShutOff': {
							label: {
								name: 'ShutOff',
								type: '(EnumItem)',
							},
							insertText: 'ShutOff',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ErrorTimedOut': {
							label: {
								name: 'ErrorTimedOut',
								type: '(EnumItem)',
							},
							insertText: 'ErrorTimedOut',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ErrorConnection': {
							label: {
								name: 'ErrorConnection',
								type: '(EnumItem)',
							},
							insertText: 'ErrorConnection',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ErrorJsonParse': {
							label: {
								name: 'ErrorJsonParse',
								type: '(EnumItem)',
							},
							insertText: 'ErrorJsonParse',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ErrorInvalidUser': {
							label: {
								name: 'ErrorInvalidUser',
								type: '(EnumItem)',
							},
							insertText: 'ErrorInvalidUser',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/IXPLoadingStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'InOut': {
				label: {
					name: 'InOut',
					type: '(Enum)',
				},
				insertText: 'InOut',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InOut)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Edge': {
							label: {
								name: 'Edge',
								type: '(EnumItem)',
							},
							insertText: 'Edge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InOut)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Inset': {
							label: {
								name: 'Inset',
								type: '(EnumItem)',
							},
							insertText: 'Inset',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InOut)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Center': {
							label: {
								name: 'Center',
								type: '(EnumItem)',
							},
							insertText: 'Center',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InOut)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'InfoType': {
				label: {
					name: 'InfoType',
					type: '(Enum)',
				},
				insertText: 'InfoType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InfoType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Asset': {
							label: {
								name: 'Asset',
								type: '(EnumItem)',
							},
							insertText: 'Asset',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InfoType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Product': {
							label: {
								name: 'Product',
								type: '(EnumItem)',
							},
							insertText: 'Product',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InfoType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GamePass': {
							label: {
								name: 'GamePass',
								type: '(EnumItem)',
							},
							insertText: 'GamePass',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InfoType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Subscription': {
							label: {
								name: 'Subscription',
								type: '(EnumItem)',
							},
							insertText: 'Subscription',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InfoType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bundle': {
							label: {
								name: 'Bundle',
								type: '(EnumItem)',
							},
							insertText: 'Bundle',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InfoType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'InitialDockState': {
				label: {
					name: 'InitialDockState',
					type: '(Enum)',
				},
				insertText: 'InitialDockState',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InitialDockState)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Top': {
							label: {
								name: 'Top',
								type: '(EnumItem)',
							},
							insertText: 'Top',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InitialDockState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bottom': {
							label: {
								name: 'Bottom',
								type: '(EnumItem)',
							},
							insertText: 'Bottom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InitialDockState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InitialDockState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InitialDockState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Float': {
							label: {
								name: 'Float',
								type: '(EnumItem)',
							},
							insertText: 'Float',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InitialDockState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'InputType': {
				label: {
					name: 'InputType',
					type: '(Enum)',
				},
				insertText: 'InputType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InputType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NoInput': {
							label: {
								name: 'NoInput',
								type: '(EnumItem)',
							},
							insertText: 'NoInput',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Constant': {
							label: {
								name: 'Constant',
								type: '(EnumItem)',
							},
							insertText: 'Constant',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sin': {
							label: {
								name: 'Sin',
								type: '(EnumItem)',
							},
							insertText: 'Sin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'InterpolationThrottlingMode': {
				label: {
					name: 'InterpolationThrottlingMode',
					type: '(Enum)',
				},
				insertText: 'InterpolationThrottlingMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InterpolationThrottlingMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InterpolationThrottlingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InterpolationThrottlingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Enabled': {
							label: {
								name: 'Enabled',
								type: '(EnumItem)',
							},
							insertText: 'Enabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/InterpolationThrottlingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'JointCreationMode': {
				label: {
					name: 'JointCreationMode',
					type: '(Enum)',
				},
				insertText: 'JointCreationMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/JointCreationMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'All': {
							label: {
								name: 'All',
								type: '(EnumItem)',
							},
							insertText: 'All',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/JointCreationMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Surface': {
							label: {
								name: 'Surface',
								type: '(EnumItem)',
							},
							insertText: 'Surface',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/JointCreationMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/JointCreationMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'KeyCode': {
				label: {
					name: 'KeyCode',
					type: '(Enum)',
				},
				insertText: 'KeyCode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Unknown': {
							label: {
								name: 'Unknown',
								type: '(EnumItem)',
							},
							insertText: 'Unknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Backspace': {
							label: {
								name: 'Backspace',
								type: '(EnumItem)',
							},
							insertText: 'Backspace',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Tab': {
							label: {
								name: 'Tab',
								type: '(EnumItem)',
							},
							insertText: 'Tab',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Clear': {
							label: {
								name: 'Clear',
								type: '(EnumItem)',
							},
							insertText: 'Clear',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Return': {
							label: {
								name: 'Return',
								type: '(EnumItem)',
							},
							insertText: 'Return',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pause': {
							label: {
								name: 'Pause',
								type: '(EnumItem)',
							},
							insertText: 'Pause',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Escape': {
							label: {
								name: 'Escape',
								type: '(EnumItem)',
							},
							insertText: 'Escape',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Space': {
							label: {
								name: 'Space',
								type: '(EnumItem)',
							},
							insertText: 'Space',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QuotedDouble': {
							label: {
								name: 'QuotedDouble',
								type: '(EnumItem)',
							},
							insertText: 'QuotedDouble',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hash': {
							label: {
								name: 'Hash',
								type: '(EnumItem)',
							},
							insertText: 'Hash',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Dollar': {
							label: {
								name: 'Dollar',
								type: '(EnumItem)',
							},
							insertText: 'Dollar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Percent': {
							label: {
								name: 'Percent',
								type: '(EnumItem)',
							},
							insertText: 'Percent',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ampersand': {
							label: {
								name: 'Ampersand',
								type: '(EnumItem)',
							},
							insertText: 'Ampersand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Quote': {
							label: {
								name: 'Quote',
								type: '(EnumItem)',
							},
							insertText: 'Quote',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftParenthesis': {
							label: {
								name: 'LeftParenthesis',
								type: '(EnumItem)',
							},
							insertText: 'LeftParenthesis',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightParenthesis': {
							label: {
								name: 'RightParenthesis',
								type: '(EnumItem)',
							},
							insertText: 'RightParenthesis',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Asterisk': {
							label: {
								name: 'Asterisk',
								type: '(EnumItem)',
							},
							insertText: 'Asterisk',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Plus': {
							label: {
								name: 'Plus',
								type: '(EnumItem)',
							},
							insertText: 'Plus',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Comma': {
							label: {
								name: 'Comma',
								type: '(EnumItem)',
							},
							insertText: 'Comma',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Minus': {
							label: {
								name: 'Minus',
								type: '(EnumItem)',
							},
							insertText: 'Minus',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Period': {
							label: {
								name: 'Period',
								type: '(EnumItem)',
							},
							insertText: 'Period',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Slash': {
							label: {
								name: 'Slash',
								type: '(EnumItem)',
							},
							insertText: 'Slash',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Zero': {
							label: {
								name: 'Zero',
								type: '(EnumItem)',
							},
							insertText: 'Zero',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'One': {
							label: {
								name: 'One',
								type: '(EnumItem)',
							},
							insertText: 'One',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Two': {
							label: {
								name: 'Two',
								type: '(EnumItem)',
							},
							insertText: 'Two',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Three': {
							label: {
								name: 'Three',
								type: '(EnumItem)',
							},
							insertText: 'Three',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Four': {
							label: {
								name: 'Four',
								type: '(EnumItem)',
							},
							insertText: 'Four',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Five': {
							label: {
								name: 'Five',
								type: '(EnumItem)',
							},
							insertText: 'Five',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Six': {
							label: {
								name: 'Six',
								type: '(EnumItem)',
							},
							insertText: 'Six',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Seven': {
							label: {
								name: 'Seven',
								type: '(EnumItem)',
							},
							insertText: 'Seven',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Eight': {
							label: {
								name: 'Eight',
								type: '(EnumItem)',
							},
							insertText: 'Eight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Nine': {
							label: {
								name: 'Nine',
								type: '(EnumItem)',
							},
							insertText: 'Nine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Colon': {
							label: {
								name: 'Colon',
								type: '(EnumItem)',
							},
							insertText: 'Colon',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Semicolon': {
							label: {
								name: 'Semicolon',
								type: '(EnumItem)',
							},
							insertText: 'Semicolon',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LessThan': {
							label: {
								name: 'LessThan',
								type: '(EnumItem)',
							},
							insertText: 'LessThan',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Equals': {
							label: {
								name: 'Equals',
								type: '(EnumItem)',
							},
							insertText: 'Equals',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GreaterThan': {
							label: {
								name: 'GreaterThan',
								type: '(EnumItem)',
							},
							insertText: 'GreaterThan',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Question': {
							label: {
								name: 'Question',
								type: '(EnumItem)',
							},
							insertText: 'Question',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'At': {
							label: {
								name: 'At',
								type: '(EnumItem)',
							},
							insertText: 'At',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftBracket': {
							label: {
								name: 'LeftBracket',
								type: '(EnumItem)',
							},
							insertText: 'LeftBracket',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BackSlash': {
							label: {
								name: 'BackSlash',
								type: '(EnumItem)',
							},
							insertText: 'BackSlash',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightBracket': {
							label: {
								name: 'RightBracket',
								type: '(EnumItem)',
							},
							insertText: 'RightBracket',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Caret': {
							label: {
								name: 'Caret',
								type: '(EnumItem)',
							},
							insertText: 'Caret',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Underscore': {
							label: {
								name: 'Underscore',
								type: '(EnumItem)',
							},
							insertText: 'Underscore',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Backquote': {
							label: {
								name: 'Backquote',
								type: '(EnumItem)',
							},
							insertText: 'Backquote',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'A': {
							label: {
								name: 'A',
								type: '(EnumItem)',
							},
							insertText: 'A',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'B': {
							label: {
								name: 'B',
								type: '(EnumItem)',
							},
							insertText: 'B',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'C': {
							label: {
								name: 'C',
								type: '(EnumItem)',
							},
							insertText: 'C',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'D': {
							label: {
								name: 'D',
								type: '(EnumItem)',
							},
							insertText: 'D',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'E': {
							label: {
								name: 'E',
								type: '(EnumItem)',
							},
							insertText: 'E',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F': {
							label: {
								name: 'F',
								type: '(EnumItem)',
							},
							insertText: 'F',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'G': {
							label: {
								name: 'G',
								type: '(EnumItem)',
							},
							insertText: 'G',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'H': {
							label: {
								name: 'H',
								type: '(EnumItem)',
							},
							insertText: 'H',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'I': {
							label: {
								name: 'I',
								type: '(EnumItem)',
							},
							insertText: 'I',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'J': {
							label: {
								name: 'J',
								type: '(EnumItem)',
							},
							insertText: 'J',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'K': {
							label: {
								name: 'K',
								type: '(EnumItem)',
							},
							insertText: 'K',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'L': {
							label: {
								name: 'L',
								type: '(EnumItem)',
							},
							insertText: 'L',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'M': {
							label: {
								name: 'M',
								type: '(EnumItem)',
							},
							insertText: 'M',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'N': {
							label: {
								name: 'N',
								type: '(EnumItem)',
							},
							insertText: 'N',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'O': {
							label: {
								name: 'O',
								type: '(EnumItem)',
							},
							insertText: 'O',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'P': {
							label: {
								name: 'P',
								type: '(EnumItem)',
							},
							insertText: 'P',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Q': {
							label: {
								name: 'Q',
								type: '(EnumItem)',
							},
							insertText: 'Q',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'R': {
							label: {
								name: 'R',
								type: '(EnumItem)',
							},
							insertText: 'R',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'S': {
							label: {
								name: 'S',
								type: '(EnumItem)',
							},
							insertText: 'S',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'T': {
							label: {
								name: 'T',
								type: '(EnumItem)',
							},
							insertText: 'T',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'U': {
							label: {
								name: 'U',
								type: '(EnumItem)',
							},
							insertText: 'U',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'V': {
							label: {
								name: 'V',
								type: '(EnumItem)',
							},
							insertText: 'V',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'W': {
							label: {
								name: 'W',
								type: '(EnumItem)',
							},
							insertText: 'W',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'X': {
							label: {
								name: 'X',
								type: '(EnumItem)',
							},
							insertText: 'X',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Y': {
							label: {
								name: 'Y',
								type: '(EnumItem)',
							},
							insertText: 'Y',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Z': {
							label: {
								name: 'Z',
								type: '(EnumItem)',
							},
							insertText: 'Z',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftCurly': {
							label: {
								name: 'LeftCurly',
								type: '(EnumItem)',
							},
							insertText: 'LeftCurly',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pipe': {
							label: {
								name: 'Pipe',
								type: '(EnumItem)',
							},
							insertText: 'Pipe',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightCurly': {
							label: {
								name: 'RightCurly',
								type: '(EnumItem)',
							},
							insertText: 'RightCurly',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Tilde': {
							label: {
								name: 'Tilde',
								type: '(EnumItem)',
							},
							insertText: 'Tilde',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Delete': {
							label: {
								name: 'Delete',
								type: '(EnumItem)',
							},
							insertText: 'Delete',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadZero': {
							label: {
								name: 'KeypadZero',
								type: '(EnumItem)',
							},
							insertText: 'KeypadZero',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadOne': {
							label: {
								name: 'KeypadOne',
								type: '(EnumItem)',
							},
							insertText: 'KeypadOne',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadTwo': {
							label: {
								name: 'KeypadTwo',
								type: '(EnumItem)',
							},
							insertText: 'KeypadTwo',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadThree': {
							label: {
								name: 'KeypadThree',
								type: '(EnumItem)',
							},
							insertText: 'KeypadThree',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadFour': {
							label: {
								name: 'KeypadFour',
								type: '(EnumItem)',
							},
							insertText: 'KeypadFour',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadFive': {
							label: {
								name: 'KeypadFive',
								type: '(EnumItem)',
							},
							insertText: 'KeypadFive',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadSix': {
							label: {
								name: 'KeypadSix',
								type: '(EnumItem)',
							},
							insertText: 'KeypadSix',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadSeven': {
							label: {
								name: 'KeypadSeven',
								type: '(EnumItem)',
							},
							insertText: 'KeypadSeven',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadEight': {
							label: {
								name: 'KeypadEight',
								type: '(EnumItem)',
							},
							insertText: 'KeypadEight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadNine': {
							label: {
								name: 'KeypadNine',
								type: '(EnumItem)',
							},
							insertText: 'KeypadNine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadPeriod': {
							label: {
								name: 'KeypadPeriod',
								type: '(EnumItem)',
							},
							insertText: 'KeypadPeriod',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadDivide': {
							label: {
								name: 'KeypadDivide',
								type: '(EnumItem)',
							},
							insertText: 'KeypadDivide',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadMultiply': {
							label: {
								name: 'KeypadMultiply',
								type: '(EnumItem)',
							},
							insertText: 'KeypadMultiply',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadMinus': {
							label: {
								name: 'KeypadMinus',
								type: '(EnumItem)',
							},
							insertText: 'KeypadMinus',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadPlus': {
							label: {
								name: 'KeypadPlus',
								type: '(EnumItem)',
							},
							insertText: 'KeypadPlus',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadEnter': {
							label: {
								name: 'KeypadEnter',
								type: '(EnumItem)',
							},
							insertText: 'KeypadEnter',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'KeypadEquals': {
							label: {
								name: 'KeypadEquals',
								type: '(EnumItem)',
							},
							insertText: 'KeypadEquals',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Up': {
							label: {
								name: 'Up',
								type: '(EnumItem)',
							},
							insertText: 'Up',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Down': {
							label: {
								name: 'Down',
								type: '(EnumItem)',
							},
							insertText: 'Down',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Insert': {
							label: {
								name: 'Insert',
								type: '(EnumItem)',
							},
							insertText: 'Insert',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Home': {
							label: {
								name: 'Home',
								type: '(EnumItem)',
							},
							insertText: 'Home',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'End': {
							label: {
								name: 'End',
								type: '(EnumItem)',
							},
							insertText: 'End',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PageUp': {
							label: {
								name: 'PageUp',
								type: '(EnumItem)',
							},
							insertText: 'PageUp',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PageDown': {
							label: {
								name: 'PageDown',
								type: '(EnumItem)',
							},
							insertText: 'PageDown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftShift': {
							label: {
								name: 'LeftShift',
								type: '(EnumItem)',
							},
							insertText: 'LeftShift',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightShift': {
							label: {
								name: 'RightShift',
								type: '(EnumItem)',
							},
							insertText: 'RightShift',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftMeta': {
							label: {
								name: 'LeftMeta',
								type: '(EnumItem)',
							},
							insertText: 'LeftMeta',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightMeta': {
							label: {
								name: 'RightMeta',
								type: '(EnumItem)',
							},
							insertText: 'RightMeta',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftAlt': {
							label: {
								name: 'LeftAlt',
								type: '(EnumItem)',
							},
							insertText: 'LeftAlt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightAlt': {
							label: {
								name: 'RightAlt',
								type: '(EnumItem)',
							},
							insertText: 'RightAlt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftControl': {
							label: {
								name: 'LeftControl',
								type: '(EnumItem)',
							},
							insertText: 'LeftControl',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightControl': {
							label: {
								name: 'RightControl',
								type: '(EnumItem)',
							},
							insertText: 'RightControl',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CapsLock': {
							label: {
								name: 'CapsLock',
								type: '(EnumItem)',
							},
							insertText: 'CapsLock',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NumLock': {
							label: {
								name: 'NumLock',
								type: '(EnumItem)',
							},
							insertText: 'NumLock',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScrollLock': {
							label: {
								name: 'ScrollLock',
								type: '(EnumItem)',
							},
							insertText: 'ScrollLock',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftSuper': {
							label: {
								name: 'LeftSuper',
								type: '(EnumItem)',
							},
							insertText: 'LeftSuper',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightSuper': {
							label: {
								name: 'RightSuper',
								type: '(EnumItem)',
							},
							insertText: 'RightSuper',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Mode': {
							label: {
								name: 'Mode',
								type: '(EnumItem)',
							},
							insertText: 'Mode',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Compose': {
							label: {
								name: 'Compose',
								type: '(EnumItem)',
							},
							insertText: 'Compose',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Help': {
							label: {
								name: 'Help',
								type: '(EnumItem)',
							},
							insertText: 'Help',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Print': {
							label: {
								name: 'Print',
								type: '(EnumItem)',
							},
							insertText: 'Print',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SysReq': {
							label: {
								name: 'SysReq',
								type: '(EnumItem)',
							},
							insertText: 'SysReq',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Break': {
							label: {
								name: 'Break',
								type: '(EnumItem)',
							},
							insertText: 'Break',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Menu': {
							label: {
								name: 'Menu',
								type: '(EnumItem)',
							},
							insertText: 'Menu',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Power': {
							label: {
								name: 'Power',
								type: '(EnumItem)',
							},
							insertText: 'Power',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Euro': {
							label: {
								name: 'Euro',
								type: '(EnumItem)',
							},
							insertText: 'Euro',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Undo': {
							label: {
								name: 'Undo',
								type: '(EnumItem)',
							},
							insertText: 'Undo',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F1': {
							label: {
								name: 'F1',
								type: '(EnumItem)',
							},
							insertText: 'F1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F2': {
							label: {
								name: 'F2',
								type: '(EnumItem)',
							},
							insertText: 'F2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F3': {
							label: {
								name: 'F3',
								type: '(EnumItem)',
							},
							insertText: 'F3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F4': {
							label: {
								name: 'F4',
								type: '(EnumItem)',
							},
							insertText: 'F4',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F5': {
							label: {
								name: 'F5',
								type: '(EnumItem)',
							},
							insertText: 'F5',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F6': {
							label: {
								name: 'F6',
								type: '(EnumItem)',
							},
							insertText: 'F6',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F7': {
							label: {
								name: 'F7',
								type: '(EnumItem)',
							},
							insertText: 'F7',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F8': {
							label: {
								name: 'F8',
								type: '(EnumItem)',
							},
							insertText: 'F8',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F9': {
							label: {
								name: 'F9',
								type: '(EnumItem)',
							},
							insertText: 'F9',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F10': {
							label: {
								name: 'F10',
								type: '(EnumItem)',
							},
							insertText: 'F10',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F11': {
							label: {
								name: 'F11',
								type: '(EnumItem)',
							},
							insertText: 'F11',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F12': {
							label: {
								name: 'F12',
								type: '(EnumItem)',
							},
							insertText: 'F12',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F13': {
							label: {
								name: 'F13',
								type: '(EnumItem)',
							},
							insertText: 'F13',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F14': {
							label: {
								name: 'F14',
								type: '(EnumItem)',
							},
							insertText: 'F14',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'F15': {
							label: {
								name: 'F15',
								type: '(EnumItem)',
							},
							insertText: 'F15',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World0': {
							label: {
								name: 'World0',
								type: '(EnumItem)',
							},
							insertText: 'World0',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World1': {
							label: {
								name: 'World1',
								type: '(EnumItem)',
							},
							insertText: 'World1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World2': {
							label: {
								name: 'World2',
								type: '(EnumItem)',
							},
							insertText: 'World2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World3': {
							label: {
								name: 'World3',
								type: '(EnumItem)',
							},
							insertText: 'World3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World4': {
							label: {
								name: 'World4',
								type: '(EnumItem)',
							},
							insertText: 'World4',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World5': {
							label: {
								name: 'World5',
								type: '(EnumItem)',
							},
							insertText: 'World5',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World6': {
							label: {
								name: 'World6',
								type: '(EnumItem)',
							},
							insertText: 'World6',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World7': {
							label: {
								name: 'World7',
								type: '(EnumItem)',
							},
							insertText: 'World7',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World8': {
							label: {
								name: 'World8',
								type: '(EnumItem)',
							},
							insertText: 'World8',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World9': {
							label: {
								name: 'World9',
								type: '(EnumItem)',
							},
							insertText: 'World9',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World10': {
							label: {
								name: 'World10',
								type: '(EnumItem)',
							},
							insertText: 'World10',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World11': {
							label: {
								name: 'World11',
								type: '(EnumItem)',
							},
							insertText: 'World11',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World12': {
							label: {
								name: 'World12',
								type: '(EnumItem)',
							},
							insertText: 'World12',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World13': {
							label: {
								name: 'World13',
								type: '(EnumItem)',
							},
							insertText: 'World13',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World14': {
							label: {
								name: 'World14',
								type: '(EnumItem)',
							},
							insertText: 'World14',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World15': {
							label: {
								name: 'World15',
								type: '(EnumItem)',
							},
							insertText: 'World15',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World16': {
							label: {
								name: 'World16',
								type: '(EnumItem)',
							},
							insertText: 'World16',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World17': {
							label: {
								name: 'World17',
								type: '(EnumItem)',
							},
							insertText: 'World17',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World18': {
							label: {
								name: 'World18',
								type: '(EnumItem)',
							},
							insertText: 'World18',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World19': {
							label: {
								name: 'World19',
								type: '(EnumItem)',
							},
							insertText: 'World19',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World20': {
							label: {
								name: 'World20',
								type: '(EnumItem)',
							},
							insertText: 'World20',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World21': {
							label: {
								name: 'World21',
								type: '(EnumItem)',
							},
							insertText: 'World21',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World22': {
							label: {
								name: 'World22',
								type: '(EnumItem)',
							},
							insertText: 'World22',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World23': {
							label: {
								name: 'World23',
								type: '(EnumItem)',
							},
							insertText: 'World23',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World24': {
							label: {
								name: 'World24',
								type: '(EnumItem)',
							},
							insertText: 'World24',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World25': {
							label: {
								name: 'World25',
								type: '(EnumItem)',
							},
							insertText: 'World25',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World26': {
							label: {
								name: 'World26',
								type: '(EnumItem)',
							},
							insertText: 'World26',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World27': {
							label: {
								name: 'World27',
								type: '(EnumItem)',
							},
							insertText: 'World27',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World28': {
							label: {
								name: 'World28',
								type: '(EnumItem)',
							},
							insertText: 'World28',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World29': {
							label: {
								name: 'World29',
								type: '(EnumItem)',
							},
							insertText: 'World29',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World30': {
							label: {
								name: 'World30',
								type: '(EnumItem)',
							},
							insertText: 'World30',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World31': {
							label: {
								name: 'World31',
								type: '(EnumItem)',
							},
							insertText: 'World31',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World32': {
							label: {
								name: 'World32',
								type: '(EnumItem)',
							},
							insertText: 'World32',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World33': {
							label: {
								name: 'World33',
								type: '(EnumItem)',
							},
							insertText: 'World33',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World34': {
							label: {
								name: 'World34',
								type: '(EnumItem)',
							},
							insertText: 'World34',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World35': {
							label: {
								name: 'World35',
								type: '(EnumItem)',
							},
							insertText: 'World35',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World36': {
							label: {
								name: 'World36',
								type: '(EnumItem)',
							},
							insertText: 'World36',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World37': {
							label: {
								name: 'World37',
								type: '(EnumItem)',
							},
							insertText: 'World37',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World38': {
							label: {
								name: 'World38',
								type: '(EnumItem)',
							},
							insertText: 'World38',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World39': {
							label: {
								name: 'World39',
								type: '(EnumItem)',
							},
							insertText: 'World39',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World40': {
							label: {
								name: 'World40',
								type: '(EnumItem)',
							},
							insertText: 'World40',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World41': {
							label: {
								name: 'World41',
								type: '(EnumItem)',
							},
							insertText: 'World41',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World42': {
							label: {
								name: 'World42',
								type: '(EnumItem)',
							},
							insertText: 'World42',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World43': {
							label: {
								name: 'World43',
								type: '(EnumItem)',
							},
							insertText: 'World43',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World44': {
							label: {
								name: 'World44',
								type: '(EnumItem)',
							},
							insertText: 'World44',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World45': {
							label: {
								name: 'World45',
								type: '(EnumItem)',
							},
							insertText: 'World45',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World46': {
							label: {
								name: 'World46',
								type: '(EnumItem)',
							},
							insertText: 'World46',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World47': {
							label: {
								name: 'World47',
								type: '(EnumItem)',
							},
							insertText: 'World47',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World48': {
							label: {
								name: 'World48',
								type: '(EnumItem)',
							},
							insertText: 'World48',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World49': {
							label: {
								name: 'World49',
								type: '(EnumItem)',
							},
							insertText: 'World49',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World50': {
							label: {
								name: 'World50',
								type: '(EnumItem)',
							},
							insertText: 'World50',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World51': {
							label: {
								name: 'World51',
								type: '(EnumItem)',
							},
							insertText: 'World51',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World52': {
							label: {
								name: 'World52',
								type: '(EnumItem)',
							},
							insertText: 'World52',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World53': {
							label: {
								name: 'World53',
								type: '(EnumItem)',
							},
							insertText: 'World53',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World54': {
							label: {
								name: 'World54',
								type: '(EnumItem)',
							},
							insertText: 'World54',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World55': {
							label: {
								name: 'World55',
								type: '(EnumItem)',
							},
							insertText: 'World55',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World56': {
							label: {
								name: 'World56',
								type: '(EnumItem)',
							},
							insertText: 'World56',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World57': {
							label: {
								name: 'World57',
								type: '(EnumItem)',
							},
							insertText: 'World57',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World58': {
							label: {
								name: 'World58',
								type: '(EnumItem)',
							},
							insertText: 'World58',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World59': {
							label: {
								name: 'World59',
								type: '(EnumItem)',
							},
							insertText: 'World59',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World60': {
							label: {
								name: 'World60',
								type: '(EnumItem)',
							},
							insertText: 'World60',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World61': {
							label: {
								name: 'World61',
								type: '(EnumItem)',
							},
							insertText: 'World61',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World62': {
							label: {
								name: 'World62',
								type: '(EnumItem)',
							},
							insertText: 'World62',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World63': {
							label: {
								name: 'World63',
								type: '(EnumItem)',
							},
							insertText: 'World63',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World64': {
							label: {
								name: 'World64',
								type: '(EnumItem)',
							},
							insertText: 'World64',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World65': {
							label: {
								name: 'World65',
								type: '(EnumItem)',
							},
							insertText: 'World65',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World66': {
							label: {
								name: 'World66',
								type: '(EnumItem)',
							},
							insertText: 'World66',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World67': {
							label: {
								name: 'World67',
								type: '(EnumItem)',
							},
							insertText: 'World67',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World68': {
							label: {
								name: 'World68',
								type: '(EnumItem)',
							},
							insertText: 'World68',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World69': {
							label: {
								name: 'World69',
								type: '(EnumItem)',
							},
							insertText: 'World69',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World70': {
							label: {
								name: 'World70',
								type: '(EnumItem)',
							},
							insertText: 'World70',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World71': {
							label: {
								name: 'World71',
								type: '(EnumItem)',
							},
							insertText: 'World71',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World72': {
							label: {
								name: 'World72',
								type: '(EnumItem)',
							},
							insertText: 'World72',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World73': {
							label: {
								name: 'World73',
								type: '(EnumItem)',
							},
							insertText: 'World73',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World74': {
							label: {
								name: 'World74',
								type: '(EnumItem)',
							},
							insertText: 'World74',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World75': {
							label: {
								name: 'World75',
								type: '(EnumItem)',
							},
							insertText: 'World75',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World76': {
							label: {
								name: 'World76',
								type: '(EnumItem)',
							},
							insertText: 'World76',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World77': {
							label: {
								name: 'World77',
								type: '(EnumItem)',
							},
							insertText: 'World77',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World78': {
							label: {
								name: 'World78',
								type: '(EnumItem)',
							},
							insertText: 'World78',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World79': {
							label: {
								name: 'World79',
								type: '(EnumItem)',
							},
							insertText: 'World79',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World80': {
							label: {
								name: 'World80',
								type: '(EnumItem)',
							},
							insertText: 'World80',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World81': {
							label: {
								name: 'World81',
								type: '(EnumItem)',
							},
							insertText: 'World81',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World82': {
							label: {
								name: 'World82',
								type: '(EnumItem)',
							},
							insertText: 'World82',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World83': {
							label: {
								name: 'World83',
								type: '(EnumItem)',
							},
							insertText: 'World83',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World84': {
							label: {
								name: 'World84',
								type: '(EnumItem)',
							},
							insertText: 'World84',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World85': {
							label: {
								name: 'World85',
								type: '(EnumItem)',
							},
							insertText: 'World85',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World86': {
							label: {
								name: 'World86',
								type: '(EnumItem)',
							},
							insertText: 'World86',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World87': {
							label: {
								name: 'World87',
								type: '(EnumItem)',
							},
							insertText: 'World87',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World88': {
							label: {
								name: 'World88',
								type: '(EnumItem)',
							},
							insertText: 'World88',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World89': {
							label: {
								name: 'World89',
								type: '(EnumItem)',
							},
							insertText: 'World89',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World90': {
							label: {
								name: 'World90',
								type: '(EnumItem)',
							},
							insertText: 'World90',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World91': {
							label: {
								name: 'World91',
								type: '(EnumItem)',
							},
							insertText: 'World91',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World92': {
							label: {
								name: 'World92',
								type: '(EnumItem)',
							},
							insertText: 'World92',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World93': {
							label: {
								name: 'World93',
								type: '(EnumItem)',
							},
							insertText: 'World93',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World94': {
							label: {
								name: 'World94',
								type: '(EnumItem)',
							},
							insertText: 'World94',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'World95': {
							label: {
								name: 'World95',
								type: '(EnumItem)',
							},
							insertText: 'World95',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonX': {
							label: {
								name: 'ButtonX',
								type: '(EnumItem)',
							},
							insertText: 'ButtonX',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonY': {
							label: {
								name: 'ButtonY',
								type: '(EnumItem)',
							},
							insertText: 'ButtonY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonA': {
							label: {
								name: 'ButtonA',
								type: '(EnumItem)',
							},
							insertText: 'ButtonA',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonB': {
							label: {
								name: 'ButtonB',
								type: '(EnumItem)',
							},
							insertText: 'ButtonB',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonR1': {
							label: {
								name: 'ButtonR1',
								type: '(EnumItem)',
							},
							insertText: 'ButtonR1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonL1': {
							label: {
								name: 'ButtonL1',
								type: '(EnumItem)',
							},
							insertText: 'ButtonL1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonR2': {
							label: {
								name: 'ButtonR2',
								type: '(EnumItem)',
							},
							insertText: 'ButtonR2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonL2': {
							label: {
								name: 'ButtonL2',
								type: '(EnumItem)',
							},
							insertText: 'ButtonL2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonR3': {
							label: {
								name: 'ButtonR3',
								type: '(EnumItem)',
							},
							insertText: 'ButtonR3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonL3': {
							label: {
								name: 'ButtonL3',
								type: '(EnumItem)',
							},
							insertText: 'ButtonL3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonStart': {
							label: {
								name: 'ButtonStart',
								type: '(EnumItem)',
							},
							insertText: 'ButtonStart',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonSelect': {
							label: {
								name: 'ButtonSelect',
								type: '(EnumItem)',
							},
							insertText: 'ButtonSelect',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DPadLeft': {
							label: {
								name: 'DPadLeft',
								type: '(EnumItem)',
							},
							insertText: 'DPadLeft',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DPadRight': {
							label: {
								name: 'DPadRight',
								type: '(EnumItem)',
							},
							insertText: 'DPadRight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DPadUp': {
							label: {
								name: 'DPadUp',
								type: '(EnumItem)',
							},
							insertText: 'DPadUp',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DPadDown': {
							label: {
								name: 'DPadDown',
								type: '(EnumItem)',
							},
							insertText: 'DPadDown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Thumbstick1': {
							label: {
								name: 'Thumbstick1',
								type: '(EnumItem)',
							},
							insertText: 'Thumbstick1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Thumbstick2': {
							label: {
								name: 'Thumbstick2',
								type: '(EnumItem)',
							},
							insertText: 'Thumbstick2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeyCode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'KeywordFilterType': {
				label: {
					name: 'KeywordFilterType',
					type: '(Enum)',
				},
				insertText: 'KeywordFilterType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeywordFilterType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Include': {
							label: {
								name: 'Include',
								type: '(EnumItem)',
							},
							insertText: 'Include',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeywordFilterType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Exclude': {
							label: {
								name: 'Exclude',
								type: '(EnumItem)',
							},
							insertText: 'Exclude',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/KeywordFilterType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Language': {
				label: {
					name: 'Language',
					type: '(Enum)',
				},
				insertText: 'Language',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Language)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Language)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'LeftRight': {
				label: {
					name: 'LeftRight',
					type: '(Enum)',
				},
				insertText: 'LeftRight',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LeftRight)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LeftRight)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Center': {
							label: {
								name: 'Center',
								type: '(EnumItem)',
							},
							insertText: 'Center',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LeftRight)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LeftRight)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'LevelOfDetailSetting': {
				label: {
					name: 'LevelOfDetailSetting',
					type: '(Enum)',
				},
				insertText: 'LevelOfDetailSetting',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LevelOfDetailSetting)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'High': {
							label: {
								name: 'High',
								type: '(EnumItem)',
							},
							insertText: 'High',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LevelOfDetailSetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Medium': {
							label: {
								name: 'Medium',
								type: '(EnumItem)',
							},
							insertText: 'Medium',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LevelOfDetailSetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Low': {
							label: {
								name: 'Low',
								type: '(EnumItem)',
							},
							insertText: 'Low',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LevelOfDetailSetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Limb': {
				label: {
					name: 'Limb',
					type: '(Enum)',
				},
				insertText: 'Limb',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Limb)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Head': {
							label: {
								name: 'Head',
								type: '(EnumItem)',
							},
							insertText: 'Head',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Limb)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Torso': {
							label: {
								name: 'Torso',
								type: '(EnumItem)',
							},
							insertText: 'Torso',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Limb)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftArm': {
							label: {
								name: 'LeftArm',
								type: '(EnumItem)',
							},
							insertText: 'LeftArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Limb)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightArm': {
							label: {
								name: 'RightArm',
								type: '(EnumItem)',
							},
							insertText: 'RightArm',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Limb)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftLeg': {
							label: {
								name: 'LeftLeg',
								type: '(EnumItem)',
							},
							insertText: 'LeftLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Limb)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightLeg': {
							label: {
								name: 'RightLeg',
								type: '(EnumItem)',
							},
							insertText: 'RightLeg',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Limb)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Unknown': {
							label: {
								name: 'Unknown',
								type: '(EnumItem)',
							},
							insertText: 'Unknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Limb)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'LineJoinMode': {
				label: {
					name: 'LineJoinMode',
					type: '(Enum)',
				},
				insertText: 'LineJoinMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LineJoinMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Round': {
							label: {
								name: 'Round',
								type: '(EnumItem)',
							},
							insertText: 'Round',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LineJoinMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bevel': {
							label: {
								name: 'Bevel',
								type: '(EnumItem)',
							},
							insertText: 'Bevel',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LineJoinMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Miter': {
							label: {
								name: 'Miter',
								type: '(EnumItem)',
							},
							insertText: 'Miter',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LineJoinMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ListDisplayMode': {
				label: {
					name: 'ListDisplayMode',
					type: '(Enum)',
				},
				insertText: 'ListDisplayMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ListDisplayMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Horizontal': {
							label: {
								name: 'Horizontal',
								type: '(EnumItem)',
							},
							insertText: 'Horizontal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ListDisplayMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Vertical': {
							label: {
								name: 'Vertical',
								type: '(EnumItem)',
							},
							insertText: 'Vertical',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ListDisplayMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ListenerType': {
				label: {
					name: 'ListenerType',
					type: '(Enum)',
				},
				insertText: 'ListenerType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ListenerType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Camera': {
							label: {
								name: 'Camera',
								type: '(EnumItem)',
							},
							insertText: 'Camera',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ListenerType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CFrame': {
							label: {
								name: 'CFrame',
								type: '(EnumItem)',
							},
							insertText: 'CFrame',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ListenerType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ObjectPosition': {
							label: {
								name: 'ObjectPosition',
								type: '(EnumItem)',
							},
							insertText: 'ObjectPosition',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ListenerType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ObjectCFrame': {
							label: {
								name: 'ObjectCFrame',
								type: '(EnumItem)',
							},
							insertText: 'ObjectCFrame',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ListenerType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'LoadCharacterLayeredClothing': {
				label: {
					name: 'LoadCharacterLayeredClothing',
					type: '(Enum)',
				},
				insertText: 'LoadCharacterLayeredClothing',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LoadCharacterLayeredClothing)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LoadCharacterLayeredClothing)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LoadCharacterLayeredClothing)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Enabled': {
							label: {
								name: 'Enabled',
								type: '(EnumItem)',
							},
							insertText: 'Enabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/LoadCharacterLayeredClothing)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Material': {
				label: {
					name: 'Material',
					type: '(Enum)',
				},
				insertText: 'Material',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Plastic': {
							label: {
								name: 'Plastic',
								type: '(EnumItem)',
							},
							insertText: 'Plastic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Wood': {
							label: {
								name: 'Wood',
								type: '(EnumItem)',
							},
							insertText: 'Wood',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Slate': {
							label: {
								name: 'Slate',
								type: '(EnumItem)',
							},
							insertText: 'Slate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Concrete': {
							label: {
								name: 'Concrete',
								type: '(EnumItem)',
							},
							insertText: 'Concrete',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CorrodedMetal': {
							label: {
								name: 'CorrodedMetal',
								type: '(EnumItem)',
							},
							insertText: 'CorrodedMetal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiamondPlate': {
							label: {
								name: 'DiamondPlate',
								type: '(EnumItem)',
							},
							insertText: 'DiamondPlate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Foil': {
							label: {
								name: 'Foil',
								type: '(EnumItem)',
							},
							insertText: 'Foil',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Grass': {
							label: {
								name: 'Grass',
								type: '(EnumItem)',
							},
							insertText: 'Grass',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ice': {
							label: {
								name: 'Ice',
								type: '(EnumItem)',
							},
							insertText: 'Ice',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Marble': {
							label: {
								name: 'Marble',
								type: '(EnumItem)',
							},
							insertText: 'Marble',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Granite': {
							label: {
								name: 'Granite',
								type: '(EnumItem)',
							},
							insertText: 'Granite',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Brick': {
							label: {
								name: 'Brick',
								type: '(EnumItem)',
							},
							insertText: 'Brick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pebble': {
							label: {
								name: 'Pebble',
								type: '(EnumItem)',
							},
							insertText: 'Pebble',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sand': {
							label: {
								name: 'Sand',
								type: '(EnumItem)',
							},
							insertText: 'Sand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fabric': {
							label: {
								name: 'Fabric',
								type: '(EnumItem)',
							},
							insertText: 'Fabric',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SmoothPlastic': {
							label: {
								name: 'SmoothPlastic',
								type: '(EnumItem)',
							},
							insertText: 'SmoothPlastic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Metal': {
							label: {
								name: 'Metal',
								type: '(EnumItem)',
							},
							insertText: 'Metal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WoodPlanks': {
							label: {
								name: 'WoodPlanks',
								type: '(EnumItem)',
							},
							insertText: 'WoodPlanks',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cobblestone': {
							label: {
								name: 'Cobblestone',
								type: '(EnumItem)',
							},
							insertText: 'Cobblestone',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Air': {
							label: {
								name: 'Air',
								type: '(EnumItem)',
							},
							insertText: 'Air',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Water': {
							label: {
								name: 'Water',
								type: '(EnumItem)',
							},
							insertText: 'Water',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Rock': {
							label: {
								name: 'Rock',
								type: '(EnumItem)',
							},
							insertText: 'Rock',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Glacier': {
							label: {
								name: 'Glacier',
								type: '(EnumItem)',
							},
							insertText: 'Glacier',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Snow': {
							label: {
								name: 'Snow',
								type: '(EnumItem)',
							},
							insertText: 'Snow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sandstone': {
							label: {
								name: 'Sandstone',
								type: '(EnumItem)',
							},
							insertText: 'Sandstone',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Mud': {
							label: {
								name: 'Mud',
								type: '(EnumItem)',
							},
							insertText: 'Mud',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Basalt': {
							label: {
								name: 'Basalt',
								type: '(EnumItem)',
							},
							insertText: 'Basalt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ground': {
							label: {
								name: 'Ground',
								type: '(EnumItem)',
							},
							insertText: 'Ground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CrackedLava': {
							label: {
								name: 'CrackedLava',
								type: '(EnumItem)',
							},
							insertText: 'CrackedLava',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Neon': {
							label: {
								name: 'Neon',
								type: '(EnumItem)',
							},
							insertText: 'Neon',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Glass': {
							label: {
								name: 'Glass',
								type: '(EnumItem)',
							},
							insertText: 'Glass',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Asphalt': {
							label: {
								name: 'Asphalt',
								type: '(EnumItem)',
							},
							insertText: 'Asphalt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeafyGrass': {
							label: {
								name: 'LeafyGrass',
								type: '(EnumItem)',
							},
							insertText: 'LeafyGrass',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Salt': {
							label: {
								name: 'Salt',
								type: '(EnumItem)',
							},
							insertText: 'Salt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Limestone': {
							label: {
								name: 'Limestone',
								type: '(EnumItem)',
							},
							insertText: 'Limestone',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pavement': {
							label: {
								name: 'Pavement',
								type: '(EnumItem)',
							},
							insertText: 'Pavement',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ForceField': {
							label: {
								name: 'ForceField',
								type: '(EnumItem)',
							},
							insertText: 'ForceField',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Material)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'MembershipType': {
				label: {
					name: 'MembershipType',
					type: '(Enum)',
				},
				insertText: 'MembershipType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MembershipType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MembershipType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BuildersClub': {
							label: {
								name: 'BuildersClub',
								type: '(EnumItem)',
							},
							insertText: 'BuildersClub',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MembershipType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TurboBuildersClub': {
							label: {
								name: 'TurboBuildersClub',
								type: '(EnumItem)',
							},
							insertText: 'TurboBuildersClub',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MembershipType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OutrageousBuildersClub': {
							label: {
								name: 'OutrageousBuildersClub',
								type: '(EnumItem)',
							},
							insertText: 'OutrageousBuildersClub',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MembershipType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Premium': {
							label: {
								name: 'Premium',
								type: '(EnumItem)',
							},
							insertText: 'Premium',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MembershipType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'MeshPartDetailLevel': {
				label: {
					name: 'MeshPartDetailLevel',
					type: '(Enum)',
				},
				insertText: 'MeshPartDetailLevel',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartDetailLevel)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'DistanceBased': {
							label: {
								name: 'DistanceBased',
								type: '(EnumItem)',
							},
							insertText: 'DistanceBased',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartDetailLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level01': {
							label: {
								name: 'Level01',
								type: '(EnumItem)',
							},
							insertText: 'Level01',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartDetailLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level02': {
							label: {
								name: 'Level02',
								type: '(EnumItem)',
							},
							insertText: 'Level02',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartDetailLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level03': {
							label: {
								name: 'Level03',
								type: '(EnumItem)',
							},
							insertText: 'Level03',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartDetailLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level04': {
							label: {
								name: 'Level04',
								type: '(EnumItem)',
							},
							insertText: 'Level04',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartDetailLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'MeshPartHeadsAndAccessories': {
				label: {
					name: 'MeshPartHeadsAndAccessories',
					type: '(Enum)',
				},
				insertText: 'MeshPartHeadsAndAccessories',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartHeadsAndAccessories)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartHeadsAndAccessories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartHeadsAndAccessories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Enabled': {
							label: {
								name: 'Enabled',
								type: '(EnumItem)',
							},
							insertText: 'Enabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshPartHeadsAndAccessories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'MeshType': {
				label: {
					name: 'MeshType',
					type: '(Enum)',
				},
				insertText: 'MeshType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Head': {
							label: {
								name: 'Head',
								type: '(EnumItem)',
							},
							insertText: 'Head',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Torso': {
							label: {
								name: 'Torso',
								type: '(EnumItem)',
							},
							insertText: 'Torso',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Wedge': {
							label: {
								name: 'Wedge',
								type: '(EnumItem)',
							},
							insertText: 'Wedge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Prism': {
							label: {
								name: 'Prism',
								type: '(EnumItem)',
							},
							insertText: 'Prism',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pyramid': {
							label: {
								name: 'Pyramid',
								type: '(EnumItem)',
							},
							insertText: 'Pyramid',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ParallelRamp': {
							label: {
								name: 'ParallelRamp',
								type: '(EnumItem)',
							},
							insertText: 'ParallelRamp',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightAngleRamp': {
							label: {
								name: 'RightAngleRamp',
								type: '(EnumItem)',
							},
							insertText: 'RightAngleRamp',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CornerWedge': {
							label: {
								name: 'CornerWedge',
								type: '(EnumItem)',
							},
							insertText: 'CornerWedge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Brick': {
							label: {
								name: 'Brick',
								type: '(EnumItem)',
							},
							insertText: 'Brick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sphere': {
							label: {
								name: 'Sphere',
								type: '(EnumItem)',
							},
							insertText: 'Sphere',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cylinder': {
							label: {
								name: 'Cylinder',
								type: '(EnumItem)',
							},
							insertText: 'Cylinder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FileMesh': {
							label: {
								name: 'FileMesh',
								type: '(EnumItem)',
							},
							insertText: 'FileMesh',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MeshType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'MessageType': {
				label: {
					name: 'MessageType',
					type: '(Enum)',
				},
				insertText: 'MessageType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MessageType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'MessageOutput': {
							label: {
								name: 'MessageOutput',
								type: '(EnumItem)',
							},
							insertText: 'MessageOutput',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MessageType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MessageInfo': {
							label: {
								name: 'MessageInfo',
								type: '(EnumItem)',
							},
							insertText: 'MessageInfo',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MessageType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MessageWarning': {
							label: {
								name: 'MessageWarning',
								type: '(EnumItem)',
							},
							insertText: 'MessageWarning',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MessageType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MessageError': {
							label: {
								name: 'MessageError',
								type: '(EnumItem)',
							},
							insertText: 'MessageError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MessageType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ModelLevelOfDetail': {
				label: {
					name: 'ModelLevelOfDetail',
					type: '(Enum)',
				},
				insertText: 'ModelLevelOfDetail',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModelLevelOfDetail)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Automatic': {
							label: {
								name: 'Automatic',
								type: '(EnumItem)',
							},
							insertText: 'Automatic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModelLevelOfDetail)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'StreamingMesh': {
							label: {
								name: 'StreamingMesh',
								type: '(EnumItem)',
							},
							insertText: 'StreamingMesh',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModelLevelOfDetail)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModelLevelOfDetail)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ModifierKey': {
				label: {
					name: 'ModifierKey',
					type: '(Enum)',
				},
				insertText: 'ModifierKey',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModifierKey)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Alt': {
							label: {
								name: 'Alt',
								type: '(EnumItem)',
							},
							insertText: 'Alt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModifierKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ctrl': {
							label: {
								name: 'Ctrl',
								type: '(EnumItem)',
							},
							insertText: 'Ctrl',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModifierKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Meta': {
							label: {
								name: 'Meta',
								type: '(EnumItem)',
							},
							insertText: 'Meta',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModifierKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Shift': {
							label: {
								name: 'Shift',
								type: '(EnumItem)',
							},
							insertText: 'Shift',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ModifierKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'MouseBehavior': {
				label: {
					name: 'MouseBehavior',
					type: '(Enum)',
				},
				insertText: 'MouseBehavior',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MouseBehavior)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MouseBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LockCenter': {
							label: {
								name: 'LockCenter',
								type: '(EnumItem)',
							},
							insertText: 'LockCenter',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MouseBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LockCurrentPosition': {
							label: {
								name: 'LockCurrentPosition',
								type: '(EnumItem)',
							},
							insertText: 'LockCurrentPosition',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MouseBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'MoveState': {
				label: {
					name: 'MoveState',
					type: '(Enum)',
				},
				insertText: 'MoveState',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MoveState)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Stopped': {
							label: {
								name: 'Stopped',
								type: '(EnumItem)',
							},
							insertText: 'Stopped',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MoveState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Coasting': {
							label: {
								name: 'Coasting',
								type: '(EnumItem)',
							},
							insertText: 'Coasting',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MoveState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pushing': {
							label: {
								name: 'Pushing',
								type: '(EnumItem)',
							},
							insertText: 'Pushing',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MoveState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Stopping': {
							label: {
								name: 'Stopping',
								type: '(EnumItem)',
							},
							insertText: 'Stopping',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MoveState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AirFree': {
							label: {
								name: 'AirFree',
								type: '(EnumItem)',
							},
							insertText: 'AirFree',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/MoveState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'NameOcclusion': {
				label: {
					name: 'NameOcclusion',
					type: '(Enum)',
				},
				insertText: 'NameOcclusion',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NameOcclusion)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'OccludeAll': {
							label: {
								name: 'OccludeAll',
								type: '(EnumItem)',
							},
							insertText: 'OccludeAll',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NameOcclusion)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EnemyOcclusion': {
							label: {
								name: 'EnemyOcclusion',
								type: '(EnumItem)',
							},
							insertText: 'EnemyOcclusion',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NameOcclusion)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NoOcclusion': {
							label: {
								name: 'NoOcclusion',
								type: '(EnumItem)',
							},
							insertText: 'NoOcclusion',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NameOcclusion)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'NetworkOwnership': {
				label: {
					name: 'NetworkOwnership',
					type: '(Enum)',
				},
				insertText: 'NetworkOwnership',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NetworkOwnership)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Automatic': {
							label: {
								name: 'Automatic',
								type: '(EnumItem)',
							},
							insertText: 'Automatic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NetworkOwnership)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Manual': {
							label: {
								name: 'Manual',
								type: '(EnumItem)',
							},
							insertText: 'Manual',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NetworkOwnership)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OnContact': {
							label: {
								name: 'OnContact',
								type: '(EnumItem)',
							},
							insertText: 'OnContact',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NetworkOwnership)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'NewAnimationRuntimeSetting': {
				label: {
					name: 'NewAnimationRuntimeSetting',
					type: '(Enum)',
				},
				insertText: 'NewAnimationRuntimeSetting',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NewAnimationRuntimeSetting)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NewAnimationRuntimeSetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NewAnimationRuntimeSetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Enabled': {
							label: {
								name: 'Enabled',
								type: '(EnumItem)',
							},
							insertText: 'Enabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NewAnimationRuntimeSetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'NormalId': {
				label: {
					name: 'NormalId',
					type: '(Enum)',
				},
				insertText: 'NormalId',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NormalId)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Top': {
							label: {
								name: 'Top',
								type: '(EnumItem)',
							},
							insertText: 'Top',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NormalId)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bottom': {
							label: {
								name: 'Bottom',
								type: '(EnumItem)',
							},
							insertText: 'Bottom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NormalId)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Back': {
							label: {
								name: 'Back',
								type: '(EnumItem)',
							},
							insertText: 'Back',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NormalId)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Front': {
							label: {
								name: 'Front',
								type: '(EnumItem)',
							},
							insertText: 'Front',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NormalId)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NormalId)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/NormalId)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'OutputLayoutMode': {
				label: {
					name: 'OutputLayoutMode',
					type: '(Enum)',
				},
				insertText: 'OutputLayoutMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/OutputLayoutMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Horizontal': {
							label: {
								name: 'Horizontal',
								type: '(EnumItem)',
							},
							insertText: 'Horizontal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/OutputLayoutMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Vertical': {
							label: {
								name: 'Vertical',
								type: '(EnumItem)',
							},
							insertText: 'Vertical',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/OutputLayoutMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'OverrideMouseIconBehavior': {
				label: {
					name: 'OverrideMouseIconBehavior',
					type: '(Enum)',
				},
				insertText: 'OverrideMouseIconBehavior',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/OverrideMouseIconBehavior)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/OverrideMouseIconBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ForceShow': {
							label: {
								name: 'ForceShow',
								type: '(EnumItem)',
							},
							insertText: 'ForceShow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/OverrideMouseIconBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ForceHide': {
							label: {
								name: 'ForceHide',
								type: '(EnumItem)',
							},
							insertText: 'ForceHide',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/OverrideMouseIconBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PackagePermission': {
				label: {
					name: 'PackagePermission',
					type: '(Enum)',
				},
				insertText: 'PackagePermission',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PackagePermission)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PackagePermission)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NoAccess': {
							label: {
								name: 'NoAccess',
								type: '(EnumItem)',
							},
							insertText: 'NoAccess',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PackagePermission)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Revoked': {
							label: {
								name: 'Revoked',
								type: '(EnumItem)',
							},
							insertText: 'Revoked',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PackagePermission)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'UseView': {
							label: {
								name: 'UseView',
								type: '(EnumItem)',
							},
							insertText: 'UseView',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PackagePermission)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Edit': {
							label: {
								name: 'Edit',
								type: '(EnumItem)',
							},
							insertText: 'Edit',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PackagePermission)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Own': {
							label: {
								name: 'Own',
								type: '(EnumItem)',
							},
							insertText: 'Own',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PackagePermission)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PacketPriority': {
				label: {
					name: 'PacketPriority',
					type: '(Enum)',
				},
				insertText: 'PacketPriority',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PacketPriority)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'IMMEDIATE_PRIORITY': {
							label: {
								name: 'IMMEDIATE_PRIORITY',
								type: '(EnumItem)',
							},
							insertText: 'IMMEDIATE_PRIORITY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PacketPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HIGH_PRIORITY': {
							label: {
								name: 'HIGH_PRIORITY',
								type: '(EnumItem)',
							},
							insertText: 'HIGH_PRIORITY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PacketPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MEDIUM_PRIORITY': {
							label: {
								name: 'MEDIUM_PRIORITY',
								type: '(EnumItem)',
							},
							insertText: 'MEDIUM_PRIORITY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PacketPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LOW_PRIORITY': {
							label: {
								name: 'LOW_PRIORITY',
								type: '(EnumItem)',
							},
							insertText: 'LOW_PRIORITY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PacketPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PartType': {
				label: {
					name: 'PartType',
					type: '(Enum)',
				},
				insertText: 'PartType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PartType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Ball': {
							label: {
								name: 'Ball',
								type: '(EnumItem)',
							},
							insertText: 'Ball',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PartType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Block': {
							label: {
								name: 'Block',
								type: '(EnumItem)',
							},
							insertText: 'Block',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PartType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cylinder': {
							label: {
								name: 'Cylinder',
								type: '(EnumItem)',
							},
							insertText: 'Cylinder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PartType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ParticleOrientation': {
				label: {
					name: 'ParticleOrientation',
					type: '(Enum)',
				},
				insertText: 'ParticleOrientation',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ParticleOrientation)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'FacingCamera': {
							label: {
								name: 'FacingCamera',
								type: '(EnumItem)',
							},
							insertText: 'FacingCamera',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ParticleOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FacingCameraWorldUp': {
							label: {
								name: 'FacingCameraWorldUp',
								type: '(EnumItem)',
							},
							insertText: 'FacingCameraWorldUp',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ParticleOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'VelocityParallel': {
							label: {
								name: 'VelocityParallel',
								type: '(EnumItem)',
							},
							insertText: 'VelocityParallel',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ParticleOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'VelocityPerpendicular': {
							label: {
								name: 'VelocityPerpendicular',
								type: '(EnumItem)',
							},
							insertText: 'VelocityPerpendicular',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ParticleOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PathStatus': {
				label: {
					name: 'PathStatus',
					type: '(Enum)',
				},
				insertText: 'PathStatus',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathStatus)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Success': {
							label: {
								name: 'Success',
								type: '(EnumItem)',
							},
							insertText: 'Success',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClosestNoPath': {
							label: {
								name: 'ClosestNoPath',
								type: '(EnumItem)',
							},
							insertText: 'ClosestNoPath',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClosestOutOfRange': {
							label: {
								name: 'ClosestOutOfRange',
								type: '(EnumItem)',
							},
							insertText: 'ClosestOutOfRange',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FailStartNotEmpty': {
							label: {
								name: 'FailStartNotEmpty',
								type: '(EnumItem)',
							},
							insertText: 'FailStartNotEmpty',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FailFinishNotEmpty': {
							label: {
								name: 'FailFinishNotEmpty',
								type: '(EnumItem)',
							},
							insertText: 'FailFinishNotEmpty',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NoPath': {
							label: {
								name: 'NoPath',
								type: '(EnumItem)',
							},
							insertText: 'NoPath',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PathWaypointAction': {
				label: {
					name: 'PathWaypointAction',
					type: '(Enum)',
				},
				insertText: 'PathWaypointAction',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathWaypointAction)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Walk': {
							label: {
								name: 'Walk',
								type: '(EnumItem)',
							},
							insertText: 'Walk',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathWaypointAction)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Jump': {
							label: {
								name: 'Jump',
								type: '(EnumItem)',
							},
							insertText: 'Jump',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PathWaypointAction)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PermissionLevelShown': {
				label: {
					name: 'PermissionLevelShown',
					type: '(Enum)',
				},
				insertText: 'PermissionLevelShown',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PermissionLevelShown)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Game': {
							label: {
								name: 'Game',
								type: '(EnumItem)',
							},
							insertText: 'Game',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PermissionLevelShown)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxGame': {
							label: {
								name: 'RobloxGame',
								type: '(EnumItem)',
							},
							insertText: 'RobloxGame',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PermissionLevelShown)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxScript': {
							label: {
								name: 'RobloxScript',
								type: '(EnumItem)',
							},
							insertText: 'RobloxScript',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PermissionLevelShown)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Studio': {
							label: {
								name: 'Studio',
								type: '(EnumItem)',
							},
							insertText: 'Studio',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PermissionLevelShown)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Roblox': {
							label: {
								name: 'Roblox',
								type: '(EnumItem)',
							},
							insertText: 'Roblox',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PermissionLevelShown)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PhysicsSimulationRate': {
				label: {
					name: 'PhysicsSimulationRate',
					type: '(Enum)',
				},
				insertText: 'PhysicsSimulationRate',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PhysicsSimulationRate)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Fixed240Hz': {
							label: {
								name: 'Fixed240Hz',
								type: '(EnumItem)',
							},
							insertText: 'Fixed240Hz',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PhysicsSimulationRate)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fixed120Hz': {
							label: {
								name: 'Fixed120Hz',
								type: '(EnumItem)',
							},
							insertText: 'Fixed120Hz',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PhysicsSimulationRate)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fixed60Hz': {
							label: {
								name: 'Fixed60Hz',
								type: '(EnumItem)',
							},
							insertText: 'Fixed60Hz',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PhysicsSimulationRate)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PhysicsSteppingMethod': {
				label: {
					name: 'PhysicsSteppingMethod',
					type: '(Enum)',
				},
				insertText: 'PhysicsSteppingMethod',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PhysicsSteppingMethod)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PhysicsSteppingMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fixed': {
							label: {
								name: 'Fixed',
								type: '(EnumItem)',
							},
							insertText: 'Fixed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PhysicsSteppingMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Adaptive': {
							label: {
								name: 'Adaptive',
								type: '(EnumItem)',
							},
							insertText: 'Adaptive',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PhysicsSteppingMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Platform': {
				label: {
					name: 'Platform',
					type: '(Enum)',
				},
				insertText: 'Platform',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Windows': {
							label: {
								name: 'Windows',
								type: '(EnumItem)',
							},
							insertText: 'Windows',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OSX': {
							label: {
								name: 'OSX',
								type: '(EnumItem)',
							},
							insertText: 'OSX',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'IOS': {
							label: {
								name: 'IOS',
								type: '(EnumItem)',
							},
							insertText: 'IOS',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Android': {
							label: {
								name: 'Android',
								type: '(EnumItem)',
							},
							insertText: 'Android',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'XBoxOne': {
							label: {
								name: 'XBoxOne',
								type: '(EnumItem)',
							},
							insertText: 'XBoxOne',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PS4': {
							label: {
								name: 'PS4',
								type: '(EnumItem)',
							},
							insertText: 'PS4',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PS3': {
							label: {
								name: 'PS3',
								type: '(EnumItem)',
							},
							insertText: 'PS3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'XBox360': {
							label: {
								name: 'XBox360',
								type: '(EnumItem)',
							},
							insertText: 'XBox360',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WiiU': {
							label: {
								name: 'WiiU',
								type: '(EnumItem)',
							},
							insertText: 'WiiU',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NX': {
							label: {
								name: 'NX',
								type: '(EnumItem)',
							},
							insertText: 'NX',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ouya': {
							label: {
								name: 'Ouya',
								type: '(EnumItem)',
							},
							insertText: 'Ouya',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AndroidTV': {
							label: {
								name: 'AndroidTV',
								type: '(EnumItem)',
							},
							insertText: 'AndroidTV',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Chromecast': {
							label: {
								name: 'Chromecast',
								type: '(EnumItem)',
							},
							insertText: 'Chromecast',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Linux': {
							label: {
								name: 'Linux',
								type: '(EnumItem)',
							},
							insertText: 'Linux',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SteamOS': {
							label: {
								name: 'SteamOS',
								type: '(EnumItem)',
							},
							insertText: 'SteamOS',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WebOS': {
							label: {
								name: 'WebOS',
								type: '(EnumItem)',
							},
							insertText: 'WebOS',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DOS': {
							label: {
								name: 'DOS',
								type: '(EnumItem)',
							},
							insertText: 'DOS',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BeOS': {
							label: {
								name: 'BeOS',
								type: '(EnumItem)',
							},
							insertText: 'BeOS',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'UWP': {
							label: {
								name: 'UWP',
								type: '(EnumItem)',
							},
							insertText: 'UWP',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Platform)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PlaybackState': {
				label: {
					name: 'PlaybackState',
					type: '(Enum)',
				},
				insertText: 'PlaybackState',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlaybackState)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Begin': {
							label: {
								name: 'Begin',
								type: '(EnumItem)',
							},
							insertText: 'Begin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlaybackState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Delayed': {
							label: {
								name: 'Delayed',
								type: '(EnumItem)',
							},
							insertText: 'Delayed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlaybackState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Playing': {
							label: {
								name: 'Playing',
								type: '(EnumItem)',
							},
							insertText: 'Playing',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlaybackState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Paused': {
							label: {
								name: 'Paused',
								type: '(EnumItem)',
							},
							insertText: 'Paused',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlaybackState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Completed': {
							label: {
								name: 'Completed',
								type: '(EnumItem)',
							},
							insertText: 'Completed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlaybackState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cancelled': {
							label: {
								name: 'Cancelled',
								type: '(EnumItem)',
							},
							insertText: 'Cancelled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlaybackState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PlayerActions': {
				label: {
					name: 'PlayerActions',
					type: '(Enum)',
				},
				insertText: 'PlayerActions',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerActions)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'CharacterForward': {
							label: {
								name: 'CharacterForward',
								type: '(EnumItem)',
							},
							insertText: 'CharacterForward',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerActions)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CharacterBackward': {
							label: {
								name: 'CharacterBackward',
								type: '(EnumItem)',
							},
							insertText: 'CharacterBackward',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerActions)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CharacterLeft': {
							label: {
								name: 'CharacterLeft',
								type: '(EnumItem)',
							},
							insertText: 'CharacterLeft',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerActions)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CharacterRight': {
							label: {
								name: 'CharacterRight',
								type: '(EnumItem)',
							},
							insertText: 'CharacterRight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerActions)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CharacterJump': {
							label: {
								name: 'CharacterJump',
								type: '(EnumItem)',
							},
							insertText: 'CharacterJump',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerActions)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PlayerChatType': {
				label: {
					name: 'PlayerChatType',
					type: '(Enum)',
				},
				insertText: 'PlayerChatType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerChatType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'All': {
							label: {
								name: 'All',
								type: '(EnumItem)',
							},
							insertText: 'All',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerChatType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Team': {
							label: {
								name: 'Team',
								type: '(EnumItem)',
							},
							insertText: 'Team',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerChatType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Whisper': {
							label: {
								name: 'Whisper',
								type: '(EnumItem)',
							},
							insertText: 'Whisper',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PlayerChatType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PoseEasingDirection': {
				label: {
					name: 'PoseEasingDirection',
					type: '(Enum)',
				},
				insertText: 'PoseEasingDirection',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingDirection)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Out': {
							label: {
								name: 'Out',
								type: '(EnumItem)',
							},
							insertText: 'Out',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InOut': {
							label: {
								name: 'InOut',
								type: '(EnumItem)',
							},
							insertText: 'InOut',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'In': {
							label: {
								name: 'In',
								type: '(EnumItem)',
							},
							insertText: 'In',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PoseEasingStyle': {
				label: {
					name: 'PoseEasingStyle',
					type: '(Enum)',
				},
				insertText: 'PoseEasingStyle',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingStyle)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Linear': {
							label: {
								name: 'Linear',
								type: '(EnumItem)',
							},
							insertText: 'Linear',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Constant': {
							label: {
								name: 'Constant',
								type: '(EnumItem)',
							},
							insertText: 'Constant',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Elastic': {
							label: {
								name: 'Elastic',
								type: '(EnumItem)',
							},
							insertText: 'Elastic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cubic': {
							label: {
								name: 'Cubic',
								type: '(EnumItem)',
							},
							insertText: 'Cubic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bounce': {
							label: {
								name: 'Bounce',
								type: '(EnumItem)',
							},
							insertText: 'Bounce',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'PrivilegeType': {
				label: {
					name: 'PrivilegeType',
					type: '(Enum)',
				},
				insertText: 'PrivilegeType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PrivilegeType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Owner': {
							label: {
								name: 'Owner',
								type: '(EnumItem)',
							},
							insertText: 'Owner',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PrivilegeType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Admin': {
							label: {
								name: 'Admin',
								type: '(EnumItem)',
							},
							insertText: 'Admin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PrivilegeType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Member': {
							label: {
								name: 'Member',
								type: '(EnumItem)',
							},
							insertText: 'Member',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PrivilegeType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Visitor': {
							label: {
								name: 'Visitor',
								type: '(EnumItem)',
							},
							insertText: 'Visitor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PrivilegeType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Banned': {
							label: {
								name: 'Banned',
								type: '(EnumItem)',
							},
							insertText: 'Banned',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/PrivilegeType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ProductPurchaseDecision': {
				label: {
					name: 'ProductPurchaseDecision',
					type: '(Enum)',
				},
				insertText: 'ProductPurchaseDecision',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProductPurchaseDecision)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NotProcessedYet': {
							label: {
								name: 'NotProcessedYet',
								type: '(EnumItem)',
							},
							insertText: 'NotProcessedYet',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProductPurchaseDecision)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PurchaseGranted': {
							label: {
								name: 'PurchaseGranted',
								type: '(EnumItem)',
							},
							insertText: 'PurchaseGranted',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProductPurchaseDecision)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ProximityPromptExclusivity': {
				label: {
					name: 'ProximityPromptExclusivity',
					type: '(Enum)',
				},
				insertText: 'ProximityPromptExclusivity',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptExclusivity)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'OnePerButton': {
							label: {
								name: 'OnePerButton',
								type: '(EnumItem)',
							},
							insertText: 'OnePerButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptExclusivity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OneGlobally': {
							label: {
								name: 'OneGlobally',
								type: '(EnumItem)',
							},
							insertText: 'OneGlobally',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptExclusivity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AlwaysShow': {
							label: {
								name: 'AlwaysShow',
								type: '(EnumItem)',
							},
							insertText: 'AlwaysShow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptExclusivity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ProximityPromptInputType': {
				label: {
					name: 'ProximityPromptInputType',
					type: '(Enum)',
				},
				insertText: 'ProximityPromptInputType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptInputType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Keyboard': {
							label: {
								name: 'Keyboard',
								type: '(EnumItem)',
							},
							insertText: 'Keyboard',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad': {
							label: {
								name: 'Gamepad',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Touch': {
							label: {
								name: 'Touch',
								type: '(EnumItem)',
							},
							insertText: 'Touch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ProximityPromptStyle': {
				label: {
					name: 'ProximityPromptStyle',
					type: '(Enum)',
				},
				insertText: 'ProximityPromptStyle',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptStyle)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Custom': {
							label: {
								name: 'Custom',
								type: '(EnumItem)',
							},
							insertText: 'Custom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ProximityPromptStyle)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'QualityLevel': {
				label: {
					name: 'QualityLevel',
					type: '(Enum)',
				},
				insertText: 'QualityLevel',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Automatic': {
							label: {
								name: 'Automatic',
								type: '(EnumItem)',
							},
							insertText: 'Automatic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level01': {
							label: {
								name: 'Level01',
								type: '(EnumItem)',
							},
							insertText: 'Level01',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level02': {
							label: {
								name: 'Level02',
								type: '(EnumItem)',
							},
							insertText: 'Level02',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level03': {
							label: {
								name: 'Level03',
								type: '(EnumItem)',
							},
							insertText: 'Level03',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level04': {
							label: {
								name: 'Level04',
								type: '(EnumItem)',
							},
							insertText: 'Level04',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level05': {
							label: {
								name: 'Level05',
								type: '(EnumItem)',
							},
							insertText: 'Level05',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level06': {
							label: {
								name: 'Level06',
								type: '(EnumItem)',
							},
							insertText: 'Level06',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level07': {
							label: {
								name: 'Level07',
								type: '(EnumItem)',
							},
							insertText: 'Level07',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level08': {
							label: {
								name: 'Level08',
								type: '(EnumItem)',
							},
							insertText: 'Level08',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level09': {
							label: {
								name: 'Level09',
								type: '(EnumItem)',
							},
							insertText: 'Level09',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level10': {
							label: {
								name: 'Level10',
								type: '(EnumItem)',
							},
							insertText: 'Level10',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level11': {
							label: {
								name: 'Level11',
								type: '(EnumItem)',
							},
							insertText: 'Level11',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level12': {
							label: {
								name: 'Level12',
								type: '(EnumItem)',
							},
							insertText: 'Level12',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level13': {
							label: {
								name: 'Level13',
								type: '(EnumItem)',
							},
							insertText: 'Level13',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level14': {
							label: {
								name: 'Level14',
								type: '(EnumItem)',
							},
							insertText: 'Level14',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level15': {
							label: {
								name: 'Level15',
								type: '(EnumItem)',
							},
							insertText: 'Level15',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level16': {
							label: {
								name: 'Level16',
								type: '(EnumItem)',
							},
							insertText: 'Level16',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level17': {
							label: {
								name: 'Level17',
								type: '(EnumItem)',
							},
							insertText: 'Level17',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level18': {
							label: {
								name: 'Level18',
								type: '(EnumItem)',
							},
							insertText: 'Level18',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level19': {
							label: {
								name: 'Level19',
								type: '(EnumItem)',
							},
							insertText: 'Level19',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level20': {
							label: {
								name: 'Level20',
								type: '(EnumItem)',
							},
							insertText: 'Level20',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Level21': {
							label: {
								name: 'Level21',
								type: '(EnumItem)',
							},
							insertText: 'Level21',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/QualityLevel)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'R15CollisionType': {
				label: {
					name: 'R15CollisionType',
					type: '(Enum)',
				},
				insertText: 'R15CollisionType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/R15CollisionType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'OuterBox': {
							label: {
								name: 'OuterBox',
								type: '(EnumItem)',
							},
							insertText: 'OuterBox',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/R15CollisionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InnerBox': {
							label: {
								name: 'InnerBox',
								type: '(EnumItem)',
							},
							insertText: 'InnerBox',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/R15CollisionType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'RaycastFilterType': {
				label: {
					name: 'RaycastFilterType',
					type: '(Enum)',
				},
				insertText: 'RaycastFilterType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RaycastFilterType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Blacklist': {
							label: {
								name: 'Blacklist',
								type: '(EnumItem)',
							},
							insertText: 'Blacklist',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RaycastFilterType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Whitelist': {
							label: {
								name: 'Whitelist',
								type: '(EnumItem)',
							},
							insertText: 'Whitelist',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RaycastFilterType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'RenderFidelity': {
				label: {
					name: 'RenderFidelity',
					type: '(Enum)',
				},
				insertText: 'RenderFidelity',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderFidelity)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Automatic': {
							label: {
								name: 'Automatic',
								type: '(EnumItem)',
							},
							insertText: 'Automatic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderFidelity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Precise': {
							label: {
								name: 'Precise',
								type: '(EnumItem)',
							},
							insertText: 'Precise',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderFidelity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Performance': {
							label: {
								name: 'Performance',
								type: '(EnumItem)',
							},
							insertText: 'Performance',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderFidelity)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'RenderPriority': {
				label: {
					name: 'RenderPriority',
					type: '(Enum)',
				},
				insertText: 'RenderPriority',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderPriority)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'First': {
							label: {
								name: 'First',
								type: '(EnumItem)',
							},
							insertText: 'First',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Input': {
							label: {
								name: 'Input',
								type: '(EnumItem)',
							},
							insertText: 'Input',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Camera': {
							label: {
								name: 'Camera',
								type: '(EnumItem)',
							},
							insertText: 'Camera',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Character': {
							label: {
								name: 'Character',
								type: '(EnumItem)',
							},
							insertText: 'Character',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Last': {
							label: {
								name: 'Last',
								type: '(EnumItem)',
							},
							insertText: 'Last',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'RenderingTestComparisonMethod': {
				label: {
					name: 'RenderingTestComparisonMethod',
					type: '(Enum)',
				},
				insertText: 'RenderingTestComparisonMethod',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderingTestComparisonMethod)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'psnr': {
							label: {
								name: 'psnr',
								type: '(EnumItem)',
							},
							insertText: 'psnr',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderingTestComparisonMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'diff': {
							label: {
								name: 'diff',
								type: '(EnumItem)',
							},
							insertText: 'diff',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RenderingTestComparisonMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ReturnKeyType': {
				label: {
					name: 'ReturnKeyType',
					type: '(Enum)',
				},
				insertText: 'ReturnKeyType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReturnKeyType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReturnKeyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Done': {
							label: {
								name: 'Done',
								type: '(EnumItem)',
							},
							insertText: 'Done',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReturnKeyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Go': {
							label: {
								name: 'Go',
								type: '(EnumItem)',
							},
							insertText: 'Go',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReturnKeyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Next': {
							label: {
								name: 'Next',
								type: '(EnumItem)',
							},
							insertText: 'Next',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReturnKeyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Search': {
							label: {
								name: 'Search',
								type: '(EnumItem)',
							},
							insertText: 'Search',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReturnKeyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Send': {
							label: {
								name: 'Send',
								type: '(EnumItem)',
							},
							insertText: 'Send',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReturnKeyType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ReverbType': {
				label: {
					name: 'ReverbType',
					type: '(Enum)',
				},
				insertText: 'ReverbType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NoReverb': {
							label: {
								name: 'NoReverb',
								type: '(EnumItem)',
							},
							insertText: 'NoReverb',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GenericReverb': {
							label: {
								name: 'GenericReverb',
								type: '(EnumItem)',
							},
							insertText: 'GenericReverb',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PaddedCell': {
							label: {
								name: 'PaddedCell',
								type: '(EnumItem)',
							},
							insertText: 'PaddedCell',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Room': {
							label: {
								name: 'Room',
								type: '(EnumItem)',
							},
							insertText: 'Room',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bathroom': {
							label: {
								name: 'Bathroom',
								type: '(EnumItem)',
							},
							insertText: 'Bathroom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LivingRoom': {
							label: {
								name: 'LivingRoom',
								type: '(EnumItem)',
							},
							insertText: 'LivingRoom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'StoneRoom': {
							label: {
								name: 'StoneRoom',
								type: '(EnumItem)',
							},
							insertText: 'StoneRoom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Auditorium': {
							label: {
								name: 'Auditorium',
								type: '(EnumItem)',
							},
							insertText: 'Auditorium',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ConcertHall': {
							label: {
								name: 'ConcertHall',
								type: '(EnumItem)',
							},
							insertText: 'ConcertHall',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cave': {
							label: {
								name: 'Cave',
								type: '(EnumItem)',
							},
							insertText: 'Cave',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Arena': {
							label: {
								name: 'Arena',
								type: '(EnumItem)',
							},
							insertText: 'Arena',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hangar': {
							label: {
								name: 'Hangar',
								type: '(EnumItem)',
							},
							insertText: 'Hangar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CarpettedHallway': {
							label: {
								name: 'CarpettedHallway',
								type: '(EnumItem)',
							},
							insertText: 'CarpettedHallway',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hallway': {
							label: {
								name: 'Hallway',
								type: '(EnumItem)',
							},
							insertText: 'Hallway',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'StoneCorridor': {
							label: {
								name: 'StoneCorridor',
								type: '(EnumItem)',
							},
							insertText: 'StoneCorridor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Alley': {
							label: {
								name: 'Alley',
								type: '(EnumItem)',
							},
							insertText: 'Alley',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Forest': {
							label: {
								name: 'Forest',
								type: '(EnumItem)',
							},
							insertText: 'Forest',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'City': {
							label: {
								name: 'City',
								type: '(EnumItem)',
							},
							insertText: 'City',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Mountains': {
							label: {
								name: 'Mountains',
								type: '(EnumItem)',
							},
							insertText: 'Mountains',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Quarry': {
							label: {
								name: 'Quarry',
								type: '(EnumItem)',
							},
							insertText: 'Quarry',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Plain': {
							label: {
								name: 'Plain',
								type: '(EnumItem)',
							},
							insertText: 'Plain',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ParkingLot': {
							label: {
								name: 'ParkingLot',
								type: '(EnumItem)',
							},
							insertText: 'ParkingLot',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SewerPipe': {
							label: {
								name: 'SewerPipe',
								type: '(EnumItem)',
							},
							insertText: 'SewerPipe',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'UnderWater': {
							label: {
								name: 'UnderWater',
								type: '(EnumItem)',
							},
							insertText: 'UnderWater',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ReverbType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'RibbonTool': {
				label: {
					name: 'RibbonTool',
					type: '(Enum)',
				},
				insertText: 'RibbonTool',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Select': {
							label: {
								name: 'Select',
								type: '(EnumItem)',
							},
							insertText: 'Select',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Scale': {
							label: {
								name: 'Scale',
								type: '(EnumItem)',
							},
							insertText: 'Scale',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Rotate': {
							label: {
								name: 'Rotate',
								type: '(EnumItem)',
							},
							insertText: 'Rotate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Move': {
							label: {
								name: 'Move',
								type: '(EnumItem)',
							},
							insertText: 'Move',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Transform': {
							label: {
								name: 'Transform',
								type: '(EnumItem)',
							},
							insertText: 'Transform',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ColorPicker': {
							label: {
								name: 'ColorPicker',
								type: '(EnumItem)',
							},
							insertText: 'ColorPicker',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MaterialPicker': {
							label: {
								name: 'MaterialPicker',
								type: '(EnumItem)',
							},
							insertText: 'MaterialPicker',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Group': {
							label: {
								name: 'Group',
								type: '(EnumItem)',
							},
							insertText: 'Group',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ungroup': {
							label: {
								name: 'Ungroup',
								type: '(EnumItem)',
							},
							insertText: 'Ungroup',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RibbonTool)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'RollOffMode': {
				label: {
					name: 'RollOffMode',
					type: '(Enum)',
				},
				insertText: 'RollOffMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RollOffMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Inverse': {
							label: {
								name: 'Inverse',
								type: '(EnumItem)',
							},
							insertText: 'Inverse',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RollOffMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Linear': {
							label: {
								name: 'Linear',
								type: '(EnumItem)',
							},
							insertText: 'Linear',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RollOffMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InverseTapered': {
							label: {
								name: 'InverseTapered',
								type: '(EnumItem)',
							},
							insertText: 'InverseTapered',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RollOffMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LinearSquare': {
							label: {
								name: 'LinearSquare',
								type: '(EnumItem)',
							},
							insertText: 'LinearSquare',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RollOffMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'RotationType': {
				label: {
					name: 'RotationType',
					type: '(Enum)',
				},
				insertText: 'RotationType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RotationType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'MovementRelative': {
							label: {
								name: 'MovementRelative',
								type: '(EnumItem)',
							},
							insertText: 'MovementRelative',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RotationType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CameraRelative': {
							label: {
								name: 'CameraRelative',
								type: '(EnumItem)',
							},
							insertText: 'CameraRelative',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RotationType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'RuntimeUndoBehavior': {
				label: {
					name: 'RuntimeUndoBehavior',
					type: '(Enum)',
				},
				insertText: 'RuntimeUndoBehavior',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RuntimeUndoBehavior)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Aggregate': {
							label: {
								name: 'Aggregate',
								type: '(EnumItem)',
							},
							insertText: 'Aggregate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RuntimeUndoBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Snapshot': {
							label: {
								name: 'Snapshot',
								type: '(EnumItem)',
							},
							insertText: 'Snapshot',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RuntimeUndoBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hybrid': {
							label: {
								name: 'Hybrid',
								type: '(EnumItem)',
							},
							insertText: 'Hybrid',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/RuntimeUndoBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SaveFilter': {
				label: {
					name: 'SaveFilter',
					type: '(Enum)',
				},
				insertText: 'SaveFilter',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SaveFilter)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'SaveAll': {
							label: {
								name: 'SaveAll',
								type: '(EnumItem)',
							},
							insertText: 'SaveAll',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SaveFilter)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SaveWorld': {
							label: {
								name: 'SaveWorld',
								type: '(EnumItem)',
							},
							insertText: 'SaveWorld',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SaveFilter)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SaveGame': {
							label: {
								name: 'SaveGame',
								type: '(EnumItem)',
							},
							insertText: 'SaveGame',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SaveFilter)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SavedQualitySetting': {
				label: {
					name: 'SavedQualitySetting',
					type: '(Enum)',
				},
				insertText: 'SavedQualitySetting',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Automatic': {
							label: {
								name: 'Automatic',
								type: '(EnumItem)',
							},
							insertText: 'Automatic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel1': {
							label: {
								name: 'QualityLevel1',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel2': {
							label: {
								name: 'QualityLevel2',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel3': {
							label: {
								name: 'QualityLevel3',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel4': {
							label: {
								name: 'QualityLevel4',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel4',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel5': {
							label: {
								name: 'QualityLevel5',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel5',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel6': {
							label: {
								name: 'QualityLevel6',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel6',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel7': {
							label: {
								name: 'QualityLevel7',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel7',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel8': {
							label: {
								name: 'QualityLevel8',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel8',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel9': {
							label: {
								name: 'QualityLevel9',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel9',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'QualityLevel10': {
							label: {
								name: 'QualityLevel10',
								type: '(EnumItem)',
							},
							insertText: 'QualityLevel10',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SavedQualitySetting)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ScaleType': {
				label: {
					name: 'ScaleType',
					type: '(Enum)',
				},
				insertText: 'ScaleType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScaleType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Stretch': {
							label: {
								name: 'Stretch',
								type: '(EnumItem)',
							},
							insertText: 'Stretch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScaleType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Slice': {
							label: {
								name: 'Slice',
								type: '(EnumItem)',
							},
							insertText: 'Slice',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScaleType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Tile': {
							label: {
								name: 'Tile',
								type: '(EnumItem)',
							},
							insertText: 'Tile',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScaleType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Fit': {
							label: {
								name: 'Fit',
								type: '(EnumItem)',
							},
							insertText: 'Fit',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScaleType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Crop': {
							label: {
								name: 'Crop',
								type: '(EnumItem)',
							},
							insertText: 'Crop',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScaleType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ScreenOrientation': {
				label: {
					name: 'ScreenOrientation',
					type: '(Enum)',
				},
				insertText: 'ScreenOrientation',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScreenOrientation)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'LandscapeLeft': {
							label: {
								name: 'LandscapeLeft',
								type: '(EnumItem)',
							},
							insertText: 'LandscapeLeft',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScreenOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LandscapeRight': {
							label: {
								name: 'LandscapeRight',
								type: '(EnumItem)',
							},
							insertText: 'LandscapeRight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScreenOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LandscapeSensor': {
							label: {
								name: 'LandscapeSensor',
								type: '(EnumItem)',
							},
							insertText: 'LandscapeSensor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScreenOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Portrait': {
							label: {
								name: 'Portrait',
								type: '(EnumItem)',
							},
							insertText: 'Portrait',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScreenOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sensor': {
							label: {
								name: 'Sensor',
								type: '(EnumItem)',
							},
							insertText: 'Sensor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScreenOrientation)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ScrollBarInset': {
				label: {
					name: 'ScrollBarInset',
					type: '(Enum)',
				},
				insertText: 'ScrollBarInset',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScrollBarInset)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScrollBarInset)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScrollBar': {
							label: {
								name: 'ScrollBar',
								type: '(EnumItem)',
							},
							insertText: 'ScrollBar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScrollBarInset)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Always': {
							label: {
								name: 'Always',
								type: '(EnumItem)',
							},
							insertText: 'Always',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScrollBarInset)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ScrollingDirection': {
				label: {
					name: 'ScrollingDirection',
					type: '(Enum)',
				},
				insertText: 'ScrollingDirection',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScrollingDirection)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'X': {
							label: {
								name: 'X',
								type: '(EnumItem)',
							},
							insertText: 'X',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScrollingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Y': {
							label: {
								name: 'Y',
								type: '(EnumItem)',
							},
							insertText: 'Y',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScrollingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'XY': {
							label: {
								name: 'XY',
								type: '(EnumItem)',
							},
							insertText: 'XY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ScrollingDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ServerAudioBehavior': {
				label: {
					name: 'ServerAudioBehavior',
					type: '(Enum)',
				},
				insertText: 'ServerAudioBehavior',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ServerAudioBehavior)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Enabled': {
							label: {
								name: 'Enabled',
								type: '(EnumItem)',
							},
							insertText: 'Enabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ServerAudioBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Muted': {
							label: {
								name: 'Muted',
								type: '(EnumItem)',
							},
							insertText: 'Muted',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ServerAudioBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'OnlineGame': {
							label: {
								name: 'OnlineGame',
								type: '(EnumItem)',
							},
							insertText: 'OnlineGame',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ServerAudioBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SignalBehavior': {
				label: {
					name: 'SignalBehavior',
					type: '(Enum)',
				},
				insertText: 'SignalBehavior',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SignalBehavior)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SignalBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Immediate': {
							label: {
								name: 'Immediate',
								type: '(EnumItem)',
							},
							insertText: 'Immediate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SignalBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Deferred': {
							label: {
								name: 'Deferred',
								type: '(EnumItem)',
							},
							insertText: 'Deferred',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SignalBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SizeConstraint': {
				label: {
					name: 'SizeConstraint',
					type: '(Enum)',
				},
				insertText: 'SizeConstraint',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SizeConstraint)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'RelativeXY': {
							label: {
								name: 'RelativeXY',
								type: '(EnumItem)',
							},
							insertText: 'RelativeXY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SizeConstraint)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RelativeXX': {
							label: {
								name: 'RelativeXX',
								type: '(EnumItem)',
							},
							insertText: 'RelativeXX',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SizeConstraint)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RelativeYY': {
							label: {
								name: 'RelativeYY',
								type: '(EnumItem)',
							},
							insertText: 'RelativeYY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SizeConstraint)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SortDirection': {
				label: {
					name: 'SortDirection',
					type: '(Enum)',
				},
				insertText: 'SortDirection',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SortDirection)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Ascending': {
							label: {
								name: 'Ascending',
								type: '(EnumItem)',
							},
							insertText: 'Ascending',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SortDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Descending': {
							label: {
								name: 'Descending',
								type: '(EnumItem)',
							},
							insertText: 'Descending',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SortDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SortOrder': {
				label: {
					name: 'SortOrder',
					type: '(Enum)',
				},
				insertText: 'SortOrder',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SortOrder)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'LayoutOrder': {
							label: {
								name: 'LayoutOrder',
								type: '(EnumItem)',
							},
							insertText: 'LayoutOrder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SortOrder)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Name': {
							label: {
								name: 'Name',
								type: '(EnumItem)',
							},
							insertText: 'Name',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SortOrder)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Custom': {
							label: {
								name: 'Custom',
								type: '(EnumItem)',
							},
							insertText: 'Custom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SortOrder)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SoundType': {
				label: {
					name: 'SoundType',
					type: '(Enum)',
				},
				insertText: 'SoundType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NoSound': {
							label: {
								name: 'NoSound',
								type: '(EnumItem)',
							},
							insertText: 'NoSound',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Boing': {
							label: {
								name: 'Boing',
								type: '(EnumItem)',
							},
							insertText: 'Boing',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bomb': {
							label: {
								name: 'Bomb',
								type: '(EnumItem)',
							},
							insertText: 'Bomb',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Break': {
							label: {
								name: 'Break',
								type: '(EnumItem)',
							},
							insertText: 'Break',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Click': {
							label: {
								name: 'Click',
								type: '(EnumItem)',
							},
							insertText: 'Click',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Clock': {
							label: {
								name: 'Clock',
								type: '(EnumItem)',
							},
							insertText: 'Clock',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Slingshot': {
							label: {
								name: 'Slingshot',
								type: '(EnumItem)',
							},
							insertText: 'Slingshot',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Page': {
							label: {
								name: 'Page',
								type: '(EnumItem)',
							},
							insertText: 'Page',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ping': {
							label: {
								name: 'Ping',
								type: '(EnumItem)',
							},
							insertText: 'Ping',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Snap': {
							label: {
								name: 'Snap',
								type: '(EnumItem)',
							},
							insertText: 'Snap',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Splat': {
							label: {
								name: 'Splat',
								type: '(EnumItem)',
							},
							insertText: 'Splat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Step': {
							label: {
								name: 'Step',
								type: '(EnumItem)',
							},
							insertText: 'Step',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'StepOn': {
							label: {
								name: 'StepOn',
								type: '(EnumItem)',
							},
							insertText: 'StepOn',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Swoosh': {
							label: {
								name: 'Swoosh',
								type: '(EnumItem)',
							},
							insertText: 'Swoosh',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Victory': {
							label: {
								name: 'Victory',
								type: '(EnumItem)',
							},
							insertText: 'Victory',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SoundType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SpecialKey': {
				label: {
					name: 'SpecialKey',
					type: '(Enum)',
				},
				insertText: 'SpecialKey',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SpecialKey)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Insert': {
							label: {
								name: 'Insert',
								type: '(EnumItem)',
							},
							insertText: 'Insert',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SpecialKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Home': {
							label: {
								name: 'Home',
								type: '(EnumItem)',
							},
							insertText: 'Home',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SpecialKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'End': {
							label: {
								name: 'End',
								type: '(EnumItem)',
							},
							insertText: 'End',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SpecialKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PageUp': {
							label: {
								name: 'PageUp',
								type: '(EnumItem)',
							},
							insertText: 'PageUp',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SpecialKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PageDown': {
							label: {
								name: 'PageDown',
								type: '(EnumItem)',
							},
							insertText: 'PageDown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SpecialKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatHotkey': {
							label: {
								name: 'ChatHotkey',
								type: '(EnumItem)',
							},
							insertText: 'ChatHotkey',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SpecialKey)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'StartCorner': {
				label: {
					name: 'StartCorner',
					type: '(Enum)',
				},
				insertText: 'StartCorner',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StartCorner)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'TopLeft': {
							label: {
								name: 'TopLeft',
								type: '(EnumItem)',
							},
							insertText: 'TopLeft',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StartCorner)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TopRight': {
							label: {
								name: 'TopRight',
								type: '(EnumItem)',
							},
							insertText: 'TopRight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StartCorner)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BottomLeft': {
							label: {
								name: 'BottomLeft',
								type: '(EnumItem)',
							},
							insertText: 'BottomLeft',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StartCorner)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BottomRight': {
							label: {
								name: 'BottomRight',
								type: '(EnumItem)',
							},
							insertText: 'BottomRight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StartCorner)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Status': {
				label: {
					name: 'Status',
					type: '(Enum)',
				},
				insertText: 'Status',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Status)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Poison': {
							label: {
								name: 'Poison',
								type: '(EnumItem)',
							},
							insertText: 'Poison',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Status)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Confusion': {
							label: {
								name: 'Confusion',
								type: '(EnumItem)',
							},
							insertText: 'Confusion',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Status)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'StreamingPauseMode': {
				label: {
					name: 'StreamingPauseMode',
					type: '(Enum)',
				},
				insertText: 'StreamingPauseMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StreamingPauseMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StreamingPauseMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StreamingPauseMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClientPhysicsPause': {
							label: {
								name: 'ClientPhysicsPause',
								type: '(EnumItem)',
							},
							insertText: 'ClientPhysicsPause',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StreamingPauseMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'StudioDataModelType': {
				label: {
					name: 'StudioDataModelType',
					type: '(Enum)',
				},
				insertText: 'StudioDataModelType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioDataModelType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Edit': {
							label: {
								name: 'Edit',
								type: '(EnumItem)',
							},
							insertText: 'Edit',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioDataModelType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlayClient': {
							label: {
								name: 'PlayClient',
								type: '(EnumItem)',
							},
							insertText: 'PlayClient',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioDataModelType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PlayServer': {
							label: {
								name: 'PlayServer',
								type: '(EnumItem)',
							},
							insertText: 'PlayServer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioDataModelType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RobloxPlugin': {
							label: {
								name: 'RobloxPlugin',
								type: '(EnumItem)',
							},
							insertText: 'RobloxPlugin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioDataModelType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'UserPlugin': {
							label: {
								name: 'UserPlugin',
								type: '(EnumItem)',
							},
							insertText: 'UserPlugin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioDataModelType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioDataModelType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'StudioScriptEditorColorCategories': {
				label: {
					name: 'StudioScriptEditorColorCategories',
					type: '(Enum)',
				},
				insertText: 'StudioScriptEditorColorCategories',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Operator': {
							label: {
								name: 'Operator',
								type: '(EnumItem)',
							},
							insertText: 'Operator',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Number': {
							label: {
								name: 'Number',
								type: '(EnumItem)',
							},
							insertText: 'Number',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'String': {
							label: {
								name: 'String',
								type: '(EnumItem)',
							},
							insertText: 'String',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Comment': {
							label: {
								name: 'Comment',
								type: '(EnumItem)',
							},
							insertText: 'Comment',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Keyword': {
							label: {
								name: 'Keyword',
								type: '(EnumItem)',
							},
							insertText: 'Keyword',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Builtin': {
							label: {
								name: 'Builtin',
								type: '(EnumItem)',
							},
							insertText: 'Builtin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Method': {
							label: {
								name: 'Method',
								type: '(EnumItem)',
							},
							insertText: 'Method',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Property': {
							label: {
								name: 'Property',
								type: '(EnumItem)',
							},
							insertText: 'Property',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Nil': {
							label: {
								name: 'Nil',
								type: '(EnumItem)',
							},
							insertText: 'Nil',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bool': {
							label: {
								name: 'Bool',
								type: '(EnumItem)',
							},
							insertText: 'Bool',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Function': {
							label: {
								name: 'Function',
								type: '(EnumItem)',
							},
							insertText: 'Function',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Local': {
							label: {
								name: 'Local',
								type: '(EnumItem)',
							},
							insertText: 'Local',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Self': {
							label: {
								name: 'Self',
								type: '(EnumItem)',
							},
							insertText: 'Self',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LuauKeyword': {
							label: {
								name: 'LuauKeyword',
								type: '(EnumItem)',
							},
							insertText: 'LuauKeyword',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FunctionName': {
							label: {
								name: 'FunctionName',
								type: '(EnumItem)',
							},
							insertText: 'FunctionName',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TODO': {
							label: {
								name: 'TODO',
								type: '(EnumItem)',
							},
							insertText: 'TODO',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Background': {
							label: {
								name: 'Background',
								type: '(EnumItem)',
							},
							insertText: 'Background',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SelectionText': {
							label: {
								name: 'SelectionText',
								type: '(EnumItem)',
							},
							insertText: 'SelectionText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SelectionBackground': {
							label: {
								name: 'SelectionBackground',
								type: '(EnumItem)',
							},
							insertText: 'SelectionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FindSelectionBackground': {
							label: {
								name: 'FindSelectionBackground',
								type: '(EnumItem)',
							},
							insertText: 'FindSelectionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MatchingWordBackground': {
							label: {
								name: 'MatchingWordBackground',
								type: '(EnumItem)',
							},
							insertText: 'MatchingWordBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Warning': {
							label: {
								name: 'Warning',
								type: '(EnumItem)',
							},
							insertText: 'Warning',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Error': {
							label: {
								name: 'Error',
								type: '(EnumItem)',
							},
							insertText: 'Error',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Whitespace': {
							label: {
								name: 'Whitespace',
								type: '(EnumItem)',
							},
							insertText: 'Whitespace',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ActiveLine': {
							label: {
								name: 'ActiveLine',
								type: '(EnumItem)',
							},
							insertText: 'ActiveLine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DebuggerCurrentLine': {
							label: {
								name: 'DebuggerCurrentLine',
								type: '(EnumItem)',
							},
							insertText: 'DebuggerCurrentLine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DebuggerErrorLine': {
							label: {
								name: 'DebuggerErrorLine',
								type: '(EnumItem)',
							},
							insertText: 'DebuggerErrorLine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Ruler': {
							label: {
								name: 'Ruler',
								type: '(EnumItem)',
							},
							insertText: 'Ruler',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bracket': {
							label: {
								name: 'Bracket',
								type: '(EnumItem)',
							},
							insertText: 'Bracket',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MenuPrimaryText': {
							label: {
								name: 'MenuPrimaryText',
								type: '(EnumItem)',
							},
							insertText: 'MenuPrimaryText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MenuSecondaryText': {
							label: {
								name: 'MenuSecondaryText',
								type: '(EnumItem)',
							},
							insertText: 'MenuSecondaryText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MenuSelectedText': {
							label: {
								name: 'MenuSelectedText',
								type: '(EnumItem)',
							},
							insertText: 'MenuSelectedText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MenuBackground': {
							label: {
								name: 'MenuBackground',
								type: '(EnumItem)',
							},
							insertText: 'MenuBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MenuSelectedBackground': {
							label: {
								name: 'MenuSelectedBackground',
								type: '(EnumItem)',
							},
							insertText: 'MenuSelectedBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MenuScrollbarBackground': {
							label: {
								name: 'MenuScrollbarBackground',
								type: '(EnumItem)',
							},
							insertText: 'MenuScrollbarBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MenuScrollbarHandle': {
							label: {
								name: 'MenuScrollbarHandle',
								type: '(EnumItem)',
							},
							insertText: 'MenuScrollbarHandle',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorCategories)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'StudioScriptEditorColorPresets': {
				label: {
					name: 'StudioScriptEditorColorPresets',
					type: '(Enum)',
				},
				insertText: 'StudioScriptEditorColorPresets',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorPresets)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'RobloxDefault': {
							label: {
								name: 'RobloxDefault',
								type: '(EnumItem)',
							},
							insertText: 'RobloxDefault',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorPresets)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Extra1': {
							label: {
								name: 'Extra1',
								type: '(EnumItem)',
							},
							insertText: 'Extra1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorPresets)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Extra2': {
							label: {
								name: 'Extra2',
								type: '(EnumItem)',
							},
							insertText: 'Extra2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorPresets)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Custom': {
							label: {
								name: 'Custom',
								type: '(EnumItem)',
							},
							insertText: 'Custom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioScriptEditorColorPresets)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'StudioStyleGuideColor': {
				label: {
					name: 'StudioStyleGuideColor',
					type: '(Enum)',
				},
				insertText: 'StudioStyleGuideColor',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'MainBackground': {
							label: {
								name: 'MainBackground',
								type: '(EnumItem)',
							},
							insertText: 'MainBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Titlebar': {
							label: {
								name: 'Titlebar',
								type: '(EnumItem)',
							},
							insertText: 'Titlebar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Dropdown': {
							label: {
								name: 'Dropdown',
								type: '(EnumItem)',
							},
							insertText: 'Dropdown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Tooltip': {
							label: {
								name: 'Tooltip',
								type: '(EnumItem)',
							},
							insertText: 'Tooltip',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Notification': {
							label: {
								name: 'Notification',
								type: '(EnumItem)',
							},
							insertText: 'Notification',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScrollBar': {
							label: {
								name: 'ScrollBar',
								type: '(EnumItem)',
							},
							insertText: 'ScrollBar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScrollBarBackground': {
							label: {
								name: 'ScrollBarBackground',
								type: '(EnumItem)',
							},
							insertText: 'ScrollBarBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TabBar': {
							label: {
								name: 'TabBar',
								type: '(EnumItem)',
							},
							insertText: 'TabBar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Tab': {
							label: {
								name: 'Tab',
								type: '(EnumItem)',
							},
							insertText: 'Tab',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FilterButtonDefault': {
							label: {
								name: 'FilterButtonDefault',
								type: '(EnumItem)',
							},
							insertText: 'FilterButtonDefault',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FilterButtonHover': {
							label: {
								name: 'FilterButtonHover',
								type: '(EnumItem)',
							},
							insertText: 'FilterButtonHover',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FilterButtonChecked': {
							label: {
								name: 'FilterButtonChecked',
								type: '(EnumItem)',
							},
							insertText: 'FilterButtonChecked',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FilterButtonAccent': {
							label: {
								name: 'FilterButtonAccent',
								type: '(EnumItem)',
							},
							insertText: 'FilterButtonAccent',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FilterButtonBorder': {
							label: {
								name: 'FilterButtonBorder',
								type: '(EnumItem)',
							},
							insertText: 'FilterButtonBorder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'FilterButtonBorderAlt': {
							label: {
								name: 'FilterButtonBorderAlt',
								type: '(EnumItem)',
							},
							insertText: 'FilterButtonBorderAlt',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RibbonTab': {
							label: {
								name: 'RibbonTab',
								type: '(EnumItem)',
							},
							insertText: 'RibbonTab',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RibbonTabTopBar': {
							label: {
								name: 'RibbonTabTopBar',
								type: '(EnumItem)',
							},
							insertText: 'RibbonTabTopBar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Button': {
							label: {
								name: 'Button',
								type: '(EnumItem)',
							},
							insertText: 'Button',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MainButton': {
							label: {
								name: 'MainButton',
								type: '(EnumItem)',
							},
							insertText: 'MainButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RibbonButton': {
							label: {
								name: 'RibbonButton',
								type: '(EnumItem)',
							},
							insertText: 'RibbonButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ViewPortBackground': {
							label: {
								name: 'ViewPortBackground',
								type: '(EnumItem)',
							},
							insertText: 'ViewPortBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InputFieldBackground': {
							label: {
								name: 'InputFieldBackground',
								type: '(EnumItem)',
							},
							insertText: 'InputFieldBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Item': {
							label: {
								name: 'Item',
								type: '(EnumItem)',
							},
							insertText: 'Item',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TableItem': {
							label: {
								name: 'TableItem',
								type: '(EnumItem)',
							},
							insertText: 'TableItem',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CategoryItem': {
							label: {
								name: 'CategoryItem',
								type: '(EnumItem)',
							},
							insertText: 'CategoryItem',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GameSettingsTableItem': {
							label: {
								name: 'GameSettingsTableItem',
								type: '(EnumItem)',
							},
							insertText: 'GameSettingsTableItem',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GameSettingsTooltip': {
							label: {
								name: 'GameSettingsTooltip',
								type: '(EnumItem)',
							},
							insertText: 'GameSettingsTooltip',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EmulatorBar': {
							label: {
								name: 'EmulatorBar',
								type: '(EnumItem)',
							},
							insertText: 'EmulatorBar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EmulatorDropDown': {
							label: {
								name: 'EmulatorDropDown',
								type: '(EnumItem)',
							},
							insertText: 'EmulatorDropDown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ColorPickerFrame': {
							label: {
								name: 'ColorPickerFrame',
								type: '(EnumItem)',
							},
							insertText: 'ColorPickerFrame',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CurrentMarker': {
							label: {
								name: 'CurrentMarker',
								type: '(EnumItem)',
							},
							insertText: 'CurrentMarker',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Border': {
							label: {
								name: 'Border',
								type: '(EnumItem)',
							},
							insertText: 'Border',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Shadow': {
							label: {
								name: 'Shadow',
								type: '(EnumItem)',
							},
							insertText: 'Shadow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Light': {
							label: {
								name: 'Light',
								type: '(EnumItem)',
							},
							insertText: 'Light',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Dark': {
							label: {
								name: 'Dark',
								type: '(EnumItem)',
							},
							insertText: 'Dark',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Mid': {
							label: {
								name: 'Mid',
								type: '(EnumItem)',
							},
							insertText: 'Mid',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MainText': {
							label: {
								name: 'MainText',
								type: '(EnumItem)',
							},
							insertText: 'MainText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SubText': {
							label: {
								name: 'SubText',
								type: '(EnumItem)',
							},
							insertText: 'SubText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TitlebarText': {
							label: {
								name: 'TitlebarText',
								type: '(EnumItem)',
							},
							insertText: 'TitlebarText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BrightText': {
							label: {
								name: 'BrightText',
								type: '(EnumItem)',
							},
							insertText: 'BrightText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DimmedText': {
							label: {
								name: 'DimmedText',
								type: '(EnumItem)',
							},
							insertText: 'DimmedText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LinkText': {
							label: {
								name: 'LinkText',
								type: '(EnumItem)',
							},
							insertText: 'LinkText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WarningText': {
							label: {
								name: 'WarningText',
								type: '(EnumItem)',
							},
							insertText: 'WarningText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ErrorText': {
							label: {
								name: 'ErrorText',
								type: '(EnumItem)',
							},
							insertText: 'ErrorText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InfoText': {
							label: {
								name: 'InfoText',
								type: '(EnumItem)',
							},
							insertText: 'InfoText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SensitiveText': {
							label: {
								name: 'SensitiveText',
								type: '(EnumItem)',
							},
							insertText: 'SensitiveText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptSideWidget': {
							label: {
								name: 'ScriptSideWidget',
								type: '(EnumItem)',
							},
							insertText: 'ScriptSideWidget',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptBackground': {
							label: {
								name: 'ScriptBackground',
								type: '(EnumItem)',
							},
							insertText: 'ScriptBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptText': {
							label: {
								name: 'ScriptText',
								type: '(EnumItem)',
							},
							insertText: 'ScriptText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptSelectionText': {
							label: {
								name: 'ScriptSelectionText',
								type: '(EnumItem)',
							},
							insertText: 'ScriptSelectionText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptSelectionBackground': {
							label: {
								name: 'ScriptSelectionBackground',
								type: '(EnumItem)',
							},
							insertText: 'ScriptSelectionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptFindSelectionBackground': {
							label: {
								name: 'ScriptFindSelectionBackground',
								type: '(EnumItem)',
							},
							insertText: 'ScriptFindSelectionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptMatchingWordSelectionBackground': {
							label: {
								name: 'ScriptMatchingWordSelectionBackground',
								type: '(EnumItem)',
							},
							insertText: 'ScriptMatchingWordSelectionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptOperator': {
							label: {
								name: 'ScriptOperator',
								type: '(EnumItem)',
							},
							insertText: 'ScriptOperator',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptNumber': {
							label: {
								name: 'ScriptNumber',
								type: '(EnumItem)',
							},
							insertText: 'ScriptNumber',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptString': {
							label: {
								name: 'ScriptString',
								type: '(EnumItem)',
							},
							insertText: 'ScriptString',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptComment': {
							label: {
								name: 'ScriptComment',
								type: '(EnumItem)',
							},
							insertText: 'ScriptComment',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptKeyword': {
							label: {
								name: 'ScriptKeyword',
								type: '(EnumItem)',
							},
							insertText: 'ScriptKeyword',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptBuiltInFunction': {
							label: {
								name: 'ScriptBuiltInFunction',
								type: '(EnumItem)',
							},
							insertText: 'ScriptBuiltInFunction',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptWarning': {
							label: {
								name: 'ScriptWarning',
								type: '(EnumItem)',
							},
							insertText: 'ScriptWarning',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptError': {
							label: {
								name: 'ScriptError',
								type: '(EnumItem)',
							},
							insertText: 'ScriptError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptWhitespace': {
							label: {
								name: 'ScriptWhitespace',
								type: '(EnumItem)',
							},
							insertText: 'ScriptWhitespace',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptRuler': {
							label: {
								name: 'ScriptRuler',
								type: '(EnumItem)',
							},
							insertText: 'ScriptRuler',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DebuggerCurrentLine': {
							label: {
								name: 'DebuggerCurrentLine',
								type: '(EnumItem)',
							},
							insertText: 'DebuggerCurrentLine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DebuggerErrorLine': {
							label: {
								name: 'DebuggerErrorLine',
								type: '(EnumItem)',
							},
							insertText: 'DebuggerErrorLine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptEditorCurrentLine': {
							label: {
								name: 'ScriptEditorCurrentLine',
								type: '(EnumItem)',
							},
							insertText: 'ScriptEditorCurrentLine',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffFilePathText': {
							label: {
								name: 'DiffFilePathText',
								type: '(EnumItem)',
							},
							insertText: 'DiffFilePathText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffTextHunkInfo': {
							label: {
								name: 'DiffTextHunkInfo',
								type: '(EnumItem)',
							},
							insertText: 'DiffTextHunkInfo',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffTextNoChange': {
							label: {
								name: 'DiffTextNoChange',
								type: '(EnumItem)',
							},
							insertText: 'DiffTextNoChange',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffTextAddition': {
							label: {
								name: 'DiffTextAddition',
								type: '(EnumItem)',
							},
							insertText: 'DiffTextAddition',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffTextDeletion': {
							label: {
								name: 'DiffTextDeletion',
								type: '(EnumItem)',
							},
							insertText: 'DiffTextDeletion',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffTextSeparatorBackground': {
							label: {
								name: 'DiffTextSeparatorBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffTextSeparatorBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffTextNoChangeBackground': {
							label: {
								name: 'DiffTextNoChangeBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffTextNoChangeBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffTextAdditionBackground': {
							label: {
								name: 'DiffTextAdditionBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffTextAdditionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffTextDeletionBackground': {
							label: {
								name: 'DiffTextDeletionBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffTextDeletionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffLineNum': {
							label: {
								name: 'DiffLineNum',
								type: '(EnumItem)',
							},
							insertText: 'DiffLineNum',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffLineNumSeparatorBackground': {
							label: {
								name: 'DiffLineNumSeparatorBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffLineNumSeparatorBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffLineNumNoChangeBackground': {
							label: {
								name: 'DiffLineNumNoChangeBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffLineNumNoChangeBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffLineNumAdditionBackground': {
							label: {
								name: 'DiffLineNumAdditionBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffLineNumAdditionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffLineNumDeletionBackground': {
							label: {
								name: 'DiffLineNumDeletionBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffLineNumDeletionBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffFilePathBackground': {
							label: {
								name: 'DiffFilePathBackground',
								type: '(EnumItem)',
							},
							insertText: 'DiffFilePathBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DiffFilePathBorder': {
							label: {
								name: 'DiffFilePathBorder',
								type: '(EnumItem)',
							},
							insertText: 'DiffFilePathBorder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatIncomingBgColor': {
							label: {
								name: 'ChatIncomingBgColor',
								type: '(EnumItem)',
							},
							insertText: 'ChatIncomingBgColor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatIncomingTextColor': {
							label: {
								name: 'ChatIncomingTextColor',
								type: '(EnumItem)',
							},
							insertText: 'ChatIncomingTextColor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatOutgoingBgColor': {
							label: {
								name: 'ChatOutgoingBgColor',
								type: '(EnumItem)',
							},
							insertText: 'ChatOutgoingBgColor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatOutgoingTextColor': {
							label: {
								name: 'ChatOutgoingTextColor',
								type: '(EnumItem)',
							},
							insertText: 'ChatOutgoingTextColor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ChatModeratedMessageColor': {
							label: {
								name: 'ChatModeratedMessageColor',
								type: '(EnumItem)',
							},
							insertText: 'ChatModeratedMessageColor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Separator': {
							label: {
								name: 'Separator',
								type: '(EnumItem)',
							},
							insertText: 'Separator',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonBorder': {
							label: {
								name: 'ButtonBorder',
								type: '(EnumItem)',
							},
							insertText: 'ButtonBorder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ButtonText': {
							label: {
								name: 'ButtonText',
								type: '(EnumItem)',
							},
							insertText: 'ButtonText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InputFieldBorder': {
							label: {
								name: 'InputFieldBorder',
								type: '(EnumItem)',
							},
							insertText: 'InputFieldBorder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CheckedFieldBackground': {
							label: {
								name: 'CheckedFieldBackground',
								type: '(EnumItem)',
							},
							insertText: 'CheckedFieldBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CheckedFieldBorder': {
							label: {
								name: 'CheckedFieldBorder',
								type: '(EnumItem)',
							},
							insertText: 'CheckedFieldBorder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'CheckedFieldIndicator': {
							label: {
								name: 'CheckedFieldIndicator',
								type: '(EnumItem)',
							},
							insertText: 'CheckedFieldIndicator',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HeaderSection': {
							label: {
								name: 'HeaderSection',
								type: '(EnumItem)',
							},
							insertText: 'HeaderSection',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Midlight': {
							label: {
								name: 'Midlight',
								type: '(EnumItem)',
							},
							insertText: 'Midlight',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'StatusBar': {
							label: {
								name: 'StatusBar',
								type: '(EnumItem)',
							},
							insertText: 'StatusBar',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DialogButton': {
							label: {
								name: 'DialogButton',
								type: '(EnumItem)',
							},
							insertText: 'DialogButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DialogButtonText': {
							label: {
								name: 'DialogButtonText',
								type: '(EnumItem)',
							},
							insertText: 'DialogButtonText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DialogButtonBorder': {
							label: {
								name: 'DialogButtonBorder',
								type: '(EnumItem)',
							},
							insertText: 'DialogButtonBorder',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DialogMainButton': {
							label: {
								name: 'DialogMainButton',
								type: '(EnumItem)',
							},
							insertText: 'DialogMainButton',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DialogMainButtonText': {
							label: {
								name: 'DialogMainButtonText',
								type: '(EnumItem)',
							},
							insertText: 'DialogMainButtonText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InfoBarWarningBackground': {
							label: {
								name: 'InfoBarWarningBackground',
								type: '(EnumItem)',
							},
							insertText: 'InfoBarWarningBackground',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InfoBarWarningText': {
							label: {
								name: 'InfoBarWarningText',
								type: '(EnumItem)',
							},
							insertText: 'InfoBarWarningText',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptMethod': {
							label: {
								name: 'ScriptMethod',
								type: '(EnumItem)',
							},
							insertText: 'ScriptMethod',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptProperty': {
							label: {
								name: 'ScriptProperty',
								type: '(EnumItem)',
							},
							insertText: 'ScriptProperty',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptNil': {
							label: {
								name: 'ScriptNil',
								type: '(EnumItem)',
							},
							insertText: 'ScriptNil',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptBool': {
							label: {
								name: 'ScriptBool',
								type: '(EnumItem)',
							},
							insertText: 'ScriptBool',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptFunction': {
							label: {
								name: 'ScriptFunction',
								type: '(EnumItem)',
							},
							insertText: 'ScriptFunction',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptLocal': {
							label: {
								name: 'ScriptLocal',
								type: '(EnumItem)',
							},
							insertText: 'ScriptLocal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptSelf': {
							label: {
								name: 'ScriptSelf',
								type: '(EnumItem)',
							},
							insertText: 'ScriptSelf',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptLuauKeyword': {
							label: {
								name: 'ScriptLuauKeyword',
								type: '(EnumItem)',
							},
							insertText: 'ScriptLuauKeyword',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptFunctionName': {
							label: {
								name: 'ScriptFunctionName',
								type: '(EnumItem)',
							},
							insertText: 'ScriptFunctionName',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptTodo': {
							label: {
								name: 'ScriptTodo',
								type: '(EnumItem)',
							},
							insertText: 'ScriptTodo',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ScriptBracket': {
							label: {
								name: 'ScriptBracket',
								type: '(EnumItem)',
							},
							insertText: 'ScriptBracket',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AttributeCog': {
							label: {
								name: 'AttributeCog',
								type: '(EnumItem)',
							},
							insertText: 'AttributeCog',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'StudioStyleGuideModifier': {
				label: {
					name: 'StudioStyleGuideModifier',
					type: '(Enum)',
				},
				insertText: 'StudioStyleGuideModifier',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideModifier)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideModifier)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Selected': {
							label: {
								name: 'Selected',
								type: '(EnumItem)',
							},
							insertText: 'Selected',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideModifier)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Pressed': {
							label: {
								name: 'Pressed',
								type: '(EnumItem)',
							},
							insertText: 'Pressed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideModifier)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Disabled': {
							label: {
								name: 'Disabled',
								type: '(EnumItem)',
							},
							insertText: 'Disabled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideModifier)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hover': {
							label: {
								name: 'Hover',
								type: '(EnumItem)',
							},
							insertText: 'Hover',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideModifier)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Style': {
				label: {
					name: 'Style',
					type: '(Enum)',
				},
				insertText: 'Style',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Style)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'AlternatingSupports': {
							label: {
								name: 'AlternatingSupports',
								type: '(EnumItem)',
							},
							insertText: 'AlternatingSupports',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Style)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BridgeStyleSupports': {
							label: {
								name: 'BridgeStyleSupports',
								type: '(EnumItem)',
							},
							insertText: 'BridgeStyleSupports',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Style)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NoSupports': {
							label: {
								name: 'NoSupports',
								type: '(EnumItem)',
							},
							insertText: 'NoSupports',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Style)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SurfaceConstraint': {
				label: {
					name: 'SurfaceConstraint',
					type: '(Enum)',
				},
				insertText: 'SurfaceConstraint',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceConstraint)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceConstraint)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hinge': {
							label: {
								name: 'Hinge',
								type: '(EnumItem)',
							},
							insertText: 'Hinge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceConstraint)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SteppingMotor': {
							label: {
								name: 'SteppingMotor',
								type: '(EnumItem)',
							},
							insertText: 'SteppingMotor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceConstraint)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Motor': {
							label: {
								name: 'Motor',
								type: '(EnumItem)',
							},
							insertText: 'Motor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceConstraint)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SurfaceGuiSizingMode': {
				label: {
					name: 'SurfaceGuiSizingMode',
					type: '(Enum)',
				},
				insertText: 'SurfaceGuiSizingMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceGuiSizingMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'FixedSize': {
							label: {
								name: 'FixedSize',
								type: '(EnumItem)',
							},
							insertText: 'FixedSize',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceGuiSizingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PixelsPerStud': {
							label: {
								name: 'PixelsPerStud',
								type: '(EnumItem)',
							},
							insertText: 'PixelsPerStud',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceGuiSizingMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SurfaceType': {
				label: {
					name: 'SurfaceType',
					type: '(Enum)',
				},
				insertText: 'SurfaceType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Smooth': {
							label: {
								name: 'Smooth',
								type: '(EnumItem)',
							},
							insertText: 'Smooth',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Glue': {
							label: {
								name: 'Glue',
								type: '(EnumItem)',
							},
							insertText: 'Glue',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Weld': {
							label: {
								name: 'Weld',
								type: '(EnumItem)',
							},
							insertText: 'Weld',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Studs': {
							label: {
								name: 'Studs',
								type: '(EnumItem)',
							},
							insertText: 'Studs',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Inlet': {
							label: {
								name: 'Inlet',
								type: '(EnumItem)',
							},
							insertText: 'Inlet',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Universal': {
							label: {
								name: 'Universal',
								type: '(EnumItem)',
							},
							insertText: 'Universal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Hinge': {
							label: {
								name: 'Hinge',
								type: '(EnumItem)',
							},
							insertText: 'Hinge',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Motor': {
							label: {
								name: 'Motor',
								type: '(EnumItem)',
							},
							insertText: 'Motor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SteppingMotor': {
							label: {
								name: 'SteppingMotor',
								type: '(EnumItem)',
							},
							insertText: 'SteppingMotor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'SmoothNoOutlines': {
							label: {
								name: 'SmoothNoOutlines',
								type: '(EnumItem)',
							},
							insertText: 'SmoothNoOutlines',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'SwipeDirection': {
				label: {
					name: 'SwipeDirection',
					type: '(Enum)',
				},
				insertText: 'SwipeDirection',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SwipeDirection)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SwipeDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SwipeDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Up': {
							label: {
								name: 'Up',
								type: '(EnumItem)',
							},
							insertText: 'Up',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SwipeDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Down': {
							label: {
								name: 'Down',
								type: '(EnumItem)',
							},
							insertText: 'Down',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SwipeDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/SwipeDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TableMajorAxis': {
				label: {
					name: 'TableMajorAxis',
					type: '(Enum)',
				},
				insertText: 'TableMajorAxis',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TableMajorAxis)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'RowMajor': {
							label: {
								name: 'RowMajor',
								type: '(EnumItem)',
							},
							insertText: 'RowMajor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TableMajorAxis)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ColumnMajor': {
							label: {
								name: 'ColumnMajor',
								type: '(EnumItem)',
							},
							insertText: 'ColumnMajor',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TableMajorAxis)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'Technology': {
				label: {
					name: 'Technology',
					type: '(Enum)',
				},
				insertText: 'Technology',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Technology)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Compatibility': {
							label: {
								name: 'Compatibility',
								type: '(EnumItem)',
							},
							insertText: 'Compatibility',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Technology)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Voxel': {
							label: {
								name: 'Voxel',
								type: '(EnumItem)',
							},
							insertText: 'Voxel',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Technology)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ShadowMap': {
							label: {
								name: 'ShadowMap',
								type: '(EnumItem)',
							},
							insertText: 'ShadowMap',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Technology)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Legacy': {
							label: {
								name: 'Legacy',
								type: '(EnumItem)',
							},
							insertText: 'Legacy',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Technology)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Future': {
							label: {
								name: 'Future',
								type: '(EnumItem)',
							},
							insertText: 'Future',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/Technology)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TeleportMethod': {
				label: {
					name: 'TeleportMethod',
					type: '(Enum)',
				},
				insertText: 'TeleportMethod',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportMethod)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'TeleportToSpawnByName': {
							label: {
								name: 'TeleportToSpawnByName',
								type: '(EnumItem)',
							},
							insertText: 'TeleportToSpawnByName',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportToPlaceInstance': {
							label: {
								name: 'TeleportToPlaceInstance',
								type: '(EnumItem)',
							},
							insertText: 'TeleportToPlaceInstance',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportToPrivateServer': {
							label: {
								name: 'TeleportToPrivateServer',
								type: '(EnumItem)',
							},
							insertText: 'TeleportToPrivateServer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportPartyAsync': {
							label: {
								name: 'TeleportPartyAsync',
								type: '(EnumItem)',
							},
							insertText: 'TeleportPartyAsync',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TeleportUnknown': {
							label: {
								name: 'TeleportUnknown',
								type: '(EnumItem)',
							},
							insertText: 'TeleportUnknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TeleportResult': {
				label: {
					name: 'TeleportResult',
					type: '(Enum)',
				},
				insertText: 'TeleportResult',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Success': {
							label: {
								name: 'Success',
								type: '(EnumItem)',
							},
							insertText: 'Success',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Failure': {
							label: {
								name: 'Failure',
								type: '(EnumItem)',
							},
							insertText: 'Failure',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GameNotFound': {
							label: {
								name: 'GameNotFound',
								type: '(EnumItem)',
							},
							insertText: 'GameNotFound',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GameEnded': {
							label: {
								name: 'GameEnded',
								type: '(EnumItem)',
							},
							insertText: 'GameEnded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'GameFull': {
							label: {
								name: 'GameFull',
								type: '(EnumItem)',
							},
							insertText: 'GameFull',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Unauthorized': {
							label: {
								name: 'Unauthorized',
								type: '(EnumItem)',
							},
							insertText: 'Unauthorized',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Flooded': {
							label: {
								name: 'Flooded',
								type: '(EnumItem)',
							},
							insertText: 'Flooded',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'IsTeleporting': {
							label: {
								name: 'IsTeleporting',
								type: '(EnumItem)',
							},
							insertText: 'IsTeleporting',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TeleportState': {
				label: {
					name: 'TeleportState',
					type: '(Enum)',
				},
				insertText: 'TeleportState',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportState)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'RequestedFromServer': {
							label: {
								name: 'RequestedFromServer',
								type: '(EnumItem)',
							},
							insertText: 'RequestedFromServer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Started': {
							label: {
								name: 'Started',
								type: '(EnumItem)',
							},
							insertText: 'Started',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'WaitingForServer': {
							label: {
								name: 'WaitingForServer',
								type: '(EnumItem)',
							},
							insertText: 'WaitingForServer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Failed': {
							label: {
								name: 'Failed',
								type: '(EnumItem)',
							},
							insertText: 'Failed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InProgress': {
							label: {
								name: 'InProgress',
								type: '(EnumItem)',
							},
							insertText: 'InProgress',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TeleportType': {
				label: {
					name: 'TeleportType',
					type: '(Enum)',
				},
				insertText: 'TeleportType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'ToPlace': {
							label: {
								name: 'ToPlace',
								type: '(EnumItem)',
							},
							insertText: 'ToPlace',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ToInstance': {
							label: {
								name: 'ToInstance',
								type: '(EnumItem)',
							},
							insertText: 'ToInstance',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ToReservedServer': {
							label: {
								name: 'ToReservedServer',
								type: '(EnumItem)',
							},
							insertText: 'ToReservedServer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TeleportType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TerrainAcquisitionMethod': {
				label: {
					name: 'TerrainAcquisitionMethod',
					type: '(Enum)',
				},
				insertText: 'TerrainAcquisitionMethod',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Legacy': {
							label: {
								name: 'Legacy',
								type: '(EnumItem)',
							},
							insertText: 'Legacy',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Template': {
							label: {
								name: 'Template',
								type: '(EnumItem)',
							},
							insertText: 'Template',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Generate': {
							label: {
								name: 'Generate',
								type: '(EnumItem)',
							},
							insertText: 'Generate',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Import': {
							label: {
								name: 'Import',
								type: '(EnumItem)',
							},
							insertText: 'Import',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Convert': {
							label: {
								name: 'Convert',
								type: '(EnumItem)',
							},
							insertText: 'Convert',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EditAddTool': {
							label: {
								name: 'EditAddTool',
								type: '(EnumItem)',
							},
							insertText: 'EditAddTool',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EditSeaLevelTool': {
							label: {
								name: 'EditSeaLevelTool',
								type: '(EnumItem)',
							},
							insertText: 'EditSeaLevelTool',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'EditReplaceTool': {
							label: {
								name: 'EditReplaceTool',
								type: '(EnumItem)',
							},
							insertText: 'EditReplaceTool',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RegionFillTool': {
							label: {
								name: 'RegionFillTool',
								type: '(EnumItem)',
							},
							insertText: 'RegionFillTool',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RegionPasteTool': {
							label: {
								name: 'RegionPasteTool',
								type: '(EnumItem)',
							},
							insertText: 'RegionPasteTool',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Other': {
							label: {
								name: 'Other',
								type: '(EnumItem)',
							},
							insertText: 'Other',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TerrainAcquisitionMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TextFilterContext': {
				label: {
					name: 'TextFilterContext',
					type: '(Enum)',
				},
				insertText: 'TextFilterContext',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextFilterContext)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'PublicChat': {
							label: {
								name: 'PublicChat',
								type: '(EnumItem)',
							},
							insertText: 'PublicChat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextFilterContext)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PrivateChat': {
							label: {
								name: 'PrivateChat',
								type: '(EnumItem)',
							},
							insertText: 'PrivateChat',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextFilterContext)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TextInputType': {
				label: {
					name: 'TextInputType',
					type: '(Enum)',
				},
				insertText: 'TextInputType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NoSuggestions': {
							label: {
								name: 'NoSuggestions',
								type: '(EnumItem)',
							},
							insertText: 'NoSuggestions',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Number': {
							label: {
								name: 'Number',
								type: '(EnumItem)',
							},
							insertText: 'Number',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Email': {
							label: {
								name: 'Email',
								type: '(EnumItem)',
							},
							insertText: 'Email',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Phone': {
							label: {
								name: 'Phone',
								type: '(EnumItem)',
							},
							insertText: 'Phone',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Password': {
							label: {
								name: 'Password',
								type: '(EnumItem)',
							},
							insertText: 'Password',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PasswordShown': {
							label: {
								name: 'PasswordShown',
								type: '(EnumItem)',
							},
							insertText: 'PasswordShown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Username': {
							label: {
								name: 'Username',
								type: '(EnumItem)',
							},
							insertText: 'Username',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TextTruncate': {
				label: {
					name: 'TextTruncate',
					type: '(Enum)',
				},
				insertText: 'TextTruncate',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextTruncate)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextTruncate)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AtEnd': {
							label: {
								name: 'AtEnd',
								type: '(EnumItem)',
							},
							insertText: 'AtEnd',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextTruncate)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TextXAlignment': {
				label: {
					name: 'TextXAlignment',
					type: '(Enum)',
				},
				insertText: 'TextXAlignment',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextXAlignment)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextXAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Center': {
							label: {
								name: 'Center',
								type: '(EnumItem)',
							},
							insertText: 'Center',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextXAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextXAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TextYAlignment': {
				label: {
					name: 'TextYAlignment',
					type: '(Enum)',
				},
				insertText: 'TextYAlignment',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextYAlignment)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Top': {
							label: {
								name: 'Top',
								type: '(EnumItem)',
							},
							insertText: 'Top',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextYAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Center': {
							label: {
								name: 'Center',
								type: '(EnumItem)',
							},
							insertText: 'Center',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextYAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bottom': {
							label: {
								name: 'Bottom',
								type: '(EnumItem)',
							},
							insertText: 'Bottom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextYAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TextureMode': {
				label: {
					name: 'TextureMode',
					type: '(Enum)',
				},
				insertText: 'TextureMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Stretch': {
							label: {
								name: 'Stretch',
								type: '(EnumItem)',
							},
							insertText: 'Stretch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Wrap': {
							label: {
								name: 'Wrap',
								type: '(EnumItem)',
							},
							insertText: 'Wrap',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Static': {
							label: {
								name: 'Static',
								type: '(EnumItem)',
							},
							insertText: 'Static',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TextureQueryType': {
				label: {
					name: 'TextureQueryType',
					type: '(Enum)',
				},
				insertText: 'TextureQueryType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureQueryType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NonHumanoid': {
							label: {
								name: 'NonHumanoid',
								type: '(EnumItem)',
							},
							insertText: 'NonHumanoid',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureQueryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NonHumanoidOrphaned': {
							label: {
								name: 'NonHumanoidOrphaned',
								type: '(EnumItem)',
							},
							insertText: 'NonHumanoidOrphaned',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureQueryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Humanoid': {
							label: {
								name: 'Humanoid',
								type: '(EnumItem)',
							},
							insertText: 'Humanoid',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureQueryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'HumanoidOrphaned': {
							label: {
								name: 'HumanoidOrphaned',
								type: '(EnumItem)',
							},
							insertText: 'HumanoidOrphaned',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TextureQueryType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ThreadPoolConfig': {
				label: {
					name: 'ThreadPoolConfig',
					type: '(Enum)',
				},
				insertText: 'ThreadPoolConfig',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Auto': {
							label: {
								name: 'Auto',
								type: '(EnumItem)',
							},
							insertText: 'Auto',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PerCore1': {
							label: {
								name: 'PerCore1',
								type: '(EnumItem)',
							},
							insertText: 'PerCore1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PerCore2': {
							label: {
								name: 'PerCore2',
								type: '(EnumItem)',
							},
							insertText: 'PerCore2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PerCore3': {
							label: {
								name: 'PerCore3',
								type: '(EnumItem)',
							},
							insertText: 'PerCore3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'PerCore4': {
							label: {
								name: 'PerCore4',
								type: '(EnumItem)',
							},
							insertText: 'PerCore4',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Threads1': {
							label: {
								name: 'Threads1',
								type: '(EnumItem)',
							},
							insertText: 'Threads1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Threads2': {
							label: {
								name: 'Threads2',
								type: '(EnumItem)',
							},
							insertText: 'Threads2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Threads3': {
							label: {
								name: 'Threads3',
								type: '(EnumItem)',
							},
							insertText: 'Threads3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Threads4': {
							label: {
								name: 'Threads4',
								type: '(EnumItem)',
							},
							insertText: 'Threads4',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Threads8': {
							label: {
								name: 'Threads8',
								type: '(EnumItem)',
							},
							insertText: 'Threads8',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Threads16': {
							label: {
								name: 'Threads16',
								type: '(EnumItem)',
							},
							insertText: 'Threads16',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThreadPoolConfig)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ThrottlingPriority': {
				label: {
					name: 'ThrottlingPriority',
					type: '(Enum)',
				},
				insertText: 'ThrottlingPriority',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThrottlingPriority)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Extreme': {
							label: {
								name: 'Extreme',
								type: '(EnumItem)',
							},
							insertText: 'Extreme',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThrottlingPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ElevatedOnServer': {
							label: {
								name: 'ElevatedOnServer',
								type: '(EnumItem)',
							},
							insertText: 'ElevatedOnServer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThrottlingPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThrottlingPriority)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ThumbnailSize': {
				label: {
					name: 'ThumbnailSize',
					type: '(Enum)',
				},
				insertText: 'ThumbnailSize',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailSize)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Size48x48': {
							label: {
								name: 'Size48x48',
								type: '(EnumItem)',
							},
							insertText: 'Size48x48',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size180x180': {
							label: {
								name: 'Size180x180',
								type: '(EnumItem)',
							},
							insertText: 'Size180x180',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size420x420': {
							label: {
								name: 'Size420x420',
								type: '(EnumItem)',
							},
							insertText: 'Size420x420',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size60x60': {
							label: {
								name: 'Size60x60',
								type: '(EnumItem)',
							},
							insertText: 'Size60x60',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size100x100': {
							label: {
								name: 'Size100x100',
								type: '(EnumItem)',
							},
							insertText: 'Size100x100',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size150x150': {
							label: {
								name: 'Size150x150',
								type: '(EnumItem)',
							},
							insertText: 'Size150x150',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Size352x352': {
							label: {
								name: 'Size352x352',
								type: '(EnumItem)',
							},
							insertText: 'Size352x352',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailSize)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ThumbnailType': {
				label: {
					name: 'ThumbnailType',
					type: '(Enum)',
				},
				insertText: 'ThumbnailType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'HeadShot': {
							label: {
								name: 'HeadShot',
								type: '(EnumItem)',
							},
							insertText: 'HeadShot',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AvatarBust': {
							label: {
								name: 'AvatarBust',
								type: '(EnumItem)',
							},
							insertText: 'AvatarBust',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'AvatarThumbnail': {
							label: {
								name: 'AvatarThumbnail',
								type: '(EnumItem)',
							},
							insertText: 'AvatarThumbnail',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ThumbnailType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TickCountSampleMethod': {
				label: {
					name: 'TickCountSampleMethod',
					type: '(Enum)',
				},
				insertText: 'TickCountSampleMethod',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TickCountSampleMethod)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Fast': {
							label: {
								name: 'Fast',
								type: '(EnumItem)',
							},
							insertText: 'Fast',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TickCountSampleMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Benchmark': {
							label: {
								name: 'Benchmark',
								type: '(EnumItem)',
							},
							insertText: 'Benchmark',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TickCountSampleMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Precise': {
							label: {
								name: 'Precise',
								type: '(EnumItem)',
							},
							insertText: 'Precise',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TickCountSampleMethod)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TopBottom': {
				label: {
					name: 'TopBottom',
					type: '(Enum)',
				},
				insertText: 'TopBottom',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TopBottom)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Top': {
							label: {
								name: 'Top',
								type: '(EnumItem)',
							},
							insertText: 'Top',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TopBottom)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Center': {
							label: {
								name: 'Center',
								type: '(EnumItem)',
							},
							insertText: 'Center',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TopBottom)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bottom': {
							label: {
								name: 'Bottom',
								type: '(EnumItem)',
							},
							insertText: 'Bottom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TopBottom)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TouchCameraMovementMode': {
				label: {
					name: 'TouchCameraMovementMode',
					type: '(Enum)',
				},
				insertText: 'TouchCameraMovementMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchCameraMovementMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Follow': {
							label: {
								name: 'Follow',
								type: '(EnumItem)',
							},
							insertText: 'Follow',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Classic': {
							label: {
								name: 'Classic',
								type: '(EnumItem)',
							},
							insertText: 'Classic',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Orbital': {
							label: {
								name: 'Orbital',
								type: '(EnumItem)',
							},
							insertText: 'Orbital',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchCameraMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TouchMovementMode': {
				label: {
					name: 'TouchMovementMode',
					type: '(Enum)',
				},
				insertText: 'TouchMovementMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchMovementMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Default': {
							label: {
								name: 'Default',
								type: '(EnumItem)',
							},
							insertText: 'Default',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Thumbstick': {
							label: {
								name: 'Thumbstick',
								type: '(EnumItem)',
							},
							insertText: 'Thumbstick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DPad': {
							label: {
								name: 'DPad',
								type: '(EnumItem)',
							},
							insertText: 'DPad',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Thumbpad': {
							label: {
								name: 'Thumbpad',
								type: '(EnumItem)',
							},
							insertText: 'Thumbpad',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ClickToMove': {
							label: {
								name: 'ClickToMove',
								type: '(EnumItem)',
							},
							insertText: 'ClickToMove',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'DynamicThumbstick': {
							label: {
								name: 'DynamicThumbstick',
								type: '(EnumItem)',
							},
							insertText: 'DynamicThumbstick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TouchMovementMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TriStateBoolean': {
				label: {
					name: 'TriStateBoolean',
					type: '(Enum)',
				},
				insertText: 'TriStateBoolean',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TriStateBoolean)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Unknown': {
							label: {
								name: 'Unknown',
								type: '(EnumItem)',
							},
							insertText: 'Unknown',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TriStateBoolean)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'True': {
							label: {
								name: 'True',
								type: '(EnumItem)',
							},
							insertText: 'True',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TriStateBoolean)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'False': {
							label: {
								name: 'False',
								type: '(EnumItem)',
							},
							insertText: 'False',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TriStateBoolean)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'TweenStatus': {
				label: {
					name: 'TweenStatus',
					type: '(Enum)',
				},
				insertText: 'TweenStatus',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TweenStatus)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Canceled': {
							label: {
								name: 'Canceled',
								type: '(EnumItem)',
							},
							insertText: 'Canceled',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TweenStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Completed': {
							label: {
								name: 'Completed',
								type: '(EnumItem)',
							},
							insertText: 'Completed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/TweenStatus)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'UiMessageType': {
				label: {
					name: 'UiMessageType',
					type: '(Enum)',
				},
				insertText: 'UiMessageType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UiMessageType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'UiMessageError': {
							label: {
								name: 'UiMessageError',
								type: '(EnumItem)',
							},
							insertText: 'UiMessageError',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UiMessageType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'UiMessageInfo': {
							label: {
								name: 'UiMessageInfo',
								type: '(EnumItem)',
							},
							insertText: 'UiMessageInfo',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UiMessageType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'UserCFrame': {
				label: {
					name: 'UserCFrame',
					type: '(Enum)',
				},
				insertText: 'UserCFrame',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Head': {
							label: {
								name: 'Head',
								type: '(EnumItem)',
							},
							insertText: 'Head',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftHand': {
							label: {
								name: 'LeftHand',
								type: '(EnumItem)',
							},
							insertText: 'LeftHand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightHand': {
							label: {
								name: 'RightHand',
								type: '(EnumItem)',
							},
							insertText: 'RightHand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'UserInputState': {
				label: {
					name: 'UserInputState',
					type: '(Enum)',
				},
				insertText: 'UserInputState',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Begin': {
							label: {
								name: 'Begin',
								type: '(EnumItem)',
							},
							insertText: 'Begin',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Change': {
							label: {
								name: 'Change',
								type: '(EnumItem)',
							},
							insertText: 'Change',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'End': {
							label: {
								name: 'End',
								type: '(EnumItem)',
							},
							insertText: 'End',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Cancel': {
							label: {
								name: 'Cancel',
								type: '(EnumItem)',
							},
							insertText: 'Cancel',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'UserInputType': {
				label: {
					name: 'UserInputType',
					type: '(Enum)',
				},
				insertText: 'UserInputType',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'MouseButton1': {
							label: {
								name: 'MouseButton1',
								type: '(EnumItem)',
							},
							insertText: 'MouseButton1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MouseButton2': {
							label: {
								name: 'MouseButton2',
								type: '(EnumItem)',
							},
							insertText: 'MouseButton2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MouseButton3': {
							label: {
								name: 'MouseButton3',
								type: '(EnumItem)',
							},
							insertText: 'MouseButton3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MouseWheel': {
							label: {
								name: 'MouseWheel',
								type: '(EnumItem)',
							},
							insertText: 'MouseWheel',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'MouseMovement': {
							label: {
								name: 'MouseMovement',
								type: '(EnumItem)',
							},
							insertText: 'MouseMovement',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Touch': {
							label: {
								name: 'Touch',
								type: '(EnumItem)',
							},
							insertText: 'Touch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Keyboard': {
							label: {
								name: 'Keyboard',
								type: '(EnumItem)',
							},
							insertText: 'Keyboard',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Focus': {
							label: {
								name: 'Focus',
								type: '(EnumItem)',
							},
							insertText: 'Focus',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Accelerometer': {
							label: {
								name: 'Accelerometer',
								type: '(EnumItem)',
							},
							insertText: 'Accelerometer',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gyro': {
							label: {
								name: 'Gyro',
								type: '(EnumItem)',
							},
							insertText: 'Gyro',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad1': {
							label: {
								name: 'Gamepad1',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad1',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad2': {
							label: {
								name: 'Gamepad2',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad2',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad3': {
							label: {
								name: 'Gamepad3',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad3',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad4': {
							label: {
								name: 'Gamepad4',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad4',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad5': {
							label: {
								name: 'Gamepad5',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad5',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad6': {
							label: {
								name: 'Gamepad6',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad6',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad7': {
							label: {
								name: 'Gamepad7',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad7',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Gamepad8': {
							label: {
								name: 'Gamepad8',
								type: '(EnumItem)',
							},
							insertText: 'Gamepad8',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TextInput': {
							label: {
								name: 'TextInput',
								type: '(EnumItem)',
							},
							insertText: 'TextInput',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'InputMethod': {
							label: {
								name: 'InputMethod',
								type: '(EnumItem)',
							},
							insertText: 'InputMethod',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/UserInputType)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'VRTouchpad': {
				label: {
					name: 'VRTouchpad',
					type: '(Enum)',
				},
				insertText: 'VRTouchpad',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpad)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpad)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpad)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'VRTouchpadMode': {
				label: {
					name: 'VRTouchpadMode',
					type: '(Enum)',
				},
				insertText: 'VRTouchpadMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpadMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Touch': {
							label: {
								name: 'Touch',
								type: '(EnumItem)',
							},
							insertText: 'Touch',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpadMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'VirtualThumbstick': {
							label: {
								name: 'VirtualThumbstick',
								type: '(EnumItem)',
							},
							insertText: 'VirtualThumbstick',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpadMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'ABXY': {
							label: {
								name: 'ABXY',
								type: '(EnumItem)',
							},
							insertText: 'ABXY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpadMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'VerticalAlignment': {
				label: {
					name: 'VerticalAlignment',
					type: '(Enum)',
				},
				insertText: 'VerticalAlignment',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VerticalAlignment)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Center': {
							label: {
								name: 'Center',
								type: '(EnumItem)',
							},
							insertText: 'Center',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VerticalAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Top': {
							label: {
								name: 'Top',
								type: '(EnumItem)',
							},
							insertText: 'Top',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VerticalAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Bottom': {
							label: {
								name: 'Bottom',
								type: '(EnumItem)',
							},
							insertText: 'Bottom',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VerticalAlignment)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'VerticalScrollBarPosition': {
				label: {
					name: 'VerticalScrollBarPosition',
					type: '(Enum)',
				},
				insertText: 'VerticalScrollBarPosition',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VerticalScrollBarPosition)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Left': {
							label: {
								name: 'Left',
								type: '(EnumItem)',
							},
							insertText: 'Left',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VerticalScrollBarPosition)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Right': {
							label: {
								name: 'Right',
								type: '(EnumItem)',
							},
							insertText: 'Right',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VerticalScrollBarPosition)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'VibrationMotor': {
				label: {
					name: 'VibrationMotor',
					type: '(Enum)',
				},
				insertText: 'VibrationMotor',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VibrationMotor)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Large': {
							label: {
								name: 'Large',
								type: '(EnumItem)',
							},
							insertText: 'Large',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VibrationMotor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Small': {
							label: {
								name: 'Small',
								type: '(EnumItem)',
							},
							insertText: 'Small',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VibrationMotor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftTrigger': {
							label: {
								name: 'LeftTrigger',
								type: '(EnumItem)',
							},
							insertText: 'LeftTrigger',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VibrationMotor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightTrigger': {
							label: {
								name: 'RightTrigger',
								type: '(EnumItem)',
							},
							insertText: 'RightTrigger',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VibrationMotor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LeftHand': {
							label: {
								name: 'LeftHand',
								type: '(EnumItem)',
							},
							insertText: 'LeftHand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VibrationMotor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'RightHand': {
							label: {
								name: 'RightHand',
								type: '(EnumItem)',
							},
							insertText: 'RightHand',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VibrationMotor)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'VirtualInputMode': {
				label: {
					name: 'VirtualInputMode',
					type: '(Enum)',
				},
				insertText: 'VirtualInputMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VirtualInputMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Recording': {
							label: {
								name: 'Recording',
								type: '(EnumItem)',
							},
							insertText: 'Recording',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VirtualInputMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Playing': {
							label: {
								name: 'Playing',
								type: '(EnumItem)',
							},
							insertText: 'Playing',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VirtualInputMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/VirtualInputMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'WaterDirection': {
				label: {
					name: 'WaterDirection',
					type: '(Enum)',
				},
				insertText: 'WaterDirection',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterDirection)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'NegX': {
							label: {
								name: 'NegX',
								type: '(EnumItem)',
							},
							insertText: 'NegX',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'X': {
							label: {
								name: 'X',
								type: '(EnumItem)',
							},
							insertText: 'X',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NegY': {
							label: {
								name: 'NegY',
								type: '(EnumItem)',
							},
							insertText: 'NegY',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Y': {
							label: {
								name: 'Y',
								type: '(EnumItem)',
							},
							insertText: 'Y',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'NegZ': {
							label: {
								name: 'NegZ',
								type: '(EnumItem)',
							},
							insertText: 'NegZ',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Z': {
							label: {
								name: 'Z',
								type: '(EnumItem)',
							},
							insertText: 'Z',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterDirection)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'WaterForce': {
				label: {
					name: 'WaterForce',
					type: '(Enum)',
				},
				insertText: 'WaterForce',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterForce)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterForce)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Small': {
							label: {
								name: 'Small',
								type: '(EnumItem)',
							},
							insertText: 'Small',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterForce)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Medium': {
							label: {
								name: 'Medium',
								type: '(EnumItem)',
							},
							insertText: 'Medium',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterForce)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Strong': {
							label: {
								name: 'Strong',
								type: '(EnumItem)',
							},
							insertText: 'Strong',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterForce)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Max': {
							label: {
								name: 'Max',
								type: '(EnumItem)',
							},
							insertText: 'Max',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WaterForce)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'WrapLayerDebugMode': {
				label: {
					name: 'WrapLayerDebugMode',
					type: '(Enum)',
				},
				insertText: 'WrapLayerDebugMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapLayerDebugMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapLayerDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BoundCage': {
							label: {
								name: 'BoundCage',
								type: '(EnumItem)',
							},
							insertText: 'BoundCage',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapLayerDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'LayerCage': {
							label: {
								name: 'LayerCage',
								type: '(EnumItem)',
							},
							insertText: 'LayerCage',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapLayerDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'BoundCageAndLinks': {
							label: {
								name: 'BoundCageAndLinks',
								type: '(EnumItem)',
							},
							insertText: 'BoundCageAndLinks',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapLayerDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Reference': {
							label: {
								name: 'Reference',
								type: '(EnumItem)',
							},
							insertText: 'Reference',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapLayerDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Rbf': {
							label: {
								name: 'Rbf',
								type: '(EnumItem)',
							},
							insertText: 'Rbf',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapLayerDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'WrapTargetDebugMode': {
				label: {
					name: 'WrapTargetDebugMode',
					type: '(Enum)',
				},
				insertText: 'WrapTargetDebugMode',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'None': {
							label: {
								name: 'None',
								type: '(EnumItem)',
							},
							insertText: 'None',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TargetCageOriginal': {
							label: {
								name: 'TargetCageOriginal',
								type: '(EnumItem)',
							},
							insertText: 'TargetCageOriginal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TargetCageCompressed': {
							label: {
								name: 'TargetCageCompressed',
								type: '(EnumItem)',
							},
							insertText: 'TargetCageCompressed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TargetCageInterface': {
							label: {
								name: 'TargetCageInterface',
								type: '(EnumItem)',
							},
							insertText: 'TargetCageInterface',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TargetLayerCageOriginal': {
							label: {
								name: 'TargetLayerCageOriginal',
								type: '(EnumItem)',
							},
							insertText: 'TargetLayerCageOriginal',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TargetLayerCageCompressed': {
							label: {
								name: 'TargetLayerCageCompressed',
								type: '(EnumItem)',
							},
							insertText: 'TargetLayerCageCompressed',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'TargetLayerInterface': {
							label: {
								name: 'TargetLayerInterface',
								type: '(EnumItem)',
							},
							insertText: 'TargetLayerInterface',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Rbf': {
							label: {
								name: 'Rbf',
								type: '(EnumItem)',
							},
							insertText: 'Rbf',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/WrapTargetDebugMode)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},
			'ZIndexBehavior': {
				label: {
					name: 'ZIndexBehavior',
					type: '(Enum)',
				},
				insertText: 'ZIndexBehavior',
				documentation: {
					value: [
						'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ZIndexBehavior)',
					].join('\n'),
				},
				__children__: {
					EnumMember: {

						'Global': {
							label: {
								name: 'Global',
								type: '(EnumItem)',
							},
							insertText: 'Global',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ZIndexBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

						'Sibling': {
							label: {
								name: 'Sibling',
								type: '(EnumItem)',
							},
							insertText: 'Sibling',
							documentation: {
								value: [
									'[View documentation](https://developer.roblox.com/en-us/api-reference/enum/ZIndexBehavior)',
								].join('\n'),
							},
							__children__: {},
							__using__: ['classes/EnumItem'],
						},

					},
				},
				__using__: ['classes/Enum'],
			},

		},
	};
});