import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export const MetaEmail = (props) => {
    const {
        selected,
        unread,
        name,
        subject,
        desc,
        avatar
    } = props;
    const emailClass = classNames({
        'email-item':true,
        'email-item-selected': selected && !unread,
        'email-item-unread': unread,
        'pure-g':true
    });
    return (
        <div className={emailClass}>
            <Avatar avatar={avatar}/>
            <div className="pure-u-3-4">
                <h5 className="email-name">{name}</h5>
                <h4 className="email-subject">{subject}</h4>
                <p className="email-desc">
                    {desc}
                </p>
            </div>
        </div>
    );
}

MetaEmail.propTypes = {
    selected: PropTypes.bool,
    unread: PropTypes.bool,
    name: PropTypes.string,
    subject: PropTypes.string
}

export const Avatar = (props) => (
    <div className="pure-u">
        <img width="64" height="64" className="email-avatar" src={props.avatar}/>
    </div>
)

Avatar.propTypes = {
    avatar: PropTypes.string
}
