<script>
	import {onMount} from 'svelte'

	import Label from '@tadashi/svelte-atom-label'
	import Input from '@tadashi/svelte-atom-input'

	export let name
	export let value = ''
	export let className = ''
	export let outline = true
	export let showError = true
	export let label = false

	// Class - CSS
	const styleInput = outline ? '_atom_frm__outline' : '_atom_frm__standard'
	const restPropsClass = String($$restProps?.class ?? '').split(' ')
	$$restProps.class = [
		...new Set([styleInput, ...restPropsClass])
	].join(' ')

	// ID used for label
	$$restProps.id = $$restProps?.id ?? `${name}_${Number(Math.random()).toString(26).slice(2)}`

	let component
	let validationMessage = ''

	function updateValidationMessage() {
		validationMessage = component?.node?.validationMessage ?? ''
	}

	$: {
		value
		component
		updateValidationMessage()
	}

	onMount(() => {
		component?.node?.addEventListener('validationMessage', updateValidationMessage)
		return () => {
			component?.node?.removeEventListener('validationMessage', updateValidationMessage)
		}
	})
</script>

<div class="{className}">
	{#if label}
		<Label
			for="{$$restProps.id}"
			disabled={$$restProps.disabled}
			required={$$restProps.required}
		>{@html label}</Label>
	{/if}
	<Input
		bind:this={component}
		bind:value
		on:input
		on:blur
		on:focus
		on:click
		on:change
		{name}
		{...$$restProps}
	/>
	{#if showError}
		<small class="_atom_frm__error___message" title={validationMessage}>{validationMessage}</small>
	{/if}
</div>
