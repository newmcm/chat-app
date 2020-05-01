const users = []
// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room})=>{
    //Clean Data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate Data
    if(!username || !room){
        return {
            error: 'Username and Room are required!'
        }
    }
    //Check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    //validate Username
    if(existingUser){
        return{
            error:"username is in use"
        }
    }

    //store user
    const user = {id,username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) =>{
    const index = users.findIndex((user)=> user.id === id)
    if(index !== -1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id)=>{
    return users.find(user => user.id === id)
}

const getUsersInRoom = (room)=>{
    return users.filter(user=> user.room === room.trim().toLowerCase())
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

/* addUser({id:23,username:'mingchuan',room:'sg-1'})
addUser({id:24,username:'zhining',room:'sg-1'})
addUser({id:25,username:'brownie',room:'sg-1'})
console.log(getUser(23).room) */