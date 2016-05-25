import * as React from 'react'

interface ListItemProps extends React.Props<ListItem> {
    quantity: number
}
export default class ListItem extends React.Component<ListItemProps, any> {
    render() {
        return (
            <li>{this.props.quantity} x {this.props.children}</li>
        )
    }
}
