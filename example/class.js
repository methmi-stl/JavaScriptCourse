class CalendarDay{
    //private fields
    #month;
    #day;
    #year;

    //constructor
    constructor(month,day,year){
        this.month = month;
        this.day = day;
        this.year = year;
    }

    //public method
    toString(){
        return `${this.year}-${this.month}-${this.day}`;
    }
}

let day1 = new CalendarDay(8,11,2000);
console.log(day1.toString());
console.log(typeof(day1));

let day2 = new CalendarDay(2023,5,3);
console.log(day2.toString());
console.log(typeof(day2));