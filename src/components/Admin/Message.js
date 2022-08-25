import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import MessageDataService from "./MsgService";

const Message = ({ getMessageId }) => {
  const [message, setMsg] = useState([]);
  useEffect(() => {
    getMsgs();
  }, []);

  const getMsgs = async () => {
    const data = await MessageDataService.getAllBooks();
    console.log(data.docs);
    setMsg(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await MessageDataService.deleteBook(id);
    getMsgs();
  };
  return (
    <>
    <div className="container">
      <div className="mb-2" style={{marginTop: '15vh'}}>
        <Button variant="dark edit" onClick={getMsgs}>
          Refresh List
        </Button>
      </div>

      <div class="table-responsive custom-table-responsive">

          <Table striped bordered hover size="sm" class="table custom-table" >
              <thead>
                  <tr > 
                    <th scope="col">SNo.</th> 
                      <th scope="col" style={{width: '20vh'}}>Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Message</th>
                      <th scope="col">Action</th>
                    

                  </tr>
              </thead>
              <tbody id="tbody1">
            
                    {message.map((doc, index) => {
                      return (
                        <tr key={doc.id}>
                          <td style={{color: 'grey'}}>{index + 1}</td>
                          <td style={{color: 'grey'}}>{doc.fname}</td>
                          <td style={{color: 'grey'}}>{doc.email}</td>
                          <td style={{color: 'grey'}}>{doc.subject}</td>
                          <td>{doc.message}</td>
                          <td>

                          <button onClick={(e) => deleteHandler(doc.id)} class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i class="fa fa-trash"></i></button>
                        
                           
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
          </Table>
      </div>


   
      </div>
    </>
  );
};

export default Message;