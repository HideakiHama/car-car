import React from 'react'

export default function VehicleInventory({ InventoryList }) {
    return (
        <>
            <h1 style={{color: "success"}}>Inventory</h1>
            <table className="table table-hover table-success">
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
