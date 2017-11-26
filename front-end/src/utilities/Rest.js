import axios from "axios";

class Rest {

    static get(callback) {
        axios.get("http://94.214.140.215:8001/livetiming/api/get-live-data/7/", {
                auth: {
                    username: 'patrick',
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