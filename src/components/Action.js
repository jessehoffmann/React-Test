import React from 'react'

// Styles
import '../static/styles/action.css'

function Action(props) {
    const { action } = props;
    
    return (
        <div>
            <h2 className="action-title">
                Action Performed!
            </h2>
            <div className="flex-box">
                <div className="character-flex-item">
                    <div>
                        <h4>
                            Source Character
                        </h4>
                        <p>
                            {action.source_character}
                        </p>
                    </div>
                    <div>
                        <h4>
                            Source Player ID
                        </h4>
                        <p>
                            {action.source_player_id}
                        </p>
                    </div>
                </div>
                
                <h2>
                    vs.
                </h2>
                
                <div className="character-flex-item">
                    <div>
                        <h4>
                            Target Character
                        </h4>
                        <p>
                            {action.target_character}
                        </p>
                    </div>
                    <div>
                        <h4>
                            TargetPlayer ID
                        </h4>
                        <p>
                            {action.target_player_id}
                        </p>
                    </div>
                </div>
            </div>

            {/* Table seems like a good way to represent remaining data */}
            <table className="action-data-table">
                <tr>
                    <th>Damage Dealt</th>
                    <th>Method Used</th>
                    <th>Platform</th>
                    <th>Region</th>
                </tr>
                <tr>
                    <td>{action.damage}</td>
                    <td>{action.method}</td>
                    <td>{action.platform}</td>
                    <td>{action.region}</td>
                </tr>
            </table>
        </div>
    );
}

export default Action