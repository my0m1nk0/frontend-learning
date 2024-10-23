export default function HelloWorld() {
        return(
            <div>
                <h1>Hello World</h1>
                <Child/>
            </div>
        );
}

function Child(){
    return(
        <div>
            <h1>Child</h1>
        </div>
    );
}