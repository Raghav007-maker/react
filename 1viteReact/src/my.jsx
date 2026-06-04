
const My = function(){
    const name = "username"
    return(
        <h1>Hello World {username}</h1>
    )
}

export default My

// {} contains evaluated expression

// we can not erite if else or while loop inside it because after passing the variable to render function it will directly show the vaiable in the webpage unlike like if else if we use that inside {} then the function will pass if else or loop inside render which must not be done.. 