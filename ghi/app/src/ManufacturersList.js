import React from 'react';

export default function ManufacturersList({ manuList }) {
    return (
        <>
        <h1 style={{color: "Blue"}}>Manufacturer</h1>
            <table className="table bdr table-hover table-info table-striped">
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
