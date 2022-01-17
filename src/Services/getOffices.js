import { API_URL } from './settings'

export default async function getOffices({ search = '', step = '' }) {
    const apiURL = API_URL
    const res = await fetch(apiURL)
    let data = await res.json()
    if (Array.isArray(data)) {
        if (data.length) {
            data.forEach((result) => {
                const list = Object.entries(result.lines).map(i => i[1])
                let waiting = 0
                let elapsed = 0
                if (list.length) {
                    list.map(itm => {
                        waiting += itm.waiting;
                        elapsed += itm.elapsed
                    })
                }
                const hours = Math.floor(elapsed / 3600);
                elapsed %= 3600;
                const minutes = Math.floor(elapsed / 60);
                const seconds = elapsed % 60;
                result.waiting = waiting
                result.elapsed = `${parseInt(hours)}:${parseInt(minutes)}:${parseInt(seconds)}`
            })
            // sort from online a offline
            data.sort((a, b) => b.online - a.online)
            // filter search name
            if (
                search.length
                && search !== ' '
                && search !== '  ') {
                data = data.filter((itm) => itm.name.includes(search))
            }
            // filter state online
            if (step === 'online') {
                data = data.filter((itm) => itm.online)
            }
            // filter state offline
            if (step === 'offline') {
                data = data.filter((itm) => !itm.online)
            }
        }
        return data
    }
    return []
}