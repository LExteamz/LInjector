define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Field": {
			'SaveInstance': {
				label: {
					name: 'SaveInstance',
					type: 'table',
				},

				__children__: {
					Field: {
						SavePlayer: {
							label: {
								name: "SavePlayer",
								type: "(boolean)"
							},
						},
						DecompileScripts: {
							label: {
								name: "DecompileScripts",
								type: "(boolean)"
							},
						},
					},
					Function: {
						Save: {
							label: {
								name: "Save",
								type: "(void)"
							}
						}
					}
				}
			},

			'crypt': {
				label: {
					name: 'crypt',
					type: 'table'
				},

				__children__: {
					Function: {
						hash: {
							insertText: 'hash("${1:string}")',
							label: 'hash()',
						}
					}
				}
			},

			'Base64': {
				label: {
					name: 'Base64',
					type: 'table'
				},

				__children__: {
					Function: {
						Encode: {
							insertText: 'Encode("${1}")',
							label: 'Encode()'
						},
						Decode: {
							insertText: 'Decode("${1}")',
							label: 'Decode()'
						}
					}
				}
			},

			'WebSocket': {
				label: {
					name: 'WebSocket',
					type: 'table'
				},

				__children__: {
					Function: {
						connect: {
							insertText: 'connect("${1}")',
							label: 'connect()'
						}
					},

					Method: {
						Send: {
							insertText: 'Send("${1}")',
							label: 'Send()'
						},
						Close: {
							insertText: 'Close()',
							label: 'Close()'
						}
					}
				}
			}
		}
	}
});