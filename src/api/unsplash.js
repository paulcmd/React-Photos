import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID qyy84rqVFb3jX6sbDQG7SSLDiznio3Hc11gFp3LoKZs'
    }
})