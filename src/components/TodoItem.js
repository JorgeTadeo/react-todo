import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px  #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: Proptypes.object.isRequired
}

export default TodoItem
