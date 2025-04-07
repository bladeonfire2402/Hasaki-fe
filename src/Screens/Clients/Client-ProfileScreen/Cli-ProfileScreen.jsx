import { useState } from "react"
import SideBarProfile from "../../../Components/SideBar/SideBarProfile"
import ClientInfo from "../../../Components/ProfileSection/ClientInfo/ClientInfo"
import ClientOrder from "../../../Components/ProfileSection/ClientOrder/ClientOrder"
import ClientWishList from "../../../Components/ProfileSection/ClientWishList/ClientWishList"
import ClientWallet from "../../../Components/ProfileSection/ClientWallet/ClientWallet"
import ClientRefund from "../../../Components/ProfileSection/ClientRefund/ClientRefund"


const Client_ProfileScreen = () => {
  const [section,setSection]=useState('profile')
  
    const switchSection=()=>{
        if(section==='profile'){
            return(
               <ClientInfo/>
            )
        }
        else if(section==='order'){
            return(
                //<OrderSection/>
                <ClientOrder/>
            )
        }
        else if(section==='prescription'){
            return(
                <ClientWishList/>
            )
        }
        else if(section==='wallet'){
          return(
            <ClientWallet/>
          )
        }
        else if(section==='Refund'){
            return(
                <ClientRefund/>
            )
        }
    }

    return(
        <div className="profile-wrapper flex justify-center py-5 bg-slate-100 px-[100px] text-lexend">
            <div className="flex wrapper gap-9 w-full">
            {/*Side bar*/}
            <div className="w-1/4">
                <SideBarProfile setSection={setSection} />
            </div>
            

            {/*content*/}
            <div className="w-3/4">
              <div>{switchSection()}</div>
            </div>

            </div>

        </div>
    )
}

export default Client_ProfileScreen