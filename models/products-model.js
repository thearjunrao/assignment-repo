module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    image: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    // rating_rate: {
    //   type: Sequelize.DOUBLE,
    //   defaultValue: 0,
    // },
    // rating_count: {
    //   type: Sequelize.INTEGER,
    //   defaultValue: 0,
    // },
  });

  return Product;
};
