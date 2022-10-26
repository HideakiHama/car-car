import React from 'react'

export default function SalesRecordList({ salesRecords }) {
    return (
        <>
            <h1>Sales Records</h1>
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
                                <td>{record.sales_person.name}</td>
                                <td>{record.customer.name}</td>
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
