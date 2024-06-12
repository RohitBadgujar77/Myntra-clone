let searchBox = document.querySelector(".search-box");
let searchType = document.querySelector(".search-type");
searchType.addEventListener("click", ()=> {
    searchBox.style.backgroundColor = "transparent";
    searchBox.style.border = "1.5px solid rgb(225, 225, 225)";
})
searchType.addEventListener("blur", ()=> {
    searchBox.style.backgroundColor = "rgb(240, 240, 240)";
    searchBox.style.border = "none";
});
let main_content = document.querySelector(".main-content");
let main_options = document.querySelector(".main-options");
let main_shoping_stuff = document.querySelector(".main-shoping-stuff");
let mainProductShop = document.querySelector(".main-product-shop");
let for_bundles = document.querySelector(".for-bundles");
let for_place = document.querySelector(".for-place");
let for_size = document.querySelector(".for-size");
let for_size_cols = document.querySelectorAll(".col");
//shop content head option code:-
for(let i=0;i<for_size_cols.length;i++) {
    let temp = "";
    for(let j=0;j<sizeNameCol[i].length;j++) {
        temp += `<div class="subCol">
                    <div class="common-textBox">
                    <input type="checkbox" id="${sizeNameCol[i][j]}">
                    </div>
                    <label for="${sizeNameCol[i][j]}">${sizeNameCol[i][j]}</label>
                 </div>`   
    }
    for_size_cols[i].innerHTML = temp; 
    for(let j=0;j<sizeNameCol[i].length;j++) {
        let tempEl = document.getElementById(`${sizeNameCol[i][j]}`);
        tempEl.style.height = "18px";
        tempEl.style.width = "18px";
        tempEl.style.position = "absolute";
        tempEl.style.top = "0px";
        tempEl.style.left = "0px";
    }
}
let filter_options = [for_bundles, for_place, for_size];
for(let i=0;i<3;i++) {
    filter_options[i].remove();
};
let bundle_btn = document.querySelector(".bundles");
let place_btn = document.querySelector(".place");
let size_btn = document.querySelector(".size");
let filter_option_btn = [bundle_btn, place_btn, size_btn];
let mode = "hidden";
for(let i=0;i<3;i++) {
    filter_option_btn[i].addEventListener("click", ()=> {
        if(filter_option_btn[i].style.backgroundColor == "rgb(240, 240, 240)") {
            filter_option_btn[i].style.backgroundColor = "";
            filter_options[i].remove();
            mainProductShop.style.borderTop = "1px solid rgb(228, 228, 228)";
        }else {
            for(let i=0;i<3;i++) {
                filter_option_btn[i].style.backgroundColor = "";
                filter_options[i].remove();
            };        
            mainProductShop.append(filter_options[i]);
            filter_option_btn[i].style.backgroundColor = "rgb(240, 240, 240)";
            mainProductShop.style.borderTop = "1px solid transparent";
        }
    })
}
let mainRecomOptBox = document.querySelector(".main-recom-opt-box");
let mainShopRecomBar = document.querySelector(".main-shop-recom-bar");
let recomSortbyOpt = document.querySelector(".recom-sortby-opt");
mainRecomOptBox.addEventListener("mouseover", ()=> {
    mainShopRecomBar.style.overflow = "visible";
    mainRecomOptBox.style.boxShadow = "-2px 20px 20px 0px rgba(0, 0, 0, 0.128)";
    recomSortbyOpt.style.border = "1px solid transparent";
    mainRecomOptBox.style.border = "1px solid rgb(228, 228, 228)";
});
mainRecomOptBox.addEventListener("mouseout", ()=> {
    mainShopRecomBar.style.overflow = "hidden";
    mainRecomOptBox.style.boxShadow = "none";
    recomSortbyOpt.style.border = "1px solid rgb(228, 228, 228)";
    mainRecomOptBox.style.border = "none";
});
//filter options code:-
let tempVar = "";
let personType = document.querySelector(".person-type");
for(let i=0;i<4;i++) {
    tempVar += `<div class="person-type-opt">
                  <input type="radio" class="person-type-radio" id="${personName[i][0]}" name="person" value="${personName[i][1]}">
                  <label for="${personName[i][0]}" class="person-type-label">${personName[i][1]}</label>    
                </div>`
}
personType.innerHTML = tempVar;
tempVar = "";
let categoriesType = document.querySelector(".categories-type");
for(let i=0;i<7;i++) {
    tempVar += `<div class="categories-opt">
                  <input type="checkbox" class="cat-opt-class"id="${categoriesName[i][0]}">
                  <label for="${categoriesName[i][0]}" class="cat-label">${categoriesName[i][1]}<p class="qty-count">${categoriesName[i][2]}</p></label>
                </div>`
}
categoriesType.innerHTML = tempVar;
tempVar = "";
let brandType = document.querySelector(".brand-type");
for(let i=0;i<8;i++) {
    tempVar += `<div class="categories-opt brand-opt">
                  <input type="checkbox" class="cat-opt-class"id="${brandName[i][0]}">
                  <label for="${brandName[i][0]}" class="cat-label">${brandName[i][1]}<p class="qty-count">${brandName[i][2]}</p></label>
                </div>`
}
brandType.innerHTML = tempVar;
tempVar = "";
let priceType = document.querySelector(".price-type");
for(let i=0;i<4;i++) {
    tempVar += `<div class="categories-opt price-opt">
                  <input type="checkbox" class="cat-opt-class"id="${priceName[i][0]}">
                  <label for="${priceName[i][0]}" class="cat-label">${priceName[i][1]}<p class="qty-count">${priceName[i][2]}</p></label>
                </div>`
}
priceType.innerHTML = tempVar;
tempVar = "";
let colorType = document.querySelector(".color-type");
for(let i=0;i<7;i++) {
    tempVar += `<div class="categories-opt color-opt">
                    <input type="checkbox" class="cat-opt-class"id="${colorName[i][0]}">
                    <label for="${colorName[i][0]}" class="cat-label">
                       <div class="color-circle" id="${colorName[i][1]}"></div>
                       ${colorName[i][3]}<p class="qty-count">${colorName[i][4]}</p>
                    </label>
                </div>`
}  
colorType.innerHTML = tempVar;
for(let i=0;i<7;i++) {
    if(colorName[i][0] == "white") {
        document.querySelector(`#${colorName[i][1]}`).style.backgroundColor = `${colorName[i][2]}`;
        document.querySelector(`#${colorName[i][1]}`).style.border = `1px solid grey`;
    }else {
        document.querySelector(`#${colorName[i][1]}`).style.backgroundColor = `${colorName[i][2]}`;
    }
}
tempVar = "";
let disscountType = document.querySelector(".disccount-type");
for(let i=0;i<9;i++) {
    tempVar += `<div class="categories-opt">
                  <input type="radio" class="cat-opt-class"id="${disscountName[i][0]}" name="dis" value="${disscountName[i][0]}">
                  <label for="${disscountName[i][0]}" class="cat-label">${disscountName[i][1]}</label>
                </div>`
}
disscountType.innerHTML = tempVar;
tempVar = "";
//product card code:-
let shopBrandProdAll = document.querySelectorAll(".shop-brand-prod");
for(let i=0;i<15;i++) {
    shopBrandProdAll[i].innerHTML = `<div class="shop-prod-img">
                                        <div class="shop-prod-rating">
                                           ${shopBrandName[i][1]} 
                                           <div class="star-box">
                                               <i class="star ri-star-fill"></i>
                                               <p>|</p>     
                                           </div>
                                           ${shopBrandName[i][2]}
                                        </div>
                                    </div>
                                    <div class="shop-prod-info">
                                        <div class="shop-prod-info-box shop-brand-name">
                                        ${shopBrandName[i][3]}
                                        </div>
                                        <div class="shop-prod-info-box shop-brand-type">
                                        ${shopBrandName[i][4]}
                                        </div>
                                        <div class="shop-prod-info-box">
                                            <div class="shop-prod-price">${shopBrandName[i][5]}</div>
                                            <div class="shop-prod-price shop-prod-cut-price">${shopBrandName[i][6]}</div>
                                            <div class="shop-prod-price shop-prod-discount">${shopBrandName[i][7]}</div>
                                        </div>
                                    </div>
                                    <div class="shop-hover-prod-info">
                                        <div class="shop-hover-VS-box">
                                            <div class="shop-hover-VS-opt">
                                                <div class="VS-opt-cover"></div>
                                                <i class="ri-checkbox-multiple-blank-line"></i>
                                                <div class="VS-opt-name">VIEW SIMILAR</div>
                                            </div>
                                        </div>
                                        <div class="shop-hover-prod-box">
                                            <div class="shop-hover-img-pages">
                                                <div class="shop-hover-img-box">
                                                    <div class="shop-hover-img-dot dot1"></div>
                                                    <div class="shop-hover-img-dot"></div>
                                                    <div class="shop-hover-img-dot"></div>
                                                    <div class="shop-hover-img-dot"></div>
                                                    <div class="shop-hover-img-dot"></div>
                                                    <div class="shop-hover-img-dot"></div>
                                                    <div class="shop-hover-img-dot"></div>
                                                    <div class="shop-hover-img-dot"></div>    
                                                </div>
                                            </div>    
                                            <div class="shop-hover-wishlist-box">
                                                <div class="shop-hover-wishlist-opt">
                                                    <i class="wish-opt-heart ri-heart-line"></i>
                                                    WISHLIST
                                                </div>
                                            </div>
                                            <div class="shop-prod-info-box shop-brand-type shop-hover-common-box">
                                                Sizes: ${shopBrandName[i][8]}
                                            </div>
                                            <div class="shop-prod-info-box shop-hover-common-box">
                                                <div class="shop-prod-price">${shopBrandName[i][5]}</div>
                                                <div class="shop-prod-price shop-prod-cut-price">${shopBrandName[i][6]}</div>
                                                <div class="shop-prod-price shop-prod-discount">${shopBrandName[i][7]}</div>
                                            </div>
                                        </div>
                                    </div>`
}
//View-Similar Animation:
const scaleUP = [
    { offset: 0.0, height: "30px", width: "30px", borderRadius: "30px"},
    { offset: 0.1, offset: 0.2, offset: 0.3, offset: 0.4, offset: 0.5, offset: 0.6, offset: 0.7, offset: 0.8, offset: 0.9, borderRadius: "30px"},
    { height: "30px", width: "140px", borderRadius: "30px" },
];
const scaleUPtiming = {
    duration: 150,
    iteration: 1,
}
const scaleDOWN = [
    { offset: 0.0, height: "30px", width: "140px", borderRadius: "30px"},
    { offset: 0.1, offset: 0.2, offset: 0.3, offset: 0.4, offset: 0.5, offset: 0.6, offset: 0.7, offset: 0.8, offset: 0.9, borderRadius: "30px"},
    { height: "30px", width: "30px", borderRadius: "30px" },
]; 
let shopProdImgAll = document.querySelectorAll(".shop-prod-img");
let shopHhoverVSoptAll = document.querySelectorAll(".shop-hover-VS-opt");
let vsOptNameAll = document.querySelectorAll(".VS-opt-name");
let shopHoverProdInfoAll = document.querySelectorAll(".shop-hover-prod-info");
for(let i=0;i<15;i++) {
    shopProdImgAll[i].style.backgroundImage =  `url(${shopBrandName[i][0]})`;
    vsOptNameAll[i].style.display = "none";
    shopHoverProdInfoAll[i].style.display = "none";
}
for(let i=0;i<15;i++) {
    shopHhoverVSoptAll[i].addEventListener("mouseover", ()=> {
        shopHhoverVSoptAll[i].animate(scaleUP, scaleUPtiming);
        shopHhoverVSoptAll[i].style.width = "140px";
        shopHhoverVSoptAll[i].style.borderRadius = "30px";
        setTimeout(()=> {
            vsOptNameAll[i].style.display = "flex";
        }, 100);
    });
    shopHhoverVSoptAll[i].addEventListener("mouseout", ()=> {
        shopHhoverVSoptAll[i].animate(scaleDOWN, scaleUPtiming);
        shopHhoverVSoptAll[i].style.width = "30px";
        shopHhoverVSoptAll[i].style.borderRadius = "30px";
        setTimeout(()=> {
            vsOptNameAll[i].style.display = "none";
        }, 100);
    });        
} 
//Hover state Animation:
for(let i=0;i<15;i++) {
    shopBrandProdAll[i].addEventListener("mouseover", ()=> {
        shopHoverProdInfoAll[i].style.display = "flex";
    });
    shopBrandProdAll[i].addEventListener("mouseout", ()=> {
        shopHoverProdInfoAll[i].style.display = "none";
    });
}
let pageCountAll = document.querySelectorAll(".page-count");
let idx = 0;
const updateCurPage = (id)=> {
    idx = id;
    for(let i=0;i<10;i++) {
        if(i == idx) {
            pageCountAll[i].style.backgroundColor = "black";
            pageCountAll[i].style.border = "1px solid black";
            pageCountAll[i].style.color = "white";
        }else {
            pageCountAll[i].style.backgroundColor = "transparent";
            pageCountAll[i].style.border = "1px solid transparent";
            pageCountAll[i].style.color = "black";
        }
    }    
}
for(let i=0;i<10;i++) {
    pageCountAll[i].addEventListener("click", ()=> {
        updateCurPage(i);
    })
}
let nextPageBtn = document.querySelector(".page-next");
nextPageBtn.addEventListener("click", ()=> {
    idx++;
    if(idx < 10) {
        updateCurPage(idx);
    }else {
        idx--;
    }
});
for(let i=0;i<10;i++) {
    pageCountAll[i].addEventListener("mouseover", ()=> {
        if(i == idx) {
            pageCountAll[i].style.border = "1px solid black";
        }else {
            pageCountAll[i].style.border = "1px solid rgb(228, 228, 228)";
        }
    })
    pageCountAll[i].addEventListener("mouseout", ()=> {
        if(i == idx) {
            pageCountAll[i].style.border = "1px solid black";
        }else {
            pageCountAll[i].style.border = "1px solid transparent";
        }
    })

} 
/*============================================================Small Devices Code================================================================*/
//putting data in card of product for mobile view
let shopCard = document.querySelectorAll(".shop-card");
for(let i=0;i<14;i++) {
    shopCard[i].innerHTML = `<div class="card-img">
                                <div class="crad-prod-rating">
                                    ${shopBrandName[i][1]}
                                    <i class="star ri-star-fill"></i>
                                    <p class="rating-para">|</p>
                                    ${shopBrandName[i][2]}
                                </div>
                            </div>
                            <div class="card-info">
                                <div class="info-box">
                                    <h1 class="card-name">
                                    ${shopBrandName[i][3]}
                                    </h1>                            
                                    <h2 class="card-type">
                                    ${shopBrandName[i][4]}
                                    </h2>
                                    <div class="price-info">
                                        <p class="real-price">
                                            <i class="rup-money fa-solid fa-indian-rupee-sign"></i>
                                            ${brandPriceList[i][0]}
                                        </p>
                                        <p class="old-price">
                                            <i class="rup-money fa-solid fa-indian-rupee-sign"></i>
                                            ${brandPriceList[i][1]}
                                        </p>
                                        <p class="diss-off">
                                            ${shopBrandName[i][7]}
                                        </p>
                                    </div>
                                    <div class="cupon-info">
                                        <p class="cupon-price">
                                            Best Price 
                                            <i class="rup-money fa-solid fa-indian-rupee-sign"></i>
                                            ${shopBrandName[i][9]}    
                                        </p>
                                        with coupon
                                    </div>
                                </div>
                                <i class="wish-heart ri-heart-line"></i>
                            </div>
`
}
//putting images in dhoping cards:-
let cradImg = document.querySelectorAll(".card-img");
for(let i=0;i<14;i++) {
    cradImg[i].style.backgroundImage = `url(${shopBrandName[i][0]})`;
}
//making sorting page:-
let sortPage = document.querySelector(".sort-opt-page");
sortPage.style.display = "none";
let sortCover = document.querySelector(".sort-page-cover");
let sortOpt = document.querySelector(".bottom-sort-opt");
var pageMode = 0;
sortOpt.addEventListener("click", ()=> {
    document.querySelector("html").style.overflow = "hidden";
    sortPage.style.display = "flex";
    sortPage.style.zIndex = "14";
})
sortCover.addEventListener("click", ()=> {
    document.querySelector("html").style.overflowY = "scroll";
    sortPage.style.display = "none";
})
//making filter page:-
let filterOpt = document.querySelector(".bottom-filter-opt");
let filterPage = document.querySelector(".filter-opt-page");
let filterFootOpts = document.querySelectorAll(".filter-foot-opt");
filterPage.style.display = "none";
let filterPageFoot = document.querySelector(".filter-page-foot");
filterPageFoot.style.display = "none";
//Gender filter opts:-
let filterGen = document.querySelector(".filter-gen-box");
let filterGenOpt = document.querySelectorAll('.filter-gen-opt');
let tempHtml = "";
for(let i=0;i<4;i++) {
    filterGen.innerHTML += `<div class="filter-common-opt filter-gen-opt">
                                <div class="common-opt-name">
                                    <i class="check-logo ri-check-line"></i>
                                    ${filtGenList[i][0]}
                                </div> 
                                <div class="common-opt-count">
                                ${filtGenList[i][1]}
                                </div>
                            </div>`;
}
//Category filter opts:-
let filterCat = document.querySelector('.filter-cat-box');
for(let i=0;i<7;i++) {
    filterCat.innerHTML += `<div class="filter-common-opt filter-gen-opt">
                                <div class="common-opt-name">
                                    <i class="check-logo ri-check-line"></i>
                                    ${filtCatList[i][0]}
                                </div> 
                                <div class="common-opt-count">
                                ${filtCatList[i][1]}
                                </div>
                            </div>`;
}
//size fiilter opts:-
let filterSize = document.querySelector(".filter-size-box");
let sizeSearch = document.querySelector('.size-search-text');
let sizeOptBox = document.querySelector(".size-opt-box");
sizeSearch.addEventListener("click", ()=> {
    sizeSearch.style.border = "1px solid rgb(244, 244, 244)";
})
for(let i=0;i<8;i++) {
    for(let j=0;j<16;j++) {
        let randInt = Math.floor((Math.random() * 1000) + 1);
        sizeOptBox.innerHTML += `<div class="filter-common-opt filter-size-opt">
                                    <div class="common-opt-name">
                                        <i class="check-logo ri-check-line"></i>
                                        ${sizeNameCol[i][j]}  
                                    </div> 
                                    <div class="common-opt-count">
                                        ${randInt}
                                    </div>
                                </div>`;
    }
}
//brand filter opts:-
let filterBrand = document.querySelector(".filter-brand-box");
let brandOptBox = document.querySelector(".brand-opt-box");
for(let i=0;i<26;i++) {
    for(let j=0;j<filtBrandList[i].length;j++) {
        let randInt = Math.floor((Math.random() * 1000) + 1);
        brandOptBox.innerHTML += `<div class="filter-common-opt filter-brand-opt">
                                    <div class="common-opt-name">
                                        <i class="check-logo ri-check-line"></i>
                                        ${filtBrandList[i][j]}  
                                    </div> 
                                    <div class="common-opt-count">
                                        ${randInt}
                                    </div>
                                </div>`;
    }
}
//color filter opts:-
let filterColor = document.querySelector(".filter-color-box");
let colorOptBox = document.querySelector(".color-opt-box");
for(let i=0;i<46;i++) {
    let randInt = Math.floor((Math.random() * 1000) + 1);
    colorOptBox.innerHTML += `<div class="filter-common-opt filter-color-opt">
                                    <div class="common-opt-name">
                                        <i class="check-logo ri-check-line"></i>
                                        <div class="color-box"></div>
                                        ${filcolorList[i][0]} 
                                    </div> 
                                    <div class="common-opt-count">
                                        ${randInt}
                                    </div>
                               </div>`
}
let colorBoxAll = document.querySelectorAll(".color-box");
for(let i=0;i<46;i++) {
    colorBoxAll[i].style.backgroundColor = `${filcolorList[i][1]}`;
}
//disscount range filter opts:-
let filterDiss = document.querySelector(".filter-diss-box");
for(let i=0;i<9;i++) {
    let randInt = Math.floor((Math.random() * 1000) + 1);
    filterDiss.innerHTML += `<div class="filter-common-opt filter-diss-opt">
                                <div class="common-opt-name">
                                    <i class="check-logo ri-check-line"></i>
                                    ${(i+1)*10}% and higher  
                                </div> 
                                <div class="common-opt-count">
                                    ${randInt}
                                </div>
                            </div>`;
}
//place filter opts:-
let filterPlace = document.querySelector(".filter-place-box")
let placeList = [["All countries", "141045"], ["India", "121104"]];
for(let i=0;i<2;i++) {
    filterPlace.innerHTML += `<div class="filter-common-opt filter-place-opt">
                                <div class="common-opt-name">
                                    <i class="check-logo ri-check-line"></i>
                                    ${placeList[i][0]}  
                                </div> 
                                <div class="common-opt-count">
                                    ${placeList[i][1]}
                                </div>
                            </div>`;

}
filterPlace.style.display = "none";
let filterMore = document.querySelector(".filter-more-box")
filterMore.style.display = "none";
//Active Filter option box display Function:-
let AllFilterOpts = document.querySelectorAll(".filter-box1-opt");
let AllFilerOptsBox = document.querySelectorAll(".filter-common-box");
let actIdx = 0;
const updateOpt = (idx)=> {
    for(let i=0;i<AllFilerOptsBox.length;i++) {
        AllFilerOptsBox[i].style.display = "none";
        AllFilterOpts[i].style.backgroundColor = "rgb(243, 243, 243)";
        AllFilterOpts[i].style.fontWeight = "300";

    }
    AllFilterOpts[idx].style.backgroundColor = "white";
    AllFilterOpts[idx].style.fontWeight = "700";
    AllFilerOptsBox[idx].style.display = "flex";
}
updateOpt(actIdx);
//show first filter opt box when filter page is open
filterOpt.addEventListener("click", ()=> {
    document.querySelector(".mobileContainer").style.display = "none";
    document.querySelector("html").style.overflow = "hidden";
    filterPage.style.display = "flex";
    filterPage.style.zIndex = "14";  
    filterPageFoot.style.display = "flex";
    actIdx = 0;
    updateOpt(actIdx);
})
for(el of filterFootOpts) {
    el.addEventListener("click", ()=> {
        document.querySelector(".mobileContainer").style.display = "block";
        filterPage.style.display = "none";
        filterPageFoot.style.display = "none";
        document.querySelector("html").style.overflowY = "scroll";
    })    
}
//show filter box when filter opt clicked:-
for(let i=0;i<AllFilterOpts.length;i++) {
    AllFilterOpts[i].addEventListener("click", ()=> {
        updateOpt(i);
    })
}
//filter option selection change function:-
let filterCommonOpt = document.querySelectorAll(".filter-common-opt");
let commonOptName = document.querySelectorAll(".common-opt-name");
let checkLogo = document.querySelectorAll(".check-logo");
let commonOptCount = document.querySelectorAll(".common-opt-count")
for(let i=0;i<filterCommonOpt.length;i++) {
    commonOptName[i].style.fontWeight = "300";
    checkLogo[i].style.fontWeight = "300";
    checkLogo[i].style.color = "rgb(140, 140, 140)";
    commonOptCount[i].style.fontWeight = "300";    
}
for(let i=0;i<filterCommonOpt.length;i++) {
    filterCommonOpt[i].addEventListener("click", ()=> {
        if(checkLogo[i].style.fontWeight == "300") {
            commonOptName[i].style.fontWeight = "700";
            checkLogo[i].style.fontWeight = "700";
            checkLogo[i].style.color = "rgb(255, 0, 102)";
            commonOptCount[i].style.fontWeight = "700";    
        }else {
            commonOptName[i].style.fontWeight = "300";
            checkLogo[i].style.fontWeight = "300";
            checkLogo[i].style.color = "rgb(140, 140, 140)";
            commonOptCount[i].style.fontWeight = "300";    
        }
    })
}
//more filter box button for categories:-
let moreBoxOpt = document.querySelector(".more-box2-opt");
moreBoxOpt.addEventListener("click", ()=> {
    actIdx = 1;
    updateOpt(actIdx);
})