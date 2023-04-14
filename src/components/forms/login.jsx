import { useForm } from "react-hook-form";

function Login(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="d-flex  m-5 justify-content-center">
     <div>
     <input type="text" placeholder="userName" 
        {...register("userName",{required:true})} />
      {errors?.userName?.type === 'required' 
      && <p className="text-danger">This field is required</p>}
      {/* include validation with required or other standard HTML validation rules */}
      <br />
      <input type="password" placeholder="password"
       {...register("password", { required: true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~])$/})} />
      {/* errors will return when field validation fails  */}
      {errors.password && <p className="text-danger">
        your password must be like This
        Min 1 lowercase character
        Min 1 uppercase character
        Min 1 number
        Min 1 special characters
        </p>}
      <br />
      <input type="submit" />
     </div>
      
      </div>
     
      
    </form>
  );
  
}


export default Login;