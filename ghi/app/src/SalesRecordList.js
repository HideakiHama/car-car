import React from "react"

export default function SalesRecordList({SalesRecords}) {
    return (
        <>
        <h1> Sales Record</h1>
        <table className="table bdr table-hover table-info table-striped">
            <thead>
                <tr>
                    <th>Sales Person</th>
                    <th>Customer</th>
                    <th>Automobile VIN</th>
                    <th>Sales Price</th>
                </tr>
            </thead>
            <tbody>
                {salesRecords?.map(record => {
                    return (
                        <tr key={record.id}>
                            <td>{records.sales_person.name}</td>
                            <td>{records.customer.name}</td>
                            <td>{record.vin}</td>
                            <td>{record.sales_price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    )
}