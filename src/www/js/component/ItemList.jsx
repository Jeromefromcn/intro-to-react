"use strict";

const
    React = require("react"),
    Item = require("./Item"),
    ItemForm = require("./ItemForm");

module.exports = React.createClass({

    getInitialState: function () {
        return {
            items: this.props.items
        };
    },

    addItem: function (newItem) {
        let items = this.state.items;
        items.push(newItem);
        this.setState({
            items: items
        });
    },

    render: function () {
        return <dev>
            <h1>{this.props.header}</h1>
            <ul>
                {this.state.items.map(function (item) {
                    return <Item>{item}</Item>;
                })}
                <ItemForm addItem={this.addItem}/>
            </ul>
        </dev>;
    }
});