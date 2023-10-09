define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {

			'Parent': {
				label: {
					name: 'Parent',
					type: '(Instance)',
				},
				documentation: {
					value: [
						'The Instance that is directly above this Instance in the tree.',
						'',
						'* Tags: NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent)',
					].join('\n')
				}
			},

			'ClassName': {
				label: {
					name: 'ClassName',
					type: '(string)',
				},
				documentation: {
					value: [
						'The string name of this Instance\'s most derived class.',
						'',
						'* Tags: ReadOnly, NotReplicated.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Instance/ClassName)',
					].join('\n')
				}
			},

			'Name': {
				label: {
					name: 'Name',
					type: '(string)',
				},
				documentation: {
					value: [
						'A non-unique identifier of the Instance.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Instance/ClassName)',
					].join('\n')
				}
			},

			'Archivable': {
				label: {
					name: 'Archivable',
					type: '(boolean)',
				},
				documentation: {
					value: [
						'Determines whether or not an Instance can be saved when the game closes/attempts to save the game. Note: this only applies to games that use Data Persistence, or SavePlaceAsync.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Instance/Archivable)',
					].join('\n')
				}
			},
		},

		Event: {

			'DescendantAdded': {
				label: {
					name: 'DescendantAdded',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> descendant: Instance', '```',
						'',
						'Fired after an Instance is parented to this object, or any of this object\'s descendants. The \'descendant\' argument is the Instance that is being added.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/Instance/DescendantAdded)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'DescendantRemoving': {
				label: {
					name: 'DescendantRemoving',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> descendant: Instance', '```',
						'',
						'Fired after an Instance is unparented from this object, or any of this object\'s descendants. The \'descendant\' argument is the Instance that is being added.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/Instance/DescendantRemoving)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'ChildRemoved': {
				label: {
					name: 'ChildRemoved',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> child: Instance', '```',
						'',
						'Fires when an object is removed from this Instance.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/Instance/ChildRemoved)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'Changed': {
				label: {
					name: 'Changed',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> property: string', '```',
						'',
						'Fired after a property changes value. The property argument is the name of the property.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/Instance/Changed)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'ChildAdded': {
				label: {
					name: 'ChildAdded',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> child: Instance', '```',
						'',
						'Fires when an object is parented to this Instance.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/Instance/ChildAdded)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'AttributeChanged': {
				label: {
					name: 'AttributeChanged',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> attribute: string', '```',
						'',
						'Fires when an attribute is changed on the instance.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/Instance/AttributeChanged)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},

			'AncestryChanged': {
				label: {
					name: 'AncestryChanged',
					type: '(RBXScriptSignal)',
				},
				documentation: {
					value: [
						'```lua', '-> child: Instance, parent: Instance', '```',
						'',
						'Fired when any of this object\'s ancestors change. First argument \'child\' is the object whose parent changed. Second argument \'parent\' is the first argument\'s new parent.',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/event/Instance/AncestryChanged)',
					].join('\n')
				},
				__children__: {},
				__using__: ['classes/RBXScriptSignal'],
			},
		},

		Method: {

			'ClearAllChildren()': {
				insertText: 'ClearAllChildren()',
				documentation: {
					value: [
						'```lua', 'function ClearAllChildren()', '```',
						'',
						'Destroys all of an Instance’s children.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/ClearAllChildren)',
					].join('\n')
				},
			},

			'Clone()': {
				insertText: 'Clone()',
				documentation: {
					value: [
						'```lua', 'function Clone()\n  -> Instance', '```',
						'',
						'Create a copy of an object and all its descendants, ignoring objects that are not Archivable.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/Clone)',
					].join('\n')
				},
			},

			'Destroy()': {
				insertText: 'Destroy()',
				documentation: {
					value: [
						'```lua', 'function Destroy()', '```',
						'',
						'Sets the `Parent` property to nil, locks the `Parent` property, disconnects all connections and calls `Destroy` on all children.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/Destroy)',
					].join('\n')
				},
			},

			'FindFirstAncestor()': {
				insertText: 'FindFirstAncestor(${1:name})',
				documentation: {
					value: [
						'```lua', 'function FindFirstAncestor(name: string)\n  -> Instance', '```',
						'',
						'Returns the first ancestor of the Instance whose `Name` property is equal to the given name.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestor)',
					].join('\n')
				},
			},

			'FindFirstAncestorOfClass()': {
				insertText: 'FindFirstAncestorOfClass(${1:className})',
				documentation: {
					value: [
						'```lua', 'function FindFirstAncestorOfClass(className: string)\n  -> Instance', '```',
						'',
						'Returns the first ancestor of the Instance whose `ClassName` property is equal to the given className.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestorOfClass)',
					].join('\n')
				},
			},

			'FindFirstAncestorWhichIsA()': {
				insertText: 'FindFirstAncestorWhichIsA(${1:className})',
				documentation: {
					value: [
						'```lua', 'function FindFirstAncestorWhichIsA(className: string)\n  -> Instance', '```',
						'',
						'Returns the first ancestor of the Instance for whom [`Instance:IsA`](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA) returns true for the given className.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestorWhichIsA)',
					].join('\n')
				},
			},

			'FindFirstChild()': {
				insertText: 'FindFirstChild(${1:name}, ${2:recursive})',
				documentation: {
					value: [
						'```lua', 'function FindFirstChild(name: string, recursive: boolean)\n  -> Instance', '```',
						'',
						'Returns the first child of the Instance found with the given name.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChild)',
					].join('\n')
				},
			},

			'FindFirstChildOfClass()': {
				insertText: 'FindFirstChildOfClass(${1:className})',
				documentation: {
					value: [
						'```lua', 'function FindFirstChildOfClass(className: string)\n  -> Instance', '```',
						'',
						'Returns the first child of the Instance whose `ClassName` is equal to the given className.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChildOfClass)',
					].join('\n')
				},
			},

			'FindFirstChildWhichIsA()': {
				insertText: 'FindFirstChildWhichIsA(${1:className}, ${2:recursive})',
				documentation: {
					value: [
						'```lua', 'function FindFirstChildWhichIsA(className: string, recursive: boolean)\n  -> Instance', '```',
						'',
						'Returns the first child of the Instance for whom [`Instance:IsA`](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA) returns true for the given className.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChildWhichIsA)',
					].join('\n')
				},
			},

			'GetActor()': {
				insertText: 'GetActor()',
				documentation: {
					value: [
						'```lua', 'function GetActor()\n  -> Actor', '```',
						'',
						'Returns the [`Actor`](https://developer.roblox.com/en-us/api-reference/class/Actor) the Instance is connected to.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/GetActor)',
					].join('\n')
				},
			},

			'GetAttribute()': {
				insertText: 'GetAttribute(${1:attribute})',
				documentation: {
					value: [
						'```lua', 'function GetAttribute(attribute: string)\n  -> Variant', '```',
						'',
						'Returns the attribute which has been assigned to the given name.',
						'',
						'```lua',
						'Variant:',
						'   | string',
						'   | boolean',
						'   | double',
						'   | UDim',
						'   | UDim2',
						'   | BrickColor',
						'   | Color3',
						'   | Vector2',
						'   | Vector3',
						'   | NumberSequence',
						'   | ColorSequence',
						'   | NumberRange',
						'   | Rect',
						'```',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttribute)',
					].join('\n')
				},
			},

			'GetAttributeChangedSignal()': {
				insertText: 'GetAttributeChangedSignal(${1:attribute})',
				documentation: {
					value: [
						'```lua', 'function GetAttributeChangedSignal(attribute: string)\n  -> RBXScriptSignal', '```',
						'',
						'Returns an event that fires when the given attribute changes.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttributeChangedSignal)',
					].join('\n')
				},
			},

			'GetAttributes()': {
				insertText: 'GetAttributes()',
				documentation: {
					value: [
						'```lua', 'function GetAttributes()\n  -> Map<string, Variant>', '```',
						'',
						'Returns a dictionary of `string: variant` pairs for each of the Instance’s attributes.',
						'',
						'```lua',
						'Variant:',
						'   | string',
						'   | boolean',
						'   | double',
						'   | UDim',
						'   | UDim2',
						'   | BrickColor',
						'   | Color3',
						'   | Vector2',
						'   | Vector3',
						'   | NumberSequence',
						'   | ColorSequence',
						'   | NumberRange',
						'   | Rect',
						'```',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttributes)',
					].join('\n')
				},
			},

			'GetChildren()': {
				insertText: 'GetChildren()',
				documentation: {
					value: [
						'```lua', 'function GetChildren()\n  -> Array<Instance>', '```',
						'',
						'Returns an array containing all of the Instance’s children.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/GetChildren)',
					].join('\n')
				},
			},

			'GetDebugId()': {
				insertText: 'GetDebugId(${1:scopeLength})',
				documentation: {
					value: [
						'```lua', 'function GetDebugId(scopeLength: number)\n  -> string', '```',
						'',
						'Returns a coded string of the Instances DebugId used internally by Roblox.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/GetDebugId)',
					].join('\n')
				},
			},

			'GetDescendants()': {
				insertText: 'GetDescendants()',
				documentation: {
					value: [
						'```lua', 'function GetDescendants()\n  -> Array<Instance>', '```',
						'',
						'Returns an array containing all of the descendants of the instance.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/GetDescendants)',
					].join('\n')
				},
			},

			'GetPropertyChangedSignal()': {
				insertText: 'GetPropertyChangedSignal(${1:property})',
				documentation: {
					value: [
						'```lua', 'function GetPropertyChangedSignal(property: string)\n  -> RBXScriptSignal', '```',
						'',
						'Get an event that fires when a given property of an object changes.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal)',
					].join('\n')
				},
			},

			'IsA()': {
				insertText: 'IsA(${1:className})',
				documentation: {
					value: [
						'```lua', 'function IsA(className: string)\n  -> RBXScriptSignal', '```',
						'',
						'Returns true if an Instance’s class matches or inherits from a given class.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA)',
					].join('\n')
				},
			},

			'IsAncestorOf()': {
				insertText: 'IsAncestorOf(${1:descendant})',
				documentation: {
					value: [
						'```lua', 'function IsAncestorOf(descendant: Instance)\n  -> boolean', '```',
						'',
						'Returns true if an Instance is an ancestor of the given descendant.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/IsAncestorOf)',
					].join('\n')
				},
			},

			'IsDescendantOf()': {
				insertText: 'IsDescendantOf(${1:ancestor})',
				documentation: {
					value: [
						'```lua', 'function IsDescendantOf(ancestor: Instance)\n  -> boolean', '```',
						'',
						'Returns true if an Instance is a descendant of the given ancestor.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/IsDescendantOf)',
					].join('\n')
				},
			},

			'SetAttribute()': {
				insertText: 'SetAttribute(${1:attribute}, ${2:value})',
				documentation: {
					value: [
						'```lua', 'function SetAttribute(attribute: string, value: Variant)\n  -> boolean', '```',
						'',
						'Returns true if an Instance is a descendant of the given ancestor.',
						'',
						'**Naming requirements and restrictions:**',
						'* Names must only use alphanumeric characters and underscore',
						'* No spaces or unique symbols are allowed',
						'* Strings must be 100 characters or less',
						'* Names are not allowed to start with RBX unless the caller is a Roblox core-script (reserved for Roblox)',
						'',
						'```lua',
						'Variant:',
						'   | string',
						'   | boolean',
						'   | double',
						'   | UDim',
						'   | UDim2',
						'   | BrickColor',
						'   | Color3',
						'   | Vector2',
						'   | Vector3',
						'   | NumberSequence',
						'   | ColorSequence',
						'   | NumberRange',
						'   | Rect',
						'```',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/SetAttribute)',
					].join('\n')
				},
			},

			'WaitForChild()': {
				insertText: 'WaitForChild(${1:childName}, ${2:timeOut})',
				documentation: {
					value: [
						'```lua', 'function WaitForChild(childName: string, timeOut: number)\n  -> Instance', '```',
						'',
						'Returns the child of the Instance with the given name. If the child does not exist, it will yield the current thread until it does.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Instance/WaitForChild)',
					].join('\n')
				},
			},
		},
	};
});