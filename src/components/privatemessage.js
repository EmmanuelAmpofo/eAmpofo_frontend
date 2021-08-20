import React from "react";

const privateMessage = () => {
  return (
    
      <div className="chatPage">

        <div className="messages_wrap">
          {/* <h1>
        <Link to="/">
            <i className="fas fa-chevron-circle-left"></i>
        </Link>
        {this.props.match.params.room}
    </h1> */}

          {/* <Messages messages={this.state.messages} room={this.props.match.params.room} /> */}

          <div className="newMsgForm">
            <div className="wrap">
              <form onSubmit={(e) => this.newMessage(e)}>
                <div className="form_wrap">
                  <div className="form_row">
                    <div className="form_item">
                      <div className="form_input">
                        <input
                          name="newMsg"
                          placeholder="Type your message..."
                          autoComplete="off"
                          // onChange={}
                        />
                        <span className="bottom_border"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btnWrap">
                  <button type="submit" className="btn">
                    go
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default privateMessage;
