import styled from 'styled-components'
import Button from '../components/button'

export default function Hero() {
  const phoneNumber = '2407488286'

  return (
    <HeroBox>
      <div className="container">
        <h1 className="name">Max Life Barbershop</h1>
        <h1>Best Barbershop Tacoma Park MD</h1>
        <p>Walkin&apos;s Welcome</p>
        <p>First Come | First Serve</p>
        <a className="btn" href="tel:{phoneNumber}">
          <HeroButton>Call (301) 333-5597</HeroButton>
        </a>
      </div>
    </HeroBox>
  )
}

const HeroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.42),
      rgba(0, 0, 0, 0.42)
    ),
    url(../images/max-life-barbershop.jpg);
  background-position: center;
  background-size: cover;
  height: 50rem;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  h1.name {
    display: block;
    margin-bottom: 1rem;
    font-size: 2.4rem;
  }
`

const HeroButton = styled(Button)`
  border: 1px solid #feca57;
  background-color: #feca57;
  color: #111;
  transition: background-color 1s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: #111;
  }
`
