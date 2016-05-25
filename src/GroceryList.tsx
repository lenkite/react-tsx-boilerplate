import * as React from 'react'
import ListItem from './ListItem'
export default class GroceryList extends React.Component<any, any> {
    render() {
        return (
            <ul>
                <ListItem quantity={1}>Bread</ListItem>
                <ListItem quantity={5}>Eggs</ListItem>
                <ListItem quantity={4}>Milk</ListItem>
            </ul>
        )
    }
}
