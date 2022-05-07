
let getHomePage = (req, res) => {
    return res.render('home.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('about/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}