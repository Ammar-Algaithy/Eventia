import { Link } from "react-router-dom";

export default function HomePage(){
    return (
        <div className="mt-7em">
            <h1>Home Page</h1>
            <h3>Go to <Link to={'/activities'}> Activities</Link></h3>
        </div>
    )
}