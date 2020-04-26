import React, { useEffect, useState } from "react";
import Repo from "./repo";


export default () => {

    const [repos,setRepos] = useState([]);
    const [reposCount,setReposCount] = useState([]);

    useEffect(() => {

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);

            setReposCount(myRepos.length);
            //myRepos = myRepos.slice
            return setRepos(myRepos);
        } 
        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/josephleyva/repos");
            let myRepos = await response.json();
            setReposCount(myRepos.length);

            sessionStorage.setItem("repos",JSON.stringify(myRepos));
        
            setRepos(myRepos);
        }
        fetchRepos();
    },[])
    return (
            <div className = "max-w-4xl mx-auto mt-12">
                <header className = "text-center">
                    <h1 className = "text-3xl font-bold">Mi repositorio de GitHub</h1>
                    <p> Colaboraciones y proyectos personales</p>
                </header>
                <ul className = "repos-list">
                {
                     repos.map((repo) =>{
                    return <Repo repo = {repo} key ={repo.id}/>

                    })
                }
                </ul>
                <div className ="mt-12 text-center">
                    <a href = "https://github.com/JosephLeyva" className = "btn" target = "_blank" rel = "noopener noreferrer">
                        Ver más en Github ({reposCount})
                    </a>
                </div>      
            </div>
    );
};