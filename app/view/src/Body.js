import { Paper } from 'material-ui';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

const style = {
  backgroundColor: "#0099ff",
  backgroundImage: "",
  display: 'inline-block',
  height: 200,
  width: 300,
  margin: 40,
  opacity: 0.7,
  padding: 20,
  textAlign: 'center'
};

const paper = block => {
   return (<Paper key={ block["key"] }style={ style } zDepth={ 5 } rounded={ false } > 
              <h3> { block["title"] } </h3>
              <b> { block["text"] } </b>
           </Paper>);
}
 
@observer
class Body extends Component {
    render() {
        let headers = this.props.store.getHeader;
        console.log(headers);
        return( <div>
                 <section>
                    { headers.map(i => paper(i)) }
                  </section>
              </div> );
    }
}

export default Body;
