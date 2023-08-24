import React from 'react'

const ClientCard = ({ client }) => {
    return (
        <section className="client-card">
            {client.name} - {client.businessType} - {client.phone}
        </section>
    )
}

export default ClientCard