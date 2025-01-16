const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

//記錄
let purchaseRecords = [];


//第一階段：新增課程購買記錄（優惠定價）
function addPurchaseRecord(inputName, inputCount) {
    //輸入參數檢驗
    if (inputName.trim() == '') {
        console.log('名字不可空白!請輸入名字');
        return;
    }
    if (typeof(inputCount) != "number") {
        console.log('數字格式錯誤!請重新輸入');
        return;
    }
    if (!Number(inputCount) || inputCount <= 0) {
        console.log('請輸入整數且大於0');
        return;
    }

    //儲存資料物件樣式
    // {
    //     name:,
    //     courses:,
    //     perClassPrice:,
    //     total:
    // }

    let price = 0;
    let sumPrice = 0;
    // 購買 1-10 堂 => 一堂 1500 元
    if (inputCount <= 10) {
        price = 1500;
    }
    // 購買 11-20 堂 => 一堂 1300 元
    else if (inputCount >= 11 && inputCount <= 20) {
        price = 1300;
    }
    // 購買 21 堂以上 => 一堂 1100 元
    else {
        price = 1100;
    }

    sumPrice = inputCount * price;
    let record = {
        name: inputName,
        courses: inputCount,
        perClassPrice: price,
        total: sumPrice
    };

    purchaseRecords.push(record);
    console.log(`新增購買記錄成功！會員 ${inputName} 購買 ${inputCount} 堂課，總金額為 ${sumPrice} 元。`);
}

//第二階段：計算目前的總營業額
function calculateTotalPrice() {
    //總營業額
    let totalPrice = 0;
    purchaseRecords.forEach(function(item) {
        totalPrice += item.total;
    });

    console.log(`目前總營業額為 ${totalPrice} 元。`);
}

//第三階段：篩選出還沒有購課的會員
function filterNoPurchaseMember() {
    //取出購買清單中的會員
    let purchaseMemberArr = [];
    purchaseRecords.forEach(function(item) {
        purchaseMemberArr.push(item.name);
    });

    const noPurchaseMemberArr = members.filter(function(item) {
        //取出會員裡名字沒有在購買清單中
        return !purchaseMemberArr.includes(item);
    });

    console.log(`未購買課程的會員有： ${noPurchaseMemberArr} `);
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");
calculateTotalPrice();
filterNoPurchaseMember();
