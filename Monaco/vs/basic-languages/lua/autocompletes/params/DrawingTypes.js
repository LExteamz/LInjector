const BaseProperties = [
	'Base Properties',
	'```lua', 'Visible: boolean (default: false)', '```',
	'```lua', 'ZIndex: number (default: 0)', '```',
	'```lua', 'Transparency: number (default: 1)', '```',
	'```lua', 'Color: Color3 (default: Color3.new(0, 0, 0))', '```',
	'```lua', 'Remove: function<void>', '```',
	'',
	'',
]

define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Enum: {
			'Line': {
				label: {
					name: '"Line"',
					type: '(Line)',
				},
				insertText: 'Line',
				documentation: {
					value: [
						...BaseProperties,
						'Line Properties',
						'```lua', 'Thickness: number (default: 2)', '```',
						'```lua', 'From: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'To: Vector2 (default: Vector2.new(0, 0))', '```',
					].join('\n'),
				},
			},

			'Text': {
				label: {
					name: '"Text"',
					type: '(Text)',
				},
				insertText: 'Text',
				documentation: {
					value: [
						...BaseProperties,
						'Text Properties',
						'```lua', 'Text: string (default: "Text")', '```',
						'```lua', 'Size: number (default: 18)', '```',
						'```lua', 'Center: boolean (default: false)', '```',
						'```lua', 'OutlineColor: Color3 (default: Color3.new(0, 0, 0))', '```',
						'```lua', 'Position: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'TextBounds: readonly Vector2', '```',
						'```lua', 'Font: Drawing.Fonts (default: Drawing.Fonts.UI)', '```',
					].join('\n'),
				},
			},

			'Image': {
				label: {
					name: '"Image"',
					type: '(Image)',
				},
				insertText: 'Image',
				documentation: {
					value: [
						...BaseProperties,
						'Image Properties',
						'```lua', 'Data: buffer (default: nil)', '```',
						'```lua', 'Size: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'Position: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'Rounding: number (default: 0)', '```',
					].join('\n'),
				},
			},

			'Circle': {
				label: {
					name: '"Circle"',
					type: '(Circle)',
				},
				insertText: 'Circle',
				documentation: {
					value: [
						...BaseProperties,
						'Circle Properties',
						'```lua', 'Thickness: number (default: 2)', '```',
						'```lua', 'NumSides: number (default: 250)', '```',
						'```lua', 'Radius: number (default: 20)', '```',
						'```lua', 'Filled: boolean (default: false)', '```',
						'```lua', 'Position: Vector2 (default: Vector2.new(0, 0))', '```',
					].join('\n'),
				},
			},

			'Square': {
				label: {
					name: '"Square"',
					type: '(Square)',
				},
				insertText: 'Square',
				documentation: {
					value: [
						...BaseProperties,
						'Square Properties',
						'```lua', 'Thickness: number (default: 2)', '```',
						'```lua', 'Size: Vector2 (default: Vector2.new(100, 100))', '```',
						'```lua', 'Filled: boolean (default: true)', '```',
						'```lua', 'Position: Vector2 (default: Vector2.new(0, 0))', '```',
					].join('\n'),
				},
			},

			'Quad': {
				label: {
					name: '"Quad"',
					type: '(Quad)',
				},
				insertText: 'Quad',
				documentation: {
					value: [
						...BaseProperties,
						'Quad Properties',
						'```lua', 'Thickness: number (default: 2)', '```',
						'```lua', 'PointA: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'PointB: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'PointC: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'PointD: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'Filled: boolean (default: false)', '```',
					].join('\n'),
				},
			},

			'Triangle': {
				label: {
					name: '"Triangle"',
					type: '(Triangle)',
				},
				insertText: 'Triangle',
				documentation: {
					value: [
						...BaseProperties,
						'Triangle Properties',
						'```lua', 'Thickness: number (default: 2)', '```',
						'```lua', 'PointA: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'PointB: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'PointC: Vector2 (default: Vector2.new(0, 0))', '```',
						'```lua', 'Filled: Vector2 (default: true)', '```',
					].join('\n'),
				},
			},
		}
	};
});