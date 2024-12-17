const getHomepage = (req,res) => {
    res.send('Hello World! ')
}

const getTestpage = (req,res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getTestpage
}