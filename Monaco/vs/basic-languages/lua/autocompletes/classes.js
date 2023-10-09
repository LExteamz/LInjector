

define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Class": {
			"Axes": {
				__children__: {
					"Function": {
						"new()": {
							insertText: "new(${1:axes\: ...})",
							sortText: ".new",
							documentation: {
								value: [
									"```lua\nfunction new(axes: ...)\n  -> Axes\n```",
									"",
									"Creates a new Axes using list of axes and/or faces. NormalIds (faces) are converted to the corresponding axes.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Axes)",
								].join("\n")
							},
						},
					},
				},
			},
			"BrickColor": {
				__children__: {
					"Function": {
						"new()": {
							insertText: "new(${1:...})",
							sortText: ".new",
							documentation: {
								value: [
									"```lua\nfunction new(...)\n  -> BrickColor\nfunction new(val: number)\nfunction new(r: number, g: number, b: number)\nfunction new(val: string)\nfunction new(color: Color3)\n```",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/BrickColor)",
								].join("\n")
							},
						},
						"palette()": {
							insertText: "palette(${1:paletteValue})",
							sortText: ".palette",
							documentation: {
								value: [
									"```lua\nfunction palette(paletteValue: number)\n  -> BrickColor\n```",
									"",
									"Constructs a BrickColor from its palette index.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/BrickColor)",
								].join("\n")
							},
						},
						"random()": {
							insertText: "random()",
							sortText: ".random",
							documentation: {
								value: [
									"```lua\nfunction random()\n  -> BrickColor\n```",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/BrickColor)",
								].join("\n")
							},
						},
					},
				},
			},
			"CFrame": {
				__children__: {
					"Function": {
						"new()": {
							insertText: "new(${1:...})",
							sortText: ".new",
							documentation: {
								value: [
									"```lua\nfunction new(...)\n  -> CFrame\nfunction new(pos: Vector3)\nfunction new(pos: Vector3, lookAt: Vector3)\nfunction new(x: number, y: number, z: number)\nfunction new(x: number, y: number, z: number, qX: number, qY: number, qZ: number, qW: number)\nfunction new(x: number, y: number, z: number, R00: number, R01: number, R02: number, R10: number, R11: number, R12: number, R20: number, R21: number, R22: number)\n```",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CFrame)",
								].join("\n")
							},
						},
						"Angles()": {
							insertText: "Angles(${1:rx}, ${2:ry}, ${3:rz})",
							sortText: ".Angles",
							documentation: {
								value: [
									"```lua\nfunction Angles(rx: number, ry: number, rz: number)\n  -> CFrame\n```",
									"",
									"Equivalent to fromEulerAnglesXYZ.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CFrame)",
								].join("\n")
							},
						},
						"fromMatrix()": {
							insertText: "fromMatrix(${1:pos}, ${2:vX}, ${3:vY}, ${4:vZ})",
							sortText: ".fromMatrix",
							documentation: {
								value: [
									"```lua\nfunction fromMatrix(pos: Vector3, vX: Vector3, vY: Vector3, vZ: Vector3)\n  -> CFrame\n```",
									"",
									"Creates a CFrame from a translation and two columns of a rotation matrix. The third column is calculated as `vX:Cross(vY).Unit`",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CFrame)",
								].join("\n")
							},
						},
						"fromOrientation()": {
							insertText: "fromOrientation(${1:rx}, ${2:ry}, ${3:rz})",
							sortText: ".fromOrientation",
							documentation: {
								value: [
									"```lua\nfunction fromOrientation(rx: number, ry: number, rz: number)\n  -> CFrame\n```",
									"",
									"Equivalent to fromEulerAnglesYXZ.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CFrame)",
								].join("\n")
							},
						},
						"lookAt()": {
							insertText: "lookAt(${1:at}, ${2:target}, ${3:up})",
							sortText: ".lookAt",
							documentation: {
								value: [
									"```lua\nfunction lookAt(at: Vector3, target: Vector3, up: Vector3)\n  -> CFrame\n```",
									"",
									"Creates a CFrame at a given position looking at a given target position, with a specific programmer provided up direction.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CFrame)",
								].join("\n")
							},
						},
						"fromEulerAnglesYXZ()": {
							insertText: "fromEulerAnglesYXZ(${1:rx}, ${2:ry}, ${3:rz})",
							sortText: ".fromEulerAnglesYXZ",
							documentation: {
								value: [
									"```lua\nfunction fromEulerAnglesYXZ(rx: number, ry: number, rz: number)\n  -> CFrame\n```",
									"",
									"Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, X, Y order.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CFrame)",
								].join("\n")
							},
						},
						"fromAxisAngle()": {
							insertText: "fromAxisAngle(${1:v}, ${2:r})",
							sortText: ".fromAxisAngle",
							documentation: {
								value: [
									"```lua\nfunction fromAxisAngle(v: Vector3, r: number)\n  -> CFrame\n```",
									"",
									"Creates a rotated CFrame from a Unit Vector3 and a rotation in radians",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CFrame)",
								].join("\n")
							},
						},
						"fromEulerAnglesXYZ()": {
							insertText: "fromEulerAnglesXYZ(${1:rx}, ${2:ry}, ${3:rz})",
							sortText: ".fromEulerAnglesXYZ",
							documentation: {
								value: [
									"```lua\nfunction fromEulerAnglesXYZ(rx: number, ry: number, rz: number)\n  -> CFrame\n```",
									"",
									"Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, Y, X order.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CFrame)",
								].join("\n")
							},
						},
					},
				},
			},
			"Color3": {
				__children__: {
					"Function": {
						"new()": {
							insertText: "new(${1:red}, ${2:green}, ${3:blue})",
							sortText: ".new",
							documentation: {
								value: [
									"```lua\nfunction new(red: number(0), green: number(0), blue: number(0))\n  -> Color3\n```",
									"",
									"Returns a Color3 with the given red, green, and blue values. The numbers can range from 0 to 1.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Color3)",
								].join("\n")
							},
						},
						"fromHSV()": {
							insertText: "fromHSV(${1:hue}, ${2:saturation}, ${3:value})",
							sortText: ".fromHSV",
							documentation: {
								value: [
									"```lua\nfunction new(hue: number, saturation: number, value: number)\n  -> Color3\n```",
									"",
									"Creates a Color3 with the given hue, saturation, and value. The numbers can range from 0 to 1.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Color3)",
								].join("\n")
							},
						},
						"fromRGB()": {
							insertText: "fromRGB(${1:red}, ${2:green}, ${3:blue})",
							sortText: ".fromRGB",
							documentation: {
								value: [
									"```lua\nfunction new(red: number(0), green: number(0), blue: number(0))\n  -> Color3\n```",
									"",
									"Creates a Color3 with the given red, green, and blue. The numbers can range from 0 to 255.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Color3)",
								].join("\n")
							},
						},
						"toHSV()": {
							insertText: "toHSV(${1:red}, ${2:green}, ${3:blue})",
							sortText: ".toHSV",
							documentation: {
								value: [
									"```lua\nfunction toHSV(color: Color3)\n  -> number\n  2. number\n  3. number\n```",
									"",
									"Returns the hue, saturation, and value of a Color3.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Color3)",
								].join("\n")
							},
						},
					},
				},
			},
			"CatalogSearchParams": {
				__children__: {
					"Function": {
						"new()": {
							insertText: "new()",
							sortText: ".new",
							documentation: {
								value: [
									"```lua\nfunction new()\n  -> CatalogSearchParams\n```",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/CatalogSearchParams)",
								].join("\n")
							},
						},
					},
				},
			},
			"ColorSequence": {
				__children__: {
					"Function": {
						"new()": {
							insertText: "new(${1:...})",
							sortText: ".new",
							documentation: {
								value: [
									"```lua\nfunction new(...)\n  -> ColorSequence\nfunction new(c: Color3)\nfunction new(c0: Color3, c1: Color3)\nfunction new(keypoints: Array<ColorSequenceKeypoint>)\n```",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence)",
								].join("\n"),
							},
						},
					},
				},
			},
			"ColorSequenceKeypoint": {
				__children__: {
					"Function": {
						"new()": {
							insertText: "new(${1:time}, ${2:color})",
							sortText: ".new",
							documentation: {
								value: [
									"```lua\nfunction new(time: number, color: Color3)\n  -> ColorSequenceKeypoint\n```",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequenceKeypoint)",
								].join("\n"),
							},
						},
					},
				},
			},
			"DateTime": {
				__children__: {
					"Function": {
						"fromIsoDate()": {
							insertText: "fromIsoDate()",
							sortText: ".fromIsoDate",
							documentation: {
								value: [
									"```lua\nfunction now()\n  -> DateTime\n```",
									"",
									"Create a DateTime from an ISO 8601 date-time string in utc time.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/DateTime)",
								].join("\n"),
							},
						},
						"unixTimestamp()": {
							insertText: "unixTimestamp(${1:unixTimestamp})",
							sortText: ".unixTimestamp",
							documentation: {
								value: [
									"```lua\nfunction fromUnixTimestamp(unixTimestamp: integer)\n  -> DateTime\n```",
									"",
									"Create a DateTime from an ISO 8601 date-time string in utc time.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/DateTime)",
								].join("\n"),
							},
						},
						"fromUnixTimestampMillis()": {
							insertText: "fromUnixTimestampMillis(${1:unixTimestampMillis})",
							sortText: ".fromUnixTimestampMillis",
							documentation: {
								value: [
									"```lua\nfunction fromUnixTimestampMillis(unixTimestampMillis: integer)\n  -> DateTime\n```",
									"",
									"Create a Datetime from the given unixTimestampMillis. The number can range from -17987443200000 to 253402300799999.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/DateTime)",
								].join("\n"),
							},
						},
						"fromUniversalTime()": {
							insertText: "fromUniversalTime(${1:year}, ${2:month}, ${3:day}, ${4:hour}, ${5:minute}, ${6:second}, ${7:millisecond})",
							sortText: ".fromUniversalTime",
							documentation: {
								value: [
									"```lua\nfunction fromUniversalTime(year: integer(1970), month: integer(1), day: integer(1), hour: integer(0), minute: integer(0), second: integer(0), millisecond: integer(0))\n  -> DateTime\n```",
									"",
									"Create DateTime with given year, month, day, hour, minute, second and millisecond in utc time.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/DateTime)",
								].join("\n"),
							},
						},
						"fromLocalTime()": {
							insertText: "fromLocalTime(${1:year}, ${2:month}, ${3:day}, ${4:hour}, ${5:minute}, ${6:second}, ${7:millisecond})",
							sortText: ".fromLocalTime",
							documentation: {
								value: [
									"```lua\nfunction fromLocalTime(year: integer(1970), month: integer(1), day: integer(1), hour: integer(0), minute: integer(0), second: integer(0), millisecond: integer(0))\n  -> DateTime\n```",
									"",
									"Create DateTime with given year, month, day, hour, minute, second and millisecond in utc time.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/DateTime)",
								].join("\n"),
							},
						},
						"now()": {
							insertText: "now()",
							sortText: ".now",
							documentation: {
								value: [
									"```lua\nfunction now()\n  -> DateTime\n```",
									"",
									"Create DateTime representing now.",
									"",
									"[View documents](https://developer.roblox.com/en-us/api-reference/datatype/DateTime)",
								].join("\n"),
							},
						},
					},
				},
			},
			"DockWidgetPluginGuiInfo": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:"Top"}, ${2:initEnabled}, ${3:overrideEnabledRestore}, ${4:floatXSize}, ${5:floatYSize}, ${6:minWidth}, ${7:minHeight})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(initDockState: Enum.InitialDockState("Right"), initEnabled: boolean(false), overrideEnabledRestore: boolean(false), floatXSize: integer(0), floatYSize: integer(0), minWidth: integer(0), minHeight: integer(0))\n  -> DockWidgetPluginGuiInfo', '```',
									'',
									'```lua', 'initDockState: Enum.InitialDockState\n   | "Top"\n   | "Bottom"\n   | "Left"\n   | "Right"\n   | "Float"', '```',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/DockWidgetPluginGuiInfo)',
								].join('\n')
							},
						},
					},
				},
			},
			"Faces": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:normalIds\:...})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(function new(normalIds: ...)\n  -> Faces)', '```',
									'',
									'Creates a new Faces using list of faces',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Faces)',
								].join('\n')
							},
						},
					},
				},
			},
			"Instance": {

				__children__: {

					Function: {

						'new': {
							insertText: 'new("${1}", ${2:parent})',
							label: 'new()',
							documentation: {
								value: [
									'```lua', 'function new(className: string, parent: Instance)\n  -> Instance', '```',
									'',
									'Creates a new object of type val. The parent argument is optional; If it is supplied, the object will be parented to that object',
									'',
									'',
									'```lua', 'className: string\n   | "BindableFunction"\n   | "NegateOperation"\n   | "Attachment"\n   | "PrismaticConstraint"\n   | "PluginAction"\n   | "BlockMesh"\n   | "EqualizerSoundEffect"\n   | "UITextSizeConstraint"\n   | "WedgePart"\n   | "Beam"\n   | "UIListLayout"\n   | "Part"\n   | "PartOperation"\n   | "SurfaceSelection"\n   | "Humanoid"\n   | "BodyThrust"\n   | "SurfaceLight"\n   | "Fire"\n   | "SphereHandleAdornment"\n   | "BodyVelocity"\n   | "KeyframeSequence"\n   | "WorldModel"\n   | "ProximityPromptService"\n   | "DialogChoice"\n   | "HeightmapImporterService"\n   | "CSGDictionaryService"\n   | "UnionOperation"\n   | "Tool"\n   | "BodyForce"\n   | "Snap"\n   | "Handles"\n   | "Dialog"\n   | "Motor6D"\n   | "CornerWedgePart"\n   | "ReflectionMetadataClasses"\n   | "Smoke"\n   | "HumanoidDescription"\n   | "IntValue"\n   | "Weld"\n   | "BodyColors"\n   | "SelectionSphere"\n   | "ReflectionMetadataEnums"\n   | "ReflectionMetadata"\n   | "ManualGlue"\n   | "Animation"\n   | "Seat"\n   | "GetDataStoreOptions"\n   | "Actor"\n   | "BoxHandleAdornment"\n   | "ConeHandleAdornment"\n   | "StandalonePluginScripts"\n   | "TextBox"\n   | "AnimationController"\n   | "SpotLight"\n   | "SunRaysEffect"\n   | "ReflectionMetadataCallbacks"\n   | "VelocityMotor"\n   | "BlurEffect"\n   | "RenderingTest"\n   | "ArcHandles"\n   | "WeldConstraint"\n   | "VirtualInputManager"\n   | "RayValue"\n   | "TrussPart"\n   | "BodyGyro"\n   | "HumanoidController"\n   | "ForceField"\n   | "ScreenGui"\n   | "StringValue"\n   | "Vector3Value"\n   | "Bone"\n   | "SoundGroup"\n   | "FlyweightService"\n   | "ObjectValue"\n   | "Explosion"\n   | "BloomEffect"\n   | "Color3Value"\n   | "DistortionSoundEffect"\n   | "UniversalConstraint"\n   | "NoCollisionConstraint"\n   | "CylindricalConstraint"\n   | "PartOperationAsset"\n   | "Trail"\n   | "CFrameValue"\n   | "BrickColorValue"\n   | "MeshPart"\n   | "TestService"\n   | "BoolValue"\n   | "PointLight"\n   | "UIGradient"\n   | "UIStroke"\n   | "ParabolaAdornment"\n   | "UIScale"\n   | "HingeConstraint"\n   | "ReflectionMetadataFunctions"\n   | "ReflectionMetadataEnum"\n   | "VectorForce"\n   | "UIPageLayout"\n   | "VideoFrame"\n   | "Sky"\n   | "ModuleScript"\n   | "KeyframeMarker"\n   | "Rotate"\n   | "ReflectionMetadataClass"\n   | "UICorner"\n   | "Sound"\n   | "Configuration"\n   | "UIAspectRatioConstraint"\n   | "Texture"\n   | "EchoSoundEffect"\n   | "Accoutrement"\n   | "LineHandleAdornment"\n   | "TextButton"\n   | "Torque"\n   | "Team"\n   | "SpawnLocation"\n   | "SurfaceAppearance"\n   | "Frame"\n   | "TextLabel"\n   | "StarterGear"\n   | "Sparkles"\n   | "RemoteEvent"\n   | "TremoloSoundEffect"\n   | "ShirtGraphic"\n   | "ProximityPrompt"\n   | "Model"\n   | "Pants"\n   | "BodyPosition"\n   | "FlangeSoundEffect"\n   | "RocketPropulsion"\n   | "Tween"\n   | "SelectionBox"\n   | "AngularVelocity"\n   | "DataStoreSetOptions"\n   | "SkateboardController"\n   | "ChorusSoundEffect"\n   | "DataStoreIncrementOptions"\n   | "NonReplicatedCSGDictionaryService"\n   | "UIGridLayout"\n   | "BallSocketConstraint"\n   | "ReflectionMetadataYieldFunctions"\n   | "ReflectionMetadataProperties"\n   | "ReflectionMetadataMember"\n   | "ReflectionMetadataEnumItem"\n   | "UITableLayout"\n   | "DepthOfFieldEffect"\n   | "Motor"\n   | "SurfaceGui"\n   | "RotateV"\n   | "ReflectionMetadataEvents"\n   | "ColorCorrectionEffect"\n   | "NumberValue"\n   | "RopeConstraint"\n   | "ClickDetector"\n   | "NumberPose"\n   | "Player"\n   | "Animator"\n   | "LocalScript"\n   | "ParticleEmitter"\n   | "VehicleSeat"\n   | "TorsionSpringConstraint"\n   | "TeleportOptions"\n   | "Backpack"\n   | "TerrainRegion"\n   | "LocalizationTable"\n   | "UIPadding"\n   | "Accessory"\n   | "AnalyticsService"\n   | "Folder"\n   | "DebuggerWatch"\n   | "VehicleController"\n   | "Clouds"\n   | "RodConstraint"\n   | "MemoryStoreService"\n   | "ImageButton"\n   | "Script"\n   | "WrapLayer"\n   | "ImageHandleAdornment"\n   | "RotateP"\n   | "Pose"\n   | "PitchShiftSoundEffect"\n   | "AlignOrientation"\n   | "BodyAngularVelocity"\n   | "Decal"\n   | "SpringConstraint"\n   | "CylinderHandleAdornment"\n   | "AdvancedDragger"\n   | "CharacterMesh"\n   | "LineForce"\n   | "Dragger"\n   | "RemoteFunction"\n   | "ImageLabel"\n   | "AlignPosition"\n   | "ScrollingFrame"\n   | "Camera"\n   | "BindableEvent"\n   | "Shirt"\n   | "UISizeConstraint"\n   | "BillboardGui"\n   | "CompressorSoundEffect"\n   | "ViewportFrame"\n   | "SpecialMesh"\n   | "Atmosphere"\n   | "ManualWeld"\n   | "BinaryStringValue"\n   | "WrapTarget"\n   | "Keyframe"\n   | "ReverbSoundEffect"\n   | "FileMesh"', '```',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Instance)',
								].join('\n')
							},
							command: { title: "Lua", id: "editor.action.triggerSuggest" },

							__children__: {},
							__using__: ['params/InstanceClasses'],
						},
					},
				},
			},
			"NumberRange": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:min}, ${2:max})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(...)\n  -> NumberRange\nfunction new(max: number)\nfunction new(min: number, max: number)', '```',
									'',
									'Creates a new NumberRange using a maximum and optional minimum value.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/NumberRange)',
								].join('\n')
							},
						},
					},
				},
			},
			"NumberSequence": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:min}, ${2:max})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(...)\n  -> NumberSequence\nfunction new(n: number)\nfunction new(n0: number, n1: number)\nfunction new(keypoints: Array<NumberSequenceKeypoint>)', '```',
									'',
									'Creates a new NumberSequence representing an infinitely divisible sequence of numbers.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence)',
								].join('\n')
							},
						},
					},
				},
			},
			"NumberSequenceKeypoint": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:time}, ${2:value}, ${3:envelope})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(time: number, value: number, envelope: number(nil))\n  -> NumberSequenceKeypoint', '```',
									'',
									'Creates a keypoint with a specified time, value, and envelope.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequenceKeypoint)',
								].join('\n')
							},
						},
					},
				},
			},
			"PhysicalProperties": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:...})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(...)\n  -> PhysicalProperties\nfunction new(material: Enum.Material)\nfunction new(density: number, friction: number, elasticy: number)\nfunction new(density: number, friction: number, elasticy: number, frictionWeight: number, elasticyWeight: number)', '```',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/PhysicalProperties)',
								].join('\n')
							},
						},
					},
				},
			},
			"PathWaypoint": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:position}, ${2:"Walk"})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(position: Vector3, action: Enum.PathWaypointAction)\n  -> PathWaypoint', '```',
									'',
									'Creates a new PathWaypoint object.',
									'',
									'',
									'```lua', 'action: Enum.PathWaypointAction\n   | "Walk"\n   | "Jump"', '```',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/PathWaypoint)',
								].join('\n')
							},
						},
					},
				},
			},
			"Ray": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:origin}, ${2:direction})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(origin: Vector3, direction: Vector3)\n  -> Ray', '```',
									'',
									'Creates a new Ray with a given origin and direction.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Ray)',
								].join('\n')
							},
						},
					},
				},
			},
			"Region3int16": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:min}, ${2:max})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(min: Vector3int16, max: Vector3int16)\n  -> Region3int16', '```',
									'',
									'Creates a new Region3int16 out of two Vector3int16 structs.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Region3int16)',
								].join('\n')
							},
						},
					},
				},
			},
			"Random": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:seed})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(seed: number)\n  -> Random', '```',
									'',
									'Creates a new Random object using a seed pulled from an internal entropy source.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Random)',
								].join('\n')
							},
						},
					},
				},
			},
			"Region3": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:seed})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(min: Vector3, max: Vector3)\n  -> Region3', '```',
									'',
									'Creates a new Region3 out of two Vector3 values.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Region3)',
								].join('\n')
							},
						},
					},
				},
			},
			"Rect": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:...})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(...)\n  -> Rect\nfunction new(min: Vector2, max: Vector2)\nfunction new(minX: number, minY: number, maxX: number, maxY: number)', '```',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Rect)',
								].join('\n')
							},
						},
					},
				},
			},
			"RaycastParams": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new()',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new()\n  -> RaycastParams', '```',
									'',
									'Creates a new RaycastParams object.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/RaycastParams)',
								].join('\n')
							},
						},
					},
				},
			},
			"TweenInfo": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:time}, ${2:"Linear"}, ${3:"In"}, ${4:repeatCount}, ${5:reverses}, ${6:delayTime})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(time: number(1.0), easingStyle: Enum.EasingStyle("Quad"), easingDirection: Enum.EasingDirection("Out"), repeatCount: number(0), reverses: boolean(false), delayTime: number(0))\n  -> TweenInfo', '```',
									'',
									'Creates a new TweenInfo.',
									'',
									'',
									'```lua', 'easingDirection: Enum.EasingDirection\n   | "In"\n   | "Out"\n   | "InOut"\neasingStyle: Enum.EasingStyle\n   | "Linear"\n   | "Sine"\n   | "Back"\n   | "Quad"\n   | "Quart"\n   | "Quint"\n   | "Bounce"\n   | "Elastic"\n   | "Exponential"\n   | "Circular"\n   | "Cubic"', '```',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/TweenInfo)',
								].join('\n')
							},
						},
					},
				},
			},
			"UDim": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:scale}, ${2:offset})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(scale: number, offset: number)\n  -> UDim', '```',
									'',
									'Creates a new UDim from components.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/UDim)',
								].join('\n')
							},
						},
					},
				},
			},
			"UDim2": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:xScale}, ${2:xOffset}, ${3:yScale}, ${4:yOffset})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(...)\n  -> UDim2\nfunction new(xScale: number, xOffset: number, yScale: number, yOffset: number)\nfunction new(x: UDim, y: UDim)', '```',
									'',
									'Creates a new UDim2 from components.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/UDim2)',
								].join('\n')
							},
						},

						'fromOffset(${1:xOffset}, ${2:yOffset})': {
							insertText: 'new(${1:xOffset}, ${2:yOffset})',
							sortText: '.fromOffset',
							documentation: {
								value: [
									'```lua', 'function fromOffset(xOffset: number, yOffset: number)\n  -> UDim2', '```',
									'',
									'Creates a new UDim2 using pixel values.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/UDim2)',
								].join('\n')
							},
						},

						'fromScale(${1:xScale}, ${2:yScale})': {
							insertText: 'new(${1:xScale}, ${2:yScale})',
							sortText: '.fromScale',
							documentation: {
								value: [
									'```lua', 'function fromScale(xScale: number, yScale: number)\n  -> UDim2', '```',
									'',
									'Creates a new UDim2 using scale values.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/UDim2)',
								].join('\n')
							},
						},
					},
				},
			},
			"Vector3int16": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:x}, ${1:y}, ${1:z})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(x: number(0), y: number(0), z: number(0))\n  -> Vector3int16', '```',
									'',
									'Creates a new Vector3int16 using coordinate x, y, z.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Vector3int16)',
								].join('\n')
							},
						},
					},
				},
			},
			"Vector3": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:x}, ${1:y}, ${1:z})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(x: number(0), y: number(0), z: number(0))\n  -> Vector3', '```',
									'',
									'Creates a new Vector3 using coordinate x, y, z.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Vector3)',
								].join('\n')
							},
						},

						'fromAxis()': {
							insertText: 'fromAxis(${1:"X"})',
							sortText: '.fromAxis',
							documentation: {
								value: [
									'```lua', 'function fromAxis(axis: Enum.Axis)\n  -> Vector3', '```',
									'',
									'Constructs a new Vector3 for a particular axis.',
									'',
									'```lua', 'axis: Enum.Axis\n   | "X"\n   | "Y"\n   | "Z"', '```',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Vector3)',
								].join('\n')
							},
						},

						'fromNormalId()': {
							insertText: 'fromNormalId(${1:"X"})',
							sortText: '.fromNormalId',
							documentation: {
								value: [
									'```lua', 'function fromNormalId(normal: Enum.NormalId)\n  -> Vector3', '```',
									'',
									'Constructs a new Vector3 in a particular direction.',
									'',
									'```lua', 'normal: Enum.NormalId\n   | "Top"\n   | "Bottom"\n   | "Back"\n   | "Front"\n   | "Right"\n   | "Left"', '```',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Vector3)',
								].join('\n')
							},
						},
					},
				},
			},
			"Vector2": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:x}, ${2:y})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(x: number, y: number)\n  -> Vector2', '```',
									'',
									'Creates a new Vector2 using ordinates x and y.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Vector2)',
								].join('\n')
							},
						},
					},
				},
			},
			"Vector2int16": {

				__children__: {

					Function: {

						'new()': {
							insertText: 'new(${1:x}, ${2:y})',
							sortText: '.new',
							documentation: {
								value: [
									'```lua', 'function new(x: number, y: number)\n  -> Vector2int16', '```',
									'',
									'Creates a new Vector2int16 using ordinates x and y. Similar to Vector2, but uses integral coordinates.',
									'',
									'[View documents](https://developer.roblox.com/en-us/api-reference/datatype/Vector2int16)',
								].join('\n')
							},
						},
					},
				},
			},
		},
	};
});
