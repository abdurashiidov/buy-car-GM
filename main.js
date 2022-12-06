const list = document.querySelector(".list")
const rightList = document.querySelector(".rightList")
const AllSum = document.querySelector(".AllSum")
// let btn = document.querySelector(".buyBtn")

function getData(param) {

    let value = 0
    
    let newArr = []
    param.map(el => {
        
        

        // newArr.push(el)
        
        
        let item = document.createElement("li")
        let picture = document.createElement("img")
        let price = document.createElement("p")
        let buyBtn = document.createElement("button")
        let title = document.createElement("h2")
        
        picture.src = el.url
        title.textContent = el.name
        price.textContent = el.price
        buyBtn.textContent = "Buy"
        
        picture.setAttribute("class", "picture")
        item.setAttribute("class", "li")
        buyBtn.setAttribute("class", "buyBtn")
        
        buyBtn.dataset.id = el.id 
        
        item.appendChild(picture)
        item.appendChild(title)
        item.appendChild(price)
        item.appendChild(buyBtn)
        list.appendChild(item)
        
        buyBtn.addEventListener("click", (e) =>{
            newArr.push(el)

            value = 0;
            for (let i = 0; i < newArr.length; i++) {
                value += Number(newArr[i].price)
                AllSum.textContent = value
                
            }
            
            console.log(newArr);

            modelData(newArr)
        })
        
    })

    function modelData(params) {
        rightList.innerHTML = ""


        params.map(elem => {
             

            let item = document.createElement("li")
            let picture = document.createElement("img")
            let price = document.createElement("p")
            let title = document.createElement("h2")
            let deleteBtn = document.createElement("button")

            let plus = document.createElement("button")
            let minus = document.createElement("button")
    
            picture.src = elem.url
            title.textContent = elem.name
            price.textContent = elem.price
            deleteBtn.textContent = "x"

            plus.textContent = "+"
            minus.textContent = "-"

            // ! plus btn
            plus.addEventListener("click", () =>{

                price.textContent = Number(price.textContent) + Number(elem.price)

                value = 0

                value += Number(price.textContent)
                AllSum.textContent = value

                if (Number(price.textContent) == 0) {
                    minus.disabled = true
                } else{
                    minus.disabled = false
                }
            })

            // ! minus btn
            minus.addEventListener("click", () =>{
                // value = Number(price.textContent) - Number(elem.price)
                price.textContent = Number(value) - Number(elem.price)


                value = Number(price.textContent)
                AllSum.textContent = value

                if (Number(price.textContent) == 0) {
                    minus.disabled = true
                } else{
                    minus.disabled = false
                }

            })

            picture.setAttribute("class", "picture")
            item.setAttribute("class", "li")
            deleteBtn.setAttribute("class", "deleteBtn")
    
            deleteBtn.dataset.id = elem.id 
    
            // ! del btn
            deleteBtn.addEventListener("click", (e) =>{
                newArr =  newArr.filter((par) => par.id != elem.id)
                
                modelData(newArr)

                value -= Number(price.textContent)
                AllSum.textContent = value

            })
            
            item.appendChild(picture)
            item.appendChild(title)
            item.appendChild(price)
            item.appendChild(deleteBtn)

            item.appendChild(plus)
            item.appendChild(minus)

            rightList.appendChild(item)
        })
    }
}
getData(data)