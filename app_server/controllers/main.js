const index = (req, res) => {  
    res.render('index', { title: 'Sravya web page' });   
};
module.exports = {
    index
};
