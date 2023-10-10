export const fetchClients = async () => {
    const clientsData = await fetch('/server/client/getclients', {
        method: 'GET',
        credentials: 'include'
    })
    const clientsJSON = await clientsData.json()
    return clientsJSON
}