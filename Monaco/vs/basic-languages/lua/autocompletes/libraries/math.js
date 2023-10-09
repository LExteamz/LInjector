define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {

			'huge': {
				label: {
					name: 'huge',
					type: '(number)',
				},
				documentation: {
					value: [
						'A value larger than any other numeric value.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'pi': {
				label: {
					name: 'pi',
					type: '(number)',
				},
				documentation: {
					value: [
						'The value of *π*.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},
		},

		Function: {

			/**
			 * Roblox
			 */

			'log()': {
				insertText: 'log(${1:x}, ${2:base})',
				documentation: {
					value: [
						'```lua', 'function log(x: number [, base: number("e")])\n  -> number', '```',
						'',
						'Returns the logarithm of `x` in the given base.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'ldexp()': {
				insertText: 'ldexp(${1:m}, ${2:e})',
				documentation: {
					value: [
						'```lua', 'function ldexp(m: number, e: integer)\n  -> number', '```',
						'',
						'Returns `m * (2 ^ e)`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'rad()': {
				insertText: 'rad(${1:x})',
				documentation: {
					value: [
						'```lua', 'function rad(x: number)\n  -> number', '```',
						'',
						'Converts the angle `x` from degrees to radians.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'cosh()': {
				insertText: 'cosh(${1:x})',
				documentation: {
					value: [
						'```lua', 'function cosh(x: number)\n  -> number', '```',
						'',
						'Returns the hyperbolic cosine of `x` (assumed to be in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'round()': {
				insertText: 'round(${1:x})',
				documentation: {
					value: [
						'```lua', 'function round(x: number)\n  -> integer', '```',
						'',
						'Rounds `x` to the nearest integer; rounds away from zero if we\'re midway between two integers.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'random()': {
				insertText: 'random(${1:m}, ${2:n})',
				documentation: {
					value: [
						'```lua', 'function random([m: integer [, n: integer]])\n  -> number', '```',
						'',
						'* `math.random()`: Returns a float in the range [0,1).',
						'* `math.random(n)`: Returns a integer in the range [1, n].',
						'* `math.random(m, n)`: Returns a integer in the range [m, n].',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'frexp()': {
				insertText: 'frexp(${1:x})',
				documentation: {
					value: [
						'```lua', 'function frexp(x: number)\n  -> m: number\n  2. e: number', '```',
						'',
						'Decompose `x` into tails and exponents. Returns `m` and `e` such that `x = m * (2 ^ e)`, `e` is an integer and the absolute value of `m` is in the range [0.5, 1) (or zero when `x` is zero).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'tanh()': {
				insertText: 'tanh(${1:x})',
				documentation: {
					value: [
						'```lua', 'function tanh(x: number)\n  -> number', '```',
						'',
						'Returns the hyperbolic tangent of `x` (assumed to be in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'floor()': {
				insertText: 'floor(${1:x})',
				documentation: {
					value: [
						'```lua', 'function floor(x: number)\n  -> number', '```',
						'',
						'Returns the largest integral value smaller than or equal to `x`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'max()': {
				insertText: 'max(${1:x}, ${2:...})',
				documentation: {
					value: [
						'```lua', 'function max(x: number, ...)\n  -> number', '```',
						'',
						'Returns the argument with the maximum value, according to the Lua operator `<`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'sqrt()': {
				insertText: 'sqrt(${1:x})',
				documentation: {
					value: [
						'```lua', 'function sqrt(x: number)\n  -> number', '```',
						'',
						'Returns the square root of `x`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'modf()': {
				insertText: 'modf()',
				documentation: {
					value: [
						'```lua', 'function modf(x: number)\n  -> integer\n  2. number', '```',
						'',
						'Returns the integral part of `x` and the fractional part of `x`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'pow()': {
				insertText: 'pow(${1:x}, ${2:y})',
				documentation: {
					value: [
						'```lua', 'function pow(x: number, y: number)\n  -> number', '```',
						'',
						'Returns `x ^ y`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'atan()': {
				insertText: 'atan(${1:y})',
				documentation: {
					value: [
						'```lua', 'function atan(y: number)\n  -> number', '```',
						'',
						'Returns the arc tangent of `x` (in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'tan()': {
				insertText: 'tan(${1:x})',
				documentation: {
					value: [
						'```lua', 'function tan(x: number)\n  -> number', '```',
						'',
						'Returns the tangent of `x` (assumed to be in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'cos()': {
				insertText: 'cos(${1:x})',
				documentation: {
					value: [
						'```lua', 'function cosh(x: number)\n  -> number', '```',
						'',
						'Returns the cosine of `x` (assumed to be in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'noise()': {
				insertText: 'noise(${1:x}, ${2:y}, ${3:z})',
				documentation: {
					value: [
						'```lua', 'function noise(x: number, y: number?, z: number?)\n  -> number', '```',
						'',
						'Returns a value roughly between -0.5 and 0.5 generated from its arguments.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
						'or [developer forum basics](https://devforum.roblox.com/t/basics-of-using-perlin-noise-2d-based/15215)',
					].join('\n')
				},
			},

			'log10()': {
				insertText: 'log10(${1:x})',
				documentation: {
					value: [
						'```lua', 'function log10(x: number)\n  -> number', '```',
						'',
						'Returns the base-10 logarithm of `x`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'sign()': {
				insertText: 'sign(${1:x})',
				documentation: {
					value: [
						'```lua', 'function sign(x: number)\n  -> number', '```',
						'',
						'Returns -1 if `x < 0`, 0 if `x == 0`, or 1 if `x > 0`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'acos()': {
				insertText: 'acos(${1:x})',
				documentation: {
					value: [
						'```lua', 'function acos(x: number)\n  -> number', '```',
						'',
						'Returns the arc cosine of `x` (in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'abs()': {
				insertText: 'abs(${1:x})',
				documentation: {
					value: [
						'```lua', 'function abs(x: number)\n  -> number', '```',
						'',
						'Returns the absolute value of `x`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'clamp()': {
				insertText: 'clamp(${1:x}, ${2:min}, ${3:max})',
				documentation: {
					value: [
						'```lua', 'function clamp(x: number, min: number, max: number)\n  -> number', '```',
						'',
						'Returns a number between `min` and `max`, inclusive.',
						'If `x` is below `min` or above `max`, it will return `min` or `max` respectively.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'sinh()': {
				insertText: 'sinh(${1:x})',
				documentation: {
					value: [
						'```lua', 'function sinh(x: number)\n  -> number', '```',
						'',
						'Returns the hyperbolic sine of `x` (assumed to be in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'asin()': {
				insertText: 'asin(${1:x})',
				documentation: {
					value: [
						'```lua', 'function asin(x: number)\n  -> number', '```',
						'',
						'Returns the arc sine of `x` (in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'min()': {
				insertText: 'min(${1:x})',
				documentation: {
					value: [
						'```lua', 'function min(x: number, ...)\n  -> number', '```',
						'',
						'Returns the argument with the minimum value, according to the Lua operator `<`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'deg()': {
				insertText: 'deg(${1:x})',
				documentation: {
					value: [
						'```lua', 'function deg(x: number)\n  -> number', '```',
						'',
						'Converts the angle `x` from radians to degrees.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'fmod()': {
				insertText: 'fmod(${1:x}, ${2:y})',
				documentation: {
					value: [
						'```lua', 'function fmod(x: number, y: number)\n  -> number', '```',
						'',
						'Returns the remainder of the division of `x` by `y` that rounds the quotient towards zero.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'randomseed()': {
				insertText: 'randomseed(${1:x})',
				documentation: {
					value: [
						'```lua', 'function randomseed(x: integer)', '```',
						'',
						'Sets `x` as the "seed" for the pseudo-random generator.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'atan2()': {
				insertText: 'atan2(${1:x}, ${2:y})',
				documentation: {
					value: [
						'```lua', 'function atan2(y: number, x: number)\n  -> number', '```',
						'',
						'Returns the arc tangent of `y/x` (in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'ceil()': {
				insertText: 'ceil(${1:x})',
				documentation: {
					value: [
						'```lua', 'function ceil(x: number)\n  -> integer', '```',
						'',
						'Returns the smallest integral value larger than or equal to `x`.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'sin()': {
				insertText: 'sin(${1:x})',
				documentation: {
					value: [
						'```lua', 'function sin(x: number)\n  -> number', '```',
						'',
						'Returns the sine of `x` (assumed to be in radians).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},

			'exp()': {
				insertText: 'exp(${1:x})',
				documentation: {
					value: [
						'```lua', 'function exp(x: number)\n  -> number', '```',
						'',
						'Returns the value `e^x` (where `e` is the base of natural logarithms).',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/lua-docs/math)',
					].join('\n')
				},
			},
		},
	};
});