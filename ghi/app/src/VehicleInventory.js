import React from 'react'

export default function VehicleInventory({ InventoryList }) {
    return (
        <>
            <h1 style={{color: "Blue"}}>Inventory</h1>
            <table className="bdr table table-hover table-info table-striped">
                <thead>
                    <tr>
                        <th>Inventory</th>
                    </tr>
                </thead>
                <tbody>
                    {InventoryList && InventoryList.map(vehicle => {
                        return (
                            <tr key={vehicle.id}>
                                <td>{vehicle.vin}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}
