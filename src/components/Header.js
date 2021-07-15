import React from 'react'
import { connect } from 'react-redux';

// Actions
import { getMainData } from '../actions/main';

// Styles
import '../static/styles/header.css'

function Header(props) {

    const handleClick = () => {
        props.getMainData()
    }

    return (
        <header>
            {/* Not ideal if working with mobile responsiveness but easy solution on desktop for centering header */}
            <div className="flex-item">

            </div>

            <div className="flex-item">
                <h1>
                    WebPT React Test
                </h1>
            </div>

            <div className="flex-item">
                {/* Consume the data without having to manually reload the page */}
                <button onClick={handleClick} className="refresh-button">
                    Refresh Data
                </button>
            </div>

        </header>
    );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    getMainData
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)