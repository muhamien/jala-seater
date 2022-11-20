import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { base } from "../../pages/api/utils/Airtable";
import toast, { Toaster } from 'react-hot-toast';

export default function MyReservedDetailModal(props) {
    const [loading, setLoading] = useState(false);
    const [myReserved, setMyReserved] = useState(localStorage.getItem('seatReservation'));

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                {!loading ? (
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">My Reservation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        {/* <input type="text" value={myReserved.fields.name} className="form-control" id="exampleInputName1"/> */}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        {/* <input type="text" value={myReserved.fields.email} className="form-control" id="inputEmail"/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="modal-content">Loading...</div>
                    )
                }
            </div>
            <Toaster />
        </div>
    )
}