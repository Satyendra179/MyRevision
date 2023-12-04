import React, { Component } from 'react'
class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
nameChangeHandler =(event)=>{
  console.log(event.target.value)
}
  
  render() {
    return (
      <div>
        <form>
            <label htmlFor="" >Name</label>
            <input type="text" name="name" onKeyUp={this.nameChangeHandler} />
            <label htmlFor="">Country</label>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

        </form>
      </div>
    )
  }
}

export default Form
