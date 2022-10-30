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
        <button className="text-white text-3xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg px-2 py-1 text-center mr-2 mb-2  " onClick={onIncrement}> + </button>
        <button className="text-white text-3xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg px-3 py-1 text-center mr-2 mb-2" onClick={onDecrement}> - </button>
      </div>
    </div>
  )
})
