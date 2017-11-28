import axios from "axios";

class Rest {

    static get(callback) {
        axios.get("http://145.37.166.171:8001/livetiming/api/get-live-data/7/", {
                auth: {
                    username: 'rick',
                    password: 'moi12345'
                },
            }
        ).then((response) => response.data
        ).then((callback)
        ).catch((error) => console.log(error)
        );
    }

}

export default Rest;