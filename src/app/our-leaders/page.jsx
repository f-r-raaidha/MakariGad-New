import SectionHero from "@/components/SectionHero";
import LeadersSection from "@/components/LeadersSection";
import { leaders } from "@/data/leadersData";


const ourLeaders = () => {

    return (
        <><SectionHero title="Our Leaders" backgroundImage="images/SectionHeroImages/p4_makariguard_45-3.png" />
         <LeadersSection leaders={leaders} title="" />
         
        <div className="container">

        </div></>
    )

}

export default ourLeaders;