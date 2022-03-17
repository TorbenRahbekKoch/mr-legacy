import { useEffect, useRef } from 'react'

// Thanks to https://overreacted.io/making-setinterval-declarative-with-react-hooks/ 
// for this.
export function useInterval(
  delay: number | null,
  callback: () => void) 
{
  const savedCallback = useRef(callback)

  useEffect(() => {
    // If the callback changes after initialization, which may happen,
    // it needs to be updated
    savedCallback.current = callback
  },[callback])

  useEffect(() => {
    if (delay === null) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}