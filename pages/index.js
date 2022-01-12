import styled from 'styled-components'
import Header from '../components/header'
import HeroBox from '../components/heroBox'
import Button from '../components/button'
import Footer from '../components/footer'

export default function Home() {
  const phoneNumber = 'tel:2407488286'
  const reviews =
    'https://www.google.com/search?client=firefox-b-1-d&q=maxlife+barbershop#lrd=0x89b7c7fb14cd200d:0xa1d0fa60bbce1688,1,,,'
  return (
    <>
      <Header />
      <HeroBox />
      <Main>
        <section>
          <div className="container">
            <h2>Max Life Barbershop</h2>
            <p>
              Max Life barbershop is a family-run business located in Tacoma
              Park, Maryland next to Belford Towers. The shop is owned and
              operated by Master barber Gene Brown. After working as a barber
              for multiple high-end salons, Gene wanted to create a comfortable
              environment that catered to men&apos;s and boys&apos; hair
              grooming needs.
            </p>
            <p>
              Max Life originally opened on October 1, 2021. The business is
              located opposite the Pine tree ski lodge-inspired movie theatre,
              Brewvies Cinema Pub.
            </p>
            <p>
              The shop&apos;s most popular haircuts are fades, lineups, and
              men&apos;s party trims. Each of these cuts is tailored to fit a
              client&apos;s face shape, hair texture, thickness, or thinning
              problems.
            </p>
            <div className="btn">
              <Button as="a" href={phoneNumber}>
                Call Us For Your Cut!
              </Button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Our Services</h2>
            <div className="barber-services">
              <div className="service-1">
                <h3>Haircut</h3>
              </div>
              <div className="service-2">
                <h3>Beard Trim</h3>
              </div>
              <div className="service-3">
                <h3>Shape up</h3>
              </div>
              <div className="service-4">
                <h3>Shave</h3>
              </div>
            </div>
            <div className="btn">
              <Button as="a" href={phoneNumber}>
                Make an Appointment!
              </Button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Our Barbers</h2>
            <div className="barbers">
              <div className="barber">
                <img src="../images/gene.jpg" />
                <h3>Gene</h3>
                <div className="btn">
                  <Button as="a" href={phoneNumber}>
                    Call Gene!
                  </Button>
                </div>
              </div>
              <div className="barber">
                {' '}
                <img src="../images/gene.jpg" />
                <h3>BJ</h3>
                <div className="btn">
                  <Button as="a" href={phoneNumber}>
                    Call BJ!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="client-reviews">
          <div className="container">
            <h2>Client Reviews</h2>
            <div className="review">
              <p>
                Max Life barbershop is truely the best. I love the atmosphere,
                and my barber Gene. Always has me looking my best for the
                weekend.
              </p>
              <img src="../images/gene.jpg" className="avatar" />
              <p>Kester</p>
            </div>
            <div className="btn">
              <Button as="a" href={reviews}>
                More Reviews on Google!
              </Button>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  .review {
    text-align: center;
  }

  .barber-services {
    display: block;
    margin-top: 2rem;
  }

  .barber {
    width: 100%;
    heigth: 100%;
  }

  .barber img {
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  @media (min-width: 500px) {
    .barbers {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
    }
    .barber {
      width: 48%;
      margin-bottom: 2rem;
    }
  }

  .service-1,
  .service-2,
  .service-3,
  .service-4 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    border: 1px solid #111;
    margin-bottom: 1rem;
    border-radius: 10px;
  }

  section.client-reviews {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.52),
        rgba(0, 0, 0, 0.62)
      ),
      url(../images/barber-hair-designs.jpg);
    background-position: center;
    background-size: cover;
    height: 30rem;
    color: #fff;
    text-align: center;
    padding: 4rem 0;
    margin-bottom: 0;
  }

  .avatar {
    max-width: 3rem;
    border-radius: 50%;
    border: 2px solid #feca57;
  }

  @media (min-width: 768px) {
    .barber-services {
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
    }
    .service-1,
    .service-2,
    .service-3,
    .service-4,
    .barber {
      width: 48%;
      margin-bottom: 2rem;
    }
  }
`
