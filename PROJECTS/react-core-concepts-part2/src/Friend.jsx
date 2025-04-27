export default function Friend({friend}){

    // console.log(friend);
    return (
        <div className="child-card">
            <p>Name: {friend.name}</p>
            <p>Email: {friend.email}</p>
            <p>Contact: {friend.phone}</p>
        </div>
    )
}