import React from "react";
import AppContainer from "./AppContainer";

function Edit() {
    return (
        <AppContainer title="EDIT POST">
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success">
                        SAVE
                    </button>
                </div>
            </form>
        </AppContainer>
    );
}

export default Edit;
