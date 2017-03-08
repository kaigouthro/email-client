import React, {Component} from 'react';
import { connect } from 'react-redux';
import { MetaEmail } from './MetaEmail';
import * as actions from '../actions';

export class EmailList extends Component {
    render() {
        const { emailList,selectEmail,match } = this.props;
        const { groupName } = match.params;
        console.log("match",match);
        const currentList = emailList.get(groupName ? groupName : 'inbox');
        return (
            <div id="list" className="pure-u-1">
              {currentList.map( (item,index) => (
                  <MetaEmail {...item.toJS()} key={index} index={index} handleClick={ () => selectEmail(index) } url={match.url}/>
              ))}
            </div>
        )
    }
}
export const getEmails = (emailList,currentSelect) => {
        return emailList.get(currentSelect);
}
export const mapStateToProps = (state) => ({
      emailList : state.email.get('emailList')
});

export default connect(mapStateToProps,actions)(EmailList);
