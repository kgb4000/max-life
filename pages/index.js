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
              Max Life barbershop is a family-run business located in Takoma
              Park, Maryland next to Belford Towers. The shop is owned and
              operated by Master Barber Gene Brown.
            </p>
            <p>
              After working as a barber for multiple high-end salons, Gene
              started and created his own comfortable environment that cateres
              to men&apos;s and boys&apos; hair grooming needs.
            </p>
            <p>
              The barbershop is located in the{' '}
              <a
                href="https://www.google.com/maps/dir/38.9545984,-76.8147456/Max+Life+Barbershop+%26+Salon,+New+Hampshire+Avenue,+Chillum,+MD/@38.9834203,-76.9400498,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89b7c7fb14cd200d:0xa1d0fa60bbce1688!2m2!1d-76.9948285!2d38.9728512"
                target="_blank"
                rel="noreferrer"
              >
                Tokoma Park Shopping Center.
              </a>
            </p>
            <p>
              The shop&apos;s most popular haircuts are fades, lineups, and
              men&apos;s party trims.
            </p>
            <p>
              Each of these cuts is tailored to fit a client&apos;s face shape,
              hair texture, thickness, or thinning problems.
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
                <h3>Haircuts</h3>
              </div>
              <div className="service-2">
                <h3>Beard Trim</h3>
              </div>
              <div className="service-3">
                <h3>Shape-ups</h3>
              </div>
              <div className="service-4">
                <h3>Designs</h3>
              </div>
            </div>
            <div className="btn">
              <Button as="a" href={phoneNumber}>
                Call to for Availability!
              </Button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Our Professional Barbers</h2>
            <div className="barbers">
              <div className="barber">
                <img src="../images/gene-the-master-barber.jpg" />
                <h3>Gene</h3>
                <div className="btn">
                  <Button as="a" href={phoneNumber}>
                    Call Gene!
                  </Button>
                </div>
              </div>
              <div className="barber">
                {' '}
                <img src="../images/bj-the-barber.jpg" />
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
                Max Life Barber Shop is truely the best barbershop in Takoma
                Park. I love the comfortable atmosphere, the location, and my
                barber Gene. Gene always has me looking my best for the week and
                the weekend.
              </p>
              <img src="../images/kgb4000.webp" className="avatar" />
              <p>KGB4000</p>
            </div>
            <div className="btn">
              <Button as="a" href={reviews} target="_blank">
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

// _7bd10abd7978c73008a156639bd4bb1a.maxlifebarbershop.com. CNAME _1320ccf7137cea2945d67ff16548be11.fpkndhgbpx.acm-validations.aws.

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
    height: 708px;
    margin-bottom: 1rem;
    background-position: center;

    h3 {
      color: #fff;
      font-size: 3rem;
    }
  }

  .service-1 {
    background-image: url(/images/haircuts.jpg);
    background-size: cover;
  }
  .service-2 {
    background: url(/images/beard-trim.jpg);
    background-size: cover;
  }
  .service-3 {
    background: url(/images/shape-ups.jpg);
    background-size: cover;
  }
  .service-4 {
    background: url(/images/designs.jpg);
    background-size: cover;
  }

  section.client-reviews {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.52),
        rgba(0, 0, 0, 0.62)
      ),
      url(/images/barber-hair-designs.jpg);
    background-position: center;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding: 4rem 0;
    margin-bottom: 0;

    p {
      font-size: 1.2rem;
    }
  }

  .avatar {
    max-width: 3rem;
    border-radius: 50%;
    border: 2px solid #feca57;
  }

  @media (min-width: 600px) {
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
