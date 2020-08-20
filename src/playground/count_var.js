class Count extends React.Component{
constructor(props){
    super(props)
this.add=this.add.bind(this);
this.sub=this.sub.bind(this);
this.reset=this.reset.bind(this);
this.state={
    count:0
}


}

componentDidMount(){
let x=localStorage.getItem('co')
let y=parseInt(x,10)
console.log(y+1)
if(!isNaN(y)){
    this.setState(()=>{
    return {
        count:y

    }
}
    )
}

}

componentDidUpdate(prevProps,prevState){
    localStorage.setItem('co',this.state.count)
    console.log(localStorage.getItem('co'))
}

add(){
    this.setState((prevState)=>{
        return {
            count: prevState.count +1
        }
    })

}

sub(){
    this.setState((prevState)=>{ 
        return {
            count: prevState.count -1
        }
    })
}

reset(){
    this.setState(()=>{ 
        return {
            count: 0
        }
    })

}
render(){
    return (
    <div>
    <h1>count:{this.state.count}</h1>
    <Addone add={this.add}/>
    <Subone sub={this.sub}/>
    <Reset reset={this.reset}/>

    </div>
    )
}

}

const Addone= (props)=>{
    return <button onClick={props.add}>+1</button>
}
const Subone= (props)=>{
    return <button onClick={props.sub}>-1</button>
}
const Reset= (props)=>{
    return <button onClick={props.reset}>reset</button>
}

ReactDOM.render(<Count/>, document.getElementById("app"));