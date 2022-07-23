import aboutusStyle from "./AboutUs.module.css"

const AboutUS = () => {
  return (
    <section className='text-white text-center'>
        <h1 className='text-uppercase'>&Agrave; propos de nous</h1>
        <p>
            Paris Event est une application web conçu pour vous permettre de ne pas manquer un seul évènement parisien tout au long
            de l'année.
        </p>
        <hr  className={`${aboutusStyle.splitbar}`}/>
    </section>
  )
}

export default AboutUS