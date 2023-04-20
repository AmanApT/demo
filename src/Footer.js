import React from 'react'
import SVG from './logo.svg';

const Footer = () => {
  return (
    <div className='footerMainSection'>
    <div className='footerSection'>
        <div className='footerSectionLeft'>
           
            <img src={SVG} alt="My SVG File" />
            <p style={{color:"rgb(103, 115, 149)",paddingTop:"2%"}}>
            ArbDogeAI, an Experiment in the Arbitrum Ecosystem.
            </p>
        </div>
        <div className='footerSectionRight'>
                <div className='footerResources'>
                    <p className="footerRightHeadings">Resources</p>
                    <p style={{color:"rgb(103, 115, 149)"}}>
                        Whitepaper
                    </p>
                    <p style={{color:"rgb(103, 115, 149)"}}>
                        FAQs
                    </p>
                </div>
                <div className='footerProducts'>
                    <p className="footerRightHeadings">
                        Products
                    </p>
                <p style={{color:"rgb(103, 115, 149)"}}>
                        LuckyDrop
                    </p>
                    <p style={{color:"rgb(103, 115, 149)"}}>
                        Earn
                    </p>
                    <p style={{color:"rgb(103, 115, 149)"}}>
                        AI Code
                    </p>
                </div>
                <div className='footerPress'>
                <p className="footerRightHeadings">
                        Press
                    </p>
                <p style={{color:"rgb(103, 115, 149)"}}>
                        Terms of Use
                    </p>
                    <p style={{color:"rgb(103, 115, 149)"}}>
                        Privacy Policy
                    </p>
                    <p style={{color:"rgb(103, 115, 149)"}}>
                        Brand
                    </p>
                </div>
        </div>
    </div>
    {/* <hr className='horizontalRule' /> */}
    {/* <div className='horizontalRule'> */}
    <hr className='horizontalRule'/>
    {/* </div> */}
    <p className='footerCredits'> © 2023 Arbitrum Doge Paradise. All right reserved.</p>
    </div>
  )
}

export default Footer