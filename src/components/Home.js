import React, {useEffect} from 'react'
import { connect } from 'react-redux';

//Styles
import '../static/styles/home.css'

// Actions
import { getMainData } from '../actions/main'
import Action from './Action';

function Home(props) {
    const { mainData } = props;

    useEffect(() => {
        // Fetch data from the provided API endpoint
        props.getMainData()
    }, []); // Only triggered once when no dependency is provided

    return (
        <div className="home">
            {mainData.loading ?
                // Not really necessary since it's a super fast GET request but good example regardless
                <h2>
                    Loading...
                </h2>
            : mainData.error != null ?
                <div>
                    <h2>
                        There was an error fetching your data:
                    </h2>
                    {(mainData.error.error || mainData.error.status) && ( // Error payload is represented in two forms so check for both
                        <div>
                            <h4>
                                Status:
                            </h4>
                            <p>
                                {mainData.error.error || mainData.error.status}
                            </p>
                        </div>
                    )}
                    {(mainData.error.reason || mainData.error.message) && ( // Error payload is represented in two forms so check for both
                        <div>
                            <h4>
                                Reason:
                            </h4>
                            <p>
                                {mainData.error.reason || mainData.error.message}
                            </p>
                        </div>
                    )}

                </div>
            : mainData.data != null ?
                // Map the data in case the list size increases in future API requests
                mainData.data.map((action, index) => {
                    return (
                        <Action action={action} key={index} />
                    )
                })
            :
                null
            }
        </div>
    );
}

const mapStateToProps = state => ({
    mainData: state.main.mainData
});

const mapDispatchToProps = {
    getMainData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)