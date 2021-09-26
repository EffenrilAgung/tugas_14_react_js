import { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Menu, Table, Label, Icon, Search, Feed, Container, List } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labelGambar: 'Gambar Extra'
    }
  }
  render() {
    return (
      <div>
        <Container style={{ marginTop: '1.5em' }}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'><Search placeholder="Cari Dokumen"></Search></Table.HeaderCell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Paduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Paduan Belajar CSS
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Paduan Belajar React Js
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  PDF
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='2'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>

          <Grid columns='two'>
            <Grid.Row>
              <Grid.Column width='12'>

                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt='profil' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Anton</Feed.User> Added you as a friend
                        <Feed.Date>3 Hour Ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />4 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label>
                      <Icon name='pencil alternate' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        You submitted a new post to page
                        <Feed.Date>3 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra>
                        Saya Senang Balajar Bahasa Pemograman
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='none' />11 Like
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' alt='profil' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Date>
                        4 days ago
                      </Feed.Date>
                      <Feed.Summary>
                        <br />
                        David added 2 new Image
                      </Feed.Summary>
                      <Feed.Extra images>

                        <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' alt={this.state.labelGambar} />

                        <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' alt={this.state.labelGambar} />

                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />2 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>

              </Grid.Column>
              <Grid.Column width='4'>
                <h3>Website Terkait</h3>
                <List>
                  <List.Item content={<a href='http://google.com' >Google</a>} icon='linkify' />
                  <List.Item content={<a href='http://facebook.com' >Facebook</a>} icon='linkify' />
                  <List.Item content={<a href='https://react.semantic-ui.com/' >Semantic UI</a>} icon='linkify' />
                  <List.Item content={<a href='http://niomic.com' >Niomic</a>} icon='linkify' />
                  <List.Item content={<a href='https://reactjs.org' >React</a>} icon='linkify' />
                </List>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div >
    )
  }
}
export default App