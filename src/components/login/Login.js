import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdLock } from 'react-icons/io'
import Stonks from '../../images/Stonks.jpg'

export default function Login () {
    return (
        <div className="login-div">
            <div className="left-login">
                <div className="stonks-container">
                    <img className="stonky" src={Stonks} alt="Stonks" />
                </div>
                <div className="create-account">
                    
                </div>
            </div>
            <div className="right-login">
                <div className="login-container">
                    <form>
                        <label><BsFillPersonFill className="email-img"/>
                        <input type="email" /></label>
                        <label><IoMdLock className="locky"/>
                        <input type="password" /></label>
                        <label><input type="checkbox" />
                        Remember me </label>
                        <button type="submit">Log In</button>
                    </form>
                </div>
                <div className="socials">

                </div>
            </div>
        </div>
    )
}