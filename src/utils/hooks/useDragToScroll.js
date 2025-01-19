import { useEffect, useRef } from 'react'

export const useDragToScroll = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isDown = false,
      startX,
      scrollLeft

    const onMouseDown = (e) => {
      isDown = true
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      container.style.cursor = 'grabbing'
    }
    const onMouseMove = (e) => {
      if (!isDown) return
      container.scrollLeft =
        scrollLeft - (e.pageX - container.offsetLeft - startX) * 1.5
    }

    const onMouseUpOrLeave = () => {
      isDown = false
      container.style.cursor = 'grab'
    }

    container.addEventListener('mousedown', onMouseDown)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseup', onMouseUpOrLeave)
    container.addEventListener('mouseleave', onMouseUpOrLeave)
    return () => {
      container.removeEventListener('mousedown', onMouseDown)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseup', onMouseUpOrLeave)
      container.removeEventListener('mouseleave', onMouseUpOrLeave)
    }
  }, [])

  return containerRef
}
