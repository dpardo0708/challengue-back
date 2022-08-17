import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';


const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  let product: string = req.params.product;
  let result: AxiosResponse = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`);
  const itemsProduct = result.data;
  const items = itemsProduct.results;
 


  return res.status(200).json({ 
    "author":{
      "name":"Diana",
      "lastname": "Pardo"
    },
    "items":items
  });
  
};

export default getProduct;


