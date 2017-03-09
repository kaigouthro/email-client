import React, {Component} from 'react';
import { connect } from 'react-redux';
import { MetaEmail } from './MetaEmail';
import * as actions from '../actions';

export class EmailList extends Component {
    render() {
        const { emailList,selectEmail,match } = this.props;
        const { groupName = 'inbox' } = match.params;
        const currentList = emailList.get(groupName);
        return (
            <div id="list" className="pure-u-1">
              {currentList.map( (item,index) => (
                  <MetaEmail {...item.toJS()} key={index} index={index} handleClick={ () => selectEmail(groupName,index) } url={match.url === '/' ? "/list/inbox" : match.url}/>
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
