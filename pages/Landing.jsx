import React from "react";
import CompaniesLanding from "../src/Components/Landing/CompaniesLanding.jsx";
import InitiativesLanding from "../src/Components/Landing/InitiativesLanding.jsx";
import HeroLanding from "../src/Components/Landing/HeroLanding.jsx";


export default function Landing(){
    return (
        <div className="Landing">
            <CompaniesLanding />
            <InitiativesLanding />
            <HeroLanding />
           
        </div>
    )
}
