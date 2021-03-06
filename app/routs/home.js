const { Router } = require("express");
const Stock = require('../moduls/stock');
const router = Router();

function getallSumm(stocks){
  return stocks.reduce((total, stocks) => {
    return total += +stocks.summ
  }, 0)
}

router.get("/", async (req, res) => {
  const stocks = await Stock.find();
 
  res.render("home",{
    title: 'Инвестиционный портфель',
    stocks,
    Sum: getallSumm(stocks).toFixed(2)
  });
});

module.exports = router;
