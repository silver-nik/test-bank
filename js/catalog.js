const setCollapseCatalog = () => {
    const collapseBtn = document.querySelector(".catalog__collapse-btn"),
          collapseBtnTitle = collapseBtn.querySelector(".collapse-btn__title"),
          unCollapsedBtn = document.querySelector(".catalog__load-more"),
          collapsedElements = document.querySelectorAll("[data-collapse]");

    let isCollapsed = false;

    const updCollapseState = () => {
        collapsedElements.forEach(el => el.classList.toggle("active", !isCollapsed));
        collapseBtn.classList.toggle("active");
        collapseBtnTitle.textContent = isCollapsed ? "Развернуть список машин" : "Свернуть список машин";
    }

    collapseBtn.addEventListener("click", () => {
        isCollapsed = !isCollapsed;
        updCollapseState();
    })
    
    unCollapsedBtn.addEventListener("click", (e) => {
        e.preventDefault();

        isCollapsed = false;
        updCollapseState();        
    })
}

setCollapseCatalog();