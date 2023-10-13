import css from '../HomePage/HomePage.module.css'
import rent from '../HomePage/rent.jpg'
const HomePage = () => { 
    return (
        <main className={css.container}>
            <h1>Cruise into Convenience</h1>
            <section className={css.sectionHero}>
               <p className={css.descriptionFirst } >Welcome to your trusted partner in hassle-free travel experiences. Discover a world of convenience and choice as you explore our extensive fleet of rental cars. Whether you're planning a weekend getaway, a family vacation, or a business trip, we've got the perfect vehicle to suit your needs.</p>
               <img src={rent} alt='car' className={css.heroImage} />
            </section>
       
        </main>
    )
}

export default HomePage;
