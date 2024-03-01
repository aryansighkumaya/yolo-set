import Footer from "../_components/Footer"
import HeroComponent from "../_components/HeroComponent"

const RoutesLayout = ({children}) => {
  return (
    <div className=" min-h-[100vh] flex flex-col gap-[3rem]">
        <HeroComponent/>

       {children}
     
        <Footer/>
    </div>
  )
}

export default RoutesLayout