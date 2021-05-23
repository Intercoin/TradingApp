
import axios from 'axios';

const gasFeeEstimation = async () => (
    axios.get('https://fees.upvest.co/estimate_eth_fees')
);

export {
    gasFeeEstimation
}
