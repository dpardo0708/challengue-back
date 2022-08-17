import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';


const getDescription = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.params.id;
  let result: AxiosResponse = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
  const detailId = result.data;
  const detail = detailId;
 


  return res.status(200).json({ 
    "author":{
      "name":"Diana",
      "lastname": "Pardo"
    },
    "items":detail
  });
  
};

export default getDescription;


