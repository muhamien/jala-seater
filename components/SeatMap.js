import chairGreen from '../public/assets/images/chair-green.svg'
import chairOutline from '../public/assets/images/chair-outline.svg'
import Image from 'next/image'

const SeatMap = (props) => {
    
    const selectedSeatHandler = (e) => {
        props.seat(e)
        props.reservationShow(true)
    }

    return (
        <>
            <div className="container">
            {/* Baris D */}
            <div className="row mt-3 mx-md-5">
              <div className="col-12">
                <div className='d-flex justify-content-between gap-3 w-100 px-2'>
                  {props.rowD.filter((f)=>(f.fields.chair_number > 5 && f.fields.chair_number <= 10)).map((item,index)=>(
                      <div key={item.fields.id}>
                        {item.fields.Status == 'Unavailabel'?(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairGreen}
                            alt={item.fields.Status}
                          />
                        </a>
                        ):(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairOutline}
                            alt={item.fields.Status}
                          />
                        </a>
                        )
                      }
                      </div>
                  ))}
                </div>
              </div>
              <div className="col-12">
                <div className="rounded d-flex w-100 justify-content-center" style={{height:"35px",backgroundColor:"#E9D6C1"}}>
                  <b className="text-center w-100">Baris D</b>
                </div>
              </div>
              <div className="col-12">
                <div className='d-flex justify-content-between gap-3 w-100 px-2'>
                {props.rowD.filter((f)=>(f.fields.chair_number >= 1 && f.fields.chair_number < 6)).map((item,index)=>(
                    <div key={item.fields.id}>
                      {item.fields.Status == 'Unavailabel'?(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                            <Image
                              src={chairGreen}
                              alt={item.fields.Status}
                              className='rotate-180'
                            />
                          </div>
                        </a>
                      ):(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairOutline}
                            alt={item.fields.Status}
                            className='rotate-180'
                          />
                        </a>
                      )
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Baris C */}
            <div className="row mt-3 mx-md-5">
              <div className="col-12">
                <div className='d-flex justify-content-between gap-3 w-100 px-2'>
                  {props.rowC.filter((f)=>(f.fields.chair_number > 5 && f.fields.chair_number <= 10)).map((item,index)=>(
                      <div key={item.fields.id}>
                        {item.fields.Status == 'Unavailabel'?(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairGreen}
                            alt={item.fields.Status}
                          />
                        </a>
                        ):(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairOutline}
                            alt={item.fields.Status}
                          />
                        </a>
                        )
                      }
                      </div>
                  ))}
                </div>
              </div>
              <div className="col-12">
                <div className="rounded d-flex w-100 justify-content-center" style={{height:"35px",backgroundColor:"#E9D6C1"}}>
                  <b className="text-center w-100">Baris C</b>
                </div>
              </div>
              <div className="col-12">
                <div className='d-flex justify-content-between gap-3 w-100 px-2'>
                {props.rowC.filter((f)=>(f.fields.chair_number >= 1 && f.fields.chair_number < 6)).map((item,index)=>(
                    <div key={item.fields.id}>
                      {item.fields.Status == 'Unavailabel'?(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairGreen}
                            alt={item.fields.Status}
                            className='rotate-180'
                          />
                        </a>
                      ):(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairOutline}
                            alt={item.fields.Status}
                            className='rotate-180'
                          />
                        </a>
                      )
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Baris B */}
            <div className="row mt-3 mx-md-5">
              <div className="col-12">
                <div className='d-flex justify-content-between gap-3 w-100 px-2'>
                  {props.rowB.filter((f)=>(f.fields.chair_number > 5 && f.fields.chair_number <= 10)).map((item,index)=>(
                      <div key={item.fields.id}>
                        {item.fields.Status == 'Unavailabel'?(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairGreen}
                            alt={item.fields.Status}
                          />
                        </a>
                        ):(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairOutline}
                            alt={item.fields.Status}
                          />
                        </a>
                        )
                      }
                      </div>
                  ))}
                </div>
              </div>
              <div className="col-12">
                <div className="rounded d-flex w-100 justify-content-center" style={{height:"35px",backgroundColor:"#E9D6C1"}}>
                  <b className="text-center w-100">Baris B</b>
                </div>
              </div>
              <div className="col-12">
                <div className='d-flex justify-content-between gap-3 w-100 px-2'>
                {props.rowB.filter((f)=>(f.fields.chair_number >= 1 && f.fields.chair_number < 6)).map((item,index)=>(
                    <div key={item.fields.id}>
                      {item.fields.Status == 'Unavailabel'?(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairGreen}
                            alt={item.fields.Status}
                            className='rotate-180'
                          />
                        </a>
                      ):(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairOutline}
                            alt={item.fields.Status}
                            className='rotate-180'
                          />
                        </a>
                      )
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Baris A */}
            <div className="row mt-3 mx-md-5">
              <div className="col-12">
                <div className='d-flex justify-content-between gap-3 w-100 px-2'>
                  {props.rowA.filter((f)=>(f.fields.chair_number > 5 && f.fields.chair_number <= 10)).map((item,index)=>(
                      <div key={item.fields.id}>
                        {item.fields.Status == 'Unavailabel'?(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairGreen}
                            alt={item.fields.Status}
                          />
                        </a>
                        ):(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairOutline}
                            alt={item.fields.Status}
                          />
                        </a>
                        )
                      }
                      </div>
                  ))}
                </div>
              </div>
              <div className="col-12">
                <div className="rounded d-flex w-100 justify-content-center" style={{height:"35px",backgroundColor:"#E9D6C1"}}>
                  <b className="text-center w-100">Baris A</b>
                </div>
              </div>
              <div className="col-12">
                <div className='d-flex justify-content-between gap-3 w-100 px-2'>
                {props.rowA.filter((f)=>(f.fields.chair_number >= 1 && f.fields.chair_number < 6)).map((item,index)=>(
                    <div key={item.fields.id}>
                      {item.fields.Status == 'Unavailabel'?(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairGreen}
                            alt={item.fields.Status}
                            className='rotate-180'
                          />
                        </a>
                        ):(
                        <a href="#" onClick={() => selectedSeatHandler(item.fields.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <Image
                            src={chairOutline}
                            alt={item.fields.Status}
                            className='rotate-180'
                          />
                        </a>
                        )
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-5">
            <div className="col-12" style={{marginBottom:"72px"}}>
              <div className='d-flex justify-content-center gap-4'>
                <div>
                  <Image
                    src={chairOutline}
                    alt="tersedia"
                  />
                  <span>Tersedia</span>
                </div>
                {/* <div>
                  <Image
                    src={chairBlue}
                    alt="dipilih"
                  />
                  <span>Dipilih</span>
                </div> */}
                <div>
                  <Image
                    src={chairGreen}
                    alt="terbooking"
                  />
                  <span>Terbooking</span>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default SeatMap;