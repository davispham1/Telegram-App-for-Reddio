import useSWR from "swr";
import {getBalance} from "./config";
import {ethers} from "ethers";

export default function Balance() {
    const { data } = useSWR('balance', getBalance)
    const balanceData = data?.data[0]
    return <b style={{fontSize: "24px"}}>USDC: {ethers.utils.formatUnits(balanceData?.balance_available || 0, balanceData?.decimals)}</b>
}
import useSWR from "swr";
import {getBalance} from "../../config/config";
import {ethers} from "ethers";

export default function Balance() {
    const { data } = useSWR('balance', getBalance)
    const balanceData = data?.data[0]
    return <div>{ethers.utils.formatUnits(balanceData?.balance_available || 0, balanceData?.decimals)} USDC</div>
}
