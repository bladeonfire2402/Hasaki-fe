
// eslint-disable-next-line react/prop-types
const RoundedComponent = ({icon:Icon}) => {
  return (
    <div className="px-2 py-2 border-2 text-white rounded-full flex justify-center">
      <Icon/>
    </div>
  )
}

export default RoundedComponent