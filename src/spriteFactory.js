// need to take instructions and produce a sprite with animations
// e.g.
// walk: {
//  fps: 1,
//  frames: [
//    [0, 0],
//    [16, 0]
//  ]
// },
// run: {
//  fps: 20,
//  frames: [
//    [32, 0]
//  ]
// }

module.exports = ({texture, actions} = {}) => {
  return {
    actions: actions.map(action => {
      return ''
    })
  }
}
