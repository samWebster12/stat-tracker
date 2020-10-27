import React from 'react';

class PlayerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.player ? props.player.name : '',
            points: props.player ? props.player.points: '',
            rebounds: props.player ? props.player.rebounds: '',
            assists: props.player ? props.player.assists: '',
            shotsMade: props.player && props.player.shotsMade ? props.player.shotsMade : '',
            shotsTaken: props.player && props.player.shotsTaken ? props.player.shotsTaken: '',
            error: '',
            newPlayer: props.player ? false : true
        }
    }

    nameChange = (e) => {
        const textValue = e.target.value;
        this.setState(() => ({
            name: textValue
        }));
    }

    pointsChange = (e) => {
        const points = e.target.value;
        if (!points || points.match(/^\d*$/)) {
            this.setState(() => ({ points }));
        }
    }

    reboundsChange = (e) => {
        const rebounds= e.target.value;
        if (!rebounds || rebounds.match(/^\d*$/)) {
            this.setState(() => ({ rebounds }));
        }
    }

    assistsChange = (e) => {
        const assists = e.target.value;
        if (!assists || assists.match(/^\d*$/)) {
            this.setState(() => ({ assists }));
        }
    }

    shotsMadeChange = (e) => {
        const shotsMade = e.target.value;
        if (!shotsMade || shotsMade.match(/^\d*$/)) {
            this.setState(() => ({ shotsMade }));
        }
    }

    shotsTakenChange = (e) => {
        const shotsTaken = e.target.value;
        if (!shotsTaken || shotsTaken.match(/^\d*$/)) {
            this.setState(() => ({ shotsTaken }));
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.points || !this.state.rebounds || !this.state.assists || !this.state.name) {
            this.setState(() => ({ error: '***Must provide name, points, rebounds, and assists***'}));

        } else if (this.state.shotsMade > this.state.shotsTaken) {
            this.setState(() => ({ error: '***Number of shots taken must be greater than number of shots made***'}));

        } else if (this.state.shotsMade < 0 || this.state.shotsTaken < 0) {
            this.setState(() => ({ error: '***Number of shots and number of shots made must be at least 0***'}));

        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit(this.state);
        }
    }

    render() {
        return (
            <div className="player-form">
                <form autoComplete="off" onSubmit={this.onFormSubmit}>
                    {this.state.error && <h3>{this.state.error}</h3>}
                    <div className="player-form__group">
                        <input className="player-form__input" placeholder="Name" type="text" id="name" value={this.state.name} onChange={this.nameChange}/>
                        <label className="player-form__label" htmlFor="name">Name</label>
                    </div>
                    <div className="player-form__group">                       
                        <input className="player-form__input" type="text" placeholder="Points" id="points" value={this.state.points} onChange={this.pointsChange} />
                        <label className="player-form__label" htmlFor="points">Points</label>
                    </div>
                    <div className="player-form__group">
                        <input className="player-form__input" type="text" placeholder="Rebounds" id="rebounds" value={this.state.rebounds} onChange={this.reboundsChange} />
                        <label className="player-form__label" htmlFor="rebounds">Rebounds</label>
                    </div>
                    <div className="player-form__group">
                        <input className="player-form__input" type="text" id="assists" placeholder="Assists" value={this.state.assists} onChange={this.assistsChange} />
                        <label className="player-form__label" htmlFor="assists">Assists</label>
                    </div>
                    <div className="player-form__group">
                        <input className="player-form__input" type="text" id="shotsMade" placeholder="Shots Made (Opt)" value={this.state.shotsMade} onChange={this.shotsMadeChange}/>
                        <label className="player-form__label" htmlFor="shotsMade">Shots Made (Opt)</label>
                    </div>
                    <div className="player-form__group">
                        <input className="player-form__input" type="text" id="shotsTaken" placeholder="Shots Taken (Opt)"value={this.state.shotsTaken} onChange={this.shotsTakenChange}/>
                        <label className="player-form__label" htmlFor="shotsTaken">Shots Taken (Opt)</label>
                    </div>
                    <button className="player-form__submit-btn btn">{this.state.newPlayer ? 'Add Player' : 'Save Changes'}</button>
                </form>
            </div>
        )
    }
}

export default PlayerForm;