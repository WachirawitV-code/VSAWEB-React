import React,{Component} from 'react';

export default class Input extends Component{
    render(){
      const {handleSubmit,item,handleChange,editItem} = this.props;
      return(
          <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Input</label>
                      <input type="text" className="form-control" value={item} onChange={handleChange}/>
                    </div>
                    <input type="submit" disabled={item?false:true}
                    className={editItem?"btn btn-primary":"btn btn-success"}
                     value={editItem?"Edit":"Save"}/>
                </form>
          </div>
      )
    }
  }