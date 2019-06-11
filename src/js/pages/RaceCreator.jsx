import React from 'react';

import { Button, Container, Form, Grid, Header, Segment } from 'semantic-ui-react';
import Card from '../components/Card.jsx';

export default class RaceCreator extends React.Component
{
    render()
    {
        return (
            <Container style={{ paddingTop: '4em' }}>
                <Header icon='user' inverted content='Race Creator' />
                <Segment inverted>
                    <Form inverted>
                        <Form.Input label='Race Singular' placeholder='Race Name' />
                        <Form.Input label='Race Plural' placeholder='Race Plural' />
                        <Form.Group widths='equal'>
                            <Form.Input label='Adult Age' placeholder='Child Age' />
                            <Form.Input label='Death Age' placeholder='Death Age' />
                        </Form.Group>
                    </Form>
                </Segment>
                <Segment inverted>
                    Select 2 cards to give this race:
                </Segment>
                <Grid columns={5}>
                    <Grid.Column>
                        <Card title='Piercing Eyes' icon='eye' content='Piercing eyes that are able to gaze far away.' stats={[ '+2 ACC.', '-1 CHA.' ]} />
                    </Grid.Column>
                    <Grid.Column>
                        <Card title='Gentle Eyes' icon='eye' content='Gentler eyes that comfort those around them.' stats={['+2 CHA.', '-1 ACC.']} />
                    </Grid.Column>
                    <Grid.Column>
                        <Card title='Short and Strong' icon='male' content='Short and Strong characters are bulkier than the average race.' stats={['+2 STR.', '-1 AGI.']} />
                    </Grid.Column>
                    <Grid.Column>
                        <Card title='Short and Lean' icon='male' content='Short and Lean characters are smaller, but much stealthier.' stats={['+2 AGI.', '-1 STR.']} />
                    </Grid.Column>
                    <Grid.Column>
                        <Card title='Night Power' icon='star' content='This race has bonuses during the night.' stats={['+2 ALL at NIGHT.', '-2 ALL at DAY.']} />
                    </Grid.Column>
                </Grid>
                <Segment inverted>
                    Select 0-1 card to give this race:
                </Segment>
                <Grid columns={5}>
                    <Grid.Column>
                        <Card title='War' content='This race is currently at war with another race.' icon='time' />
                    </Grid.Column>
                    <Grid.Column>
                        <Card title='Nomads' content='This race is nomadic and travels a lot.' icon='time' />
                    </Grid.Column>
                    <Grid.Column>
                        <Card title='Bad Blood' content='There is bad blood between this race and another race.' icon='time' />
                    </Grid.Column>
                </Grid>
                <Segment inverted>
                    <Button content='Create Race' inverted basic fluid />
                </Segment>
            </Container>
        );
    }
}
