var appRoot=document.getElementById("app");
var vis=true;
const show=()=>{
    vis=!vis;
    render();
}

const render=()=>{
    let template=(
        
        <div>
        <h1> Visibili Togglee</h1>
        <button onClick={show}>
        {vis?"Show":"hide"}
        </button>
        {!vis && <p>Here is the details</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);
}
render();