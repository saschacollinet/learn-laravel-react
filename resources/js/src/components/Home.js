import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">Laravel ReactJS - CRUD</div>
                <div className="card-body">
                    <Link to="add" className="btn btn-primary">
                        ADD
                    </Link>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID.</th>
                                    <th>Title</th>
                                    <th>Description</th>
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
                </div>
            </div>
        </div>
    );
}

export default Home;
