import React, { useState } from 'react';
import './UserInfoForm.css'
import { useForm } from "react-hook-form";

export default function UserInfoForm(props) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [onSuccess, setOnSuccess] = useState()

    const onSubmit = (data) => {
        setOnSuccess(true)
        setTimeout(() => { props.onChange(data) }, 300);
    }

    return (
        <section className="userinfo">
            <h1 className="userinfo-title"><strong>Waar kunnen wij het cadeautje naar toe sturen?*</strong></h1>
            <p className="userinfo-text">
                Graag ontvangen wij je adresgegevens om het cadeautje naar toe te sturen. 
                <strong> Let op: Wij versturen pas na het indienen van bewijs van review</strong>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={`input-full-length ${errors.name && 'invalid'}`} type="text" placeholder="Naam*" {...register("name", { required: true, maxLength: 64 })}/>
                {errors.name && (
                    <span className='validation-text' role="alert">Naam is vereist! <br/></span>
                )}

                <input className={`input-street ${errors.street && 'invalid'}`} type="text" placeholder="Straat*" {...register("street", { required: true, maxLength: 64 })}/>

                <input className={`input-nr ${errors.nr && 'invalid'}`} type="text" placeholder="Nr. + Toev*" {...register("nr", { required: true , maxLength: 255})}/>
                {errors.street && (
                    <span className='validation-text' role="alert">Straat is vereist!</span>
                )}
                {errors.nr && (
                    <span className='validation-text nr' role="alert">Huisnummer is vereist! <br/></span>
                )}

                <select className={`input-country ${errors.country && 'invalid'}`} {...register("country", { required: true })}>
                    <option value="NL">Nederland</option>
                    <option value="BE">België</option>
                    <option value="DE">Deutschland</option>
                </select>
                {errors.country && (
                    <span className='validation-text' role="alert">Land is vereist! <br/></span>
                )}

                <input className={`input-zipcode ${errors.zipcode && 'invalid'}`} type="text" placeholder="Postcode*" {...register("zipcode", { required: true, maxLength: 10 })}/>

                <input className={`input-city ${errors.city && 'invalid'}`} type="text" placeholder="Plaats*" {...register("city", { required: true, maxLength: 64 })}/>
                {errors.zipcode && (
                    <span className='validation-text' role="alert">Postcode is vereist!</span>
                )}
                {errors.city && (
                    <span className='validation-text city' role="alert">Plaats is vereist!</span>
                )}

                <input className={`input-full-length ${errors.email && 'invalid'}`} type="email" placeholder="E-mailadres*" {...register("email", { required: true, maxLength: 64 })}/>
                {errors.email && (
                    <span className='validation-text' role="alert">E-mailadres is vereist! <br/></span>
                )}

                <p className="email-notice">Via dit e-mailadres houden we je op de hoogte van de voortgang van je bestelling</p>
                {props.device === 'desktop' 
                    ? onSuccess 
                        ? <p className='form-complete'>Je gegevens zijn compleet!</p> 
                        : props.validation 
                            ? <p className='form-warning'>Vergeet niet je gegevens in te vullen!</p> 
                            : '' 
                    : ''
                }
                <input className="userinfo-submit" type="submit" value={`${props.device === 'desktop' ? 'Controleer gegevens' : 'Volgende stap'}`}/>
            </form>
            

        </section>
    )
}