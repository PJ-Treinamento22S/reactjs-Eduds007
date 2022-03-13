import axios from 'axios'

const getAPI = () => {
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDcxOTMzODIsImV4cCI6MTY0NzI3OTc4Miwic3ViIjoiOWUyMzIzZjEtMGQ0MS00ZWI1LWI4NDAtMTAzMGZiZGQ2ZTdmIn0.i048J9bfmxB7WplEB7MmEip0b75Qpw1UJrJVAh7i5mY"
    const api = axios.create({baseURL: "https://piupiuwer.polijrinternal.com",
    });

    (api.defaults.headers as any).Authorization = token

    return api
}

export default getAPI