import React, { Component } from 'react';
import axios from 'axios';

export default class DocumentsUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            docCollection: ''
        }
    }

    onFileChange(e) {
        this.setState({ docCollection: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()

        var formData = new FormData();
        for (const key of Object.keys(this.state.docCollection)) {
            formData.append('docCollection', this.state.docCollection[key])
        }
        axios.post("http://localhost:4000/api/upload-files", formData, {
        }).then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <h6>Documents:</h6>
               
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <br />
                            <input type="file" name="docCollection" formEncType="multipart/form-data" onChange={this.onFileChange} multiple />
                            <p>*Only .pdf,.docx,.txt format allowed!</p>
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