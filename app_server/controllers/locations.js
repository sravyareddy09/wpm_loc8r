const homelist = (req, res) => {  
    res.render('index', { title: 'Sravya web page' });   
};
const locationInfo = (req, res) => {  
    res.render('index', { title: 'Sravya web page' });   
};
const addReview = (req, res) => {  
    res.render('index', { title: 'Sravya web page' });   
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};
