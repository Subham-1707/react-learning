// import { Outlet } from "react-router-dom"
import ProfileFunction from "./Profile"
import ProfileClass from './ProfileClass'
import { Component } from "react"
import UserContext from "../../../utils/UserContext"
// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>This is the About page.</p>
//             {/* <Outlet/> */}
//             <ProfileFunction name = 'subham kumar'/>
//             <ProfileClass name= 'subham class'/>
//         </div>
//     )
// }

class About extends Component{
    constructor(props){
        super(props)
         console.log('Parent- constructor')
    }
    static contextType = UserContext;

    componentDidMount(){
        // Best Place to make api call
        console.log('Parent-componentDidMount')
    }
    render(){
        console.log('Parent-render')
         return (
        <div>
            <h1>About Us</h1>
             <UserContext.Consumer>
                {
                    ({user}) => (
                        <h3 className="font-bold text-l text-red-400">
                        This is the About page made by {user.name} - {user.email}</h3>
                    )
                }
            </UserContext.Consumer> 
            <h4 className="font-bold text-green-500">contextType user here: {this.context.user.name}</h4>
            <p>This is the About page.</p>
            {/* <ProfileFunction name = 'subham kumar'/> */}
            <ProfileClass name= 'First class'/>
            {/* <ProfileClass name= 'Second class'/> */}
        </div>
    )
    }
}

export default About 


/**
 * Parent class constructor
 * Parent-render
 *   First child constructor
 *   First child render
 *   Second child constructor
 *   Second child render
 * 
 * DOM Updates For Children then 
 * ­React updates ­D­O­M and refs commit the 
 * phase start
 * 
 * 
 * First child ComponentDidMount
 * Second child ComponentDidMount
 * Parent ComponentDidMount
 * 
 */