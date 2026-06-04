
let reactElement = {
    type:'a',
    props:{
        href: 'http://www.google.com',
        target:'_blank'
    },
    Children:'Hey How Are You..?'
}

// function customRender(reactElement, container){
//     const element = document.createElement(reactElement.type);
//     element.innerHTML = reactElement.Children
//     element.setAttribute('href', reactElement.props.href)
//     element.setAttribute('target', reactElement.props.target)
//     container.appendChild(element)
// }



function customRender(reactElement, container){
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.Children
    for(const num in reactElement.props){
        element.setAttribute('href', reactElement.props.href)
        // element.setAttribute('target', reactElement.props.target)
    }
    container.appendChild(element)
}
const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)