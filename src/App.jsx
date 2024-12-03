import { useEffect, useReducer, useState } from "react"
import Header from "./components/Header"
import Movie from "./components/Movie"
import Search from "./components/Search"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const datasMovie = useSelector(state => state.datasMovie)
  const dispatch = useDispatch()
  const [valueSearchInput, setValueSearchInput] = useState("Batman")
  const [resetValueInput, setResetValueInput] = useState(false)

  const handlerPropsInput = (propsValueInput) => {
    if(propsValueInput !== "") setValueSearchInput(propsValueInput)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(`https://www.omdbapi.com/?apikey=35c76b8f&s=${valueSearchInput}`)
        res = await res.json()
        dispatch({type: "FETCH_DATA_MOVIES", payload: res.Search})
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[valueSearchInput])

  useEffect(() => {
    setResetValueInput(!resetValueInput)
  },[datasMovie])

  return (
    <div className="flex flex-col items-center bg-slate-900">
      <div className="container">
        <div className="flex max-sm:justify-end max-sm:pt-[20px] justify-between flex-wrap bg-slate-900 py-[10px] px-[30px]">
          <Header title="WebsiteFilm" />
          <Search searchInput={handlerPropsInput} resetInput={resetValueInput} />
        </div>
        <Movie movies={datasMovie} />
      </div>
    </div>
  )
}

export default App
