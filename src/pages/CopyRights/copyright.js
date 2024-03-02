
import "./copyright.css"
export const CopyRights=({Mode})=>{
    return (
           <div  className={Mode?"CopyContainerDark":"CopyContainerLight"}> <a>Copyright Neoteric Technologies . All Rights Reserved</a></div>
      )
}