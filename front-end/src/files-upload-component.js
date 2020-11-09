import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            imgCollection: ''
        }
    }

    onFileChange(e) {
        this.setState({ imgCollection: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()

        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
        }
        axios.post("http://localhost:4000/api/upload-images", formData, {
        }).then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <h6>Images:</h6>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <br />
                            <input type="file" name="imgCollection" formEncType="multipart/form-data" onChange={this.onFileChange} multiple />
                            <p>*Only .png, .jpg and .jpeg format allowed!</p>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}