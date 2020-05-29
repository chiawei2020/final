let topicsArray =[
    "打工",
    "上課",
    "耍廢",
    "出去玩",
    "出去玩",
    "約會"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //設定日期與月份
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(3,7);