import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';


const getDetail = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.params.id;
  let result: AxiosResponse = await axios.get(`https://api.mercadolibre.com/items/${id}`);
  const detailId = result.data;
 


  return res.status(200).json({ 
    "author":{
      "name":"Diana",
      "lastname": "Pardo"
    },
    "items":detailId
  });
  
};

export default getDetail;


