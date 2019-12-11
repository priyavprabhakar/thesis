import React, {useState} from "react"
import { IMAGE, VIDEO } from "../utilities/database"
import ReactPlayer from "react-player"
import { Modal, Icon } from "semantic-ui-react"


function ArchivalItem(props) {
    const [imageShowing, updateImageShowing] = useState(true)
    const {type, source, text, title, date} = props.sourceImage
    
    return <div className="archivalItemContainer" onClick={()=> {
        if (type === IMAGE && imageShowing) {
            updateImageShowing(false)
        }
    }} >
        {type === IMAGE && <div className="archivalItem">
            <img className = "archivalImage" src={source} alt="archival_source"/>
            {!imageShowing && 
                <>
                 <Icon name="close" className="archivalItemClose" onClick={() => updateImageShowing(true)}/>
                <div className="archivalText">
                    <Modal trigger={
                        <div className = "titleDateContainer"> 
                            <div className = "archivalTitle">{title}</div>
                            <div className = "archivalDate">{date} </div>
                        </div>
                    }>
                        <Modal.Content>
                            <div className="archivalItemModalContainer">
                                <img className="archivalModalImage" src={source} alt="archival_modal_img"/>
                                <div className="archivalModalText">
                                    <div> 
                                        <div className="archivalTitle">{title}</div>
                                        <div className="archivalDate">{date} </div>
                                    </div>
                                    <div style={{margin: "16px 0"}}>{text}</div>
                                </div>
                            </div>
                        </Modal.Content>
                    </Modal>
                    <div>{text}</div>
                </div>
                </>
            }
            </div>
        }
        {
            type === VIDEO && <ReactPlayer controls
                height="325px" url={source} width="400px"/>
        }
    </div>
}


export default ArchivalItem
