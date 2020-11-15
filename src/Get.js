import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'

class Get extends Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = "https://test-o7f7gafj4q-uc.a.run.app/project1/getimgAlluser/";
        fetch(proxyurl + url)
        .then(response => response.json())
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
        .then(json => {
            this.setState({
                items:json,
                isLoaded: true, 
            })
            }).catch((err) => {
                console.log(err);
            });
            
        
    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <Navbar/>
                <div className="container">
                     <ul>
                     {items.map(items => (
                         <li key={items._id}>
                             <div className="card card-body my-3">
                             ID : {items._id} Items : {items.report.Image} report : <img src={"https://test-o7f7gafj4q-uc.a.run.app/" + items.report.Image} width="50" height="50" alt="" loading="lazy"></img>
                             </div>
                         </li>
                     ))}
                     </ul>
                </div>
            </div>
        );

    }

}

export default Get;