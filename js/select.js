const setCustomSelect = () => {
    const selects = document.querySelectorAll('.form-select-custom');

    selects.forEach(el => {
        let selectValue = el.querySelector(".form-select__value"),
            selectList = el.querySelector(".form-select-list");

        el.addEventListener("click", (e) => {
            e.preventDefault();
            selectList.classList.toggle("active");
        })

        selectList.querySelectorAll("li").forEach(el => {
            el.addEventListener("click", (e) => {
                e.preventDefault();

                selectValue.textContent = e.target.getAttribute("data-value");
            })
        })
    })


}

setCustomSelect();