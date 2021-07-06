import axios from 'axios'
import './constants'
import { base_url } from './constants'

export async function login(request){
    let url = base_url + "/auth/token/"
    console.log(url)
    let response = await axios.post(url, request)
    console.log(response)
    return response
}