import React, {Component} from 'react'
import classes from './ProfileStatus.module.css'

export default class ProfileStatus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            status: this.props.desc,
        }
    }

    onChangeHandler = (status) => {
        this.setState({status})
    }
    updateProfileStatus = () => {
        this.setState({editMode: !this.state.editMode})
        this.props.updateProfileStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div className={classes.ProfileStatus}>
                {
                    this.state.editMode
                        ?   <input
                                autoFocus={true}
                                onBlur={this.updateProfileStatus}
                                value={this.state.status}
                                type="text"
                                onChange={(e) => this.onChangeHandler(e.target.value)}
                            />
                        :   <span onDoubleClick={()=> this.setState({editMode: !this.state.editMode})} >{this.props.desc || 'description'}</span>
                }
            </div>
        )
    }
}



