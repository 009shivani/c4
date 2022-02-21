async function apiCall(url) {
try{

        //add api call logic here
let res=await fetch(url)
let data=await res.json()
return data
}catch(err){
    console.log("err:",err)
}


}


function appendArticles(articles, main) {
articles.forEach(el => {
    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.urlToImage

    let p=document.createElement("h4")
    p.innerText= el.title

    div.append(image,p)
    main.append(div)
   //add append logic here


});
    

}

export { apiCall, appendArticles }