import { FooterLine } from "../../Constants/ClientConstant"

import SecondaryButton from "../Buttons/Secondary_Button/SecondaryButton"
import CustomContainer from "../Container/Container"
import SocialSection from "../SocialSection/SocialSection"
import NorTitle from "../Title/NorTitle/NorTitle"



const FooterHasaki = () => {
    return (
      <CustomContainer align={true} justify={true} bgColor={"primary-bg"} padding={"py-[30px]  px-[100px] flex-col"} >
        <CustomContainer  otherStyle={"w-full justify-between"}  >
          <div className="flex flex-col mt-7 gap-1">
            {Object.entries(FooterLine.FirtstSection).map(([key,value])=>(
              <NorTitle key={key} title={value} otherStyle={"font-light"} />
            ))}
          </div>


          <div className="flex flex-col gap-3">
            <h1 className="text-lexend font-bold text-xl uppercase">Về Lunaxi</h1>
            <CustomContainer gap={"gap-7"} align={true}>
              <CustomContainer otherStyle={"flex-col"} gap={"gap-1"}>
                {Object.entries(FooterLine.About.sect1).map(([key,value])=>(
                  <NorTitle key={key} title={value} otherStyle={"font-light underline opacity-50"} />
                ))}
              </CustomContainer>
              <CustomContainer otherStyle={"flex-col"} gap={"gap-1"}>
                {Object.entries(FooterLine.About.sect2).map(([key,value])=>(
                  <NorTitle key={key} title={value} otherStyle={"font-light underline opacity-50"} />
                ))}
              </CustomContainer>
            </CustomContainer>  
          </div>

          <div className="w-[450px]">
             <h1 className="text-lexend font-bold text-xl uppercase">{FooterLine.Contact.ContactTitle}</h1>
             <NorTitle title={FooterLine.Contact.ReceiveTitle} otherStyle={"font-light mb-5"}/>

             <div className="relative w-[350px]">
              <input className="px-4 py-3 text-lexend w-[350px] rounded-md " placeholder="Nhập địa chỉ email của bạn"/>
              <SecondaryButton text={"Đăng kí"} rounded={"rounded-r-md"} padding={"px-4 py-3"} otherStyle={"absolute right-0"}/>
             </div>

             <SocialSection list={FooterLine.Contact.SocialContact}/>
          </div>



        </CustomContainer>
        
        <h1 className="text-md text-lexend mt-10">{FooterLine.CopyRight}</h1>

      </CustomContainer>
    )
}

export default FooterHasaki
