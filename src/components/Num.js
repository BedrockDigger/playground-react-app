import React from 'react'
import { Grid, Statistic, Card, GridColumn } from 'semantic-ui-react'

class PanoNum extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Card color='red' style={{ padding: "10px" }}>
                        <Statistic color='red'>
                            <Statistic.Value>5,550</Statistic.Value>
                            <Statistic.Label>Downloads</Statistic.Label>
                        </Statistic>
                    </Card>
                </Grid.Row>
                <GridColumn>
                    <Card color='teal' style={{ padding: "10px" }}>
                        <Statistic color='teal'>
                            <Statistic.Label>Only</Statistic.Label>
                            <Statistic.Value>1</Statistic.Value>
                            <Statistic.Label>dog do I have at home.</Statistic.Label>
                        </Statistic>
                    </Card>
                </GridColumn>
                <GridColumn>
                    <Card color='blue' style={{ padding: "10px" }}>
                        <Statistic color='blue'>
                            <Statistic.Label>The age of my dog is</Statistic.Label>
                            <Statistic.Value>5</Statistic.Value>
                        </Statistic>
                    </Card>
                </GridColumn>
            </Grid>
        )
    }
}

export default PanoNum