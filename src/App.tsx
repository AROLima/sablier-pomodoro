
import { Container} from "./components/Container";
import {Logo} from "./components/Logo";
import {Menu} from "./components/Menu";

import '/styles/theme.css'
import '/styles/global.css'
import {Countdown} from "./components/Countdown";
import {DefaultInput} from "./components/DefaultInput";

export function App() {
  return (
      <>
        <Container>
            <Logo>Logo</Logo>
        </Container>

        <Container>
            <Menu/>
        </Container>

          <Container>
              <Countdown/>
          </Container>

          <Container>
              <form className='form' action=''>
                  <div className='formRow'>
                      <DefaultInput id='meuInput' type='text' />
                  </div>

                  <div className='formRow'>
                      <p>Lorem ipsum dolor sit amet</p>
                  </div>

                 <div className='formRow'>
                    <p>Ciclos</p>
                    <p>0 0 0 0 0 0 0 0 0 0 </p>
                 </div>

                  <div className='formRow'>
                    <button>Enviar</button>
                  </div>
              </form>
          </Container>

      </>
  )
}
