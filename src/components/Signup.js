import React,{useState} from 'react'

const Signup = () => {

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [error, seterror] = useState();


    const handelSubmit = (e) => {
        e.preventDefault();
        if (fname.length == 0 || lname.length == 0) {
            seterror(true)
        }
        if (fname && lname) { 
        console.log(fname, lname);
    }
    }

  return (
      <div>
          
          <form action="" onSubmit={handelSubmit}>
              <div>
                  
                  <input type="text" name="" id="" onChange={(e) => setfname(e.target.value)} />
                  
              </div>
              {
                  error&&fname.length<=0? <label htmlFor="">please enter your first name</label>:""
              }
              
              
              <div>
                  
              <input type="text" name="" id="" onChange={(e) => setlname(e.target.value)} />
                  
              </div>
              {
                  error&&lname.length<=0?<label htmlFor="">please enter your 2nd name</label>:""
              }
              
              
              
              <div>
                  <button >Submit Now</button>
              </div>

          </form>

    </div>
  )
}

export default Signup