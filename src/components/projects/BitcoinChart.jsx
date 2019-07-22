import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import LineChartComponent from './LineChart.jsx';
import axios from 'axios';

class BitCoinChart extends Component {
    constructor(props) {
        super(props);
        this.state = {prices: {}};
    }


    render(){
        return (
            <div>
                <p>Powered by CoinDesk</p>
            </div>
        )
    }

}


export default BitCoinChart
