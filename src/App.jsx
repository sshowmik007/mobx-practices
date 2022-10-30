
import './App.css'
import { Count } from './Components/Count'
import { GithubUserDetails } from './Components/GithubUserDetail'
function App() {
  
  return (
    <>
    <div className='flex items-center justify-center h-screen flex-col'>
      <h1 className=' text-red-500 font-semibold text-4xl '>hello</h1>
      
      <Count /> <br />
      <GithubUserDetails />
    </div>
    </>
    
  )
}

export default App
