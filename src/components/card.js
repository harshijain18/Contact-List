export const Card = (props) =>{
    return <div className="cd">
    <h2 >{props.name}</h2>
    <img className = "et" src = { props.image} alt = ""></img>
    <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>
}