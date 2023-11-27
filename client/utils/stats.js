export async function fetchStats() {
    const profileStats = await fetch('/server/profile/stats/getstats', {
        method: 'GET',
        credentials: 'include'
    })
    const statsJSON = await profileStats.json()
    return statsJSON
}