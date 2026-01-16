let subs : number | string = "22MILLION"
let apirequests : "success"|"pending"|"error"="pending"
let airlineSeats:"asile"|"window"|"middle"="asile"

let orders=["12","34","65","43","31"]
let currentOrddder:string|undefined 

for(let order of orders){
    if(order==="34"){
        currentOrddder=order
        break
    }
    currentOrddder="11"
}
console.log(currentOrddder);
