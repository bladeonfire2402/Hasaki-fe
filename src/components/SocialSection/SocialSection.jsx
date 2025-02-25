import CustomContainer from "../Container/Container"
import RoundedComponent from "../RounedComponent/RounedComponent"


// eslint-disable-next-line react/prop-types
const SocialSection = ({list}) => {
  return (
    <CustomContainer gap={"gap-4"} otherStyle={"mt-5"}>
        {
        // eslint-disable-next-line react/prop-types
        list.map((socialLink)=>(
            <div key={socialLink} className="">
              <RoundedComponent icon={socialLink} bg={"bg-white"} size={"w-[60px] h-[60px]"}/>
            </div>
        ))}
    </CustomContainer>
  )
}

export default SocialSection