const homelist = (req, res) => {  
    res.render('locations-list', { title: 'homeList' });   
};
const locationInfo = (req, res) => {  
    res.render('location-info', { title: 'locationInfo' });   
};
const addReview = (req, res) => {  
    res.render('location-review-form', { title: 'addReview' });   
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};