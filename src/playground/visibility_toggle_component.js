class Vis extends React.Component{
    
    constructor(props){
        super(props);
        this.detailss=this.detailss.bind(this);
        this.state={
            visi:false,
        };
    }
detailss(){
    this.setState((prevState)=>{
    return {
        visi: !prevState.visi
    };
}
    )
}
    render(){
        return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.detailss}>
        {this.state.visi?"Hide":"Show"}
        </button>
        {this.state.visi && "Here is the details"}
        </div>
        );
}
}
ReactDOM.render(<Vis/>,document.getElementById("app"));