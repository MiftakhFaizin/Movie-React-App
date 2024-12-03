const Header = (props) => {
    return (
        <h1 className="max-sm:hidden text-[30px] text-red-600 font-bold"><a href="/">{props.title}</a></h1>
    )
}

export default Header