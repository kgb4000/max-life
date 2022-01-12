import styled from 'styled-components'

export default function Footer() {
  const phoneNumber = 'tel:2407488286'
  const phone = '(240) 748-8286'
  return (
    <>
      <FooterSection>
        <div className="container">
          <div className="contact">
            <h2>Contact Us</h2>
            <p>Have a question about a service?</p>
            <p>Just want to say what&apos;s up?</p>
            <p>
              Call us at <a href={phoneNumber}>{phone}</a>
            </p>
            <p>Visit us at:</p>
            <address>
              <p> 6859 New Hampshire Ave</p>
              <p>Takoma Park</p>
              <p>MD 20912</p>
            </address>
          </div>
          <div className="hours">
            <h2>Hours</h2>
            <p>
              <span className="day">Monday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Tuesday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Wednesday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Thursday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Friday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Saturday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Sunday: </span>
              <span className="time">Closed</span>
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12407.442355396792!2d-76.9948285!3d38.9728512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1d0fa60bbce1688!2sMax%20Life%20Barbershop%20%26%20Salon!5e0!3m2!1sen!2sus!4v1641959135634!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </FooterSection>
      <div className="container">
        <p>Max Life Barbershop &copy; {new Date().getFullYear()}</p>
      </div>
    </>
  )
}

const FooterSection = styled.footer`
  background: #111;
  color: #fff;
  padding-top: 2rem;

  h2 {
    font-size: 1.5rem;
    text-align: left;
  }
  .contact,
  .hours {
    margin-bottom: 2rem;
  }
`
