/* 
PARCEL - A BUNDLER:
----------------------------
  It is a feature provided by bundlers like Webpack and Parcel.
   1. HMR - Hot Module Replacement
   2. File watchers algorithm - C++. It watches for changes in the source code files and triggers a reload when a change is detected.
   3. BUNDLER
   4. MINIFY
   5. CLEANING OUR CODE
   6. DEV AND PRODUCTION BUILD
   7. SUPER FAST BUILD TIME
   8. IMAGE OPTIMIZATION
   9. CACHE WHILE DEVELOPMENT
   10. COMPATIBILITY WITH OLDER BROWSERS
   11. COMPRESSION
   12. MANAGE PORT NO
   13. ZERO CONFIGURATION
   14. CREATE A SERVER 

   TRANSITIVE DEPENDENCIES - If A depends on B and B depends on C,
    then A has a transitive dependency on C.
    In other words, A indirectly depends on C through B.

    browserlist - It is a configuration file used in web development to
     specify the target browsers for a project. It helps tools like Babel and 
     Autoprefixer to determine which JavaScript features and CSS prefixes 
     to include in the final output, ensuring compatibility with the specified browsers.
*/

import React from 'react'
import ReactDOM from 'react-dom/client'

// React element - because it is returning a jsx element
// writing JSX code - JavaScript XML
const container = (
    <div
        id="container"
        style={{
            backgroundColor: 'blue',
            padding: '10px',
            borderRadius: '10px'  
          }}
    >
        <h1
            className="main-title"
            key="heading1"
            style={{
                color: 'black',
                backgroundColor: 'green',
                fontFamily: 'Arial'
            }}
        >
            Namaste, React! from H1
        </h1>
        <h2
            className="main-title"
            key="heading2"
            style={{
                color: 'black',
                backgroundColor: 'red',
                fontFamily: 'Arial'
            }}
        >
            Namaste, React! from H2
        </h2>
    </div>

)

const Title = () => ( <h3>Namaste, React! from Title</h3> )
// React component - It is a function that returns a React element
// component composition - It is the process of combining multiple components to create a new component. It is a way to reuse code and create complex UIs from simple components.
const HeadingComponent =  () => {
    return (
        <div className='outer'>  
        {container} 
              <h1>Namaste, React! from HeadingComponent</h1>
                <HeadingComponent2 />
                {Title()} 
        </div>
     
    )
}

const HeadingComponent2 =  () => (
  <h2>Namaste, greeting from subham</h2>
)
   

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(container)
root.render(<HeadingComponent />)