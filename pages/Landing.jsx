import React from "react";
import CompaniesLanding from "../src/Components/Landing/CompaniesLanding";
import InitiativesLanding from "../src/Components/Landing/InitiativesLanding";
import HeroLanding from "../src/Components/Landing/herolanding";

export default function Landing(){
    return (
        <div className="Landing">
            <CompaniesLanding />
            <InitiativesLanding />
            <HeroLanding/>
        </div>
    )
}