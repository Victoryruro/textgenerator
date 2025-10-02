import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Output from './components/output.jsx'
// import Select from './components/controls/select.jsx';
import Text from './components/controls/text.jsx';
import Sentence from './components/controls/select.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html:8,
      text:''
    };
  }
  componentDidMount() {
    this.getText();
  }
  getText() {
    axios.get('/api/api?type=hipster-centric&paras=' + this.state.paras + '&sentences=' + this.state.html)
    .then((response)=>{
      // this.setState({text:response.data}, function () {
      //   console.log(this.state);
        
        
      // })
      this.setState({
        text: Array.isArray(response.data) ? response.data : [response.data] // ✅ always an array
      });
      const formatted = Array.isArray(response.data)
        ? response.data.map(p => `<p>${p}</p>`).join("")
        : response.data;

      this.setState({ text: formatted });

    })
    .catch((err) => {
      console.log(err)
    })
  }
  showHtml(val) {
    this.setState({html:val}, this.getText)

  }
  changeParas(val){
    this.setState({paras:val}, this.getText)
  }
  
  render() {
    return (
      <>
        <div className='App container '>
          <h1>Sample Text Generator</h1>
          <hr />
          <form action="" className='form-inline'>
            <div className='form-group'>
              <label >Sentences</label>
              <Sentence value={this.state.html} onChange={this.showHtml.bind(this)}/>
            </div>
             <div className='form-group'>
              <label className='' >Paragraphs</label>
              <Text value={this.state.paras} onChange={this.changeParas.bind(this)}/>
            </div>
          </form>
          <Output value={this.state.text} />


        </div>
      </>
    )
  }
}

export default App
