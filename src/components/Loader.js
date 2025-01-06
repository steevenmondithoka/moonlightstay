import React,{useState} from 'react'
import SyncLoader from "react-spinners/SyncLoader";
function Loader() {

    let [loading, setLoading] = useState(true);

  return (
    <div style={{marginTop:'40px',marginLeft:'520px'}}>
        <div className="sweet-loading">
      
      <SyncLoader
        color='#123'
        loading={loading}
        
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>

      
    </div>
  )
}

export default Loader
