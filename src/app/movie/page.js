import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {
    const RAPID_KEY = process.env.RAPID_KEY;
    const RAPID_HOST = process.env.RAPID_HOST;
    const RAPID_URL = process.env.RAPID_URL;

    await new Promise(resolve => setTimeout(resolve, 2000));

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': RAPID_KEY,
            'X-RapidAPI-Host': RAPID_HOST 
        }
    };

    const res = await fetch(RAPID_URL, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;