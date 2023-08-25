const homelist = (req, res) => {  
    res.render('index', { title: 'homeList' });   
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