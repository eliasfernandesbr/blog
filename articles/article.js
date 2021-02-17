const Sequelize = require ("sequelize");
const connection = require ("../database/database");
const category = require ("../categories/category")

const article = connection.define("articles", {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false

    }
})
article.belongsTo(category); //UM ARTIGO PERTENCE A UMA CATEGIRIA

module.exports = article;