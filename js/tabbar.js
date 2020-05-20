const setUpTabs = () => {
    document.querySelectorAll(".tabbar__link").forEach(link => {
        link.addEventListener("click", () => {
            const tabbar = link.parentElement.parentElement;
            const shopList = document.querySelector(".shop");
            const tabNumber = link.dataset.forTab;

            const tabToActivate = shopList.querySelector(`li[data-tab="${tabNumber}"]`);

            // HELP =============================
            // CAN ONLY TOGGLE, DOESN'T WORK EXACTLY AS INTENDED

            tabbar.querySelectorAll(".tabbar__link").forEach(link => {
                link.classList.remove("tabbar__link--active");

            });

            shopList.querySelectorAll(".shop__item").forEach(item => {
                item.classList.remove("shop__item--active");

            });

            link.classList.add("tabbar__link--active");
            tabToActivate.classList.add("shop__item--active");




            // tabbar.querySelectorAll(`.tabbar__link--${tabNumber}`).forEach(link => {
            //     link.classList.toggle(`tabbar__link--active`);
            //     link.classList.toggle(`tabbar__link--active`);
            //     link.classList.toggle(`tabbar__link--active`);
                
            // });

            // shopList.querySelectorAll(`.shop__item--${tabNumber}`).forEach(shopItem => {
            //     if(shopItem.classList.contains("shop__item--active")){
            //         shopItem.classList.remove("shop__item--active");
            //     } else{
            //         shopItem.classList.add("shop__item--active");
            //     }
                

            // });
            

        });
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setUpTabs();
});
