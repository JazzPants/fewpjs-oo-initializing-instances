// Write your code here
class Breakfast {
    constructor(food, drink) {
        this.food = food; //"this Breakfast's food as passed in by new Breakfast(...)"
        this.drink = drink;//"this Breakfast's drink"
    }
}
// bfast = new Breakfast('eggs', 'juice')

//test in browser console
// todaysBreakfast = new Breakfast('eggs', 'juice')
// Breakfast {food: 'eggs', drink: 'juice'}
// todaysBreakfast
// Breakfast {food: 'eggs', drink: 'juice'}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
// newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')

class Dinner {
    constructor(salad, soup, entree, _dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = _dessert; //test requires exactly "_dessert"
    }

}
// newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')