import React from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";

function Home() {
    return (
        <AppContainer title="Laravel ReactJS - CRUD">
            <Link to="add" className="btn btn-success">
                ADD
            </Link>
            <div className="table-responsive">
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>ID.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sample Title</td>
                            <td>Sample Description</td>
                            <td>
                                <a href="#" className="btn btn-warning">
                                    EDIT
                                </a>
                            </td>
                            <td>
                                <a href="#" className="btn btn-danger">
                                    DELETE
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
}

export default Home;
