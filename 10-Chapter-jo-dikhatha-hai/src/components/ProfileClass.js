import {Component } from 'react'

class ProfileClass extends Component {
   constructor(props){
         super(props)
        //  create state :
        this.state = {
            userInfo : {
                name : '',
                location: ''
            }
        }

        console.log(this.props.name + ' child-constructor ')
   }

async componentDidMount(){
    // console.log(this.props.name +' child-componentDidMount')

    // // API Call here
     const response = await fetch('https://api.github.com/users/Subham-1707')
     const data = await response.json()
     console.log('response data:: ', data)
     this.setState({
        userInfo: data
     })

//    this.timer = setInterval(() => {
//         console.log('Namaste React')
//     }, 1000)
}

componentDidUpdate(preProps, preState){
    if(this.state.count !== preState.count){
        // code
    }
    console.log('componentDidUpdate')
}

componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.timer)
}

    render() {
     console.log(this.props.name + ' child-render')

        return (
            <div>
                <h2>Profile Class Component</h2>
                <p>This is Class Based Profile</p>
               <img src= {this.state?.userInfo?.avatar_url}  alt='user profile' width={300} height={300}/>
                <h3>Name: {this.state?.userInfo?.name}</h3>
               <h3>Location: {this.state?.userInfo?.location} </h3>
               <button onClick = {
                    () => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }
                }>Count</button>
                <button onClick = {
                    () => this.setState({count: 0})
                }>Reset</button>
            </div>
        )
    }
}

export default ProfileClass

/**
 *  Parent- constructor
 *  Parent-render
 *  First class child-constructor
 *  First class child-render
 *  First class child-componentDidMount
 *  Parent-componentDidMount
 * 
 * render phase is finished now commit phase
 * would start.
 * 
 *  DOM  is Updated
 *  Api Call:
 *  Json is logged in console 
 *  First class child-render
 * componentDidUpdate
 * 
 */