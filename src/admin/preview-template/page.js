import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)

const Page = createClass({
	render() {
		var entry = this.props.entry

		var slug = entry.get('slug')
		console.log({ slug })

		return html`
			<iframe
				src="http://localhost:8080/${slug.replace('index', '')}"
				frameborder="0"
				class="w-full h-1/1"
			></iframe>
		`
	},
})

export default Page
