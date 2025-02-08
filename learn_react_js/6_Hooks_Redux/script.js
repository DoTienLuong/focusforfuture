import {createStore} from 'https://cdn.skypack.dev/redux';

// initState: Tạo giá trị khởi tạo ban đầu cho initState để truyền vào cho bankReducer.
// bankReducer là 1 hàm khởi tạo để xử lý khi gọi dispatch trong reducer.
const initState = 0;

//reducer:
function bankReducer(state = initState, action){
    // truyền vào bankReducer 2 giá trị, thứ nhất là state (giá trị khởi tạo), thứ 2 là action (object gồm 2 giá trị là type và payload)
    switch(action.type){
        // action là dạng object nên khi kiểm tra action.type, cái nào khớp thì thực hiện login của case đó.
        case 'DEPOSIT':
            return state + action.payload;
            // khi tìm đc case khớp, state hiện tại sẽ cộng thêm giá trị mà object action mang theo. (action.payload)
        case 'WITHDRAW':
            return state - action.payload;
        default: 
            return state;
    }
}

//action:
// Khởi tạo các action với dạng object, return ra object với 2 giá trị là type và payload. (Với payload được truyền vào).
function actionDeposit(payload){
    return{
        type: 'DEPOSIT',
        payload
    }
}
function actionWithdraw(payload){
    return{
        type: 'WITHDRAW',
        payload
    }
}



//store 
const store = window.store = createStore(bankReducer);
// Khởi tạo store từ createStore với bankReducer .
console.log(store.getState());


//dom event:
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

deposit.onclick = function(){
    store.dispatch(actionDeposit(10));
}
// Khi click vào deposit, store sẽ gọi dispatch, mà dispatch nhận giá trị là một action dưới dạng object. 
// Khi dispatch đc gọi, bankReducer sẽ hoạt động, 
// bankReducer sẽ nhận action từ dispatch gọi đến và trả về giá trị tương ứng case action.
withdraw.onclick = function(){
    store.dispatch(actionWithdraw(10));
}

//render:
function render(){
    const output = document.querySelector("#output");
    output.innerHTML = store.getState();
};

store.subscribe(()=>{
    render();
});

render();