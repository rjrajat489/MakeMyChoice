class Header extends React.Component{
  render(){
    return (
      <div> 
      <p>{this.props.rajat}</p>
      <p>{this.props.saha}</p>
      </div>
     )
  }
}

class Inapp extends React.Component{
  render(){
   const option=[1,2,3,4,5];
 return  (
   <div>
   <Header rajat="helo \rajat " />
   <Options saha={option} />
   </div>
 );
}
}
class Options extends React.Component{
  render(){
    return (
      <div>
      {
        this.props.saha.map((x)=><Option key={x} op={x}/>)
      }
      </div>
    );
  }

}
class Option extends React.Component{
render(){
  return <p>{this.props.op}</p>
}

}
ReactDOM.render(<Inapp/>, document.getElementById("app"))