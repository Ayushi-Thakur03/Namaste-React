import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const error = useRouteError();
    console.log(error)
    return(
       <div className="error">
        <h1>Oppss!!!</h1>
        <h3>Something went wrong!!!</h3>
        {/* <h3>{error.status} : {error.error.stack}</h3> */}
       </div>
    )
}

export default Error;