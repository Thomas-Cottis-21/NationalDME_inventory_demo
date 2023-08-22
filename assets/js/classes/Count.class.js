class Count {

    countUp = (chevron, quantityInput) => {

        chevron.addEventListener("click", ()  => {

            quantityInput.value++;

        })

    }

    countDown = (chevron, quantityInput) => {

        chevron.addEventListener("click", () => {

            quantityInput.value--;

        })

    }

    submit = (button, itemInput, quantityInput) => {

        button.addEventListener("click", () => {

            itemInput.value = "";
            quantityInput.value = "";

        })

    }

    updateCount = (parent, itemInput, quantityInput) => {

        parent.addEventListener("click", (event) => {

            let targetElement = event.target;
    
            if (targetElement.classList.contains("item-count")) {
    
                let item = targetElement.getAttribute("data-item");
                let count = targetElement.getAttribute("data-count");
    
                itemInput.value = item;
                quantityInput.value = count;
    
            }

        })

    }

}

export default Count;