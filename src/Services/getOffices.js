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
            data.sort((a, b) => b.online - a.online)
            if (
                search.length
                && search !== ' '
                && search !== '  ') {
                data = data.filter((itm) => itm.name === search)
            }
            if (step === 'online') {
                data = data.filter((itm) => itm.online)
            }
            if (step === 'offline') {
                data = data.filter((itm) => !itm.online)
            }
        }
        console.log('sss', data)
        return data
    }
    return []
}