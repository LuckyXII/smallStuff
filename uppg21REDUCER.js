const initialState = {
    "user": null /*{
        "isLogedin":false,
        "personNumber":undefined,
        "name":undefined,
        age: undefined,
        "riskClass":null
    }*/,
    "accounts":[
        /*{
            "accountName":undefined,
            "accountNr":undefined,
            "balance":null,
            "interest":undefined,
            "credit":null,
            "sharedWith":[]
        },
        {
            "accountName":"savings",
            "accountNr":009887326736,
            "balance":1337,
            "interest":0.05,
            "credit":0,
            "sharedWith":[]
        }*/
    ],
    "invoices":[
        /*{
            "type":"electronic",
            "OCR":123456789,
            "BG":1234-5467,
            "amount":123,
            "isPaid":true,
            "due": 123456
        },
        {
            "type":"auto",
            "OCR":987654321,
            "BG":7654-4321,
            "amount":456,
            "isPaid":false,
            "due": 123456
        }
        */
    ],
    "transactions":[
        /*{
            "sender":{
                "userOwned":true,
                "accountNumber":123456789
            },
            "recipient":{
                "OCR":987654321,
                "BG":7654-4321,
            },
            "amount":123,
            "date":123456,
            "status":"pending"
        }*/
    ]
    
};


const ACTION = {
    DEPOSITE:"DEPOSIT",
    WITHDRAW:'WITHDRAW',
    IDENTIFY:'IDENTIFY',
    TRANSFER_FUNDS:'TRANSFER_FUNDS',
    OPEN_NEW_ACCOUNT:'OPEN_NEW_ACCOUNT',
    CLOSE_ACCOUNT:'CLOSE_ACCOUNT',
    GET_INVOICE:'GET_INVOICE'
};


function actionDeposite(accountNr, amount){
    return{
        type:ACTION.DEPOSIT,
        account:{
            accountNr,
            amount
        }
    };
}

function actionWithdraw(accountNr, amount){
    return{
        type:ACTION.WITHDRAW,
        account:{
            accountNr,
            amount
        }
    };
}

function actionTransferFunds(from, recipient, amount){
    return{
        type:ACTION.TRANSFER_FUNDS,
        transactions:{
            from,
            recipient,
            amount
        }
    };
}

function actionOpenNewAccount(personNr, riskClass, name,age){
    
    return {
        type:ACTION.OPEN_NEW_ACCOUNT,
        user:{
            personNr,
            riskClass,
            name,
            age
        }
    };
    
}

function actionCloseAccount(accountNr){
    return {
        type:ACTION.CLOSE_ACCOUNT,
        accountNr
    };
}

function actionGetInvoice(sender, recipient){
    return {
        type: ACTION.GET_INVOICE,
        invoices:{
            sender,
            recipient   
        }
    };
}

function reducer(action, state = initialState) {
    switch( action.type ) {
        case 'DEPOSIT':
            let newstate = Object.assign({}, state);
            //has own property check
            newstate.accounts = action.account;
            return newstate;

        case 'WITHDRAW':
            let newstate = Object.assign({}, state);
            //has own property check
            newstate.accounts = action.account;
            return newstate;
            
        case 'TRANSFER_FUNDS':
            let newstate = Object.assign({}, state);
            //has own property check
            newstate.transactions = action.transactions;
            return newstate;
            
        case 'OPEN_NEW_ACCOUNT':
            let newstate = Object.assign({}, state);
            //has own property check
            newstate.user = action.user;
            return newstate;
            
        case 'CLOSE_ACCOUNT':
            let newstate = Object.assign({}, state);
            //has own property check
            newstate.accounts = null;
            return newstate;    
        case 'GET_INVOICE':
            let newstate = Object.assign({}, state);
            //has own property check
            newstate.invoices = action.invoices;
            return newstate;
        default:
            throw new Error("Action not found");
    }
}