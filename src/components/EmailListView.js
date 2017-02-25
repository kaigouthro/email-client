import React, {Component} from 'react';
import { connect } from 'react-redux';
import { MetaEmail } from './MetaEmail';

class EmailList extends Component {
    render() {
        const { emailList } = this.props;
        return (
            <div id="list" className="pure-u-1">
              {emailList.map( (item,index) => (
                  <MetaEmail {...item.toJS()} key={index}/>
              ))}
            </div>
        )
    }
}
const getEmails = (emailList,currentSelect) => {
        return emailList.groupBy( value =>  value.get('group') ).get(currentSelect);
}
const mapStateToProps = (state) => ({
      emailList : getEmails(state.email.get('emailList'),state.email.get('currentSelect')),
});

export default connect(mapStateToProps)(EmailList);
