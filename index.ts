import axios from "axios";

import { DepthManager } from "./DepthManager"
const btcUsdtMarket = new DepthManager("B-SOL_USDT");

setInterval(() => {
    console.log(btcUsdtMarket.getRelevantDepths());
}, 2000)