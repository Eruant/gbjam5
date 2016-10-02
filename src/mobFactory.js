const isNumber = (n) => typeof n === 'number'

module.exports = ({position, sprite} = {}) => {
  if (!isNumber(position.x) && !isNumber(position.y)) {
    throw new Error('mob.position must be {x:number, y:number}')
  }

  return {
    position,
    sprite,
    action: null
  }
}
