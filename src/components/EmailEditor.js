import React, {Component, PropTypes} from 'react';

const sampleProps = {
    title: 'Hello from Toronto',
    name: 'Tilo Mitra'
}

class EmailEditor extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="main" className="pure-u-1">
                <div className="email-content">
                    <EmailHeader {...sampleProps}/>
                </div>
                <div className="email-content-body">
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
                    From  <a>{props.name}</a>
                </p>
            </div>
            <div className="email-content-controls pure-u-1-2">
                <button className="secondary-button pure-button">Reply</button>
            </div>
        </div>
    )
}

EmailHeader.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string
}

export default EmailEditor;
