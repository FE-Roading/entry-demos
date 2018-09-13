import { Toast } from "vant"
export  default {    
    addToCar(state,item){
        var id=item.ID
        var max=item.AMOUNT
        var exist=false 
        if(state.carList[id]){
            let gItem=state.carList[id]
            if(gItem.qty+1<gItem.AMOUNT){
                state.carList[id].qty++
                state.carList={...state.carList}
            }else{
                Toast("地主家已经没有余粮了！")
            }
        }else{
            item.qty=1
            item.selected=true
            state.carList[id]=item
            state.carList={...state.carList}
        }
    },
    login(state,data){
        state.token=data.token
        state.login=data.login
        state.id=data.id
        state.name=data.name
    },
    logout(state){
        state.token=""
        state.login=""
        state.id=""
        state.name=""
    },
    goodsChange(state, item){
        var num=item.num
        var id=item.id       
        if(state.carList[id]){
            let gItem=state.carList[id]
            var max=item.AMOUNT
            if(num==0){
                Toast("已经减到底了!")
            }else if(gItem.AMOUNT<num){
                Toast("没有多余库存了!")
            }else{
                state.carList[id].qty=num
                state.carList={...state.carList}
            }
        }
    },
    goodsSelect(state,item){
        let id=item.id
        if(state.carList[id]){
            state.carList[id].selected=!state.carList[id].selected
            state.carList={...state.carList}
        }
    },
    goodsSelectedDel(state){
        let keys=Object.keys(state.carList)
        for(let key of keys){
            if(state.carList[key].selected){
                delete state.carList[key]
            }
            state.carList={...state.carList}
        }
    },
    goodsDelete(state,id){
        if(state.carList[id]){
            delete state.carList[id]
            state.carList={...state.carList}
        }
    },
    checkAllGoods(state,check){
        let items=Object.values(state.carList)
        for(let item of items){
            item.selected=check
        }
        state.carList={...state.carList}
    },
    commentsInit(state,items){
        for(let item of items){
            item.rate=10
            item.content=""
            state.comments.push(item)
        }
    },
    commentsContentUpdate(state,data){
        for(let index in state.comments){
            if(state.comments[index].GID==data.id){
                state.comments[index].content=data.content
                break;                
            }
        }
    },
    commentsRateUpdate(state,data){
        for(let index in state.comments){
            if(state.comments[index].GID==data.id){
                state.comments[index].rate=data.content
                break;                
            }
        }
    },
    commentsClear(state){
        state.comments=[]
    },
    saveSearchWord(state,word){
        let words= localStorage.getItem("search-word")?JSON.parse(localStorage.getItem("search-word")):[]
        console.log("words:",words)
        if(!words.includes(word)){
            words.push(word)
            localStorage.setItem("search-word",JSON.stringify(words))
            state.shword.push(word)
        }
    },
    getSearchWord(state){
        let words= localStorage.getItem("search-word")?JSON.parse(localStorage.getItem("search-word")):[]
        state.shword=words
    },
    clearSearchWord(state){
        localStorage.removeItem("search-word")
        state.shword=[]
    },
    getCarList(state){
        let goods= localStorage.getItem("car-goods")?JSON.parse(localStorage.getItem("car-goods")):[]
        state.carList=goods
    }
}