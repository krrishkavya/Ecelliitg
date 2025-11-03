import React from "react";
import CompaniesLanding from "../src/Components/Landing/CompaniesLanding";
import InitiativesLanding from "../src/Components/Landing/InitiativesLanding";


export default function Landing(){
    return (
        <div className="Landing">
            <CompaniesLanding />
            <InitiativesLanding />
           
        </div>
    )
}
