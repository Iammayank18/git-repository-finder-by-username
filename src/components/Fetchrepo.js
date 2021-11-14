import React from 'react'
import { useState } from 'react'
import './fetch.css';

const Fetchrepo = () => {

  const [repo, setRepo] = useState('');
  const [loading, setLoading]= useState(false);


  const submit =async (e) => {
    var url= "https://github.com/";
    e.preventDefault();
    const repos = await fetch(`https://api.github.com/users/${repo}/repos`)
      .then(res => res.json())
      .then(data => {
        console.log(data.map(repo => repo.git_url));
        console.log(data);
        //Show all repo url in div
        setLoading(data.map(repo=>
          (
            <>
              <tr className="text-light">
                <a className="" href={repo.html_url} target="_blank">{repo.full_name}</a>
              </tr>
            </>
          )
        
        ))
      
  })
  }



  return (
    <div>
    <div className="containers">
        <div className=" mt-4 box" id="main-box">
        <div>
          <form
            className="d-flex justify-content-center"
            action=""
            onSubmit={submit}
          >
            <input
              type="text"
              name="username"
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
              placeholder="Github username"

            />
            <button className="btn btn-primary" type="submit">
              <i className="fa fa-search search-icon" />
            </button>
          </form>
        </div>
        <div className="data_body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="text-light">Repository</th>
              </tr>
            </thead>
            <tbody >
              
                {loading} 
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Fetchrepo;
