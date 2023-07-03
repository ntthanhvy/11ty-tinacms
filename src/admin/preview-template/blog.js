import htm from 'https://unpkg.com/htm?module'
import slugify from '/admin/preview-template/slugify.js'

const html = htm.bind(h)

const Blog = createClass({
	render() {
		var entry = this.props.entry

		var title = entry.getIn(['data', 'title'])
		var date = entry.getIn(['data', 'date'])

		console.log({ title, date, type: typeof date })

		function join(date, options, separator) {
			function format(option) {
				let formatter = new Intl.DateTimeFormat('utc', {
					timeZone: 'utc',
					...option,
				})
				return formatter.format(date)
			}
			return options.map(format).join(separator)
		}

		let options = [
			{ year: 'numeric' },
			{ month: '2-digit' },
			{ day: '2-digit' },
		]
		let joined = join(date, options, '/')

		var slug = slugify(title, {
			lower: true,
			replacement: '-',
			remove: /[*+~.·,()'"`´%!?¿:@]/g,
		})

		console.log({ slug })

		return html`
			<iframe
				src="http://localhost:8080/${joined}/${slug}"
				frameborder="0"
				class="h-1/1 w-full"
			></iframe>
		`
	},
})

export default Blog
