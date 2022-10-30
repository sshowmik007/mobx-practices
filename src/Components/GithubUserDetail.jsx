import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useStore } from "../Hooks/useStore"

export const GithubUserDetails = observer(() => {
  const {
    rootStore: { githubUserDetails, countStore }
  } = useStore()
  const [text, setText] = useState("KaziMinhaj")

  const onClickButton = () => {
    githubUserDetails.fetchGithubUserDetails(text)
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="flex items-center justify-center text-xl font-medium space-y-3 flex-col m-2 p-2">
         <h1> User Name: {githubUserDetails.getUserDetails?.name} </h1>  
       <h1> User avater: {githubUserDetails.getUserDetails?.avatar_url} </h1> 
        {/* Count value in Github component: {countStore.getCountValue} */}
      </div>
      <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    type="text"
                    placeholder="Enter github user name"
                />
                <button onClick={onClickButton} className="px-4 text-white bg-purple-600 border-l rounded">
                    Search
                </button>
            </div>
        </div>
     

    </div>
  )
})
