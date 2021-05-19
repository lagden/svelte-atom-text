export default {
	bail: false,
	moduleFileExtensions: ['js', 'svelte'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'svelte-jester'
	},
	moduleNameMapper: {
		'@tadashi/svelte-atom-label': '<rootDir>/node_modules/@tadashi/svelte-atom-label/src/Label.svelte',
		'@tadashi/svelte-atom-input': '<rootDir>/node_modules/@tadashi/svelte-atom-input/src/Input.svelte'
	},
	transformIgnorePatterns: [],
	verbose: true
}
