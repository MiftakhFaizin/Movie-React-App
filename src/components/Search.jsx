import { useEffect, useState } from "react"

const Search = (props) => {
    const [valueInput, setValueInput] = useState("")

    const handlerInput = (element) => {
        setValueInput(element.target.value)
    }
    const handlerSearchBtn = () => {
        props.searchInput(valueInput)
    }

    useEffect(() => {
        setValueInput("")
    },[props.resetInput])

    return (
        <div>
            <input onChange={handlerInput} value={valueInput} className="px-[15px] py-[5px] rounded-l-md focus:outline-none focus:shadow-md focus:shadow-slate-500 transition-color duration-300 ease-in-out" placeholder="Search film"></input>
            <button onClick={handlerSearchBtn} type="submit" className="bg-blue-500 hover:bg-blue-600 text-neutral-50 py-[5px] px-[10px] rounded-r-md transition-color duration-300 ease-in-out">Search</button>
        </div>
    )
}

export default Search