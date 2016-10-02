const screenFactory = require('lb-screen-factory')
const loop = require('lb-loop')

const stateFactory = require('./stateFactory')
const updateFactory = require('./updateFactory')
const renderFactory = require('./renderFactory')
const mobFactory = require('./mobFactory')
const spriteFactory = require('./spriteFactory')

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

const mobSprite = spriteFactory({
  texture: assets[0],
  actions: []
})

const mobs = [
  mobFactory({
    position: {
      x: 1,
      y: 1
    },
    sprite: mobSprite
  })
]

const state = stateFactory({assets, screen, mobs})

game = loop({
  update: updateFactory(state),
  render: renderFactory(state)
})

const hasResourcesLoaded = () => {
  const itemsLoaded = assets.filter(asset => asset.loaded).length
  const totalItems = assets.length

  if (itemsLoaded === totalItems) {
    game.start()
  }
}

assets.forEach(asset => {
  asset.el.src = asset.src
  asset.el.onload = () => {
    asset.loaded = true
    hasResourcesLoaded()
  }
})
