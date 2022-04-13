import axios from "axios";
import * as repositories from "../repositories/index.js";

export async function battleService({ firstUser, secondUser }) {
    const firstUserData = await checkUser(firstUser)
    const secondUserData = await checkUser(secondUser)
    await repositories.verifyUser(firstUser)
    await repositories.verifyUser(secondUser)

    const firstStars = firstUserData.reduce((acc, user) => acc + user.stargazers_count, 0)
    const secondStars = secondUserData.reduce((acc, user) => acc + user.stargazers_count, 0)

    if (firstStars > secondStars) {
        repositories.win(firstUser)
        repositories.loss(secondUser)
        return 'first'

    } else if (firstStars < secondStars) {
        repositories.win(secondUser)
        repositories.loss(firstUser)
        return 'second'
    } else {
        repositories.draw(firstUser)
        repositories.draw(secondUser)
        return ''
    }
}

function checkUser (user: string) {
    return axios.get(`https://api.github.com/users/${user}/repos`).then((response) => response.data).catch((error) => {
        throw { type: 'userError', status: 404, message: `github user: ${user}. Not found` }
    })
}

export async function ranking () {
    return await repositories.ranking()
}