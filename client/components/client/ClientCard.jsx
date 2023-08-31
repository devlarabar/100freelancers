import React from 'react'

const ClientCard = ({ client }) => {
    return (
        <section className="client-card">
            <h3>{client.name}</h3>
            <hr/>
            <span className="text-sm">Business Type</span>: {client.businessType}
            <div className="client-contact">
                <span>Tel: {client.phone} | E-Mail: {client.email}</span>
                <br/><span>Address: {client.address}</span>
            </div>
        </section>
    )
}

export default ClientCard