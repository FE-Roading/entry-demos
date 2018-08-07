export default {
    goodsSelectedPrice(state){
        let items=Object.values(state.carList)
        let sum=0
        items.forEach((item)=>{
            if(item.selected){
                sum+=item["PRESENT_PRICE"]*item.qty
            }
        })
        return sum
    },
    goodsSelectedQty(state){
        let items=Object.values(state.carList)
        let total=0
        items.forEach((item)=>{
            if(item.selected){
                total+=item.qty
            }
        })
        return total==0?'':total
    },
    getGoods(state){
        let items=Object.values(state.carList)
        let total=[]
        items.forEach((item)=>{
            total.push(item)
        })
        return total
    },
    getSelectdGoods(state){
        let items=Object.values(state.carList)
        let total=[]
        items.forEach((item)=>{
            if(item.selected){
                total.push(item)
            }           
        })
        return total
    },
    getHotGoods(state){
        return state.hotGoods
    },
    getCarStatus(state){
        let keys=Object.keys(state.carList)
        return keys.length==0
    },
    getCheckStatus(state){
        let items=Object.values(state.carList)
        if(items.length==0){
            return false
        }
        let res=true
        for(let item of items){
            if (!item.selected){
                res=false
                break
            }
        }
        return res
    },
    getComments(state){
        return state.comments
    }
}