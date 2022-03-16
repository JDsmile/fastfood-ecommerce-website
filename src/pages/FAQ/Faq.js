import React from "react";
import "./Faq.css"
import faq from "../../data/faq.json"
import Footer from "../../components/Footer/Footer"
import plus from "../../assets/plus.svg"
import btnBg from "../../assets/btn-bg.svg"


export default function Faq(){

    const tabName =["Our Food", "Our Delivery", "Our Company"]
    const [faqTab,setFaqTabe] = React.useState(faq[tabName[0]])
    const [activeTab,setActiveTab] = React.useState(false)
    const [tabIndex,setTabIndex] = React.useState(0)
    const [answerIndex,setAnswerIndex] = React.useState(0)
    const [expand,setExpand] = React.useState(false)

    function toggleTab(value){
        setFaqTabe(faq[tabName[value]])
        setActiveTab(true)
        setTabIndex(value)
    }

    function handleClick(value){
        setExpand(!expand)
        setAnswerIndex(value)
    }

    return(
        <>
        <div className="hero">
            <h1 className="faq-title">
                Frequently Asked <span>Questions</span>
            </h1>
        </div>

        <div className="tab">
            {tabName.map((tab,value)=>{
                return(
                    <div className="btn-container">
                        <button className={`tab-btn ${value===tabIndex ? "active-tab" : undefined}`}
                         onClick={()=>toggleTab(value)}>
                            {tab}
                        </button>
                    </div>
                )
            })}
        </div>

        <div className="faq">
            <ul>
                {faqTab.map((tab,value)=>{
                    return(
                        <div>
                            <li>{tab.question}
                                <img src={plus} alt="" 
                                onClick={()=>handleClick(value)}
                                />
                                
                            </li>

                            <p className={answerIndex===value && expand ? "expand" : undefined}>{tab.answer}</p>
                        </div>
                    )

                })}
            </ul>
        </div>
        <Footer />
        </>
    )
}