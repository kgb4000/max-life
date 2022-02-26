import styled from 'styled-components'
import Button from '../components/button'

export default function Header() {
  const phoneNumber = 'tel:2407488286'
  return (
    <HeaderSection>
      <div className="header-container">
        <div className="header">
          <div className="logo">Max Life Barber Shop</div>
          <nav>
            <ul className="nav">
              <li className="tablet">
                <a>Services</a>
              </li>
              <li className="tablet">
                <a>Contact</a>
              </li>
              <li>
                <HeaderButton as="a" href={phoneNumber}>
                  Call Now!
                </HeaderButton>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
  .header-container {
    padding: 0 0.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  .header {
    align-items: center;
  }
  position: fixed;
  background: #fff;
  width: 100%;
  .header {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .logo {
    font-size: 1rem;
    font-weight: 900;
  }

  ul.nav {
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-self: center;
  }

  .tablet {
    display: none;
  }

  @media (min-width: 600px) {
    .logo {
      font-size: 1.4rem;
    }
  }
`

const HeaderButton = styled(Button)`
  background-color: #feca57;
  color: #111;
  font-size: 16px;
  font-weight: 700;
  padding: 0.2rem 0.4rem;
  margin: 0;
  text-decoration: none;

  @media (min-width: 600px) {
    font-size: 1rem;
    padding: 0.2rem 0.8rem;
  }
`
