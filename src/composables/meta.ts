function editMetaTag({
  property,
  name,
  content,
}: {
  property?: string
  name?: string
  content: string | number
}) {
  if (property) {
    // meta-property
    let metaTag = document.querySelector(`meta[property='${property}']`)
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('property', property)
      metaTag.setAttribute('content', content.toString())
      document.head.appendChild(metaTag)
    }
    metaTag.setAttribute('content', content.toString())
  } else if (name) {
    // meta-name
    let metaTag = document.querySelector(`meta[name='${name}']`)
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('name', name)
      metaTag.setAttribute('content', content.toString())
      document.head.appendChild(metaTag)
    }
    metaTag.setAttribute('content', content.toString())
  }
}

export default function editMetaData({
  metaUrl,
  metaTitle,
  metaDescription,
  metaThumbnailPath,
}: {
  metaUrl: string
  metaTitle: string
  metaDescription: string
  metaThumbnailPath: string
}) {
  document.title = metaTitle
  // Facebook Meta Tags
  editMetaTag({ property: 'og:url', content: metaUrl })
  editMetaTag({ property: 'og:type', content: 'website' })
  editMetaTag({ property: 'og:title', content: metaTitle })
  editMetaTag({ property: 'og:description', content: metaDescription })
  editMetaTag({ property: 'og:image', content: metaThumbnailPath })
  editMetaTag({ property: 'og:image:width', content: 1200 })
  editMetaTag({ property: 'og:image:height', content: 630 })
  // Twitter Meta Tags
  editMetaTag({ name: 'twitter:card', content: 'summary_large_image' })
  editMetaTag({ name: 'twitter:domain', content: metaUrl })
  editMetaTag({ name: 'twitter:url', content: metaUrl })
  editMetaTag({ name: 'twitter:title', content: metaTitle })
  editMetaTag({ name: 'twitter:description', content: metaDescription })
  editMetaTag({ name: 'twitter:image', content: metaThumbnailPath })
  // Normal Meta Tags
  editMetaTag({ name: 'title', content: metaTitle })
  editMetaTag({ name: 'og:title', content: metaTitle })
  editMetaTag({ name: 'description', content: metaDescription })
  editMetaTag({ name: 'og:description', content: metaDescription })
  editMetaTag({ name: 'image', content: metaThumbnailPath })
  editMetaTag({ name: 'og:image', content: metaThumbnailPath })
}
