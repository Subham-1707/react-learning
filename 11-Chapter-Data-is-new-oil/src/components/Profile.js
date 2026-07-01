import { useEffect, useState } from 'react'

const Profile = (props) => {

   const [count, setCount] = useState(0)
//    console.log('fun render')

useEffect(() => {
    // API call
    // console.log('useEffect')
   const timer =  setInterval(() => {
        console.log('Namaste React Function')
    },1000)

    console.log('useeffect')
    // UNMOUNTING
    return () => {
        console.log('useEffect return')
        clearInterval(timer)
    }
}, [])
 console.log('rendering-UseEffect')
return (
    <div>
        <h2>Profile</h2>
        <p>This is Profile page</p>
        <h3>Name: {props.name} </h3>
        <h3>Count: {count} </h3>
        <button onClick = {
            () => setCount(count + 1)
        }>Count</button>
        <button onClick = {
            () => setCount(0)
        }>Reset</button>
    </div>
)
}

export default Profile