import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { set, useForm } from "react-hook-form";

export default function LeaveModal() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    return (
        <>
            <div className="modal fade" id="leaveModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Tinggalkan kursi</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                  <div className="modal-body">
                    <div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">No.Tiket</label>
                        <input defaultValue="" type="text" className="form-control" id="exampleInputName1"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Nama</label>
                        <input disabled defaultValue="" type="text" className="form-control" id="exampleInputName1"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Email</label>
                        <input disabled defaultValue="" aria-invalid={errors.email ? "true" : "false"} type="text" className="form-control" id="exampleInputName1"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">No. Kursi</label>
                        <input disabled type="text" defaultValue="" className="form-control" id="exampleInputName1"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Tanggal booking</label>
                        <input disabled type="text" defaultValue="" className="form-control" id="exampleInputName1"/>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-danger">Leave</button>
                  </div>
              </div>
            </div>
          </div>
        </>
    )
}