/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {Text} from '../src/text.js'

describe('Text', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(Text, {
			props: {
				id: 'foo',
				name: 'test',
				outline: false,
				showError: false
			}
		})
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot props', () => {
		const {container} = render(Text, {
			props: {
				className: 'customCssDiv',
				class: 'customCss',
				type: 'tel',
				required: true,
				id: 'bar',
				name: 'test',
				label: '<b>Test</b>'
			}
		})
		expect(container).toMatchSnapshot()
	})
})
