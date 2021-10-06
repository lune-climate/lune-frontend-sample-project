import axios from 'axios'

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`},
})

export const getProjects = (): Promise<{
    data: {
        data: { name: string, id: string }[]
    }
}> => client.get(`/v1/projects`)
