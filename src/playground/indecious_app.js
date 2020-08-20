
var appRoot=document.getElementById("app");
let a=[];
const onsub=(e)=>{
e.preventDefault();
let x=e.target.elements.in.value;
a.push(x)
render();
e.target.elements.in.value=""

};

const render=()=>{
var template =( 
    <div>
    <h1>App</h1>
    {a.length?<p>Your option</p> :<p>Nooption</p>}
  <ol>
    {
       a.map((n)=>{
        return <li key={n}>{n}</li>
       }) 
    }
    </ol>
    <form onSubmit={onsub}>
    <input type="text" name="in" />
    <button>ADD</button>
    </form>
    </div>
);
ReactDOM.render(template,appRoot);
}
render();