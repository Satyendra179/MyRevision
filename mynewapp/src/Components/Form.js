import React, { Component } from 'react'
class Form extends Component {
  render() {
    return (
      <div>
        <form>
            <label htmlFor="" >Name</label>
            <input type="text" name="name"  />
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
