import React from "react";
import "./HomeComponentStyle.css";
import { connect } from "react-redux";
import {thunkSendPhoto} from '../../store/actions';

interface IHomeProps {
  isServerAlive: boolean;
  thunkSendPhoto: (photo: any) => void
}

interface IHomeState {
  data_uri: any;
  imageURL: any;
}

class HomeComponent extends React.Component<IHomeProps, IHomeState> {
  public uploadInput: any;
  public fileName: any;

  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      data_uri: undefined,
      imageURL: null
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  public render() {
    return (
      <div>
        <div className={"status"}>
          <div>Server Status:</div>
          {this.props.isServerAlive ? (
            <div className={"online"} />
          ) : (
            <div className={"offline"} />
          )}
        </div>
        <form onSubmit={this.handleUploadImage}>
          <div>
            <input
              ref={ref => {
                this.uploadInput = ref;
              }}
              type="file"
            />
          </div>
          <div>
            <input
              ref={ref => {
                this.fileName = ref;
              }}
              type="text"
              placeholder="Enter the desired name of file"
            />
          </div>
          <br />
          <div>
            <button>Upload</button>
          </div>
          <img src={this.state.imageURL} alt="img" />
        </form>
      </div>
    );
  }

  private handleUploadImage(e: any) {
    e.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
	data.append("filename", this.fileName.value);
	console.log(data)
	this.setState({imageURL: data})
	this.props.thunkSendPhoto(data);
  }
}

export default connect(null, {thunkSendPhoto})(HomeComponent);
