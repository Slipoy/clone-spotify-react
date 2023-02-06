import {useEffect, useState} from "react";
import axios from "axios";



function testHook () {
    const CLIENT_ID = '2371982b3d99427db8d4319404e27aa2';
    const REDIRECT_URI = 'http://localhost:3000'
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = 'token'

    const href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`


// const [token, setToken] = useState('');
    const [searchKey, setSearchKey]= useState()
    useEffect(()=>{
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');
        if (!token && hash){
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];

            window.location.hash = ''
            window.localStorage.setItem("token", token)

        }

        setToken(token)
    },[])

    const logout = ()=>{
        setToken('');
        window.localStorage.removeItem('token')
    }

    const getMusic = async (e)=>{
        e.preventDefault()

        const {data} = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export default testHook;
