import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL

export const getHeroList = async() =>{
    const hero = await axios.get(`${baseUrl}`)
    return hero.data
}

export const searchHero = async (q) => {
    const search = await axios.get(`${baseUrl}?name=${q}`)
    return search.data
}