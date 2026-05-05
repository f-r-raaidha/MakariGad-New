import SectionHero from "@/components/SectionHero";
import LeadersSection from "@/components/LeadersSection";
import { leaders } from "@/data/leadersData";


const ourLeaders = () => {

    return (
        <><SectionHero title="Our Leaders" backgroundImage="images/StockImage/pexels-rdne-7581119.jpg" />
         <LeadersSection leaders={leaders} title="" />
         
        <div className="container">

        </div></>
    )

}

export default ourLeaders;