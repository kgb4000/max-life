import styled from 'styled-components'
import Button from '../components/button'

export default function Header() {
  const phoneNumber = 'tel:2407488286'
  return (
    <HeaderSection>
      <div className="container">
        <div className="header">
          <div className="logo">Max Life</div>
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
                  Call Us Now!
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
  position: fixed;
  background: #fff;
  width: 100%;
  .header {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-self: center;
  }

  .logo {
    font-size: 1.4rem;
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
`

const HeaderButton = styled(Button)`
  border: 1px solid #feca57;
  background-color: #feca57;
  color: #111;
  font-size: 16px;
  padding: 0.5rem 0.8rem;
  margin: 0;
`
