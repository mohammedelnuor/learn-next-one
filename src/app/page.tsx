import About from "./about";
import Footar from "./componants/footar";
import Headar from "./componants/headar";
import LogoSwitcher from "./componants/logoSwitcher";
import Navbar from "./componants/nav";


export default function Home() {   
  return (
    <div className="">
      <Navbar/>
      <Headar/>
      <About/>
      <LogoSwitcher/>
      <Footar/>

    
    </div>
  );
}
