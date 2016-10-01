const assets = [
  {
    name: 'textures',
    src: 'textures.png',
    loaded: false,
    el: window.document.createElement('img')
  }
]

const renderStartScreen = () => {
  window.document.write('All assets loaded')
}

const hasResourcesLoaded = () => {
  const itemsLoaded = assets.filter(asset => asset.loaded).length
  const totalItems = assets.length

  if (itemsLoaded === totalItems) {
    renderStartScreen()
  }
}

assets.forEach(asset => {
  asset.el.src = asset.src
  asset.el.onload = () => {
    asset.loaded = true
    hasResourcesLoaded()
  }
})
