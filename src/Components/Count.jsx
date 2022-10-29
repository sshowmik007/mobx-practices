import { observer } from "mobx-react-lite"
import { useStore } from "../Hooks/useStore"

export const Count = observer(() => {
  const {
    rootStore: { countStore }
  } = useStore()

  const onIncrement = () => {
    countStore.increment()
  }
  const onDecrement = () => {
    countStore.decrement()
  }
  return (
    <div className="flex flex-col items-center justify-center  text-5xl  font-semibold text-purple-800">
      Count: {countStore.getCountValue}
      <div>
        <button className="m-auto  " onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  )
})
