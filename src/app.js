const screenFactory = require('lb-screen-factory')
const loop = require('lb-loop')

let game

const screen = screenFactory(window.document.querySelectorAll('canvas')[0])

screen.setSize({
  width: 160,
  height: 144
})

const assets = [
  {
    name: 'textures',
    src: 'textures.png',
    loaded: false,
    el: window.document.createElement('img')
  }
]

const update = () => {}
const render = () => {
  const ctx = screen.getContext()
  ctx.fillStyle = `hsl(180, 50%, ${Math.floor(Math.random() * 10) + 45}%)`
  ctx.fillRect(0, 0, screen.getWidth(), screen.getHeight())

  ctx.fillStyle = '#000'
  ctx.fillRect(screen.getWidth() * 0.5, screen.getHeight() * 0.5, 1, 1)
}

game = loop({update, render})

const renderStartScreen = () => {
  const ctx = screen.getContext()
  ctx.fillStyle = 'hsl(180, 50%, 50%)'
  ctx.fillRect(0, 0, screen.getWidth(), screen.getHeight())

  game.start()
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
