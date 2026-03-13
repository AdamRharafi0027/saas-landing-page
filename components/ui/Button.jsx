const Button = ({children, classname, onclick}) => {
  return (
    <>
        <button onClick={onclick} className={`cursor-pointer lg:px-6 px-2 py-2 rounded-lg  font-medium  transition-all duration-300 ${classname}`}>
            {children}
        </button>
    </>
  )
}

export default Button
