import React,{useState} from 'react'
import { Button , Modal } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadNewVideoAPI } from '../services/allAPI';

function Add({setuploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  console.log(uploadVideo);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleUpload = async ()=>{
    const {id,caption,url,link} = uploadVideo
    if (!id || !caption || !url || !link) {
      alert("Uploading form is incomplete. Please fill the form completely")
    }else{
      // store uploadvideo in json server
      const result = await uploadNewVideoAPI(uploadVideo)
      console.log(result);
      if (result.status>=200 && result.status<300) {
        // success

        handleClose()
        // reset upload video
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })
        // share result.data to view component
        setuploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }
  

  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} style={{color:'white'}} className='btn'><i style={{height:'50px'}} class="fa-solid fa-photo-film fa-2x"></i></button>
    </div>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Uploading form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video ID"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Uploading Video ID" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Caption"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Uploading Video Caption" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Image URL"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Uploading Video Image URL" onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Image URL"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Uploading Video Youtube Link" onChange={getYoutubeEmbedLink} />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add