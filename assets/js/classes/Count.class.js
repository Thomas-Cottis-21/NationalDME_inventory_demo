class Count {

    countUp = (chevron, quantityInput, itemInput) => {

        chevron.addEventListener("click", ()  => {

            if (itemInput.value == "") {

                quantityInput.value = "";
                
            } else {

                quantityInput.value++;

            }

        })

    }

    countDown = (chevron, quantityInput, itemInput) => {

        chevron.addEventListener("click", () => {

            if (itemInput.value == "") {

                quantityInput.value = "";
            }

            if (quantityInput.value <= 0) {

                return;

            } else {

                quantityInput.value--;

            }


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

    checkCount = (quantityInput, itemInput) => {

        quantityInput.addEventListener("input", () => {

            if (itemInput.value == "") {

                quantityInput.value = "";

            }

            if (quantityInput.value.includes("-")) {

                quantityInput.value = "0";

            }

        })

        itemInput.addEventListener("input", () => {

            if (itemInput.value == "") {

                quantityInput.value = "";

            }

        })


    }

}

export default Count;