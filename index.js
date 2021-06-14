var customerName = 'bob';
const leastFavoriteCustomer = 'fred';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

function setBestCustomer() {
   bestCustomer = 'not bob';
};

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
};

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not fred';
};
