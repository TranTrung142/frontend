import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function App(props) {
    const [data, setData] = useState('');
    const [err, setErr] = useState(false);
    const url = 'api/AccessControl/GetUserInfor';
    useEffect(() => {
        let req = {
            "deviceId": "8a0fc66a61a959f6",
            "qrCodeId": "a652d57094b7590b0dea115b156c07098abdea87",
            "qrCodeValue": "P22498244182551944"
        };

        axios.post(url, req)
            .then(res => {
                console.log(res);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
                setErr(true);
            })
    }, []);
    return (
        <div className="container">
            <div className="" >
                {err ? "Có lỗi xảy ra!" : <div>
                    <b>Code: </b> {data.code}<br />
                    <b>Direction: </b> {data.direction}<br />
                    <b>UserId: </b> {data.userId}<br />
                </div>}
            </div>
        </div>
    );
}

export default App;
