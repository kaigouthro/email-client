import React, {Component} from 'react';
import { connect } from 'react-redux';
import { MetaEmail } from './MetaEmail';
import * as actions from '../actions';

export class EmailList extends Component {
    render() {
        const { emailList,selectEmail } = this.props;
        return (
            <div id="list" className="pure-u-1">
              {emailList.map( (item,index) => (
                  <MetaEmail {...item.toJS()} key={index} index={index} handleClick={ () => selectEmail(index) }/>
              ))}
            </div>
        )
    }
}
export const getEmails = (emailList,currentSelect) => {
        return emailList.get(currentSelect);
}
export const mapStateToProps = (state) => ({
      emailList : getEmails(state.email.get('emailList'),state.email.get('currentSelect')),
});

export default connect(mapStateToProps,actions)(EmailList);
