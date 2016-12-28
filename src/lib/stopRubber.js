import _ from 'src/util'
export default function (option) {
  var scrollSelector = option.scroll || '.scroller'
  var pos = {
    x: 0,
    y: 0
  }

  function stopEvent (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  function recordPosition (e) {
    pos.x = e.touches[0].clientX
    pos.y = e.touches[0].clientY
  }

  function watchTouchMove (e) {
    var target = e.target
    var parents = _.parents(target, scrollSelector)
    var el = null
    if (target.classList.contains(scrollSelector)) el = target
    else if (parents.length) el = parents[0]
    else return stopEvent(e)
    if (!el) return
    var dx = e.touches[0].clientX - pos.x
    var dy = e.touches[0].clientY - pos.y
    var direction = dy > 0 ? '10' : '01'
    var scrollTop = el.scrollTop
    var scrollHeight = el.scrollHeight
    var offsetHeight = el.offsetHeight
    var isVertical = Math.abs(dx) < Math.abs(dy)
    var status = '11'
    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01'
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = '10'
    }
    if (status !== '11' && isVertical && !(parseInt(status, 2) & parseInt(direction, 2))) return stopEvent(e)
  }
  document.addEventListener('touchstart', recordPosition, false)
  document.addEventListener('touchmove', watchTouchMove, false)
}
