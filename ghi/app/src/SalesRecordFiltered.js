import React, { useState } from 'react'

export default function SalesRecordFiltered({ salesRecords }) {

    const [search, setSearch] = useState("");
    return (
        <>
            <h1>
                Sales Person
            </h1>
            <div className="container">
                <div className="pb row">
                    <form id="form_search" name="form_search" method="get" action="" className="form-inline">
                        <div className="form-group">
                            <div className="input-group">
                                <input onChange={event => setSearch(event.target.value)} className="form-control" type="text" placeholder="Name of Sales Person" />
                            </div>
                        </div>
                    </form>
                </div>
                <table className="table table-striped table-hover table-info bdr">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Customer</th>
                            <th>VIN</th>
                            <th>Sales Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesRecords
                            ?.filter(record => record.sales_person.name.includes(search))
                            .map(record => {
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
            </div>
        </>
    )
}

