import React from 'react';

export default function ModelsList({ vehicleList }) {
    return (
        <>
            <h1>Vehicle Models</h1>
            <table className="table bdr table-hover table-info table-striped">
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Manufacturer</th>
                        <th className="text-center">Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicleList && vehicleList.map(model => {
                        return (
                            <tr key={model.href}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td><img src={model.picture_url} alt="" width="80%" height="auto" /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

