function App() {
    const click2=()=>console.log('click2')
    return (
        <div>
            <button onClick={() => console.log("click")}>click me</button>
            <button onClick={click2}>click me</button>

        </div>
    );
}

export default App;
