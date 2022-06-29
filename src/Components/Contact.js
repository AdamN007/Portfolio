import React from "react";
import Animation from "./Animation";

function Contact(){

        return (
            <Animation>
            <div className="flex h-screen w-screen z-10 justify-center items-center">
            
                <form class="w-full max-w-lg">
                <h1 className="text-green-500 text-5xl text-center pb-10">Contact</h1>
                        
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-green-500 text-xs font-bold mb-2" for="grid-password">
                            E-mail
                        </label>
                        <input class="appearance-none text-white block w-full backgroundCol border border-gray-200 focus:border-green-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="email" type="email"/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-green-500 text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea class=" no-resize text-white appearance-none backgroundCol border border-gray-200 focus:border-green-500  block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none  h-48 resize-none" id="message"></textarea>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="shadow backgroundCol font-extralight border text-green-400 border-green-400 hover:bg-green-900 focus:shadow-outline focus:outline-none py-2 px-4 rounded" type="button">
                        Send
                        </button>
                    </div>
                <div class="md:w-2/3"></div>
            </div>
        </form>
        </div>
            </Animation>
        )

}

export default Contact;