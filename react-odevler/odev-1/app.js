import axios from "axios";

async function getData(userId) {
    
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
        
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    
    //typeof(user) = object | typeof(post) = array  olduğu için bu şekilde birleştiriyorum.
    user["posts"] = post;         

    console.log(user);
    
}

export default getData;