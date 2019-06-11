import React from 'react';
import { Button, Header, List, Segment } from 'semantic-ui-react';

export default class Card extends React.Component {
    constructor()
    {
        super();

        this.onSelectClick = this.onSelectClick.bind(this);
    }

    componentWillMount()
    {
        this.setState({selected: false})
    }

    onSelectClick()
    {
        this.setState(...this.state, {selected: !this.state.selected});
    }

    render()
    {
        let statSegment = null;
        if(typeof(this.props.stats) !== 'undefined') {
            const stats = [];
            this.props.stats.forEach((element) => {
                stats.push(<List.Item key={element}>{element}</List.Item>);
            });
            statSegment = (
                <Segment inverted style={{minHeight: '80px'}}>
                    <List divided relaxed inverted>
                        {stats}
                    </List>
                </Segment>
            );
        }
        return (
            <Segment.Group>
                <Segment inverted color='violet'>
                    <Header as='h4' icon={this.props.icon} content={this.props.title} />
                </Segment>
                <Segment inverted content={this.props.content} style={{minHeight: '120px'}} />
                {statSegment}
                <Segment inverted>
                    <Button basic inverted toggle active={this.state.selected} content='Select' fluid onClick={this.onSelectClick} />
                </Segment>
            </Segment.Group>
        );
    }
}
