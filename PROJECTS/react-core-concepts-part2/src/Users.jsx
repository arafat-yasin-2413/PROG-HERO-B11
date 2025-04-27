import { use } from "react";
import User from "./User";

export default function Users ({usersPromise}) {

    const users = use(usersPromise);
    console.log(users);

    return (
        <div className="card">
            <h3>Users : {users.length} </h3>


            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
        </div>
    )
}