import { useEffect, useReducer, useState } from 'react'

const MAX = 8

// Pure reducer keeps StrictMode double-invocation harmless.
function reducer(state, action) {
  switch (action.type) {
    case 'produce': {
      const room = MAX - state.queue.length
      const count = Math.min(action.count, room)
      const added = Array.from({ length: count }, (_, i) => state.nextId + i)
      return { ...state, queue: [...state.queue, ...added], nextId: state.nextId + count }
    }
    case 'consume':
      if (state.queue.length === 0) return state
      return { ...state, queue: state.queue.slice(1), processed: state.processed + 1 }
    default:
      return state
  }
}

export default function EventFlow() {
  const [state, dispatch] = useReducer(reducer, { queue: [], processed: 0, nextId: 1 })
  const [paused, setPaused] = useState(false)
  const { queue, processed } = state

  useEffect(() => {
    const t = setInterval(() => dispatch({ type: 'produce', count: 1 }), 1600)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => dispatch({ type: 'consume' }), 1100)
    return () => clearInterval(t)
  }, [paused])

  return (
    <figure className="eventflow" aria-label="Producer, queue and consumer diagram">
      <div className="eventflow__row">
        <div className="eventflow__node"><strong>Producer</strong><span>emits events</span></div>
        <div className="eventflow__queue" aria-live="polite">
          <strong>Queue <em>({queue.length}/{MAX})</em></strong>
          <div className="eventflow__slots">
            {Array.from({ length: MAX }, (_, i) => (
              <span key={i} className={`slot${queue[i] ? ' slot--full' : ''}`}>{queue[i] ? `#${queue[i]}` : ''}</span>
            ))}
          </div>
        </div>
        <div className={`eventflow__node${paused ? ' is-paused' : ''}`}><strong>Consumer</strong><span>{paused ? 'paused' : `processed ${processed}`}</span></div>
      </div>
      <figcaption>
        <button className="btn btn--small" onClick={() => dispatch({ type: 'produce', count: 3 })}>Send a burst</button>
        <button className="btn btn--small btn--ghost" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
          {paused ? 'Resume consumer' : 'Pause consumer'}
        </button>
        <span>Pause the consumer to watch the queue absorb load.</span>
      </figcaption>
    </figure>
  )
}
