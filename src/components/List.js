import React,{Component} from 'react';
import Item from './Item'

export default class List extends Component{
    render(){
      const {clearList,items,handleEdit,handleDelete}= this.props
      return(
          <ul className="list-group my-4">
              <h3>List</h3>
              {items.map(item=>{
                    return(
                        <Item key={item.id}
                        name={item.name}
                        handleDelete={()=>handleDelete(item.id)}
                        handleEdit={()=>handleEdit(item.id)}
                        />
                    )
              })}
              <button className="btn btn-danger font-weight-bold" onClick={clearList}>Clear</button>
          </ul>
      )
    }
  
  }