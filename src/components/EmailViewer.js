import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const getEmailItem = (groupName,emailId,emailList) => {
        if( !groupName && !emailId )
            return emailList.getIn(['inbox',0]);
        else if(!groupName)
             return emailList.getIn(['inbox',emailId])
        else if(!emailId)
            return emailList.getIn([groupName,0]);
        else
            return emailList.getIn([groupName,emailId]);
}

export class EmailViewer extends Component {
    render() {
        const {match, emailList} = this.props;
        const {groupName,emailId} = match.params;
        const emailItem = getEmailItem(groupName,emailId,emailList);
        const emailBody = emailItem.get('content',<DefaultBody />);
        return (
            <div id="main" className="pure-u-1">
                <div className="email-content">
                    <EmailHeader title={emailItem.get('subject')} name={emailItem.get('name')}/>
                </div>
                <div className="email-content-body">
                    {emailBody}
                </div>
            </div>
        );
    }
}


export const EmailHeader = (props) => {
    return (
        <div className="email-content-header pure-g">
            <div className="pure-u-1-2">
                <h1 className="email-content-title">{props.title}</h1>
                <p className="email-content-subtitle">
                    From   <a>{props.name}</a>
                </p>
            </div>
            <div className="email-content-controls pure-u-1-2">
                <Link to="/compose" className="secondary-button pure-button">Reply</Link>
            </div>
        </div>
    )
}

const DefaultBody = (props) => (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere urna tempor at. Duis pellentesque justo ac sapien aliquet egestas. Morbi enim mi, porta eget ullamcorper at, pharetra id lorem.
        </p>
        <p>
            Donec sagittis dolor ut quam pharetra pretium varius in nibh. Suspendisse potenti. Donec imperdiet, velit vel adipiscing bibendum, leo eros tristique augue, eu rutrum lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet condimentum. Nam interdum mauris sed massa dignissim rhoncus.
        </p>
        <p>
            Regards,<br/>
            Tilo
        </p>

    </div>
)

EmailHeader.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    emailList: state.email.get('emailList')
})

export default connect(mapStateToProps)(EmailViewer);
