define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {

			'LevelOfDetail': {
				label: {
					name: 'LevelOfDetail',
					type: '(Enum.ModelLevelOfDetail)',
				},
				documentation: {
					value: [
						'Determines the amount of detail to be rendered on meshes.',
						//'',
						//'* Tags: NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Model/LevelOfDetail)',
					].join('\n')
				}
			},

			'PrimaryPart': {
				label: {
					name: 'PrimaryPart',
					type: '(BasePart)',
				},
				documentation: {
					value: [
						'Points to the Model’s primary part. The part is the BasePart that is used as a basis when positioning the model using the `Model:MoveTo` and `Model:SetPrimaryPartCFrame` functions.',
						//'',
						//'* Tags: NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Model/PrimaryPart)',
					].join('\n')
				}
			},

			'WorldPivot': {
				label: {
					name: 'WorldPivot',
					type: '(CFrame)',
				},
				documentation: {
					value: [
						'```lua',
						'--[[',
						'\t@beta This item is a beta feature used in Roblox Studio.',
						']]',
						'```',
						'The point around which a Model in Roblox Studio is translated/rotated.',
						'If the Model\'s primary part exists, the `WorldPivot` is exactly equal to the pivot of the primary part.',
						'',
						'* Tags: NotReplicated.',
						'',
						'[View DevForum post](https://devforum.roblox.com/t/pivot-points-studio-beta/1180689)',
					].join('\n')
				}
			},
		},

		Method: {

			'BreakJoints() Model': {
				insertText: 'BreakJoints()',
				label: 'BreakJoints()',
				documentation: {
					value: [
						'```lua', 'function BreakJoints()', '```',
						'',
						'Breaks connections between BaseParts, including surface connections with any adjacent parts, WeldConstraints and all Welds and other JointInstances.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Model/BreakJoints)',
					].join('\n')
				},
			},

			'GetBoundingBox()': {
				insertText: 'GetBoundingBox()',
				documentation: {
					value: [
						'```lua', 'function GetBoundingBox()\n  -> (orientation: CFrame, size: Vector3)', '```',
						'',
						'Returns a description of a volume that surrounds all parts of a Model.',
						'The volume’s orientation is based on the orientation of the PrimaryPart.',
						'The description is provided in the form of a CFrame **orientation** and Vector3 **size**.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Model/GetBoundingBox)',
					].join('\n')
				},
			},

			'GetExtentsSize()': {
				insertText: 'GetExtentsSize()',
				documentation: {
					value: [
						'```lua', 'function GetExtentsSize()\n  -> Vector3', '```',
						'',
						'Returns the size of the smallest bounding box that contains all of the BaseParts in the Model, aligned with the Model.PrimaryPart if it is set.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Model/GetExtentsSize)',
					].join('\n')
				},
			},

			'GetPrimaryPartCFrame()': {
				insertText: 'GetPrimaryPartCFrame()',
				documentation: {
					value: [
						'```lua', 'function GetPrimaryPartCFrame()\n  -> CFrame', '```',
						'',
						'Returns the CFrame of the Model’s Model.PrimaryPart. This function will throw an error if no primary part exists for the Model.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Model/GetPrimaryPartCFrame)',
					].join('\n')
				},
			},

			'MoveTo()': {
				insertText: 'MoveTo(${1:position})',
				documentation: {
					value: [
						'```lua', 'function MoveTo(position: Vector3)', '```',
						'',
						'Moves the Model.PrimaryPart to the given position. If a primary part has not been specified then the root part of the model will be used.',
						'If there are any obstructions where the model is to be moved to, such as Terrain or other BaseParts, then the model will be moved up in the Y direction until there is nothing in the way.',
						'If this behavior is not desired, [`Model:SetPrimaryPartCFrame`](https://developer.roblox.com/en-us/api-reference/function/Model/SetPrimaryPartCFrame) should be used instead.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Model/MoveTo)',
					].join('\n')
				},
			},

			'SetPrimaryPartCFrame()': {
				insertText: 'SetPrimaryPartCFrame(${1:cframe})',
				documentation: {
					value: [
						'```lua', 'function SetPrimaryPartCFrame(cframe: CFrame)', '```',
						'',
						'Sets the BasePart.CFrame of the Model’s Model.PrimaryPart. All other parts in the model will also be moved and will maintain their orientation and offset respective to the Model.PrimaryPart. This function will throw an error if no Model.PrimaryPart exists for the model.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Model/SetPrimaryPartCFrame)',
					].join('\n')
				},
			},

			'TranslateBy()': {
				insertText: 'TranslateBy(${1:delta})',
				documentation: {
					value: [
						'```lua', 'function TranslateBy(delta: Vector3)', '```',
						'',
						'Shifts a Model by the given `Vector3` offset, preserving the Model’s orientation. If another BasePart or Terrain already exists at the new position then the Model will overlap said object.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Model/TranslateBy)',
					].join('\n')
				},
			},

			'GetPivot()': {
				insertText: 'GetPivot()',
				documentation: {
					value: [
						'```lua',
						'--[[',
						'\t@beta This item is a beta feature used in Roblox Studio.',
						']]',
						'```',
						'```lua', 'function GetPivot()\n  -> CFrame', '```',
						'',
						'Returns the current world space location of an object’s pivot as a CFrame.',
						'This provides a uniform way to get a physical object’s position in 3d space regardless of whether it’s an individual part or a model.',
						'',
						'[View DevForum post](https://devforum.roblox.com/t/pivot-points-studio-beta/1180689)',
					].join('\n')
				},
			},

			'PivotTo()': {
				insertText: 'PivotTo(${1:targetCFrame})',
				documentation: {
					value: [
						'```lua',
						'--[[',
						'\t@beta This item is a beta feature used in Roblox Studio.',
						']]',
						'```',
						'```lua', 'function PivotTo(targetCFrame: CFrame)', '```',
						'',
						'Moves the object, such that its pivot is now located exactly at a target CFrame.',
						'This provides a uniform object movement API that applies to both individual parts and models.',
						'If you’re already familiar with SetPrimaryPartCFrame, this works very similarly to that,',
						'only operating on parts as well as models, and operating on the pivot instead of the PrimaryPart,',
						'giving you more freedom over what point is being transformed.',
						'',
						'[View DevForum post](https://devforum.roblox.com/t/pivot-points-studio-beta/1180689)',
					].join('\n')
				},
			},
		},

		__requires__: [['classes/Instance']],
	};
});