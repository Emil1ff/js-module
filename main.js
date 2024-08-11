//Task-1
const getName = (name,arr) => {
    let newUser = new Map();
    try {
        let user = arr.filter(item => item.name === name)
        if (user.length === 0) {
            throw new Error(`The user ${name} does not exist.`);
        } else {
            user.map(item => {
                if (item.address.city != undefined && item.address.street != undefined) {
                    newUser.set("name", item.name)
                    newUser.set("address", {
                        street: item.address.street,
                        city: item.address.city
                    })
                }
                else {
                    throw new Error(`The user ${name} does not have complete address information.`);
                }
            })
        }
    } catch (err1) {
        console.error(err1.message);
    }
    if (newUser.size != 0) {
        return newUser
    }
    else {
        return null
    }
}

//Task-2
const findId =(id, array) => {
    try {
        const result = array.find(item => item.id === id);

        if (!result) {
            throw new Error(`Object with id ${id} not found`);
        }

        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}


export  {getName ,findId};




