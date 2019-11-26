/*
The cost of a stock on each day is given in an array, find the max profit that you can make 
by buying and selling in those days. For example, if the given array is {32, 46, 26, 38, 40, 48, 42}, the maximum profit that can be earned is 22. 
This is when you buy on day 3 (26) and sell on day 6 (48).

RULES:
  Takes in array of prices as parameters,
  Returns max possible profit of the day,
  If there is no possible profit, return -1,
  Else, return profit.
 */

 maxStockProfit = prices => {
     let maxProfit = -1, 
         buyPrice = 0, 
         sellPrice = 0,
         changeBuyPrice = true;

         for (let i=0; i<prices.length; i++){
             if(changeBuyPrice) buyPrice = prices[i];
               sellPrice = prices[i + 1];

               if (sellPrice < buyPrice){
                changeBuyPrice = true;
              }else {
                let tempProfit = sellPrice - buyPrice;
                if (tempProfit > maxProfit) maxProfit = tempProfit;
                changeBuyPrice = false;
            }
         } 

         return maxProfit;
 }