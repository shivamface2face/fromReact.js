import React,{useState} from "react";
import { useForm } from "react-hook-form";

const Dform = () => {

  const { register, handleSubmit, errors } = useForm();
  const [userInfo, setuserInfo] = useState();

  

  const onSubmit = (data) => {
    setuserInfo(data);
        console.log(data);
  };

  console.log(errors);

  return (
    <div className="Container">
      <pre>{ JSON.stringify(userInfo,undefined,2)}</pre>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Form</h1>
        <div className="ui divider"> </div>
        <div className="ui from">
          <div className="feild">
            <label htmlFor="">userName</label>
            <input
              type="text"
              name="username"
              placeholder="enter your name"
              id=""
              ref={register({
                required:"user name is required",
              })}
            />
          </div>
          <p>{ errors.username?.message}</p>
          <br />
          <div className="feild">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              id=""
              ref={register({
                required: "user email is required",
                pattern: {
                              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                              message:"enter a valid email address"
                          }
              })}
            />
          </div>
          <p>{ errors.email?.message}</p>
          <br />
          <div className="feild">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              id=""
              ref={register({
                required: "user password is required",
                maxLength: {
                value: 10,
                message: "user name name must be less than 10",
              },
              minLength: {
                value:5,
                message: "user name must  be grater than 5",
              },
              })}
            />
          </div>
          <p>{ errors.password?.message}</p>

          <br /><br />

          <button className="fluid ui button blue">Submit Now</button>
        </div>
      </form>
    </div>
  );
};

export default Dform;
