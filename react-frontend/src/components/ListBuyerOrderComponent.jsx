import React, { Component } from 'react';
import BuyerOrderService from '../services/BuyerOrderService';

class ListBuyerOrdersComponent extends Component {

    constructor(props){
        super(props)
        this.state={

            BuyerOrder: []

        }
    }

    componentDidMount(){
        BuyerOrderService.getBuyerOrder().then((res)=>{
            this.setState({BuyerOrder: res.data})
        })
    }
    render() {
        return (
            <div>

                <h2 className = "text-center" >Orders List</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Buyer ID</th>
                                <th>Product ID</th>
                                <th>Quantity</th>
                                <th>Total Amount</th>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.BuyerOrder.map(
                                   BuyerOrder =>
                                   <tr key = {BuyerOrder.id}>
                                       <td>{BuyerOrder.buyerID}</td>
                                       <td>{BuyerOrder.productID}</td>
                                       <td>{BuyerOrder.qty}</td>
                                       <td>{BuyerOrder.total}</td>
                                       <td>{BuyerOrder.date}</td>
                                       <td>{BuyerOrder.category}</td>
                    
                                   </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBuyerOrdersComponent;