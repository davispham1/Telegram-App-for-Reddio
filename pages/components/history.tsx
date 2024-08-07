import React from "react";
import { records } from "../../config/config";
import useSWR from "swr";
import { format } from "date-fns";
import {ethers} from "ethers";

function historyCard(amount: number, type: number, time: number) {
    let transactionType = ""

    if (type === 1) {
        transactionType = "Deposit"
    } else if (type === 3){
        transactionType = "Transfer"
    } else if (type === 4){
        transactionType = "Withdraw"
    }

    const date = String(new Date(time * 1000))
    const formattedDate = format(date, 'MMMM d, yyyy h:mm a')

    return <li className="py-3 sm:py-4">
    <div className="flex items-baseline justify-between">
      <div className="flex-1 min-w-0">
        <b>{transactionType}</b>
        <h3 className="mt-3">{`Amount: ${amount} USDC`}</h3>
      </div>
      <div>
        <h2 className="inline-flex justify-end text-gray-600">{formattedDate}</h2>
      </div>
    </div>
  </li>
}

export default function History(): React.JSX.Element {

    const { data } = useSWR('history', records);
    const list = data ? data.map(x => x) : [];


    //lines 72 - 85 should work
    let elementsList = [];

    for (let i = 0; i < 20 && i < list.length; i++) {
        if (list[i]) {
            elementsList.push({
                type: list[i].record_type,
                // @ts-ignore
                amount: list[i].display_value,
                date: list[i].time,
            });
        }
    }

    console.log(elementsList)

    let importantInfoList = elementsList.map(x => historyCard(
        x.amount,
        x.type,
        x.date,
    ))
    console.log(importantInfoList)

return <div>
    <h1 className="text-lg font-bold leading-none text-black mb-3" style={{fontSize: "40px", marginTop: "10px"}}>Latest Transactions</h1>
    <div style={{maxHeight: "320px", overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none", }}>
        <ol className="divide-y divide-gray-200 dark:divide-gray-700">
        {importantInfoList}
    </ol>
    </div>
</div>


}