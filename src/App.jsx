import RGBAlchemy from './components/rgbAlchemy'
import './App.css'

function App() {

  const userDetails = {
    userId:"774b31",
    width:10,      
    height:4,
    maxMoves:8,
    target:[0,255,255]
  } 

  return (
    <div className="App">
      <RGBAlchemy userDetails={userDetails} />
    </div>
  )
}

export default App
