import React from 'react';

export default function ModelsList({ vehicleList }) {
    return (
        <>
            <h1 style={{color:"green"}}>Vehicle Models</h1>
            <table className="table table-hover table-success">
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicleList && vehicleList.map(model => {
                        return (
                            <tr key={model.href}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td><img src={model.picture_url} alt="" width="60%" height="auto" /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

