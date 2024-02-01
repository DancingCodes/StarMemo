import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementToTen } from './store/modules/counterStore'
function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <span onClick={() => dispatch(increment())}>+</span>
      {count}
      <span onClick={() => dispatch(decrement())}>-</span>
      <span onClick={() => dispatch(incrementToTen(10))}>+10</span>

    </div>
  )
}

export default App
