import React from 'react'
import Clock from 'react-live-clock'
import { Header, Button, Icon, Card, Segment, Grid } from 'semantic-ui-react'

function getTimezone() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return timezone
}

class PanoCover extends React.Component {
    render() {
        return (
            <div id='pano-cover' fluid style={{ display: "flex", alignContent: "center", justifyContent: "center", height: "100vh" }}>
                <Segment>
                    <Card>
                        <Header size='huge'>
                            The date is &nbsp;
                    <
                        Clock
                                format="MMM D"
                                timezone={getTimezone()}
                                ticking
                            />
                    .
                </Header>
                        <Header size='huge'>
                            The time is &nbsp;
                    <Clock
                                format="HH:mm:ss"
                                timezone={getTimezone()}
                                ticking
                            />
                    .
                </Header>
                        <Header size='huge'>
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
                </Segment>
            </div>
        )
    }
}

export default PanoCover