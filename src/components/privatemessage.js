import React from "react";

const privateMessage = () => {
  return (
    
      <div className="chatPage">

        <div className="messages_wrap">

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
