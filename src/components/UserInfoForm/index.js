import './UserInfoForm.css'
import { useForm } from "react-hook-form";

export default function UserInfoForm(props) {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        props.onChange(data)
    }

    return (
        <div className="userinfo">
            <h1 className="userinfo-title"><strong>Waar kunnen wij het cadeautje naar toe sturen?*</strong></h1>
            <p className="userinfo-text">
                Graag ontvangen wij je adresgegevens om het cadeautje naar toe te sturen. 
                <strong> Let op: Wij versturen pas na het indienen van bewijs van review</strong>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-full-length" type="text" placeholder="Naam*" {...register("name", { required: true, maxLength: 64 })}/>
                {errors.name && "Naam is vereist!"}

                <input className="input-street" type="text" placeholder="Straat*" {...register("street", { required: true, maxLength: 64 })}/>
                {errors.street && "Straat is vereist!"}

                <input className="input-nr" type="text" placeholder="Nr. + Toev*" {...register("nr", { required: true , maxLength: 255})}/>
                {errors.nr && "Huisnummer is vereist!"}

                <select className="input-country" {...register("country", { required: true })}>
                    <option value="nl">Nederland</option>
                    <option value="be">België</option>
                    <option value="de">Deutschland</option>
                </select>
                {errors.country && "Land is vereist!"}

                <input className="input-zipcode" type="text" placeholder="Postcode*" {...register("zipcode", { required: true, maxLength: 10 })}/>
                {errors.zipcode && "Postcode is vereist!"}

                <input className="input-city" type="text" placeholder="Plaats*" {...register("city", { required: true, maxLength: 64 })}/>
                {errors.city && "Plaats is vereist!"}

                <input className="input-full-length" type="email" placeholder="E-mailadres*" {...register("email", { required: true, maxLength: 64 })}/>
                {errors.email && "E-mailadres is vereist!"}

                <p className="email-notice">Via dit e-mailadres houden we je op de hoogte van de voortgang van je bestelling</p>

                <input className="userinfo-submit" type="submit" value="Volgende stap"/>
            </form>
            

        </div>
    )
}