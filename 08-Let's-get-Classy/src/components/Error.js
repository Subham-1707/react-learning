import { useRouteError } from "react-router-dom"

const  Error = () => {
    const error = useRouteError()
    // console.error(error)
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but an error occurred while loading the page.</p>
            <h2>{error.status} - {error.statusText}</h2>
        </div>
    )
}

export default Error