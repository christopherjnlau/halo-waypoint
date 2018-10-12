import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Image, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <div className='white'>
        <Menu borderless className="top">
          <Container>
            <Menu.Item><Image src ='https://w.halocdn.com/content/Images/halo-logo-2x.png'/></Menu.Item>
            <Menu.Item>GAMES</Menu.Item>
            <Menu.Item>NEWS</Menu.Item>
            <Menu.Item>ESPORTS</Menu.Item>
            <Menu.Item>COMMUNITY</Menu.Item>
            <Menu.Item>FORMS</Menu.Item>
            <Menu.Item>UNIVERSE</Menu.Item>
            <Menu.Item>SHOP</Menu.Item>
            <Menu.Item position="right"><Icon name="search" /></Menu.Item>
            <Menu.Item>SIGN IN</Menu.Item>
          </Container>
        </Menu>
        </div>
    )
  }
}


class FullWidthImage extends React.Component {
  render() {
    return (
        <div className='back'>
        </div>

    )
  }
}


class FooterMenu extends React.Component {
          render() {
            return (
                <div className='g'>
                  <Grid>
                    <Grid.Row className ='pad' container columns={3} >
                      <Grid.Column><Image src = 'https://content.halocdn.com/media/Default/home/modules/halo-championship-series-tox-wins-hcs-london-2018-80d68db7866e45579a4293eeb42065c0.jpg'/>
                        <h2><a href="https://www.halowaypoint.com/en-us/news/hcs-london-2018-recap">TOX GAMING WINS HCS LONDON</a></h2>
                      </Grid.Column>
                      <Grid.Column><Image src ='https://content.halocdn.com/media/Default/home/modules/cf103_module-a718934f770541d08d211d678fe43107.jpg'/>
                        <h2><a href= 'https://www.halowaypoint.com/en-us/news/thats-so-raven'>THE STORY OF FIRETEAM RAVEN"</a></h2>
                      </Grid.Column>
                      <Grid.Column><Image src ='https://content.halocdn.com/media/Default/home/modules/halo_silent_storm_542x305-e1811d8f9c3345e8881fa2bd82e07da0.jpg'/>
                        <h2><a href= 'https://www.amazon.com/dp/1501138383/ref=cm_sw_r_cp_api_o0PJBb9609JXC'> HALO: SILENT STORM AVAILABLE NOW</a></h2>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
            )
          }
        }

class FooterMenu2 extends React.Component {
  render() {
    return (
        <div>
          <Grid>
            <Grid.Row container columns={3} >
              <Grid.Column>

                  <Image src ='https://w.halocdn.com/content/images/xbox-footer.png' centered middle />
              </Grid.Column>
              <Grid.Column><Image src = 'https://w.halocdn.com/content/images/microsoft-w.png' centered middle /></Grid.Column>
              <Grid.Column>
                <Image src='https://content.halocdn.com/media/Default/Ratings/ESRB/OctoberUpdate/rating_pending_v2-247268bc38644db3b48ee16e8b2acf63.jpg'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class Halo extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        <FooterMenu2/>
        </div>
    );
  }
}

ReactDOM.render(<Halo/>, document.getElementById('root'));
