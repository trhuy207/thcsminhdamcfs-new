import React, { useState, useEffect } from 'react';
import {db} from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
// phần này lỗi tè le
const Admin = () => {
    const [cfs, setCfs] = useState([]);
    const cfsCollectionRef = collection(db, "cfs");

    useEffect(() => {
        const getCfs = async () => {
            const data = await getDocs(cfsCollectionRef);
            setCfs(data.docs.map((doc) => ({ ...doc.data() })))
            // console.log(data)
        };

        getCfs();
    }, []);
    return (
        <>
            {cfs.map((cfsData) => {
                return (
                    <div>
                        {" "}
                        <h1>id: {cfsData.id}</h1>
                        <h1>content: {cfsData.content}</h1>
                        <h1>date: {cfsData.date}</h1>
                    </div>
                )
            })}
        
            <div className='container'>
                
            </div>
        </>
    );
}

export default Admin;