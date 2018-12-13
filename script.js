let firstState = `Type on the first screen to see the text with _new_ clothes. 
# React
## React
### React 
#### React
##### React
###### React 
![React Logo w/ Text](https://goo.gl/Umyytc)`;

marked.setOptions({ breaks: true });

if (window.innerWidth < 500) {
    firstState = `Type on the first screen to see the text with _new_ clothes. 
# React
## React
### React 
#### React
##### React
###### React`;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: firstState,
        }
    this.handleChange = this.handleChange.bind(this);
    this.markup = this.markup.bind(this);
    }
    
    markup() {
        let marking = marked(this.state.input, {sanitize: true});
        return {__html: marking};
   }
    
    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }
      
    render() {
        return (
            <div id="wrapper">
                <Textarea input={this.state.input} handleChange={this.handleChange} value="this.state.input"/>
                <div id="preview" dangerouslySetInnerHTML={this.markup()}> 
                </div>
            </div>
        )
    }
}

class Textarea extends React.Component {
    render() {
        return (
            <div id="input-area">
                <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}> </textarea>
            </div>
        )  
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
