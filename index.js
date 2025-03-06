var customerName = 'bob';
const leastFavouriteCustomer = 'Kamau';
function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
    
}
function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
   bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavouriteCustomer = 'Biggy';
}
console.log (bestCustomer)