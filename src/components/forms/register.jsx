import { useForm } from "react-hook-form";
import  {useState}  from "react";
function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        
    }
    const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex  m-5 justify-content-center">
                <div className="m-5 p-5">
                    <input type="text" placeholder="userName" className="m-4"
                        {...register("userName", { required: true })} />
                    {errors?.userName?.type === 'required'
                        && <p className="text-danger">This field is required</p>}
                    {/* include validation with required or other standard HTML validation rules */}
                    <br />
                    <input type="password" placeholder="password"className="m-4" id="password"
                        {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~])$/ })} />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <p className="text-danger">
                        your password must be like This
                        Min 1 lowercase character
                        Min 1 uppercase character
                        Min 1 number
                        Min 1 special characters
                    </p>}
                    <br />
                    <input type="password" placeholder="retry password"className="m-4" id="confirm"
                        {...register("retryPassword", { required: true,
                        validate:(val)=>{
                            if(watch('password')!=val){
                                return "not found" 
                            }
                        }})} />
                    {errors?.retryPassword?.type=='validate' && <p className="text-danger">not match</p>}
                    <br />
                    <select {...register("gender")} >
                        <option value="notSelect">select your gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                       
                    </select> <br />

                    <input type="checkbox" className="m-4" onChange={handleChange}
                    {...register("conditions", { required: true})}/> 
                    <label htmlFor="">accept terms and conditions</label><br />
                    {errors?.conditions?.type === 'required'
                        && <p className="text-danger">This field is required</p>}
                    <input type="submit" />
                </div>
            </div>

        </form>
    )
}


export default Register;