import css from '../HomePage/HomePage.module.css'

const HomePage = () => { 
    return (
        <main className={css.container}>
            <h1>Car rental</h1>
            <div>
              <img className={css.imageFirst}  src="/images/car_rental.jpg" alt="car"/>

            </div>
          {/* <img className={css.imageFirst} src="/images/images.jpg" alt="car"/> */}
        </main>
    )
}

export default HomePage;
