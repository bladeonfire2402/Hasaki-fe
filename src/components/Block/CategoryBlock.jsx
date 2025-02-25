import NorTitle from "../Title/NorTitle/NorTitle"
import './index.css'

// eslint-disable-next-line react/prop-types
const CategoryBlock = ({category}) => {
  return (
    <div className='CategoryBlock-wrapper flex flex-col items-center'>
        <div className="rounded-lg primary-bg w-[130px] h-[130px] temporaly"></div>
        <NorTitle title={category} otherStyle={"mt-2"} color={"text-blue"}/>
    </div>
  )
}

export default CategoryBlock