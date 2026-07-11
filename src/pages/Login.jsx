import { NavLink, useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { authFirebase } from "../firebase";

const Login = () => {


    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const handleLogin = async(data) => {
        const{email,password}= data
        try {
            await signInWithEmailAndPassword(authFirebase,email,password)
            navigate('/dashboard')
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    }

    return (
        <>
            <main className="contenido-principal contenedor ">
                <h3 className="text-center">Inicio de sesión</h3>

                <form className="formulario" onSubmit={handleSubmit(handleLogin)}>

                    <fieldset>

                        <legend>Ingresa tus datos</legend>

                        <div className="campo">
                            <label >E-mail: </label>
                            <input type="mail" placeholder="Tu Email" required 
                            {...register("email",{ required: true })}
                            />
                            {errors.email && <span className="errors">El email es requerido</span>}
                        </div>

                        <div className="campo">
                            <label >Password:</label>
                            <input type="password" placeholder="Tu Password" 
                            {...register("password",{ required: true })}
                            />
                            {errors.password && <span className="errors">La contraseña es requerida</span>}
                        </div>

                    </fieldset>

                    <input className="btn" type="submit" value="Enviar" ></input>
                </form>

                <NavLink to="/registro" className="enlace">Si no tienes cuenta, puedes registrarte aquí</NavLink>
            </main>

        </>
    )
}

export default Login