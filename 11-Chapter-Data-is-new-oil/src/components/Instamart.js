import { useState } from "react"

const Section = ({title, description, isVisible, setIsVisible}) => {
    // const [isVisible, setIsVisible] = useState(false)
    return (
        <div className="section border border-black m-3 p-3">
            <h3 className="text-xl underline font-bold">{title}:</h3>
            { isVisible ?
              <button className= 'mx-1 px-2 bg-red-600 rounded-2xl cursor-pointer' 
              onClick={() => setIsVisible(false)}>Hide</button> 
              :
            <button className= 'mx-1 px-2 bg-green-600 rounded-2xl cursor-pointer' 
            onClick={() => setIsVisible(true)}>Show</button>
            }
           
           { isVisible && <p>{description}</p>} 
        </div>
    )
}

const Instamart = () =>{
    const [section, setSection] = useState("about")
    return (
        <div>
            <h1 className="text-3xl m-1 p-1">Instamart </h1>
        <Section 
            title= {'About Instamart'}
            description = {'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'}  
            isVisible = {section === "about"}
            setIsVisible = {(visible) => setSection(visible ? "about" : "")}
        />
        <Section 
            title= {'Team Instamart'}
            description = {'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'}  
            isVisible = {section === "team"}
            setIsVisible = {(visible) => setSection(visible?  "team" : "")}
        />
        <Section 
            title= {'Career Instamart'}
            description = {'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'}  
            isVisible = {section === "career"}
            setIsVisible = {(visible) => setSection(visible ? "career" : "")}
        />
             {/* <AboutInstamart/>
             <DetailsInstamart/>
             <CareerInstamart/>
             <TeamInstamart/> */}
        </div>
    )
}

export default Instamart