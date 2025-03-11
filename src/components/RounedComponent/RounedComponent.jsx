
// eslint-disable-next-line react/prop-types
const RoundedComponent = ({icon:Icon, color, bg, size},func) => {
  return (
    <div className={`px-2 py-2 flex justify-center items-center border-2 ${color} ${bg} ${size} rounded-full flex justify-center `} 
    onClick={func}>
      <Icon/>
    </div>
  )
}

export default RoundedComponent