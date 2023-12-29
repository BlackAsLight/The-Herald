if (location.hostname === 'localhost') {
	document.querySelectorAll('[href^="/The-Herald"]').forEach(tag => tag.setAttribute('href', tag.getAttribute('href')!.slice('/The-Herald'.length)))
	document.querySelectorAll('[src^="/The-Herald"]').forEach(tag => {
		if (tag.tagName === 'SCRIPT') {
			const scriptTag = document.createElement('script')
			scriptTag.setAttribute('type', 'module')
			scriptTag.setAttribute('src', tag.getAttribute('src')!.slice('/The-Herald'.length))
			document.head.append(scriptTag)
			tag.remove()
		}
	})
}
