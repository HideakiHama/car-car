import React from 'react';

export default function ManufacturersList({ manuList }) {
    return (
        <>
        <h1 style={{color: "Green"}}>Manufacturer</h1>
            <table className="table table-hover table-success">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {manuList && manuList.map(manufacturer => {
                        return (
                            <tr key={manufacturer.id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}
