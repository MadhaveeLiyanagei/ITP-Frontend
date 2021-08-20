
import axios from 'axios';

const BUYER_ORDER_API_BASE_URL ="http://localhost:8080/api/v1/BuyerOrder";

class BuyerOrderService{

    getBuyerOrder(){
        return axios.get(BUYER_ORDER_API_BASE_URL);
    }
}

export default new BuyerOrderService()