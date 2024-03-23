
function Card({card, cardUpdate, cardDelete, filterChange}) {
    return (
      <>
      <div className="col-12 col-md-6 col-lg-4 mb-4">
          
              <div className="overCard card-body bg-dark p-3">
                <div className="card-header text-light mb-2 ">
                  <p className="bg-dark"><b className="bg-dark">Task Name: {card.TodoName}</b></p>
                  
                  <div className="card-body bg-light">
                  <p className="bg-dark">Description: {card.TodoDescription}</p>
                  </div><br />
                  <p className="d-inline">
                  <b className="bg-light"><label className="bg-dark" htmlFor="dropDown">Status :&nbsp;&nbsp; </label></b>
                  </p>
                 
                  
                  <div className="dropdown d-inline">
                    <button className={`btn btn-outline-dark text-white dropdown-toggle ${card.status === 'Completed' ? 
                    'btn-success': 'btn-danger'}`}
                     type="button" id="dropDown" data-bs-toggle="dropdown"
                     aria-expanded="false">{card.status}&nbsp;
                     </button>
                    <ul className="dropdown-menu" aria-labelledby="dropDown">
                      <li>
                        <button className="dropdown-item" type="button" onClick={() => filterChange('Completed', card.id)}>
                          Completed</button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button" onClick={() => filterChange('Not Completed', card.id)}>
                          Not Completed</button>
                      </li>
                    </ul>
                  </div>
                  
              </div>
              <div className="card-footer bg-transparent border-top-0 d-flex justify-content-end">
                  <button className="btn btn-warning px-4 me-3" 
                  onClick={()=> cardUpdate(card.TodoName, card.TodoDescription, card.id)}>Edit</button>
                  <button className="btn btn-danger px-3 me-2"
                  onClick={()=> cardDelete(card.id)}>Delete</button>
              </div>
              </div>
      </div>
      </>
    )
  }
  
  export default Card