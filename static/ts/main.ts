document.querySelectorAll<HTMLAnchorElement>('ol[data-link="index"] a').forEach((aTag, i) => {
	aTag.setAttribute('href', '#index' + i)
	document.querySelectorAll<HTMLHeadingElement>('h2[data-link="index"]')[ i ].setAttribute('id', 'index' + i)
})
