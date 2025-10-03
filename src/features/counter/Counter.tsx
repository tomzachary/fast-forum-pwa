import { useState } from 'react'
import styles from './counter.module.scss'
const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="card">
      <button className={styles.counterButton} onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/features/counter/Counter.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default Counter

