import React, { Component } from 'react'
import axios from 'axios'


export default class UserList extends Component {

    state = {
        contactArray: []
    }


    componentDidMount(){
        axios.get('https://randomuser.me/api?results=25')
        .then( res => {
            const contactArray = res.data.results;
            this.setState({
                contactArray: contactArray
            })
        })
        .then(res => console.log("logging contactArray",this.state.contactArray))
    }
    
    generateContactList = () => {
        const contactList = this.state.contactArray.map((user, i) => {
            return (<tr>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <img src={user.picture.thumbnail}/>
            </tr>)
        })
        return contactList

    }
    
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <table align="center" className="ordersTable">
                        <tr>
                            <th>Name</th>
                            <th>last</th>
                            <th>thumbnail</th>
                        </tr>
                        {this.generateContactList()}
                    </table>
            </div>
        )
    }
}
