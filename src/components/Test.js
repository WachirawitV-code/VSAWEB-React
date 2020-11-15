class Get extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = "https://test-o7f7gafj4q-uc.a.run.app/uploads/2020-08-01-21.10.43.png";
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
                <form>
                    <div className="container">
                         <img src={"https://test-o7f7gafj4q-uc.a.run.app/uploads/2020-08-01-21.10.43.png"} width="500" height="500" alt="" loading="lazy"></img>
                    </div>
                </form>
                </div>
            </div>
        );

    }

}

export default Get;