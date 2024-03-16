import { featureProductNav } from "../data/featureProductNav.js"
import { imageSlider } from "../data/imageSlider.js"
import {electronicProductData} from "../data/electronicProduct.js"
import {fashionBestSellerData} from "../data/fashionBestSeller.js"

let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_SearchEl = document.querySelector(".recent_Search")

let recentArray = ["mobile", "phone"];
form_search.addEventListener("submit", (e) => {
    e.preventDefault()
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})

function renderRecent() {
    let recent_Search_html = ''
    recentArray.forEach(el => {
        recent_Search_html += `
       <div class="recent_list">
           <i class="fa-solid fa-clock-rotate-left"></i>
           <p>${el}</p>
       </div>    
     `
    })

    recent_SearchEl.innerHTML = recent_Search_html;

}
renderRecent();


/**********************feature product js********************************/
let featureProduct_listEl = document.querySelector(".featureProduct_list")
let featureProductlistHTML = ''
//console.log(featureProductNav)

featureProductNav.forEach(el => {
    featureProductlistHTML += `
    <div class="featureProduct_item">
		<a href="${el.link}">
			<div class="featureProduct_image">
				<img src="${el.img}"/>
			</div>
			<p class="featureProduct_name">
				${el.name}

				${el.subNavigation ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` : ""}
			</p>
		</a>
	</div>
    `
})
featureProduct_listEl.innerHTML = featureProductlistHTML
//console.log(featureProductlistHTML)

/*******************************image slider*******************************/
let imageSliderListEl = document.querySelector(".imageSliderList")
let imageSliderListHTML = ''

console.log(imageSlider)

imageSlider.forEach(el =>{
    imageSliderListHTML +=`
    <div class="imageSliderItem">
		<a href="${el.link}">
			<img src="${el.img}"/>
		</a>	
	</div>
    `
})

imageSliderListEl.innerHTML = imageSliderListHTML

let preve_imageBtnEl = document.getElementById("preve_imageBtn")
let next_imageBtn = document.getElementById("next_imageBtn")
let start = 0;
let end = -300;

preve_imageBtnEl.addEventListener("click",handlePreveImage)
next_imageBtn.addEventListener("click",handleNextImage)

function handlePreveImage(){
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList)
    if(start < 0)
    start+=100
    imageallList.forEach(el=>{
        el.style.transform = `translateX(${start}%)`
    })

}
function handleNextImage(){
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList)
    if(start > end)
    start-=100
    imageallList.forEach(el=>{
        el.style.transform = `translateX(${start}%)`
    })

}

function renderImageSlider(){
    if(start > end){
        handleNextImage()
    }
    else{
        start = 100
    }
}

setInterval(renderImageSlider,5000)

/*******************************bestofElectronic_product_item*************************************/
let bestofElectronic_leftPart_itemEl = document.querySelector(".bestofElectronic_leftPart_item")
let bestofElectronic_Product_html = ""

console.log(electronicProductData)
electronicProductData.forEach(el =>{
    bestofElectronic_Product_html +=`
    <div class="bestofElectronic_image_product">
        <div class="bestofElectronic_product_item">
           <img src="${el.img}"/>
           <h3>${el.name}</h3>
           <p>${el.price}</p>  
        </div>
	</div>
    `
})

bestofElectronic_leftPart_itemEl.innerHTML = bestofElectronic_Product_html

/*******************************fashion best seller*************************************/
let fashion_leftPart_itemEl = document.querySelector(".fashion_leftPart_item")
let fashion_Product_html = ""

console.log(fashionBestSellerData)
fashionBestSellerData.forEach(el =>{
    fashion_Product_html +=`
    <div class="fashion_image_product">
        <div class="fashion_product_item">
           <img src="${el.img}"/>
           <h3>${el.name}</h3>
           <p>${el.price}</p>  
        </div>
	</div>
    `
})

fashion_leftPart_itemEl.innerHTML = fashion_Product_html