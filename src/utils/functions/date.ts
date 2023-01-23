export const displayedAt = (createdAt: number): string => {
    const milliSeconds: number = new Date().getTime() - createdAt
    const seconds = milliSeconds / 1000
    if (seconds < 60) return `Just before`
    const minutes: number = seconds / 60
    if(minutes < 60){
        const floorMinutes: number = Math.floor(minutes)
        if(floorMinutes === 1) return `a minute ago`
        return `${floorMinutes} minute ago`
    }
    const hours: number = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}h ago`
    const days: number = hours / 24
    if (days < 7) return `${Math.floor(days)}d ago`
    const weeks: number = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}w ago`
    const months: number = days / 30
    if (months < 12) return `${Math.floor(months)} month ago`
    const years: number = days / 365
    return `${Math.floor(years)}year ago`
}