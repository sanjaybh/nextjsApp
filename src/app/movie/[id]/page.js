import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";

const Page = async ({params}) => {
    const id = params.id;
    const RAPID_KEY = process.env.RAPID_KEY;
    const RAPID_HOST = process.env.RAPID_HOST;

    const url = `https://${RAPID_HOST}/title/details/?ids=${id}&lang=en`;


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': RAPID_KEY,
            'X-RapidAPI-Host': RAPID_HOST 
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (

            <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>

    );
};

export default Page;