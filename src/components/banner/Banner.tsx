import styles from "./Banner.module.css"
const Banner = () => {
  return (
    <section id="banner" className={styles.banner}>
      <div>
        <h1>Clases de apoyo con tutores especializados para IB y IGCSE</h1>
        <p>Un mundo de aprendizaje a tu alcance. Exploraciones guiadas y preparación para exámenes en Mathematics, Biology, Physics y más, ¡sin importar tu ubicación!</p>
        <a href="#">Reserva ahora</a>
      </div>
    </section>
  )
}

export default Banner
