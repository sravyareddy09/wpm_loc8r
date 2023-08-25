const homelist = (req, res) => {  
    res.render('locations-list', { title: 'homeList' });   
};
const locationInfo = (req, res) => {  
    res.render('index', { title: 'locationInfo' });   
};
const addReview = (req, res) => {  
    res.render('index', { title: 'addReview' });   
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};