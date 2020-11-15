import React, {Component} from 'react';

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
        const url = "https://test-o7f7gafj4q-uc.a.run.app/project";
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
                <ul>
                     {items.map(items => (
                         <li key={items._id}>
                             ID : {items._id} Projectname : {items.Projectname} TotalImage : {items.TotalImage} Accuracy : {items.Accuracy}
                         </li>
                     ))}
                 </ul>
            </div>
        );

    }

}

export default Get;