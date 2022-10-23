export function parseDate(date: string): string{
    const splitedDate = date.split('-')
    let [year, mounth, day] = splitedDate

    return `${day}/${mounth}/${year}`
}