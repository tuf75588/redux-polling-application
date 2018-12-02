import React, { Component } from 'react';

class AddPoll extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    disable: true
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    //redirect page to home once react router is added to app
  };
  isDisabled = () => {
    const { question, a, b, c, d } = this.state;
    return question === '' || a === '' || b === '' || c === '' || d === '';
  };
  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className='add-form' onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
        <input type='text' value={question} name='question' className='input' onChange={this.handleChange} />
        <h3>What are the options?</h3>
        <label htmlFor='A'>
          A
          <input className='input' name='a' value={a} id='a' type='text' onChange={this.handleChange} />
        </label>
        <label htmlFor='B'>
          B
          <input className='input' name='b' id='b' type='text' value={b} onChange={this.handleChange} />
        </label>
        <label htmlFor='C'>
          C
          <input className='input' type='text' name='c' id='c' value={c} onChange={this.handleChange} />
        </label>
        <label htmlFor='D'>
          D
          <input className='input' type='text' name='d' id='d' value={d} onChange={this.handleChange} />
        </label>
        <button className='btn' type='submit' disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddPoll;
