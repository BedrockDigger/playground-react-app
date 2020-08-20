import React from 'react'
import Clock from 'react-live-clock'
import { Header, Button, Icon, Card, Grid, Container } from 'semantic-ui-react'
import WordCloud from './WordCloud'

function getTimezone() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return timezone
}

class PanoCover extends React.Component {

    render() {
        return (
            <>
                <Grid
                    textAlign='center'
                    verticalAlign='middle'
                    stackable
                    divided='vertically'
                    style={{ maxWidth: "62vw", marginTop: 20, marginLeft: "auto", marginRight: "auto" }}
                >
                    <Grid.Row>
                        <Grid.Column>
                            <Header size='huge'>Pano</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ maxWidth: "30vw" }}>
                            <Card fluid>
                                <Header size='huge' style={{ marginTop: "20px", marginBottom: "10px" }}>
                                    The date is&nbsp;
                    <Clock
                                        format="MMM D"
                                        timezone={getTimezone()}
                                        ticking
                                    />
                    .
                </Header>
                                <Header size='huge' style={{ marginTop: "10px", marginBottom: "10px" }}>
                                    The time is&nbsp;
                    <Clock
                                        format="HH:mm:ss"
                                        timezone={getTimezone()}
                                        ticking
                                    />
                    .
                </Header>
                                <Header size='huge' style={{ marginTop: "10px", marginBottom: "20px" }}>
                                    The focus is Africa.
                </Header>
                                <Button animated='fade'>
                                    <Button.Content visible>
                                        Dive in
                    </Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <WordCloud word='PHP sucks.'/>
            </>
        )
    }
}

export default PanoCover