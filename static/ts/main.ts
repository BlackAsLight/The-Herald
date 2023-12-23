document.querySelectorAll('a[href^="/"]').forEach(aTag => aTag.setAttribute('href', '/The-Herald') + aTag.getAttribute('href')!)

document.querySelectorAll<HTMLAnchorElement>('ol[data-link="index"] a').forEach((aTag, i) => {
	aTag.setAttribute('href', '#index' + i)
	document.querySelectorAll<HTMLHeadingElement>('h2[data-link="index"]')[ i ].setAttribute('id', 'index' + i)
})
