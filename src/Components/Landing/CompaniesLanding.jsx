import React from "react";
import './CompaniesLanding.css';
import phc from '../../assets/ctrls.png';

const companyLogos = [
  { id: 1, src: phc, alt: 'ctrls' },
  { id: 2, src: phc, alt: 'ctrls' },
  { id: 3, src: phc, alt: 'ctrls' },
  { id: 4, src: phc, alt: 'ctrls' },
  { id: 5, src: phc, alt: 'ctrls' },
  { id: 6, src: phc, alt: 'ctrls' },
];

export default function CompaniesLanding(){
    const renderCompanyBox = (company) => (
        <Companybox
            key={company.id}
            img={company.src}
            alt={company.alt}
        />
    );
    return (
        <div className="companies-landing">
            <div className="companies-landing-heading">
                <span>COMPANIES</span>
                <span>THAT</span>
                <span>BACK</span>
                <span>US</span>
            </div>
            <div className="companies-container">
                <div className="companies-row">
                    <div className="scrolling-content">   {/* Left Scroll */}

                        {companyLogos.map(renderCompanyBox)}
                        {companyLogos.map((c) => renderCompanyBox({ ...c, id: c.id + '_dup' }))}
                    </div>
                </div>

                <div className="companies-row">
                     <div className="scrolling-content reverse">  {/* Right Scroll */}

                        {companyLogos.map(renderCompanyBox)}

                        {companyLogos.map((c) => renderCompanyBox({ ...c, id: c.id + '_dup2' }))}
                    </div>
                </div>
            </div>
        </div>
    )
};

function Companybox({img, alt}){
    return(
        <div className="company-box">
            <div className="company-container">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}