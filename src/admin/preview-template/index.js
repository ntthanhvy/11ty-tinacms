import Page from '/admin/preview-template/page.js'
import Blog from '/admin/preview-template/blog.js'
import wrapComponent from '/admin/editor-components/wrap.js'

import {
	CategoriesControl,
	CategoriesPreview,
	schema as CategoriesSchema,
} from '/admin/widget/block.js'

// custom markdown editor component
CMS.registerEditorComponent(wrapComponent)

// custom page preview
CMS.registerPreviewTemplate('blog', Blog)
CMS.registerPreviewTemplate('page', Page)

// custom widget
CMS.registerWidget(
	'categories',
	CategoriesControl,
	CategoriesPreview,
	CategoriesSchema
)

// preview styles
CMS.registerPreviewStyle('/css/styles.css')
// CMS.registerPreviewStyle('/assets/css/tailwind.css')

fetch('/')
	.then((response) => response.text())
	.then((html) => {
		const f = document.createElement('html')
		f.innerHTML = html
		Array.from(f.getElementsByTagName('link')).forEach((tag) => {
			if (tag.rel == 'stylesheet' && !tag.media) {
				CMS.registerPreviewStyle(tag.href)
			}
		})
	})
