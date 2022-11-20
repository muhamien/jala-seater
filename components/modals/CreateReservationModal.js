import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { base } from "../../pages/api/utils/Airtable";
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CreateReservationModal(props) {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState({});

    const onSubmit = data => {
        // console.log('data',data)
        setLoading(true);
        setModel({
            ...data,
            book_type: "temporary",
            chair_number:props.seatNumber,
            reservation_date:moment(),
            reservation_code:props.generateTicket,
        })
        bookingSeat(model);
    }

    // const updateSeat = () => {

    // }
    const resetForm = () => {
        
        setModel({})
    }

    const updateSeat = () => {
        const filter = props.seats.records.find((i)=>(i.fields.id === props.seatNumber));
        let formData = {
            ...filter,
            fields: {
                Status: "Unavailable"
            }
        }
        console.log('formData',JSON.stringify(formData))
        base('chair').update(JSON.stringify(formData), function(err, records) {
            if (err) {
              console.error(err);
              toast.error(err);
              return;
            }
          })
    }
    const bookingSeat = (model) => {
        base('reservation').create(model, function(err, record) {
            if(err) {
                console.error(err);
                toast.error(err);
                setLoading(false);
                return;
            }
            localStorage.setItem("seatReservation", JSON.stringify(record));
            // updateSeat();
            // resetForm();
            setLoading(false);
            props.reservationShow(false)
            toast.success('Successfully Reserved!');
        })
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    {!loading ? (
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Select your seat</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="modal-body">
                                    <div>
                                        <div className="mb-3">
                                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                                        <input {...register("name",{ required: true })} aria-invalid={errors.name ? "true" : "false"} type="text" className="form-control" id="exampleInputName1"/>
                                        {errors.name && <div className="invalid-feedback" role="alert">{errors.name.message}</div>}
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="exampleInputName1" className="form-label">Email</label>
                                        <input {...register("email",{ required: true })} aria-invalid={errors.email ? "true" : "false"} type="text" className="form-control" id="exampleInputName1"/>
                                        {errors.email && <div className="invalid-feedback" role="alert">{errors.email.message}</div>}
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="exampleInputName1" className="form-label">No. Kursi</label>
                                        <input disabled type="text" defaultValue={props.seatNumber || ''} className="form-control" id="exampleInputName1"/>
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="exampleInputName1" className="form-label">Tanggal booking</label>
                                        <input disabled type="text" defaultValue={moment().format("MM/DD/YYYY") || ''} className="form-control" id="exampleInputName1"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Book</button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="modal-content">Loading...</div>
                        )
                    }
                </div>
                <Toaster />
            </div>
        </>
    )
}