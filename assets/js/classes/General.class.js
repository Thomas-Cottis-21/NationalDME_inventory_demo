class General {
//the purpose of the general class is to provide general methods that all classes can call upon that are used throughout the application. It is designed to be extended, not directly called

pageRedirect = (element, url) => {

    if (element) {

        element.addEventListener("click", () => {
    
            window.location.href = url;
    
        })

    } else {

        return;

    }


}


}

export default General;