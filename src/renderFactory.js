module.exports = ({screen, assets} = {}) => {
  return () => {
    const ctx = screen.getContext()
    ctx.fillStyle = `hsl(80, 50%, ${Math.floor(Math.random() * 10) + 45}%)`
    ctx.fillRect(0, 0, screen.getWidth(), screen.getHeight())

    ctx.fillStyle = '#000'
    ctx.fillRect(screen.getWidth() * 0.5, screen.getHeight() * 0.5, 1, 1)
  }
}
