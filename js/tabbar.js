// const setUpTabs = () => {
//     document.querySelectorAll(".tabbar__link").forEach(link => {
//         link.addEventListener("click", () => {
//             const tabbar = link.parentElement.parentElement;
//             const shopList = document.querySelector(".shop");
//             const tabNumber = link.dataset.forTab;

//             const tabToActivate = shopList.querySelector(`li[data-tab="${tabNumber}"]`);

//             // HELP =============================
//             // CAN ONLY TOGGLE, DOESN'T WORK EXACTLY AS INTENDED

//             tabbar.querySelectorAll(".tabbar__link").forEach(link => {
//                 link.classList.remove("tabbar__link--active");

//             });

//             shopList.querySelectorAll(".shop__item").forEach(item => {
//                 item.classList.remove("shop__item--active");

//             });

//             link.classList.add("tabbar__link--active");
//             tabToActivate.classList.add("shop__item--active");
            

//         });
//     })
// }

// document.addEventListener("DOMContentLoaded", () => {
//     setUpTabs();
// });


// const tabs = document.querySelectorAll(`[data-tab-target]`);

// tabs.forEach(tab => {
// tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.tabTarget);
//     target.classList.add("active");
// })

// })

const tabs = document.querySelectorAll(".tabbar__list li a");

const weapon = document.querySelectorAll(".shop__item--weapon");
const attire = document.querySelectorAll(".shop__item--attire");
const artifact = document.querySelectorAll(".shop__item--artifact");
const all = document.querySelectorAll(".shop__item");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // ADDS AND REMOVES ACTIVE CLASS ON THE TABS WHEN CLICKED

        tabs.forEach((tab) => {
            tab.classList.remove("tabbar__link--active");
        })
        tab.classList.add("tabbar__link--active");

        // REVEALS SHOP ITEMS BASED ON THE TAB CLICKED

        let tabval = tab.getAttribute("data-tab");

        all.forEach((i) => {
            i.classList.remove("shop__item--active");
        });

        if(tabval == "weapon"){
            weapon.forEach((i) => {
                i.classList.add("shop__item--active");
            });
            
        }else if(tabval == "attire"){
            attire.forEach((i) => {
                i.classList.add("shop__item--active");
            });

        }else if(tabval == "artifact"){
            artifact.forEach((i) => {
                i.classList.add("shop__item--active");
            });

        }

    })
});