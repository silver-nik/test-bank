const setAccordion = (className) => {
    const accordionItems = document.querySelectorAll(className);

    accordionItems.forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();

            accordionItems.forEach(item => {
                if (item !== el) {
                    item.classList.remove("active");
                }
            });

            el.classList.toggle("active");
        })
    })

}

setAccordion(".faq-item");
setAccordion(".submenu__top-item");