export default function User({user}){
    return (
        <div className="child-card">
            <h4>Name: {user.name} </h4>
            <p>Comany: {user.company.name} </p>
            <p>City: {user.address.city} </p>
        </div>
    )
}